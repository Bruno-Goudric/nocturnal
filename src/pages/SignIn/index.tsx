import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Template from 'components/Template';
import LogoDefault from 'assets/images/logo206x42.png';
import http from 'services/api';

import * as S from './styles';

function SignIn() {
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (userName !== '' && password !== '') {
      const data = {
        username: userName,
        password: password,
      };
      http
        .post('/auth/login', JSON.stringify(data))
        .then((response) => {
          const resp = response;

          if (resp !== null) {
            localStorage.setItem('resp', JSON.stringify(resp));
            navigate('/home');
          }
        })
        .catch((error) => {
          setUserName('');
          setPassword('');
        });
    }
  };
  return (
    <Template>
      <S.Container>
        <S.Logo src={LogoDefault} alt="logo" />
        <S.Header>
          <S.Title>Sign in</S.Title>
          <S.SubTitle to="/signup">Sign up</S.SubTitle>
        </S.Header>
        <S.Form>
          <S.Input
            name="username"
            type="text"
            placeholder="Your username"
            value={userName}
            onChange={(e) => setUserName(e.currentTarget.value)}
          />
          <S.Input
            name="password"
            type="password"
            placeholder="Your password"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </S.Form>
        <S.ForgotPass>
          <Link to="#">Forgot Password?</Link>
        </S.ForgotPass>
        <S.BoxButton>
          <S.Button onClick={handleSubmit}>Log in</S.Button>
        </S.BoxButton>
      </S.Container>
    </Template>
  );
}

export default SignIn;
