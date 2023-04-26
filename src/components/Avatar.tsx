import { FC, useState } from "react";

type NewType = {
    name: string | number;
    array: Array<number> | Array<string>;
    promise: Promise<string>;
}

export type PropsAvatar = {
    name: string;
    img?: string;
    onClick: () => void;
    array: Array<string>;
}
type User = Omit<PropsAvatar, "array">

export enum Color {
    Red = "red",
    Blue = "blue",
}


type Object = {
    name: string,
    age: number,
    address: string,
    color: Color
}


const user: User = {
    onClick: () => { },
    name: "name",
    img: "https://www.pngkit.com/png/full/911-9115516_avatar-icon-deadpool.png",
}



if (Color.Red === "red") {
    console.log("red")
} else {
    console.log("blue")
}




enum Step {
    Address = "address",
    work = "work",
}

export const Avatar: FC<PropsAvatar> = ({ name, img, onClick }) => {
    const [step, setStep] = useState(Step.Address)

    return <div onClick={onClick}>
        <img style={{ width: "50px", height: "50px", borderRadius: "100%" }} src={img ? img : "https://www.pngkit.com/png/full/911-9115516_avatar-icon-deadpool.png"} alt={name} />
        < div > {name}</div>

    </div >
};