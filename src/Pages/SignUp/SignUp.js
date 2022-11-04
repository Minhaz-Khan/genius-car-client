import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../AuthContext/AuthProvider/AuthProvider';

const SignUp = () => {
    const { CreateAccount, profileUpdata } = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault()
        const from = event.target;
        const Name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(Name, email, password);
        CreateAccount(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleProfileUpdate(Name)
            })
            .catch(e => console.error(e))

    }
    const handleProfileUpdate = (name) => {
        const profileInfo = { displayName: name, photoURL: '' }
        profileUpdata(profileInfo)
    }
    return (
        <div className="hero my-10">
            <div className="grid grid-cols-2 gap-x-10">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" className='w-4/6' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='py-5 text-center'>Already Have an account <Link to={'/login'} className='text-orange-500 font-bold'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;