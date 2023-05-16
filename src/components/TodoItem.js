import React from "react";
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const onClickHandler = () => {
    props.removeItem(props.item);
  };
  return (
    <React.Fragment>
      <div className={styles.fix}>
        <h3 >{props.item}</h3>
        <button className={styles.del} onClick={onClickHandler}>Delete</button>
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
