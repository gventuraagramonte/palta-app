import React, { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";

import Layout from "components/Layout/Layout";
import ProductSummary from "components/ProductSummary/ProductSummary";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://platzi-avo.vercel.app/api/avo`);
  const { data }: TAPIAvoResponse = await response.json();

  const paths = data.map(({ id }) => ({ params: { id } }));

  return {
    // Statically generate all paths
    paths,
    // Display 404 for everything else
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://platzi-avo.vercel.app/api/avo/${params?.id}`
  );
  const product = await response.json();
  console.log(product);

  return { props: { product } };
};

const ProductItem = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  );
};

export default ProductItem;