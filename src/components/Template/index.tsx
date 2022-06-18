import React from 'react';

import TemplateProps from './ITemplate';

import * as S from './styles';

function Template({ children }: TemplateProps) {
  return <S.Container>{children}</S.Container>;
}

export default Template;
