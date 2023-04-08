import Profile from "./Profile/Profile";
import user from '../data/user.json';
import Statistics from './Statistics/Statistics';
import statisticData from '../data/statistic-data.json';
import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from '../data/transactions.json';


function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={statisticData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
