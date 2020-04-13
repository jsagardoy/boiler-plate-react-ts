import * as React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Button, FormHelperText } from '@material-ui/core';
import { loginAPI } from 'api';
import { LoginType } from 'common-app/interfaces';
import { useHistory } from 'react-router-dom';
import { FORM_ERROR } from 'final-form';

interface Props {}
export const LoginComponent: React.FC<Props> = (props) => {
  const history = useHistory();

  const onSubmit = (loginInfo: LoginType) => {
    const logged = loginAPI.find(
      (user: LoginType) =>
        user.username === loginInfo.username &&
        user.password === loginInfo.password
    );
    if (!logged) {
      return { [FORM_ERROR]: 'El usuario o password no son correctos' };
    }

    history.push('/');
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitError }) => (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Field name='username'>
            {({ input }) => (
              <TextField placeholder='username' type='email' {...input} />
            )}
          </Field>
          <Field name='password'>
            {({ input }) => (
              <TextField placeholder='password' type='password' {...input} />
            )}
          </Field>
          {submitError && <div className='error'>{submitError}</div>}
          <Button type='submit'>Submit</Button>
        </form>
      )}
    />
  );
};
