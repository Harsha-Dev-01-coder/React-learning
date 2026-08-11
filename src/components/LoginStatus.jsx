function LoginStatus({ user }) {

    if(!user){
        return <h2>Please Login</h2>;
    } else {
        return <h2>{user.name}</h2>
    }
}

export default LoginStatus;