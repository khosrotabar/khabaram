import ProfileRightPanelDown from "./ProfileRightPanelDown";
import ProfileRightPanelUp from "./ProfileRightPanelUp";

import styles from "./ProfileRightPanel.module.css";

function ProfileRightPanel(props) {
  return (
    <div className={styles.profile_right_panel_container}>
      <ProfileRightPanelUp
        mobileNumber={props.mobileNumber}
        name={props.name}
      />
      <ProfileRightPanelDown />
    </div>
  );
}

export default ProfileRightPanel;
