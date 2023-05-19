import styles from "./ReturnedOrders.module.css";

function ReturnedOrders(props) {
  const active = props.active;

  return (
    <div
      style={active ? undefined : { display: "none" }}
      className={styles.returned_orders_container}
    >
      <div>
        <p>هیچ کالای مرجوعی وجود ندارد!</p>
      </div>
    </div>
  );
}

export default ReturnedOrders;
