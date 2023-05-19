import CommentsLeftPanel from "./comments-left-panel/CommentsLeftPanel";
import CommentsRightPanel from "./comments-right-panel/CommentsRightPanel";

import styles from "./CommentsComponent.module.css";

function CommentsComponent(props) {
  return (
    <div className={styles.comments_container}>
      <CommentsRightPanel
        userName={props.userName}
        userMobile={props.userMobile}
      />
      <CommentsLeftPanel
        userComments={props.userComments}
        userMobile={props.userMobile}
      />
    </div>
  );
}

export default CommentsComponent;
