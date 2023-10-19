import classNames from 'classnames';
import React, { ChangeEvent, useState } from 'react';

export const PasswordTest: React.FC = () => {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    onCheckPasswordStrength(event.target.value);
    setPassword(event.target.value);
  }

  const onCheckPasswordStrength = (password: string) => {
    let strength = 0;
    const leters = /[A-Za-z]/;
    const numbers = /\d/;
    const symbols = /[^A-Za-z0-9]/;

    if (password.length < 8 && password.length > 0) {
      setPasswordStrength(-1);
      return;
    }

    if (leters.test(password)) {
      strength++;
    }

    if (numbers.test(password)) {
      strength++;
    }

    if (symbols.test(password)) {
      strength++;
    }

    setPasswordStrength(strength);
  }

  return (
    <article className='password-test'>
      <h1 className='password-test__title'>Test your password strength</h1>

      <label className='password-test__label'>
        <input
          className='password-test__input'
          type='password'
          value={password}
          onChange={onPasswordChange}
        >
        </input>
      </label>

      <article className={classNames('password-test__strength strength', {
          'strength--short': passwordStrength === -1,
          'strength--low': passwordStrength === 1,
          'strength--medium': passwordStrength === 2,
          'strength--high': passwordStrength === 3,
      })}>
        <div className='strength__block'></div>
        <div className='strength__block'></div>
        <div className='strength__block'></div>
      </article>
    </article>
  );
}
