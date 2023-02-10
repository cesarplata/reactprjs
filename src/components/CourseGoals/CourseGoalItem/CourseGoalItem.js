import React, { useState } from 'react';
import Message from '../../Messages/Message';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  const [deleteText, setDeleteText] = useState(false);

  const deleteHandler = () => {
    setDeleteText(true);
    console.info(props.children);
    navigator.clipboard.writeText(props.children);
    setInterval(function(){props.onDelete(props.id);},3000);
  };

  return (
    <section>
      <li className="goal-item" onClick={deleteHandler}>
        {props.children}
      </li>
      {deleteText && (<Message >copied</Message>)}
    </section>
  );
};

export default CourseGoalItem;
