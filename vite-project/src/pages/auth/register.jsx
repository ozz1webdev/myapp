import React,{ useState } from 'react';
import style from '../../assets/css/register.module.css';
// https://www.youtube.com/watch?v=PlpM2LJWu-s&t=363s

function Register() {
    const formContainerSignUpClasses = [style.formContainer, style.signUp];
    const formContainerSignInClasses = [style.formContainer, style.signIn];
    const toggleLeftClasses = [style.togglePanel, style.toggleLeft];
    const toggleRightClasses = [style.togglePanel, style.toggleRight];
    const containerActive = [style.container, style.active];

    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    return (
    <>
        <div className={isActive ? containerActive.join(' ') : style.container} id="container">
            <div className={formContainerSignUpClasses.join(' ')}>
                <form>
                    <h1>Create Account</h1>
                    <div className={style.socialIcons}>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-google fa-2x"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-facebook fa-2x"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-github fa-2x"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-linkedin fa-2x"></i>
                        </a><br />
                        <span> or use your email for registration</span>
                        <input type="text" name="username" placeholder="Name" />
                        <input type="email" name="email" placeholder="EMail" />
                        <input type="password" name="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </div>
                </form>
                </div>
                <div className={formContainerSignInClasses.join(' ')}>
                <form>
                    <h1>Sign In</h1>
                    <div className={style.socialIcons}>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-google fa-2x"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-facebook fa-2x"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-github fa-2x"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fa-brands fa-linkedin fa-2x"></i>
                        </a><br />
                        <span> or sign in with your email and password</span>
                        <input type="email" name="email" placeholder="EMail" />
                        <input type="password" name="password" placeholder="Password" />
                        <a href="#">Forget Your Password?</a><br />
                        <button>Sign In</button>
                    </div>
                </form>
                </div>
            <div className={style.toggleContainer}>
                <div className={style.toggle}>
                    <div className={toggleLeftClasses.join(' ')}>
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button onClick={toggleClass} className={style.hidden} id="login">Sign In</button>
                    </div>
                    <div className={toggleRightClasses.join(' ')}>
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button onClick={toggleClass} className={style.hidden} id="register">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Register;
