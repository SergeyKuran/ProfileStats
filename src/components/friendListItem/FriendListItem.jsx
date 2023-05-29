import PropTypes from 'prop-types';
import css from '../friendListItem/FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline = true }) {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.status} style={{ backgroundColor: 'green' }}>
          {isOnline}
        </span>
      ) : (
        <span className={css.status} style={{ backgroundColor: 'red' }}>
          {isOnline}
        </span>
      )}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
