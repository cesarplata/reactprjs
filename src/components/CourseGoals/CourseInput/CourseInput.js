import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from './CourseInput.module.css'


const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (enteredValue.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue.split(/[aeiouáéíóú]/).join('i'));
    setEnteredValue("");
    event.target.reset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>ninini changer</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Change it!</Button>
    </form>
  );
};

export default CourseInput;
