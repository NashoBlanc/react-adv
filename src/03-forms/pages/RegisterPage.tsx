import { ChangeEvent, DOMAttributes, FormEvent, FormEventHandler, useState } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const  { formData, onChange, name, email, password1, password2 } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event)
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={(e) => onSubmit(e)}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => onChange(e)} name='name'>
                </input>
                <input type="email" placeholder="Email" value={email} name='email' onChange={(e) => onChange(e)}>
                </input>
                <input type="password" placeholder="Password" value={password1} name='password1' onChange={(e) => onChange(e)}>
                </input>
                <input type="password" placeholder="Repeat Password" value={password2} name='password2' onChange={(e) => onChange(e)}>
                </input>

                <button type="submit">Create</button>
            </form>
        </div>
    )
}