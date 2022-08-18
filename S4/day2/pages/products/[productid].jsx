import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

export default function ProductDetails() {
  const [data, setData] = useState({});
  const { productid } = useRouter().query;

  useEffect(() => {
    fetch(`${url}/${productid}`)
      .then((x) => x.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [productid]);

  return (
    <div>
      User details of id: {productid}
      <div>Name: {data.name}</div>
      <div>Email: {data.email}</div>
    </div>
  );
}
