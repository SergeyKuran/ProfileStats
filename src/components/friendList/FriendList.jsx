import PropTypes from 'prop-types';
import FriendListItem from 'components/friendListItem/FriendListItem';

import css from '../friendList/FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape(PropTypes.node.isRequired)),
};
