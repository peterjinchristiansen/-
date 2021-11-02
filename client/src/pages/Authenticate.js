import style from './authenticate.module.css'

const loginElements = [
    {
        id: 1,
        name: 'username',
        label: 'Username',
        type: 'text'
    }, {
        id: 2,
        name: 'password',
        label: 'Password',
        type: 'password'
    }
]

const registerElements = [
    {
        id: 1,
        name: 'firstName',
        label: 'First Name',
        type: 'text'
    }, {
        id: 2,
        name: 'lastName',
        label: 'Last Name',
        type: 'text'
    }, {
        id: 3,
        name: 'username',
        label: 'Username',
        type: 'text'
    }, {
        id: 4,
        name: 'email',
        label: 'E-Mail',
        type: 'email'
    }, {
        id: 5,
        name: 'password',
        label: 'Password',
        type: 'password'
    }, {
        id: 6,
        name: 'password2',
        label: 'Please re-enter your password',
        type: 'password'
    }
]

const Authenticate = (props) => {
    const variation = (props.match.path).substring(1)
    const getElements = ({ id, name, label, type }) => {
        return(
            <div key={id} className={style.formItem}>
                <label className={style.label} htmlFor={name}>{label}</label><br />
                <input className={style.input} type={type} name={name} autoComplete="off" /><br /><br />
            </div>
        )
    }
    const handleLogin = (event) => {
        event.preventDefault()
        console.log('Login')
    }
    const handleRegister = (event) => {
        event.preventDefault()
        console.log('Register')
    }
    return(
        <div>
            <h1 className={style.title}>Please Enter Your Credentials</h1>
            <form className={style.form}>
                {
                    variation === 'login' ?
                    loginElements.map(item => getElements(item)) :
                    registerElements.map(item => getElements(item))
                }
                {
                    variation === 'login' ?
                    <button onClick={handleLogin} className={style.loginButton}>Login</button> :
                    <button onClick={handleRegister} className={style.registerButton}>Register</button>
                }
            </form>
        </div>
    )
}

export default Authenticate