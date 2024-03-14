import { ChangeEvent, DOMAttributes, FormEvent, FormEventHandler, useState } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const  { formData, onChange, name, email, password1, password2, isValidEmail } = useForm({
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

                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => onChange(e)} 
                    name='name'
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                    >
                </input>

                { name.trim().length <= 0 && <span>Este campo es necesario</span> }

                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    name='email' 
                    onChange={(e) => onChange(e)}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                    >
                </input>

                { !isValidEmail(email) && <span>Email no es valido</span> }

                <input type="password" placeholder="Password" value={password1} name='password1' onChange={(e) => onChange(e)}>
                </input>

                { password1.trim().length <= 0 && <span>Este Campo no es necesario</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres </span> }
                <input type="password" placeholder="Repeat Password" value={password2} name='password2' onChange={(e) => onChange(e)}>
                </input>
                { password2.trim().length <= 0 && <span>Este Campo no es necesario</span> }
                { password2.trim().length && password1 !== password2 && <span>Las contraseñas tienen que ser iguales </span> }
                { password2.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres </span> }
                <button type="submit">Create</button>
            </form>
        </div>
    )
}