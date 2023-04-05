import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [password, setPassword] = useState("")
    const [isVisibleMessage, setIsVisibleMessage] = useState<boolean>(false)
    const navigate = useNavigate();
    var name: string = "John";

    const funzione = (arg: string, arg1: number): any => { 
       
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        if (password === "1234") {
            window.localStorage.setItem("user", "true")
            navigate("/")
            return
        }
        setIsVisibleMessage(true)
    }

    return <>
        <input onChange={handleChange}></input>
        <button onClick={handleLogin}>Submit</button>
        {isVisibleMessage && <div>Password errata</div>}
    </>
}