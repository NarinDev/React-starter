function UserGreeting(
    props: {
        isLoggedIn: boolean,
        userName: string
}) {
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.userName || "Guest"}</h2>;
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>;

    console.log(props.isLoggedIn, props.userName);

    return ( props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest"
};

export default UserGreeting
