const Authenticate = (props) => {
    let isRegister = false
    if(props.location.pathname === 'login') {
        isRegister = true
    }
    return(
        <div>
            <h1>Auth Component</h1>
        </div>
    )
}

export default Authenticate