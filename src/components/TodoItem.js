import React from "react";
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const onClickHandler = () => {
    props.removeItem(props.item);
  };
  return (
    <React.Fragment>
      <div className={styles.card}>
        <div className={styles.cardRow}>
          <div >
            <p>{props.item[1]}</p>
            <h3>{props.item[0]}</h3>
            <button className={styles.del} onClick={onClickHandler}>Delete</button>
            <hr></hr>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
