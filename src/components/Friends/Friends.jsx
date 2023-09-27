import styles from './friends.module.css'




export const Friends = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className="item" key={id}>
          <span className="status">{isOnline}</span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};







// export const Friends = ({ avatar, name, isOnline,id }) => {
//   return (
//     <ul className="friend-list">

//       {friends.map(friend => (
//         <li className="item" key={id}>
//           <span className="status">{isOnline}</span>
//           <img className="avatar" src={avatar} alt="User avatar" width="48" />
//           <p className="name">{name}</p>
//         </li>
// </ul>
//   ),

// }