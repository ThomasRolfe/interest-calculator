const Card = (props: any) => {
    return (
        <div
            className={`bg-white overflow-hidden shadow-lg shadow-cyan-800/20 ${props.className} `}
        >
            {props.children}
        </div>
    );
};

const Desktop = ({ children }: any) => {
    return <Card className={`rounded-lg`}>{children}</Card>;
};

const MobileFullWidth = ({ children }: any) => {
    return <Card className={`sm:rounded-lg`}>{children}</Card>;
};

Card.Desktop = Desktop;
Card.MobileFullWidth = MobileFullWidth;

export default Card;
