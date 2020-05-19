import React from 'react';

const Login = () => {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
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
              ></input>
            </div>
            <div className='ui field'>
              <label>Password</label>
              <input
                type='password'
                placeholder='password'
                name='password'
                onChange={onChange}
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
