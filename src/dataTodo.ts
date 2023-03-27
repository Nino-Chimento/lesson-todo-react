import { TodoProps } from "./models/TodoProps";

export const dataTodo:TodoProps[] = [
    {
        id: Math.random(),
        title: 'Learn React',
        completed: false,
       
    },
    {
        id: Math.random(),
        title: 'Learn typescriot',
        completed: true
    }, {
        id: Math.random(),
        title: 'Learn Javascript',
        completed: false
    }
]