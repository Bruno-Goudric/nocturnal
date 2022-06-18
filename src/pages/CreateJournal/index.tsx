import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Template from 'components/Template';
import Header from 'components/Header';
import Journal from 'components/Journal';
import http from 'services/api';
import * as S from './styles';

interface localProps {}

function CreateJournal() {
  const [title, setTitle] = useState<string>();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (title !== '') {
      const local = localStorage.getItem('resp') || '';
      const localUser = JSON.parse(local);

      const data = {
        userId: localUser.user.id,
        title: title,
      };
      http.post('/journals/', JSON.stringify(data)).then((response) => {
        if (response !== null) {
          navigate('/list-journal');
        }
      });
    }
  };
  return (
    <Template>
      <Header visible={false} />
      <S.Container>
        <Journal title={title} />
        <S.Form>
          <S.Input
            name="title-book"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />

          <S.Button type="button" onClick={handleSubmit}>
            Save journal
          </S.Button>
        </S.Form>
      </S.Container>
    </Template>
  );
}

export default CreateJournal;
