import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
 return (
  <Card className='my-3 p-3 rounded Card-Size'>
   <Link to={`/product/${product._id}`}>
    <Card.Img src={product.image} variant='top' />
   </Link>

   <Card.Body>
    <Link to={`/product/${product._id}`}>
     <Card.Text as='h5' className='text-danger'>
      {product.name}
     </Card.Text>
    </Link>

    <Card.Text as='h3' className='text-warning'>
     ${product.price}
    </Card.Text>
   </Card.Body>
  </Card>
 );
};

export default Product;
