import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

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
							<td className={css.tableData}>{item.type}</td>
							<td className={css.tableData}>{item.amount}</td>
							<td className={css.tableData}>{item.currency}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
};

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

TransactionHistory.defaultProps = {
	id: '',
	type: 'Type',
	amount: '0',
	currency: 'Currency',
};

export default TransactionHistory;