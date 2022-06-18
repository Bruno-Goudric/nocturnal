import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Template from 'components/Template';
import LogoDefault from 'assets/images/logo206x42.png';
import http from 'services/api';

import * as S from './styles';

function SignUp() {
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (userName !== '' && password !== '') {
      const data = {
        username: userName,
        password: password,
        email: email,
      };
      http.post('/auth/signup', JSON.stringify(data)).then(() => {
        navigate('/');
      });
    }
  };

  return (
    <Template>
      <S.Container>
        <S.Logo src={LogoDefault} alt="logo" />
        <S.Header>
          <S.Title>Sign Up</S.Title>
          <S.SubTitle to="/">Already have an account</S.SubTitle>
        </S.Header>
        <S.Form>
          <S.Input
            name="username"
            type="text"
            placeholder="Define a username"
            value={userName}
            onChange={(e) => setUserName(e.currentTarget.value)}
          />
          <S.Input
            name="password"
            type="password"
            placeholder="Set your password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <S.Input
            name="email"
            type="email"
            placeholder="Email (optional)"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </S.Form>
        <S.BoxButton>
          <S.Button onClick={handleSubmit}>Create account</S.Button>
        </S.BoxButton>
      </S.Container>
    </Template>
  );
}

export default SignUp;
