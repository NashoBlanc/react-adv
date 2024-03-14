import { ChangeEvent, useState } from "react";

export const useForm = <T>(initiState: T) => {

    const [ formData, setFormData ] = useState(initiState);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData( prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    return {
        ...formData,
        formData,
        onChange

    }
}