import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className='product'>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} className='card-img-top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <Card.Text>
          <strong>$</strong>
          {product.price}
        </Card.Text>
        <Button>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
