import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 98px 29px 148px 27px;
`;

export const BoxTitleBook = styled.div`
  position: absolute;
  top: 40%;
`;
export const TitleBook = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  font-family: 'Abhaya Libre';
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin-top: 29px;
  padding: 13px 12px;
  background: rgba(255, 255, 255, 0.42);
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
  margin-top: 42px;
`;
