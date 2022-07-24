import styled from '@emotion/styled';

export const Avatar = styled.img`
  margin: 0;
  padding: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: solid 1px #c3c0c0;
`;

export const ImgBox = styled.div`
  padding-top: 15px;
  text-align: center;
  margin-bottom: 40px;
`;

export const ProfileCard = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 400px;
  border: solid 2px #b0acac;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
`;

export const SocialInformation = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: #f2eaea;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const SocialListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 0;

  border-right: solid 1px #767373;

  &:last-child {
    border: none;
  }

  &:not(:last-child) {
    padding-right: 40px;
  }
`;

export const Username = styled.p`
  margin: 0;
  margin-bottom: 15px;

  font-weight: 700;
  font-size: 24px;
`;

export const StatsValue = styled.span`
  font-weight: 500;
  color: #000000;
`;

export const SocialStats = styled.span`
  color: #767373;
`;

export const UserInfo = styled.p`
  margin: 0;

  font-weight: 500;
  color: #767373;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
