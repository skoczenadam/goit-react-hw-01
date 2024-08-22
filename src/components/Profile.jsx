/* eslint-disable react/prop-types */
import css from "./Profile.module.css";

export const Profile = ({
  name,
  tag,
  location,
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats,
}) => {
  return (
    <div className={css.profile}>
      <div>
        <img src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.lists}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
