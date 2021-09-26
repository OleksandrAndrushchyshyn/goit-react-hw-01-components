import PropTypes from "prop-types";
import FriendlistItem from "./FriendListItem";
import style from "./FriendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={style.friend__list}>
      {friends.map((friend) => (
        <FriendlistItem
          key={friend.id}
          avatar={friend.avatar}
          friendName={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
