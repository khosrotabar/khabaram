import styles from "./SettingsRightPanel.module.css";
import SettingsRightPanelDown from "./SettingsRightPanelDown";
import SettingsRightPanelUp from "./SettingsRightPanelUp";

function SettingsRightPanel(props) {
  return (
    <div className={styles.settings_right_panel_container}>
      <SettingsRightPanelUp
        userMobile={props.userMobile}
        userName={props.userName}
      />
      <SettingsRightPanelDown />
    </div>
  );
}

export default SettingsRightPanel;
