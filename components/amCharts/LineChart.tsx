import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useLayoutEffect } from "react";

const LineChart = ({
    seriesList,
    seriesValues,
}: {
    seriesList: number[];
    seriesValues: {}[];
}) => {
    // Change to useEffect for first chart render
    // Use layout effect for updates to values only, currently whole chart is re rendering
    useLayoutEffect(() => {
        let root = am5.Root.new("interest-calculator-line-chart");
        root.setThemes([am5themes_Animated.new(root)]);

        let labelFormatter = am5.NumberFormatter.new(root, {
            bigNumberPrefixes: [
                { number: 1e3, suffix: "K" },
                { number: 1e6, suffix: "M" },
                { number: 1e9, suffix: "B" },
                { number: 1e12, suffix: "T" },
            ],
        });

        root.numberFormatter.setAll({
            // numberFormat: "#,###.00",
            bigNumberPrefixes: [
                { number: 1e3, suffix: "K" },
                { number: 1e6, suffix: "M" },
                { number: 1e9, suffix: "B" },
                { number: 1e12, suffix: "T" },
            ],
            numericFields: ["valueY"],
        });

        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panY: false,
                layout: root.verticalLayout,
                maxTooltipDistance: -1,
            })
        );

        chart
            .get("colors")
            .set("colors", [
                am5.color("#311847"),
                am5.color("#07D0E6"),
                am5.color("#f6793b"),
                am5.color("#FED766"),
                am5.color("#FF88DC"),
            ]);

        // Create Y-axis
        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                numberFormatter: labelFormatter,
                numberFormat: "#a",
                maxPrecision: 0,
                renderer: am5xy.AxisRendererY.new(root, {}),
            })
        );

        // Create X-Axis
        let xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                renderer: am5xy.AxisRendererX.new(root, {
                    minGridDistance: 30,
                }),
                categoryField: "year",
                tooltip: am5.Tooltip.new(root, {}),
            })
        );

        let xRenderer = xAxis.get("renderer");
        xRenderer.grid.template.setAll({
            stroke: am5.color("#0000FF"),
            location: 0.5,
        });

        seriesList.forEach((seriesItem: number) => {
            let pushedSeries = chart.series.push(
                am5xy.LineSeries.new(root, {
                    name: `${seriesItem}%`,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: `${String(seriesItem)}_percent`,
                    categoryXField: "year",
                    numberFormatter: labelFormatter,
                })
            );

            let tooltip = pushedSeries.set(
                "tooltip",
                am5.Tooltip.new(root, {
                    getFillFromSprite: false,
                    getStrokeFromSprite: true,
                    autoTextColor: false,
                    pointerOrientation: "horizontal",
                    numberFormatter: labelFormatter,
                })
            );

            tooltip.get("background").setAll({
                fill: am5.color(0xffffff),
            });

            tooltip.label.setAll({
                text: "[bold]Year {categoryX}[/]",
                fill: am5.color("#311847"),
            });

            tooltip.label.adapters.add("text", function (text, target) {
                chart.series.each(function (series) {
                    text += `\n[${series.get(
                        "stroke"
                    )}.toString()]●[/] [bold width:100px]${series.get(
                        "name"
                    )}[/] {${series.get("valueYField")}}`;
                });
                return text;
            });

            pushedSeries.data.setAll(seriesValues);

            pushedSeries.strokes.template.setAll({
                strokeWidth: 2,
            });

            pushedSeries.bullets.push(function () {
                var graphics = am5.Circle.new(root, {
                    strokeWidth: 1,
                    interactive: true,
                    radius: 2,
                    stroke: pushedSeries.get("stroke"),
                    fill: am5.color("#FFFFFF"),
                });

                return am5.Bullet.new(root, {
                    sprite: graphics,
                });
            });
        });

        xAxis.data.setAll(seriesValues);

        // Add legend
        let legend = chart.children.push(
            am5.Legend.new(root, {
                x: am5.percent(50),
                y: am5.percent(95),
                centerX: am5.percent(50),
            })
        );
        legend.data.setAll(chart.series.values);

        // Add cursor
        chart.set("cursor", am5xy.XYCursor.new(root, {}));
        let cursor = chart.get("cursor");
        cursor.lineY.setAll({
            visible: false,
        });
        // chart.cursor.maxTooltipDistance = -1;

        return () => {
            root.dispose();
        };
    }, [seriesList, seriesValues]);
    return (
        <div
            id="interest-calculator-line-chart"
            className="w-full md:h-full min-h-full"
        ></div>
    );
};

export default LineChart;
