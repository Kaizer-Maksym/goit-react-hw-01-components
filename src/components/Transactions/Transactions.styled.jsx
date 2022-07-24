import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  margin-bottom: 50px;
  border-collapse: collapse;
  text-align: center;
  font-weight: 400;

  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
`;

export const TableDate = styled.td`
  border: 1px solid #e1d8d8aa;
  padding: 10px;
`;

export const TableHeader = styled.th`
  border: 1px solid #e1d8d8aa;
  padding: 10px;
`;

export const THead = styled.thead`
  background-color: #7ca8f0;
  color: #ffffff;
  text-transform: uppercase;
`;

export const TBody = styled.tbody`
  text-transform: capitalize;
`;

export const TableRow = styled.tr`
  :nth-of-type(2n) {
    background-color: #e8e2e2b5;
  }
`;
