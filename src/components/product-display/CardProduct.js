import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardProduct = ({
  product = { name: "", description: "", price: "0.00" },
  addToCart,
  inCart
}) => {
  const { name, description, price } = product;

  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">$ {price}</CardSubtitle>
          <CardText>{ description }</CardText>
          { !inCart && <Button onClick={addToCart}>Add to Cart</Button> }
        </CardBody>
      </Card>
    </div>
  );
};

export default CardProduct;