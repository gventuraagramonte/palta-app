import React from "react";
import Link from "next/link";
import { Card } from "semantic-ui-react";

type ProductListProps = {
  products: any[];
};

const mapProductsToCards = (products: any[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
      <Card
        as="a"
        color="green"
        header={name}
        image={image}
        meta={<Card.Meta style={{ color: "dimgray" }}>{price}</Card.Meta>}
      />
    </Link>
  ));

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Card.Group itemsPerRow={2} stackable>
      {mapProductsToCards(products)}
    </Card.Group>
  );
};

export default ProductList;
