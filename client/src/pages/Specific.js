import style from './specific.module.css'

const Specific = ({ data, variation, status, relatedModel1, relatedModel2 }) => {
    const { image, text1, text2, text3, text4 } = data
    let specificColor = 'gray'
    let buttonTextColor = 'white'
    let buttonText = null
    let buttonColor = 'gray'
    if(status) {
        buttonColor = 'purple'
        buttonTextColor = 'orange'
    } else {
        buttonColor = 'orange'
        buttonTextColor = 'purple'
    }
    if(variation === 'Self') {
        buttonColor = 'black'
        buttonText = 'Edit Profile'
        buttonTextColor = 'white'
    }
    if(variation === 'User') {
        specificColor = '#e63946ff'
        if(status) {
            buttonText = 'Remove Friend'
        } else {
            buttonText = 'Add Friend'
        }
    }
    if(variation === 'Group') {
        specificColor = '#a8dadcff'
        if(status) {
            buttonText = 'Leave Group'
        } else {
            buttonText = 'Join Group'
        }
    }
    if(variation === 'School') {
        specificColor = '#1d3557ff'
        if(status) {
            buttonText = 'Leave School'
        } else {
            buttonText = 'Join School'
        }
    }

    const getMini = (group) => {
        // Compare it to my data, set it to variation
    }

    return(
        <div>
            <div className={style.hero}>
                <img src={userData.profilePicture} alt="" className={image} />
                <div className={style.info}>
                    <h1>{text1}</h1>
                    <h2>{text2}</h2>
                    <h3>{text3}</h3>
                    <h4>{text4}</h4>
                </div>
            </div>
            {relatedModel1.map(group => getMini(group))}
        </div>
    )
}

export default Specific