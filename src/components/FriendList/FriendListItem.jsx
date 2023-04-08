import css from './FriendList.module.css';
import PropTypes from 'prop-types';

function friendsOnline(status) {
	if (status) {
		return 'green';
	} else {
		return 'red';
	}
};

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={css.item}>
      <span className={css.status} style={{ color: friendsOnline(isOnline) }}>
				{' '}
				●
			</span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;