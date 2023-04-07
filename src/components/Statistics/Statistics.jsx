import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const color = item => {
	const colorArray = ['#E74C3C', '#8E44AD', '#3498DB', '#27AE60', '#F39C12'];
	return `${colorArray[Number(item.id.replace(/[^0-9]/g, '')) % 5]}`;
};

const Statistics = ({ title, stats }) => {
	return (
		<section className={css.statistics}>
			<h2 className={css.title}>{title}</h2>
			<ul className={css.statlist}>
				{stats.map(item => (
					<li key={item.id} className={css.item} style={{ backgroundColor: color(item) }}>
						<span className={css.label}>{item.label}</span>
						<span className={css.percentage}>{item.percentage}%</span>
					</li>
				))}
			</ul>
		</section>
	);
};

Statistics.propTypes = {
	title: PropTypes.string,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	percentage: PropTypes.node.isRequired,
};

Statistics.defaultProps = {
	title: '',
	id: '',
	label: 'format',
	percentage: '0',
};

export default Statistics;