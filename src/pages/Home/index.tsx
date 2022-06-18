import React from 'react';
import Template from 'components/Template';
import Header from 'components/Header';
import BrandCreate from 'assets/images/meditation.png';
import * as S from './styles';

function Home() {
  return (
    <Template>
      <Header visible={false} />
      <S.Container>
        <img src={BrandCreate} alt="" />
        <S.LinkCreate to="/create-journal">Create a journal</S.LinkCreate>
      </S.Container>
    </Template>
  );
}

export default Home;
