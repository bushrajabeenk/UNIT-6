import { useRouter } from "next/router";

export default function ProductDetails() {
  const [productid] = useRouter().query;
  return <h1>Product details of id: {productid}</h1>;
}
