import React from "react";

const data = [
  { id: 1, name: "p1" },
  { id: 2, name: "p2" },
  { id: 3, name: "p3" },
  { id: 4, name: "p4" },
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
