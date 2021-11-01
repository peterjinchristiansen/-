import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import navigation from './data/navigation'

const App = () => {
    const getRoute = ({ id, path, component, variation }) => {
        return <Route key={id} path={path} component={component} state={{ from: {variation }}} />
    }
    return(
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                {navigation.map(item => getRoute(item))}
            </Switch>
        </Router>
    )
}

export default App