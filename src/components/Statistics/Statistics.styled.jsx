import styled from '@emotion/styled';

function setBackgroundColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  margin-bottom: 50px;

  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
`;

export const StatHeader = styled.h2`
  text-align: center;
  padding-top: 20px;
  margin: 0;
  height: 80px;
  text-transform: uppercase;
  border: solid 1px #b0acac;
  color: #8d8b8b;
`;

export const StatList = styled.ul`
  border-top: solid 1px #b0acac;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, auto));
  gap: 15ps;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 15px;
  padding-bottom: 15px;

  width: 100%;
  height: 70px;
  background: ${setBackgroundColor};
  color: #000000;
  font-weight: 500;
`;

export const StatPercentage = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
