import styles from "./CommentsRightPanel.module.css";
import CommentsRightPanelDown from "./CommentsRightPanelDown";
import CommentsRightPanelUp from "./CommentsRightPanelUp";

function CommentsRightPanel(props) {
  return (
    <div className={styles.comments_right_panel_container}>
      <CommentsRightPanelUp
        userMobile={props.userMobile}
        userName={props.userName}
      />
      <CommentsRightPanelDown />
    </div>
  );
}

export default CommentsRightPanel;
