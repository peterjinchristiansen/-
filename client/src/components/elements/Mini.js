import style from './mini.module.css'

const Mini = ({ data, status, variation }) => {
    const { image, text1, text2, text3, text4 } = data
    let buttonText = null
    let miniColor = 'gray'
    let buttonColor = 'gray'
    if(status) {
        buttonColor = 'purple'
    } else {
        buttonColor = 'orange'
    }
    if(variation === 'User') {
        miniColor = '#e63946ff'
        if(status) {
            buttonText = 'Remove Friend'
        } else {
            buttonText = 'Add Friend'
        }
    }
    if(variation === 'Group') {
        miniColor = '#a8dadcff'
        if(status) {
            buttonText = 'Leave Group'
        } else {
            buttonText = 'Join Group'
        }
    }
    if(variation === 'School') {
        miniColor = '#1d3557ff'
        if(status) {
            buttonText = 'Leave School'
        } else {
            buttonText = 'Join School'
        }
    }

    return(
        <div className={style.container} style={{color: miniColor}}>
            <img className={style.image} src={image} alt="" />
            <div className={style.info}>
                <h3>{text1}</h3>
                <h4>{text2}</h4>
                <h5>{text3}</h5>
                <h6>{text4}</h6>
            </div>
            <button className={button} style={{color: buttonColor}}><h3>{buttonText}</h3></button>
        </div>
    )
}

export default Mini