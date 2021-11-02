import style from './mini.module.css'

const Mini = ({ image, text1, text2, text3, text4, button, status }) => {
    return(
            <div className={style.container}>
                <img className={style.image} src={image} alt="" />
                <div className={style.info}>
                    <h3>{text1}</h3>
                    <h4>{text2}</h4>
                    <h5>{text3}</h5>
                    <h6>{text4}</h6>
                </div>
                <button className={style.button}><h3>Add</h3></button>
            </div>

    )
}

export default Mini