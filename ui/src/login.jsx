import { useState } from "react";
import './SignUp.css'
async function createAccount({ name, email, password }) {
    try {
        const url = "http://localhost:8080/users";
        let result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });
        return result.json();
    } catch (e) {
        return Promise.reject(e);
    }
}
async function signIn({ email }) {
    try {
        const url = "http://localhost:8080/users/{}" + email;
        let result = await fetch(url);
        return result.json();
    } catch (e) {
        return Promise.reject(e);
    }
}
export default function Login({ show, setAuth }) {
    const [isShowSigIn, setShowSignIn] = useState(false);
    const showSignIn = () => {
        setShowSignIn(prev => !prev)
    }
    const FormCreateUsername = ({ setAuth }) => {
        const onCreateUsername = async (e) => {
            e.preventDefault();
            let email = e.target.email.value;
            let password = e.target.password.value;
            let name = e.target.name.value;
            if (email === "" || password === "") {
                return;
            }
            let res = await createAccount({ name,email, password });
            if (res === null) {
                alert("Failed to create account");
                return;
            }
            setAuth(res)
        }
        return (
            <form action="" className="login" onSubmit={onCreateUsername}>
                <div>
                    <label >Name</label>
                    <input required type="text" name="name" placeholder="John Doe" />
                         <label>Email</label>
                    <input required type="email" name="email" placeholder="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input required type="password" name="password" />
                </div>
            
                    <button type="submit"
                        className="signup">SignUp</button>
               
               
                    <p >Already have a username? <button onClick={showSignIn} >Sign In</button></p>
    
            </form>
        )
    }
    const FormSignIn = ({ setAuth }) => {
        const onSignIn = async (e) => {
            e.preventDefault();
            let email = e.target.email.value;
            if (email === "") {
                return;
            }
            let res = await signIn({ email });
            if (res === null) {
                alert("Failed to create account");
                return;
            }
            if (!res.id) {
                alert(`email address not found ${email}`);
                return;
            }
            setAuth(res)
        }
        return (
            <form action="" onSubmit={onSignIn}>
                <div>
                    <label>Email</label>
                    <input required type="email" name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input required type="password" name="password" />
                </div>
                <div >
                    <button type="submit"
                        >Login</button>
                </div>
                <div >
                    <p >Don't have an Account?? <button onClick={showSignIn} >Sign Up</button></p>
                </div>
            </form>
        )
    }
    return (
        <div className={`${show ? '' : 'hidden'} bg-gradient-to-b from-orange-400 to-rose-400`}>
            <div >
                <div>
                    <h3 >{isShowSigIn ? 'Log in with your phone.' : 'Create your account.'}</h3>
                    {isShowSigIn ? <FormSignIn setAuth={setAuth} /> : <FormCreateUsername setAuth={setAuth} />}
                </div>
            </div>
        </div>
    )
}