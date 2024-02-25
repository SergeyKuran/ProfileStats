import PropTypes from 'prop-types';
import css from '../friendListItem/FriendListItem.module.css';
export default function FriendListItem(_a) {
    var avatar = _a.avatar, name = _a.name, _b = _a.isOnline, isOnline = _b === void 0 ? true : _b;
    return (React.createElement("li", { className: css.item },
        isOnline ? (React.createElement("span", { className: css.status, style: { backgroundColor: 'green' } }, isOnline)) : (React.createElement("span", { className: css.status, style: { backgroundColor: 'red' } }, isOnline)),
        React.createElement("img", { className: "avatar", src: avatar, alt: name, width: "48" }),
        React.createElement("p", { className: "name" }, name)));
}
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
