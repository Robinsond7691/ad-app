import React, { useEffect } from 'react';
import {
  useAuthContext,
  useAuthDispatch,
  registerUser,
} from '../../context/auth/authContext';

const Login = (props) => {
  const authContext = useAuthContext();
  const authDispatch = useAuthDispatch();

  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
  }, [isAuthenticated, props.history]);

  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const { name, email, password } = user;

  const newUser = {
    name,
    email,
    password,
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.password2) {
      return alert("passwords don't match");
    }
    registerUser(authDispatch, newUser);
  };

  return (
    <>
      <div className='ui text container'>
        <h3 className='ui header'>Register</h3>
        <div className='ui text container segment'>
          <form className='ui form' onSubmit={onSubmit}>
            <div className='field'>
              <label>Name</label>
              <input
                type='text'
                placeholder='name'
                name='name'
                onChange={onChange}
                required
              ></input>
            </div>
            <div className='field'>
              <label>Email</label>
              <input
                type='email'
                placeholder='email...'
                name='email'
                onChange={onChange}
                required
              ></input>
            </div>
            <div className='ui field'>
              <label>Password</label>
              <input
                type='password'
                placeholder='password'
                name='password'
                onChange={onChange}
                required
                minLength='6'
              ></input>
            </div>
            <div className='ui field'>
              <label>Confirm Password</label>
              <input
                type='password'
                placeholder='Confirm password'
                name='password2'
                onChange={onChange}
                required
                minLength='6'
              ></input>
            </div>
            <button className='ui submit button'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
