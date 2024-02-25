import PropTypes from 'prop-types';
import FriendListItem from 'components/friendListItem/FriendListItem';
import css from '../friendList/FriendList.module.css';
export default function FriendList(_a) {
    var friends = _a.friends;
    return (React.createElement("ul", { className: css.friendList }, friends.map(function (_a) {
        var id = _a.id, avatar = _a.avatar, name = _a.name, isOnline = _a.isOnline;
        return (React.createElement(FriendListItem, { key: id, avatar: avatar, name: name, isOnline: isOnline }));
    })));
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape(PropTypes.node.isRequired)),
};
