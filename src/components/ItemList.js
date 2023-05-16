import React from "react";
import TodoItem from "./TodoItem";

const ItemList = (props) => {
  return (
    <React.Fragment>
      <div>
        {props.items.map((item,index) => (
          <TodoItem
            key={index}
            item={item}
            removeItem={props.removeItem}
          />
        ))}
      </div>
    </React.Fragment>
  );
};
export default ItemList;
