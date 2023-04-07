import css from './FriendList.module.css';
import PropTypes from 'prop-types';

function friendsOnline(status) {
	if (status) {
		return 'green';
	} else {
		return 'red';
	}
};

const FriendList = ({ friends }) => {
	return (
		<div className={css.friends}>
			<ul className={css.friendlist}>
				{friends.map(friend => (
					<li className={css.item} key={friend.id}>
						<span className={css.status} style={{ color: friendsOnline(friend.isOnline) }}>
							{' '}
							●
						</span>
						<img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
						<p className={css.name}>{friend.name}</p>
					</li>
				))}
			</ul>
		</div>
	)
};

FriendList.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	isOnline: PropTypes.bool,
	id: PropTypes.string.isRequired,
};

FriendList.defaultProps = {
	avatar: 'https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg',
	name: 'User name',
	isOnline: false,
	id: '',
};

export default FriendList;