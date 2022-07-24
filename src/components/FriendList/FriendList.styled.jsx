import styled from '@emotion/styled';

function isActive(friends) {
  switch (friends.friends.isOnline) {
    case true:
      return '#07e910';
    case false:
      return '#e90707';
    default:
      return '#000000';
  }
}

export const FriendsCard = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;

  margin-bottom: 50px;
  width: 250px;
`;

export const Chip = styled.span`
  margin-right: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${isActive};
`;

export const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;

  padding: 15px;

  :not(:last-child) {
    margin-bottom: 15px;
  }
  border: solid 2px #b0acac;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
`;

export const FriendAvatar = styled.img`
  margin-right: 15px;
`;

export const FrendName = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 22px;
  color: #000000;
`;
