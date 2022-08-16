import React, { useState } from "react";
import Select from "react-select";

const Project1 = (props) => {
  const [search, setSearch] = useState("");
  const [newdata, setnew] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const data = [{ value: 29, label: "Above 20" }];

  const change = (e) => {
    setSearch(e.target.value);
  };
  const search1 = () => {
    setnew(false);
  };
  return (
    <>
      <input type="text" value={search} onChange={change}></input>
      <button onClick={search1}>search</button>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={data}
      ></Select>
      <button onClick={search1}>search</button>

      {newdata ? (
        <>
          {props.Name.map((elem) => {
            return (
              <>
                <div>
                  {elem.name} {elem.age}
                </div>
                <div>
                  <img src={elem.image} className="image" />
                </div>
              </>
            );
          })}
        </>
      ) : (
        <>
          {props.Name.map((elem) => {
            if (search === elem.name) {
              return (
                <>
                  <div>
                    {elem.name} {elem.age}
                  </div>
                  <div>
                    <img src={elem.image} className="image" />
                  </div>
                </>
              );
            }
          })}
        </>
      )}
    </>
  );
};

export default Project1;
