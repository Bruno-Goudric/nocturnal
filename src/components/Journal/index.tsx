import React from 'react';
import JournalProps from './IJournal';
import * as S from './styles';

function Journal({ title }: JournalProps) {
  return (
    <S.Container>
      <S.Ribbon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}

export default Journal;
