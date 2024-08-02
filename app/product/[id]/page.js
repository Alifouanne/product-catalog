"use client";
import ProductDetail from "@/components/ProductDetail";
const ProductPage = ({ params }) => {
  return (
    <>
      <ProductDetail productId={params.id} />
    </>
  );
};

export default ProductPage;
