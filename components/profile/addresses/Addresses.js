import { useEffect } from "react";
import { useDispatch } from "react-redux";

import AddressesLeftPanel from "./addresses-left-panel/AddressesLeftPanel";
import AddressesRightPanel from "./addresses-right-panel/AddressesRightPanel";
import { storeAddress } from "../../../redux/addresses";

import styles from "./Addresses.module.css";

function AddressesComponent(props) {
  const dispatch = useDispatch();
  const { mobileNumber, address, name } = props.user[0];

  useEffect(() => {
    dispatch(storeAddress(address));
  }, []);

  return (
    <div className={styles.addresses_container}>
      <AddressesRightPanel mobileNumber={mobileNumber} name={name} />
      <AddressesLeftPanel mobileNumber={mobileNumber} name={name} />
    </div>
  );
}

export default AddressesComponent;
