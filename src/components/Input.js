import React, { useState, useEffect } from "react";
import styles from "./Input.module.css";
import ItemList from "./ItemList";

const Input = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const s = JSON.parse(localStorage.getItem("items"));
    if (s) {
      setList((prevState) => [...s]);
    }
  }, []);

  const onSumbitHandler = () => {
    if (list.includes(task.toUpperCase())) {
      alert("Already added");
    } else if (task.trim().length === 0) {
      alert("Empty Task");
    } else {
      setList((prevState) => [...prevState, task.toUpperCase()]);
    }
    setTask("");
    console.log(list);
    localStorage.setItem("items", JSON.stringify(list));
  };

  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      onSumbitHandler();
    }
  };

  const removeItem = (todo) => {
    setList((prevState) => prevState.filter((item) => item !== todo));
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          value={task}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          required
        />
        <button className={styles.submit} onClick={onSumbitHandler}>
          Add
        </button>
      </div>
      <div className={styles.showItems}>
        <ItemList items={list} removeItem={removeItem} />
      </div>
    </React.Fragment>
  );
};

export default Input;
