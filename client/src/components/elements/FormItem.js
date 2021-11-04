import style from './formItem.module.css'

const FormItem = ({ item, handleChange }) => {
    const { name, label, type, id } = item
    return(
        <div key={id} className={style.formItem}>
            <label
                className={style.label}
                htmlFor={name}
            >
                {label}
            </label>
            <br />
            <input
                className={style.input}
                type={type}
                name={name}
                autoComplete="off"
                onChange={handleChange}
            />
            <br /><br />
        </div>
    )
}

export default FormItem