import styles from './statistics.module.css'

const setBackgroundColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor;
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={`${styles.statlist}  `}>
        {stats.map(stat => (
          <li
            className={styles.item}
            key={stat.id}
            style={{ backgroundColor: setBackgroundColor() }}
          >
            <span className="label badge text-bg-warning" >{stat.label} </span>
            <span className="percentage badge text-bg-success">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section >
  );
};

