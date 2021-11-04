import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { REGISTER_USER } from '../utils/Mutations'

import style from './authenticate.module.css'
import { registerElements } from '../data/render'
import FormItem from '../components/elements/FormItem'

const Authenticate = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    })
    const [registerUser] = useMutation(REGISTER_USER)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }


    const handleRegister = async (event) => {
        event.preventDefault()
        try {
            const { data } = await registerUser({
                variables: { ...formData }
            })
            localStorage.setItem('token', data.registerUser.token)
            window.location.assign('/')
        } catch (error) {
            console.error('ERROR => ', error)
        }
    }
    return(
        <div>
            <h1 className={style.title}>Please Enter Your Credentials</h1>
            <form className={style.form} onSubmit={handleRegister}>
                {registerElements.map(item =>
                    <FormItem item={item} handleChange={handleChange} />
                )}
                <button
                    className={style.registerButton}
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default Authenticate