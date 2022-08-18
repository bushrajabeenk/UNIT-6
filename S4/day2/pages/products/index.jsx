import Link from "next/link";
import React from "react";

const data = [
  { id: 1, name: "laptop" },
  { id: 2, name: "mobile" },
  { id: 3, name: "ps4" },
  { id: 4, name: "ipod" },
];

export default function Products() {
  return (
    <div>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <Link href={`/products/${el.id}`}>{el.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
