import React from "react";
import TodoItem from "./TodoItem";
import styles from "./ItemList.module.css";

const ItemList = (props) => {
  return (
    <React.Fragment>
      <div className={styles.showItems}>
        {props.items.map((item, index) => (
          <TodoItem key={index} item={props.items[props.items.length -1 - index]} removeItem={props.removeItem} />
        ))}
      </div>
    </React.Fragment>
  );
};
export default ItemList;
