import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import ProfileTestContext from "../../../context/ProfileTestContext";

import FollowBtn from "../../../components/button/FollowBtn";
import UserInfoBox from "../../../components/user/UserInfoBox";

function User({
  size,
  accountname,
  username,
  image,
  intro,
  followings,
  followers,
  isfollow,
}) {
  const { ProfileTest } = useContext(ProfileTestContext);
  const { myAccountname } = useContext(UserContext);

  const [user, setUser] = useState({
    accountname: accountname,
    username: username,
    image: image,
    intro: intro,
    followings: followings,
    followers: followers,
    isfollow: isfollow,
  });

  const img = ProfileTest(user.image);

  return (
    <>
      <li className="wrapper-item-follow">
        <Link to={"/" + accountname} className="wrapper-follow-info">
          <UserInfoBox
            type="follow"
            name={user.username}
            subtext={user.intro}
            img={img}
          />
        </Link>
        {accountname === myAccountname ? null : (
          <FollowBtn
            text={user.isfollow ? "팔로잉" : "팔로우"}
            size={size}
            user={user}
            setUser={setUser}
          />
        )}
      </li>
    </>
  );
}

export default User;
