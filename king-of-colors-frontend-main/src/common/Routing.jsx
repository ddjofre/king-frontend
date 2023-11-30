import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Game from '../components/juego/game'
import Rules from '../components/rules/rules'
import About from '../components/about/about'
import AboutUs from '../components/about_us/about_us'
import Login from '../components/profile/login'
import Signup from '../components/profile/registro'
import UserCheck from '../protected/UserCheck'

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App />}/>
                <Route path={"/game"} element={<Game />}/>
                <Route path={"/rules"} element={<Rules />}/>
                <Route path={"/about"} element={<About />}/>
                <Route path={"/aboutus"} element={<AboutUs />}/>
                <Route path={"/login"} element={<Login />}/>
                <Route path={"/registro"} element={<Signup />}/>
                <Route path={"/usercheck"} element={<UserCheck />}/>

            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing;