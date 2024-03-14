
import '../styles/styles.css'

export const FormikBasicPage = () => {
    return (
        <div>
            <h1>Formik Basic Tutorial</h1>
            <form noValidate>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName"></input>
                <span> first name is required</span>

                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName"></input>
                <span> last name is required</span>

                <label htmlFor="email">Email Address</label>
                <input type="text" name="email"></input>
                <span> Email is required</span>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}