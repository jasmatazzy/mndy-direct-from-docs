import React from "react";
import { Button } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";

const ActivityLog = () => {
  const boardIDInput = () => {
    <form>
      <input type="text"></input>
    </form>;
  };

  const testClick = () => {
    <div>
      <h1>booyahkashah</h1>
    </div>;
  };
  const itemIDInput = () => {
    <div>console.log('i ran')</div>;
  };
  return (
    <div>
      <form>
        <Button onClick={boardIDInput}>for a board</Button>
        <Button onClick={testClick}>for an item</Button>
      </form>
    </div>
  );
};

export default ActivityLog;
