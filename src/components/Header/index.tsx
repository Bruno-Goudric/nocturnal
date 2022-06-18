import React from 'react';
import { useNavigate } from 'react-router-dom';
import Brand from 'assets/images/logo147x30.png';
import HeaderProps from './IHeader';
import * as S from './styles';

function Header({ visible }: HeaderProps) {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/create-journal');
  };

  return (
    <S.Container>
      <S.BoxBrand>
        <img src={Brand} alt="" />
      </S.BoxBrand>
      {visible && (
        <S.ButtonAdd onClick={handleRedirect}>+ Add Journal</S.ButtonAdd>
      )}
    </S.Container>
  );
}

export default Header;
