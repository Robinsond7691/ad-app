import React from 'react';
import {
  useAuthContext,
  useAuthDispatch,
  loginUser,
} from '../../context/auth/authContext';

const Login = (props) => {
  const authDispatch = useAuthDispatch();
  const authContext = useAuthContext();

  const { isAuthenticated } = authContext;

  React.useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
  }, [isAuthenticated, props.history]);

  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(authDispatch, user);
  };

  return (
    <>
      <div className='ui text container'>
        <h3 className='ui header'>Log in</h3>
        <div className='ui text container segment'>
          <form className='ui form' onSubmit={onSubmit}>
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
