import OrdersLeftPanel from "./orders-left-panel/OrdersLeftPanel";
import OrdersRightPanel from "./orders-right-panel/OrdersRightPanel";

import styles from "./OrdersComponent.module.css";

function OrdersComponent(props) {
  return (
    <div className={styles.orders_container}>
      <OrdersRightPanel
        userName={props.user.name}
        userMobile={props.user.mobileNumber}
      />
      <OrdersLeftPanel purchases={props.user.purchases} />
    </div>
  );
}

export default OrdersComponent;
