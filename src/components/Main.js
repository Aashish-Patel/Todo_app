import React, { useState } from "react";
import Li from "./Li";
import Error from "./Error";
const Main = (props) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [itemList, setitemList] = useState([]);
  const [error, setError] = useState();

  const changeHandler = (e) => {
    setEnteredInput(e.target.value);
  };
  const clickHandler = () => {
    if (enteredInput.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Field can not be left blank",
      });
      return;
    }
    setitemList((oldData) => [...oldData, enteredInput]);
    setEnteredInput("");
  };
  const deleteItem = (id) => {
    setitemList((oldData) => {
      return oldData.filter((element, index) => {
        return index !== id;
      });
    });
  };
  const errorHandler = () => {
    setError();
  };

  return (
    <>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          clear={errorHandler}
        />
      )}
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <input
            type="text"
            placeholder="Add a Item"
            value={enteredInput}
            onChange={changeHandler}
          />
          <button onClick={clickHandler}>+</button>
          <ol>
            {itemList.map((list, index) => {
              return (
                <Li key={index} id={index} props={list} onSelect={deleteItem} />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Main;
