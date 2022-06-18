import React from 'react';
import NoteProp from './INoteProps';

import * as S from './styles';

function Note({ entries }: NoteProp) {
  return (
    <S.Box>
      {entries?.map((rows) => (
        <S.Container>
          <S.Ribbon>
            <S.Title>{rows.content}</S.Title>
          </S.Ribbon>
        </S.Container>
      ))}
    </S.Box>
  );
}

export default Note;
