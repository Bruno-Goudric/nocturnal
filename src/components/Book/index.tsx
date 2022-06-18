import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

interface JournalProps {
  createdAt: string;
  id: string;
  title: string;
  type: string;
  updatedAt: string;
}

interface JournalsProps {
  journals?: Array<JournalProps>;
}

function Book({ journals }: JournalsProps) {
  const navigate = useNavigate();
  const handleSubmit = (id: string, title: string) => {
    localStorage.setItem('book', JSON.stringify({ id, title }));
    navigate('/note');
  };
  return (
    <S.Box>
      {journals?.map((rows, index) => (
        <S.Container
          key={rows.id}
          style={{ background: `${index % 2 === 0 ? '#B8E5E3' : '#3B4E8D'}` }}
          onClick={() => handleSubmit(rows.id, rows.title)}
        >
          <S.Ribbon />
          <S.Title style={{ color: `${index % 2 === 0 ? '#000' : '#fff'}` }}>
            {rows.title}
          </S.Title>
        </S.Container>
      ))}
    </S.Box>
  );
}

export default Book;
