import { ChangeEvent, useState } from 'react';
import '../styles/styles.css';

export const RegisterPage = () => {

    const [ registerData, setRegisterData ] = useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const {name, email, password1, password2 } = registerData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRegisterData( prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }
    
    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate>
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