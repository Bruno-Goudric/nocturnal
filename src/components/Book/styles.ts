import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: auto;
`;

export const Container = styled.div`
  width: 157px;
  height: 214px;
  background: #b8e5e3;
  border-radius: 5px 15px 15px 5px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

export const Ribbon = styled.div`
  width: 11px;
  height: 214px;
  background: #5091d6;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin: 0 auto;
  font-family: 'Abhaya Libre';
`;
