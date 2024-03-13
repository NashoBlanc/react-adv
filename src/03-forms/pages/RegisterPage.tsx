import '../styles/styles.css';

export const RegisterPage = () => {
    return (
        <div>
            <h1>Register Page</h1>

            <form>
                <input type="text" placeholder="Name">
                </input>
                <input type="email" placeholder="Email">
                </input>
                <input type="password" placeholder="Password">
                </input>
                <input type="password" placeholder="Repeat Password">
                </input>

                <button type="submit">Create</button>
            </form>
        </div>
    )
}