import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

function upperFirstLetter(string) {
	let newString = string[0].toUpperCase() + string.slice(1);
	return newString;
};

const TransactionHistory = ({ items }) => {
	return (
		<div className={css.transTable}>
			<table className="transaction-history">
				<thead className={css.table}>
					<tr>
						<th>TYPE</th>
						<th>AMOUNT</th>
						<th>CURRENCY</th>
					</tr>
				</thead>
				<tbody className={css.tableBody}>
					{items.map(item => (
						<tr key={item.id}>
							<td className={css.tableData}>{upperFirstLetter(item.type)}</td>
							<td className={css.tableData}>{item.amount}</td>
							<td className={css.tableData}>{item.currency}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
};

TransactionHistory.propTypes = {
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
	amount: PropTypes.string.isRequired,
	currency: PropTypes.string,
};

TransactionHistory.defaultProps = {
	id: '',
	type: 'Type',
	amount: '0',
	currency: 'Currency',
};

export default TransactionHistory;