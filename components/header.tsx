import Container from "./container";
import Navigation from "./navigation";

const Header = (props: any) => {
    return (
        <div className={`${props.className} bg-blue-500`}>
            <Container>
                <div className={` w-full flex justify-between`}>
                    <div>Logo stuff here</div>
                    <Navigation />
                </div>
            </Container>
        </div>
    );
};

export default Header;
