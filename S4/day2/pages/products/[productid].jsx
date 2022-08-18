// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const url = "https://jsonplaceholder.typicode.com/users";

// export default function ProductDetails() {
//   const [data, setData] = useState({});
//   const { productid } = useRouter().query;

//   useEffect(() => {
//     fetch(`${url}/${productid}`)
//       .then((x) => x.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, [productid]);

//   return (
//     <div>
//       User details of id: {productid}
//       <div>Name: {data.name}</div>
//       <div>Email: {data.email}</div>
//     </div>
//   );
// }

import { useRouter } from "next/router";

const url = "https://jsonplaceholder.typicode.com/users";

export default function ProductDetails({ userDetails }) {
  const { productid } = useRouter().query;

  return (
    <div>
      User details of id: {productid}
      <div>Name: {userDetails.name}</div>
      <div>Email: {userDetails.email}</div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { productid } = context.params;

  const data = await fetch(`${url}/${productid}`).then((x) => x.json());

  return {
    props: {
      userDetails: data,
    },
  };
};
