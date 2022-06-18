import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.article`
  width: 100%;
  padding: 244px 29px 153px 27px;
`;

export const Logo = styled.img``;
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 78px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 39px;
  color: var(--font-title);
`;
export const SubTitle = styled(Link)`
  color: var(--font-title);
  text-decoration: underline;
  font-size: 12px;
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 11px;
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin-top: 29px;
  padding: 13px 12px;
`;

export const BoxButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 62px;
`;

export const Button = styled.button`
  width: 161px;
  height: 40px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  color: #fff;
  background: var(--button);
  border: 0;
`;
