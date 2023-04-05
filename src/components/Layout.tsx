import { Route, Routes } from "react-router-dom"
import { AboutPage } from "../pages/AboutPage"
import { TodosPage } from "../pages/TodosPage"
import { Container } from "./Container"
import { Login } from "./Login"
import { Menu } from "./Menu"

export const Layout = () => {

    const getUser = () => {
        const user = window.localStorage.getItem('user')
        if (!user) return false
        return true
    }


    return <Container>
        <Menu />
        {!getUser() &&
            <Login />}
        {getUser() &&
            <Routes>
                <Route path='/' element={<TodosPage />} />
                <Route path='user/:id' element={<AboutPage />} />
            </Routes>}
        <footer>footer</footer>
    </Container>
}