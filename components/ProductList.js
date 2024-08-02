"use client";

import useStore from "@/store/useStore";
import { useEffect } from "react";
import Link from "next/link";
const ProductList = () => {
  const products = useStore((state) => state.products);
  const fetchProducts = useStore((state) => state.fetchProducts);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-gray-600 font-semibold text-4xl m-5">
        Product Catalog
      </h1>
      <ul className="text-black text-xl flex flex-col justify-center items-center ">
        {products.map((product) => (
          <li key={product.id} className="m-5">
            {product.name} -{" "}
            <Link
              href={`/product/${product.id}`}
              className="bg-black text-white p-2 rounded-lg hover:bg-white hover:text-black transition-all duration-200 "
            >
              {product.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

{
  /* <div>
<h1>{t("productList.title")}</h1>
<ul>
  {products.map((product) => (
    <li key={product.id}>
      {product.name} -{" "}
      <Link href={`/product/${product.id}`}>
        {t("productList.details")}
      </Link>
    </li>
  ))}
</ul>
</div> */
}
