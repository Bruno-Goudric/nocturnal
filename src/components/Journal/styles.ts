import styled from 'styled-components';

export const Container = styled.div`
  width: 240px;
  height: 332px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  background: #f8e5d6;

  border-radius: 2px 16px 16px 2px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Ribbon = styled.div`
  width: 18px;
  height: 330px;
  background: #f8e5d6;
  border-radius: 4px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #333438;
  margin: 0 auto;
`;
