import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import Home from './pages/Home'
import Search from './pages/Search'
import Single from './pages/Single'
import Login from './pages/Login'
import Register from './pages/Register'

import Header from './components/Header'

const client = new ApolloClient({
    request: operation => {
        const token = localStorage.getItem('id_token')
        operation.setContext({
            headers: { authorization: token ? `Bearer ${token}` : '' }
        })
    },
    uri: 'http://localhost:4000/graphql'
})

const App = () => {
    return(
        <ApolloProvider client={client}>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/search' element={<Search />} />
                    <Route exact path='/single' element={<Single />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App