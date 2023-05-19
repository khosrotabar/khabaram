import ProfileLeftPanelUpLeft from "./ProfileLeftPanelUpLeft";
import ProfileLeftPanelUpRight from "./ProfileLeftPanelUpRight";

import styles from "./ProfileLeftPanelUp.module.css";

function ProfileLeftPanelUp(props) {
  const lastPurchases = [];
  const purchases = props.purchases;
  const purchasesLenght = purchases.length;

  if (purchases[purchasesLenght - 1]) {
    lastPurchases.push(purchases[purchasesLenght - 1]);
  }

  if (purchases[purchasesLenght - 2]) {
    lastPurchases.push(purchases[purchasesLenght - 2]);
  }

  return (
    <div className={styles.profile_left_panel_upside_container}>
      <ProfileLeftPanelUpRight lastPurchases={lastPurchases} />
      <ProfileLeftPanelUpLeft purchases={purchases} />
    </div>
  );
}

export default ProfileLeftPanelUp;
