import styles from './profile.module.css'


export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes }, }) => {
  return (
    <div className="profile  card mb-3" >
      <div className="description row g-0">
        <div className='col-md-4'>
          <img
            src={avatar}
            alt="User avatar"
            className={styles.avatar}
          />
          <p className="name card-text ">{username}</p>
          <p className="tag card-text">{tag}</p>
          <p className="location card-text">{location}</p>
        </div>
      </div>

      <ul className="stats list list-group list-group-flush">
        <li className='list-group-item' >
          <span className="label">Followers </span>
          <span className="quantity badge rounded-pill text-bg-info">{followers}</span>
        </li>
        <li className='list-group-item'>
          <span className="label">Views </span>
          <span className="quantity badge rounded-pill text-bg-info">{views}</span>
        </li>
        <li className='list-group-item'>
          <span className="label">Likes </span>
          <span className="quantity badge rounded-pill text-bg-info">{likes}</span>
        </li>
      </ul>
    </div >
  )
}

