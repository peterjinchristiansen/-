import { Link } from 'react-router-dom'
import style from './header.module.css'
import navigation from '../data/navigation'
import colors from '../data/colors'

const Home = () => {

const getLink = ({ id, path, name }) => {
    return(
        <Link
            key={id}
            to={{ pathname: path, state: { variation: name } }}
            className={style.navLink}
        >
            {name}
        </Link>
    )
}

const getColor = ({ id, code, name }) => {
    return <div key={id} style={{backgroundColor: code}} className={style.colors}>{name}</div>
}
    return(
        <div className='header'>
            <div className={style.navbar}>
                <Link to='/' className={style.logo}><div>StudyGroups</div></Link>
                <div className={style.navLinks}>
                    {navigation.map(item => getLink(item))}
                </div>
            </div>
            <div className={style.hero}>
                    {colors.map(color => getColor(color))}
            </div>
        </div>
    )
}

export default Home