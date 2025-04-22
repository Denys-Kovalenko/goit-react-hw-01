import css from "./FriendList.module.css";
import { clsx } from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.card}>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <h6 className={clsx(css.status, isOnline ? css.green : css.red)}>
        {isOnline ? "Online" : "Offline"}
      </h6>
    </div>
  );
};

export default FriendListItem;
