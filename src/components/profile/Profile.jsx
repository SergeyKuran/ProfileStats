import PropTypes from 'prop-types';
import css from '../profile/Profile.module.css';

export default function Profile({
  username,
  tag,
  location,
  avatar = 'No found',
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt={tag}
          className={css.avatar}
          width="100"
          height="100"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className="label">Followers:</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views:</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes:</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
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
