import React from "react";

const data = [
  { id: 1, name: "p1" },
  { id: 2, name: "p2" },
  { id: 3, name: "p3" },
  { id: 4, name: "p4" },
];

const Products = () => {
  return (
    <div>
      <div>
        {data.map((el) => {
          return <p>{el.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Products;
