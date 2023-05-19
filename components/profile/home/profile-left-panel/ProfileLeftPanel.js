import styles from "./ProfileLeftPanel.module.css";
import ProfileLeftPanelDown from "./ProfileLeftPanelDown";
import ProfileLeftPanelUp from "./ProfileLeftPanelUp/ProfileLeftPanelUp";

function ProfileLeftPanel(props) {
  return (
    <div className={styles.profile_left_panel_container}>
      <ProfileLeftPanelUp purchases={props.purchases} />
      <ProfileLeftPanelDown />
    </div>
  );
}

export default ProfileLeftPanel;
