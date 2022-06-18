import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  padding: 39px 33px 109px 33px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoxNav = styled.div`
  width: 100%;
  height: 34px;

  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  margin-right: 19px;
`;
export const NavTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  font-family: 'Abhaya Libre';
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin-top: 29px;
  padding: 13px 12px;
  background: rgba(255, 255, 255, 0.42);

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #804627;
`;

export const InputArea = styled.textarea`
  width: 100%;
  height: 379px;
  border-radius: 4px;
  border: 0;
  margin-top: 28px;
  padding: 14px 12px;
  background: rgba(255, 255, 255, 0.42);

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #804627;
`;

export const BoxButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-top: 40px;
`;
