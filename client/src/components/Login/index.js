import React from 'react';

const Login = () => {
  // const [password, setPassword] = useState('');

  return (
    <div>
      <form>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={'123'}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
    </div>
  );
};

export default Login;
