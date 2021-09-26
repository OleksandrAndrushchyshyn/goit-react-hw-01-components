import PropTypes from "prop-types";
import style from "./FriendListItem.module.css";
export default function FriendlistItem({ avatar, friendName, isOnline }) {
  return (
    <li className={style.item}>
      <span
        className={
          isOnline
            ? style.status + " " + style.online
            : style.status + " " + style.offline
        }
      ></span>
      <img className={style.avatar} src={avatar} alt="" width="48" />
      <p className={style.name}>{friendName}</p>
    </li>
  );
}
FriendlistItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  friendName: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
