import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 246px 29px 148px 27px;
`;

export const LinkCreate = styled(Link)`
  font-size: 14px;
  line-height: 17px;
  text-decoration: underline;
  color: var(--color-link);
  margin-top: 79px;
`;
