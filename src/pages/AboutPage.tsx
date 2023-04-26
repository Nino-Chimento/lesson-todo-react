import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom"

interface AboutPageProps {
    isTrue?: boolean
}

export const AboutPage: FC<AboutPageProps> = ({ isTrue }) => {
    isTrue && console.log("isTrue is true");
    const navigate = useNavigate();
    const { id } = useParams()
    console.log(id);

    const handleClick = () => {
        navigate("/")
        
    }

    return <button onClick={handleClick}>Go to home</button>
}