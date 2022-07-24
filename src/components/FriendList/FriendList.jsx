import PropTypes from 'prop-types';
import {
  FriendsCard,
  Chip,
  FriendsListItem,
  FriendAvatar,
  FrendName,
} from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsCard>
      {friends.map(friends => (
        <FriendsListItem key={friends.id}>
          <Chip friends={friends}>{friends.isOnline}</Chip>
          <FriendAvatar src={friends.avatar} alt="User avatar" width="48" />
          <FrendName>{friends.name}</FrendName>
        </FriendsListItem>
      ))}
    </FriendsCard>
  );
};

FriendsList.prototype = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
