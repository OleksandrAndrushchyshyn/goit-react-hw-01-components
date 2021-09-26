import PropTypes from "prop-types";
import style from "./Profile.module.css";
export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="Аватар пользователя" className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.stats__item}>
          <span className={style.label}>Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={style.stats__item}>
          <span className={style.label}>Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={style.stats__item}>
          <span className={style.label}>Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
