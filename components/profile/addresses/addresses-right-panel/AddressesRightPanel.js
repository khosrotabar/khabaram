import AddressesRightPanelDown from "./AddressesRightPanelDown";
import AddressesRightPanelUp from "./AddressesRightPanelUp";

import styles from "./AddressesRightPanel.module.css";

function AddressesRightPanel(props) {
  return (
    <div className={styles.addresses_right_panel_container}>
      <AddressesRightPanelUp
        mobileNumber={props.mobileNumber}
        name={props.name}
      />
      <AddressesRightPanelDown />
    </div>
  );
}

export default AddressesRightPanel;
