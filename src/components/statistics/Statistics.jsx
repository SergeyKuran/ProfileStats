import PropTypes from 'prop-types';
import css from '../statistics/Statistics.module.css';
import getRandomHexColor from 'helpers/getRandomHexColor';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className="title">Upload stats</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <div className={css.blockSpan}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.protoType = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ),
};
