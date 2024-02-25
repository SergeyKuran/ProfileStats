import PropTypes from 'prop-types';
import css from '../transactionsHistory/transactionsHistory.module.css';
export default function TransactionHistory(_a) {
    var items = _a.items;
    return (React.createElement("table", { className: css.transactionHistory },
        React.createElement("thead", null,
            React.createElement("tr", null,
                React.createElement("th", null, "Type"),
                React.createElement("th", null, "Amount"),
                React.createElement("th", null, "Currency"))),
        React.createElement("tbody", null, items.map(function (_a) {
            var id = _a.id, type = _a.type, amount = _a.amount, currency = _a.currency;
            return (React.createElement("tr", { key: id },
                React.createElement("td", null, type),
                React.createElement("td", null, amount),
                React.createElement("td", null, currency)));
        }))));
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
};
