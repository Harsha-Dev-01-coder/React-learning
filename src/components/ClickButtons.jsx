function ClickButtons() {

    function sayHello() {
        alert("Hello React");
    }

    function increase() {
        console.log("Clicked");
    }

    function handleClick(event) {
        console.log(event);
    }

    return (
        <>
            <button onClick={sayHello}>
                Click Me
            </button>

            <button onClick={increase}>
                Click
            </button>

            <button onClick={handleClick}>
                Event Object
            </button>
        </>
    );

}

export default ClickButtons;