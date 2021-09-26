import "./App.css";
import user from "./user.json";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import statisticalData from "./statistical-data.json";
import FriendList from "./components/Friendlist/FriendList";
import friend from "./friends.json";
import item from "./transactions.json";
import "normalize.css";
import TransactionHistory from "./components/Transactions/TransactionHistory";
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
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friend} />
      <TransactionHistory items={item} />
    </div>
  );
}

export default App;
