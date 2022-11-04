import { Result } from 'postcss';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../AuthContext/AuthProvider/AuthProvider';

const Login = () => {
    const { Login } = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        Login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(e => {
                console.error(e);
            })
    }
    return (
        <div className="hero my-10">
            <div className="grid grid-cols-2 gap-x-10">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" className='w-4/6' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='py-5 text-center'>New to Genius car <Link to={'/signup'} className='text-orange-500 font-bold'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;