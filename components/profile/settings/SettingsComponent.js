import SettingsLeftPanel from "./settings-left-panel/SettingsLeftPanel";
import SettingsRightPanel from "./settings-right-panel/SettingsRightPanel";

import styles from "./SettingsComponent.module.css";

function SettingsComponent(props) {
  return (
    <div className={styles.settings_container}>
      <SettingsRightPanel
        userName={props.user.name}
        userMobile={props.user.mobileNumber}
      />
      <SettingsLeftPanel user={props.user} />
    </div>
  );
}

export default SettingsComponent;
