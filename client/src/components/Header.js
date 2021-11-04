import { Link } from 'react-router-dom'
import style from './header.module.css'
import colors from '../data/colors'

const Home = () => {

const getColor = ({ id, code, name }) => {
    return(
        <div
            key={id} style={{backgroundColor: code}} className={style.colors}
        >
            {name}
        </div>
    )
}
    return(
        <div className='header'>
            <div className={style.navbar}>
                <Link to='/' className={style.logo}><div>StudyGroups</div></Link>
                <div className={style.navLinks}>
                    <Link to='/search' className={style.navLink}>Search</Link>
                    <Link to='/login' className={style.navLink}>Login</Link>
                    <Link to='/register' className={style.navLink}>Register</Link>
                    <Link to='/profile' className={style.navLink}>Profile</Link>
                </div>
            </div>
            <div className={style.hero}>
                    {colors.map(color => getColor(color))}
            </div>
        </div>
    )
}

export default Home