"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import useStore from "@/store/useStore";
const ProductDetail = ({ productId }) => {
  const { t } = useTranslation();
  const product = useStore((state) => state.getProductById(productId));
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Link
        href="/"
        className="text-4xl text-white hover:text-black hover:bg-white font-semibold bg-black p-3 rounded-lg transition-all duration-200"
      >
        Back
      </Link>
      <h2 className="text-2xl">{product.name}</h2>
      <p className="text-xl">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
