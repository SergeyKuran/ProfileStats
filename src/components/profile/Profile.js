import PropTypes from 'prop-types';
import css from '../profile/Profile.module.css';
export default function Profile(_a) {
    var username = _a.username, tag = _a.tag, location = _a.location, _b = _a.avatar, avatar = _b === void 0 ? 'No found' : _b, _c = _a.stats, followers = _c.followers, views = _c.views, likes = _c.likes;
    return (React.createElement("div", { className: css.profile },
        React.createElement("div", { className: css.description },
            React.createElement("img", { src: avatar, alt: tag, className: css.avatar, width: "100", height: "100" }),
            React.createElement("p", { className: "name" }, username),
            React.createElement("p", { className: "tag" }, tag),
            React.createElement("p", { className: "location" }, location)),
        React.createElement("ul", { className: css.stats },
            React.createElement("li", null,
                React.createElement("span", { className: "label" }, "Followers:"),
                React.createElement("span", { className: "quantity" }, followers)),
            React.createElement("li", null,
                React.createElement("span", { className: "label" }, "Views:"),
                React.createElement("span", { className: "quantity" }, views)),
            React.createElement("li", null,
                React.createElement("span", { className: "label" }, "Likes:"),
                React.createElement("span", { className: "quantity" }, likes)))));
}
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};
