import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Myaccordian = (props) => {
  const { title, info } = props;
  const [show, setShow] = useState(false);
  return (
    <>
      <div onClick={() => setShow(!show)} className="acc_title">
        <h1>{title}</h1>
        <h1>{show ? <FaMinus /> : <FaPlus />}</h1>
      </div>

      {show && <h4>{info}</h4>}
    </>
  );
};

export default Myaccordian;
