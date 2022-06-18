import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  padding: 25px 18px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoxNav = styled.div`
  width: 100%;
  height: 34px;

  display: flex;
  justify-content: space-between;
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

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 40px;
  border-radius: 24px;
  border: 1px solid #834825;
`;

export const IconAdd = styled.img`
  margin-right: 10px;
`;

export const ButtonAdd = styled.button`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: var(--font-title);
  background: var(--background);
  border 0;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
`;
