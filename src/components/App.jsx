import { Profile } from './Profile/Profile'
import userProfile from './Profile/dataUser.json';
import { Statistics } from './Statistics/Statistics';
import userStatistics from './Statistics/dataStatistics.json'
import { Friends } from './Friends/Friends';
import friends from './Friends/dataFriends.json'
import { TransactionHistory } from './Transactions/Transactions';
import transactions from './Transactions/dataTransactions.json'

export const App = () => {
  return (
    <div >
      <Profile
        username={userProfile.username}
        tag={userProfile.tag}
        location={userProfile.location}
        avatar={userProfile.avatar}
        stats={userProfile.stats}
      />

      <Statistics
        title="Upload stats"
        stats={userStatistics}
      />

      <Friends
        friends={friends}
      />

      <TransactionHistory
        transactions={transactions} />;
    </div>

  );
};


