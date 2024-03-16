
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css'

export const FormikTupPage = ( ) => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
            .max(15, ' Debe ser 15 caracteres o menos')
            .required('requerido'),
            lastName: Yup.string()
            .max(10, 'Must be 10 characters or less')
            .required('Requerido'),
            email: Yup.string()
            .email('sdas')
            .required('Invalid email address')
        })
    })

    return (
        <div>
            <h1>Formik Yup Tutorial</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    { ...getFieldProps('firstName') }
                    > 
                </input>
                { touched.firstName && errors.firstName && <span> { errors.firstName } </span>}

                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    { ...getFieldProps('lastName') }
                    >        
                </input>
                { touched.lastName && errors.lastName && <span> { errors.lastName } </span>}

                <label htmlFor="email">Email Address</label>
                <input 
                    type="text" 
                    { ...getFieldProps('email') }>
                </input>

                { touched.email && errors.email && <span> { errors.email } </span>}

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}