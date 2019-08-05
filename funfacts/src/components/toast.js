import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ToastBox = (props) => {
  return (
    <div>
      <div className="p-3 my-10 rounded">
        <Toast>
          <ToastHeader>
            Selected:
          </ToastHeader>
          <ToastBody style={{color: "black"}}>
            Hello
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};

export default ToastBox;