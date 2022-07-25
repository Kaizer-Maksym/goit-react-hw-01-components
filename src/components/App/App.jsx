import { Profile } from '../Profile/Profile';
import { AppContainer } from './App.styled';
import { Statistic } from '../Statistics/Statistics';
import { FriendsList } from '../FriendList/FriendList';
import { TransactionHistory } from '../Transactions/Transactions';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import items from 'data/transactions.json';

export const App = () => {
  return (
    <AppContainer>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={items} />
    </AppContainer>
  );
};
