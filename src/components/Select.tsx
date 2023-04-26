import { FC } from "react"

type Option = {
    value: string | number;
    label: string;
}

type SelectProps = {
    options: Option[];
    handleChange: (value: string | number) => void;
}

export const Select: FC<SelectProps> = ({ options ,handleChange}) => {
    return <div>
        <select onChange={(e) => handleChange(e.target.value)}>
            {options.map(option => <option value={option.value}>{option.label}</option>)}
        </select>
    </div>
}

