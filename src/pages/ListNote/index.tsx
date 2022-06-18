import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/Header';
import Template from 'components/Template';
import ArrowLeft from 'assets/icon/arrow-left.png';
import Add from 'assets/icon/add.png';
import Note from 'components/Note';

import * as S from './styles';
import http from 'services/api';

function ListNode() {
  const [book, setBook] = useState<any>();
  const [note, setNote] = useState<any>();
  const navigate = useNavigate();

  const getListNote = (dado: any) => {
    const book = JSON.parse(dado);
    setBook(book);
    http.get(`/journals/entries/${book.id}`).then((response) => {
      setNote(response);
    });
  };

  useEffect(() => {
    const key = localStorage.getItem('book');
    getListNote(key);
  }, []);
  return (
    <Template>
      <Header visible={false} />
      <S.Container>
        <S.BoxNav>
          <S.BoxTitle onClick={() => navigate('/list-journal')}>
            <S.Icon src={ArrowLeft} />
            <S.NavTitle>{book?.title}</S.NavTitle>
          </S.BoxTitle>
          <S.BoxButton onClick={() => navigate('/create-note')}>
            <S.IconAdd src={Add} />
            <S.ButtonAdd>Add note</S.ButtonAdd>
          </S.BoxButton>
        </S.BoxNav>
        <S.Content>
          <Note entries={note?.entries} />
        </S.Content>
      </S.Container>
    </Template>
  );
}

export default ListNode;
