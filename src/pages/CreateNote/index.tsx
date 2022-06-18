import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/Header';
import Template from 'components/Template';
import ArrowLeft from 'assets/icon/arrow-left.png';

import * as S from './styles';
import http from 'services/api';

interface BookStorageProps {
  id: string;
  title: string;
}

function CreateNote() {
  const [book, setBook] = useState<BookStorageProps>();
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  const navigate = useNavigate();

  const getBook = (dado: any) => {
    const book = JSON.parse(dado);
    setBook(book);
  };

  const returnListJournals = () => {
    navigate('/list-journal');
  };

  const handleSubmit = (id?: string) => {
    http
      .post(`/journals/entry/${id}`, JSON.stringify({ title, content }))
      .then((response) => {
        navigate('/list-note');
      });
  };

  useEffect(() => {
    const key = localStorage.getItem('book');
    getBook(key);
  }, []);
  return (
    <Template>
      <Header visible={false} />
      <S.Container>
        <S.BoxNav onClick={returnListJournals}>
          <S.Icon src={ArrowLeft} />
          <S.NavTitle>{book?.title}</S.NavTitle>
        </S.BoxNav>
        <S.Form>
          <S.Input
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <S.InputArea
            name="content"
            placeholder="Write your note"
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
          />
        </S.Form>
        <S.BoxButton>
          <S.Button onClick={() => handleSubmit(book?.id)}>Save note</S.Button>
        </S.BoxButton>
      </S.Container>
    </Template>
  );
}

export default CreateNote;
