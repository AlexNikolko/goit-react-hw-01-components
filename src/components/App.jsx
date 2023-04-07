import Profile from "./Profile/Profile";
import user from "./Profile/user.json";
import Statistics from './Statistics/Statistics';
import statisticData from './Statistics/statistic-data.json';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from './TransactionHistory/transactions.json';


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
