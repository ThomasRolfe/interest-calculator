const Container = (props: any) => {
    return (
        <div
            className={`container mx-auto sm:px-6 lg:px-8 ${
                props.className ?? ""
            }`}
        >
            {props.children}
        </div>
    );
};

export default Container;
