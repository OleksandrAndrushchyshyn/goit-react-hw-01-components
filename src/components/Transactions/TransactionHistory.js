import PropTypes from "prop-types";
import Transaction from "./Transaction";
import style from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={style.transaction}>
      <thead className={style.transaction__history}>
        <tr>
          <td>Type</td>
          <td>Amount</td>
          <td>Currency</td>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
