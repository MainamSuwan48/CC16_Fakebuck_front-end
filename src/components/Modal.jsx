import React from "react";
import { Children } from "react";

function Modal({ title, children, onClose }) {
  return (
    <>
      <div className="fixed bg-white inset-0 opacity-70"></div>
      <div className="fixed inset-0">
        <div className="flex items-center justify-center min-h-full">
          <div className="bg-white shadow-[0_0_15px_rgb(0,0,0,0.2)] rounded-lg w-[400px]">
            <div className="border-b flex justify-between p-4">
              <div className="invisible">X</div>
              <div className="text-3xl font-semibold">{title}</div>
              <div onClick={onClose}>X</div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
