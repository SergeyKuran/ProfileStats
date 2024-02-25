import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionsHistory/transactionsHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import React from 'react';
var profile;
export default function App() {
    return (React.createElement("div", null,
        React.createElement(Profile, { username: user.username, tag: user.tag, location: user.location, avatar: user.avatar, stats: user.stats }),
        React.createElement(Statistics, { title: "Upload stats", stats: data }),
        React.createElement(FriendList, { friends: friends }),
        React.createElement(TransactionHistory, { items: transactions })));
}
