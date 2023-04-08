import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
	return (
		<div className={css.friends}>
			<ul className={css.friendlist}>
				{friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
			</ul>
		</div>
	)
};

FriendList.propTypes = {
	friends: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,
		isOnline: PropTypes.bool.isRequired,
	}).isRequired),
};

FriendList.defaultProps = {
	avatar: 'https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg',
	name: 'User name',
	isOnline: false,
	id: '',
};

export default FriendList;