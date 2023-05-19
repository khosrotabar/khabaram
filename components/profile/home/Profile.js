import ProfileLeftPanel from "./profile-left-panel/ProfileLeftPanel";
import ProfileRightPanel from "./profile-right-panel/ProfileRightPanel";

import styles from "./Profile.module.css";

function Profile(props) {
  const { mobileNumber, name, purchases } = props.user[0];
  return (
    <div className={styles.profile_container}>
      <ProfileRightPanel mobileNumber={mobileNumber} name={name} />
      <ProfileLeftPanel purchases={purchases} />
    </div>
  );
}

export default Profile;
