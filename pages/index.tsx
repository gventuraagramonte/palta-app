import React, { useEffect, useState } from "react";
import Layout from "components/Layout/Layout";
import ProductList from "components/ProductList/ProductList";
import KawaiiHeader from "components/KawaiiHeader/KawaiiHeader";

const Home = () => {
  const [productList, setProductList] = useState<any[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data }) => {
        setProductList(data);
      });
  }, []);

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default Home;
