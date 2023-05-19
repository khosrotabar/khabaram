import AddressesLeftPanelUp from "./AddressesLeftPanelUp";

import styles from "./AddressesLeftPanel.module.css";
import AddressesLeftPanelDown from "./AddressesLeftPanelDown";

function AddressesLeftPanel(props) {
  return (
    <div className={styles.addresses_left_panel_container}>
      <AddressesLeftPanelUp />
      <AddressesLeftPanelDown
        mobileNumber={props.mobileNumber}
        name={props.name}
      />
    </div>
  );
}

export default AddressesLeftPanel;
