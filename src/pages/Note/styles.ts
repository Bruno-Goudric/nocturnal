import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.article`
  width: 100%;
  padding: 124px 25px 101px 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 66px;
`;

export const LinkCreate = styled(Link)`
  font-size: 14px;
  line-height: 17px;
  text-decoration: underline;
  color: var(--color-link);
  margin-top: 79px;
`;
