import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import Template from 'components/Template';
import BrandCreate from 'assets/images/meditation.png';
import * as S from './styles';

interface BookStorageProps {
  id: string;
  title: string;
}

function Note() {
  const [book, setBook] = useState<BookStorageProps>();
  const getBook = (dado: any) => {
    const book = JSON.parse(dado);
    setBook(book);
  };

  useEffect(() => {
    const key = localStorage.getItem('book');
    getBook(key);
  }, []);
  return (
    <Template>
      <Header visible={false} />
      <S.Container>
        <S.Title>{book?.title}</S.Title>
        <img src={BrandCreate} alt="" />
        <S.LinkCreate to="/create-note">Create a note</S.LinkCreate>
      </S.Container>
    </Template>
  );
}

export default Note;
