import PropTypes from 'prop-types';
import css from '../statistics/Statistics.module.css';
import getRandomHexColor from 'helpers/getRandomHexColor';
export default function Statistics(_a) {
    var title = _a.title, stats = _a.stats;
    return (React.createElement("section", { className: css.statistics },
        title && React.createElement("h2", { className: "title" }, "Upload stats"),
        React.createElement("ul", { className: css.statList }, stats.map(function (_a) {
            var id = _a.id, label = _a.label, percentage = _a.percentage;
            return (React.createElement("li", { key: id, className: css.item, style: {
                    backgroundColor: getRandomHexColor(),
                } },
                React.createElement("div", { className: css.blockSpan },
                    React.createElement("span", { className: css.label }, label),
                    React.createElement("span", { className: css.percentage },
                        percentage,
                        "%"))));
        }))));
}
Statistics.protoType = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired,
    })),
};
