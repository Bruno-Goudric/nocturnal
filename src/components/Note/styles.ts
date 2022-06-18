import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: auto;
`;

export const Container = styled.div`
  width: 157px;
  height: 178px;
  background: #faf2ec;
  border-radius: 4px;
  box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.12);
  margin-bottom: 10px;
`;

export const Ribbon = styled.div`
  width: 157px;
  height: 178px;
  background: #faf2ec;
  padding: 12px 11px 34px 10px;
  box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.12);

  display: flex;
  justify-content: flex-start;
`;

export const Title = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #333438;
`;
