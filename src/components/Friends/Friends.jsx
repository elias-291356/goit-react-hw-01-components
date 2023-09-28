import styles from './friends.module.css'

const setBackgroundColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor;
};

export const Friends = ({ friends }) => {
  return (
    <ul className={` list card    ${styles.friendList} `} >
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={`item card-title ${styles.itemFriend}`} key={id} style={{ backgroundColor: setBackgroundColor() }}>
          <span className="status">{isOnline}</span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name  badge bg-secondary">{name}</p>
        </li>
      ))
      }
    </ul >
  );
};


