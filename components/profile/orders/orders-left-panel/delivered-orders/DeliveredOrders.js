import styles from "./DeliveredOrders.module.css";

function DeliveredOrders(props) {
  const active = props.active;

  return (
    <div
      style={active ? undefined : { display: "none" }}
      className={styles.delivered_orders_container}
    >
      <div>
        <p>هیچ کالای تحویلی وجود ندارد!</p>
      </div>
    </div>
  );
}

export default DeliveredOrders;
