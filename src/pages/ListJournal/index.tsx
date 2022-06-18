import React, { useEffect, useState } from 'react';
import Template from 'components/Template';
import Header from 'components/Header';

import * as S from './styles';
import Book from 'components/Book';
import http from 'services/api';

function ListJournal() {
  const [journals, setJournals] = useState<any>();
  const getJournal = (dado: any) => {
    const id = dado.user.id;
    http.get(`/journals/${id}`).then((response) => setJournals(response));
  };

  useEffect(() => {
    const local = localStorage.getItem('resp') || '';
    const localUser = JSON.parse(local);

    getJournal(localUser);
  }, []);

  return (
    <Template>
      <Header visible />
      <S.Container>
        <Book journals={journals?.journals} />
      </S.Container>
    </Template>
  );
}

export default ListJournal;
