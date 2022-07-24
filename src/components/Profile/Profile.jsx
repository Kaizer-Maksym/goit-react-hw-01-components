import PropTypes from 'prop-types';
import {
  Avatar,
  ImgBox,
  ProfileCard,
  SocialInformation,
  SocialListItem,
  Username,
  StatsValue,
  SocialStats,
  UserInfo,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileCard className="profile">
      <ImgBox>
        <Avatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </ImgBox>

      <SocialInformation>
        <SocialListItem>
          <SocialStats>Followers</SocialStats>
          <StatsValue>{stats.followers}</StatsValue>
        </SocialListItem>
        <SocialListItem>
          <SocialStats>Views</SocialStats>
          <StatsValue>{stats.views}</StatsValue>
        </SocialListItem>
        <SocialListItem>
          <SocialStats>Likes</SocialStats>
          <StatsValue>{stats.likes}</StatsValue>
        </SocialListItem>
      </SocialInformation>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
