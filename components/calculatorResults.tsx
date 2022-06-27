import Card from "./card";

const CalculatorResults = () => {
    return (
        <div className="grid grid-cols-12 gap-8 ">
            <Card className="col-span-12 lg:col-span-6">summary</Card>
            <Card className="col-span-12 lg:col-span-6">graph</Card>
            <Card className="col-span-12 lg:col-span-6">table</Card>
            <Card className="col-span-12 lg:col-span-6">ad</Card>
        </div>
    );
};

export default CalculatorResults;
