import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useLayoutEffect } from "react";

const PieChart = ({
    dataSeries,
}: {
    dataSeries: { value: number; name: string }[];
}) => {
    useLayoutEffect(() => {
        let root = am5.Root.new("interest-calculator-pie-chart");

        root.setThemes([am5themes_Animated.new(root)]);

        let chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                layout: root.verticalLayout,
            })
        );

        let series = chart.series.push(
            am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "name",
                startAngle: 0,
                endAngle: 360,
                alignLabels: false,
            })
        );

        series
            .get("colors")
            ?.set("colors", [am5.color("#311847"), am5.color("#5299D3")]);

        series.slices.template.states.remove("hover");

        series.data.setAll(
            dataSeries.map((entry: { value: number; name: string }) => {
                return {
                    value: entry.value,
                    name: entry.name,
                };
            })
        );

        series.labels.template.setAll({
            fill: am5.color("#FFFFFF"),
            textType: "circular",
            inside: true,
            radius: 20,
        });

        series.slices.template.setAll({
            tooltipText: "",
        });
        series.ticks.template.set("forceHidden", true);

        return () => {
            root.dispose();
        };
    }, [dataSeries]);

    return (
        <div
            id="interest-calculator-pie-chart"
            // style={{ width: "100%", height: "500px" }}
            className="w-full h-96"
        ></div>
    );
};

export default PieChart;
