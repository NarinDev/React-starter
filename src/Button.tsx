
function Button() {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.textContent = "OUCH!";
    };

    return (
        <button onDoubleClick={handleClick}>Click me</button>
    );
}

export default Button
