import { createContext } from "react"

interface UserContextProps {
    name:string
    lastName:string
}

export const UserContext = createContext<UserContextProps>({
    name: 'John',
    lastName: 'Doe'
})