import styles from "./OrdersRightPanel.module.css";
import OrdersRightPanelDown from "./OrdersRightPanelDown";
import OrdersRightPanelUp from "./OrdersRightPanelUp";

function OrdersRightPanel(props) {
  return (
    <div className={styles.orders_right_panel_container}>
      <OrdersRightPanelUp
        userMobile={props.userMobile}
        userName={props.userName}
      />
      <OrdersRightPanelDown />
    </div>
  );
}

export default OrdersRightPanel;
