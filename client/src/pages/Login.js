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

const Authenticate = () => {
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
    return(
        <div>
            <h1 className={style.title}>Please Enter Your Credentials</h1>
            <form className={style.form}>
                {loginElements.map(item => getElements(item))}
                    <button
                        onClick={handleLogin}
                        className={style.loginButton}
                    >
                        Login
                    </button>
            </form>
        </div>
    )
}

export default Authenticate