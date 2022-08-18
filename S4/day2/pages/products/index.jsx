import React from "react";

const data = [
  { id: 1, name: "laptop" },
  { id: 2, name: "mobile" },
  { id: 3, name: "ps4" },
  { id: 4, name: "ipod" },
];

export default Products = () => {
  return (
    <div>
      <div>
        {data.map((el) => {
          return (
            <div>
              <Link href={`/products/${el.id}`}>{el.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
