import React from 'react'
import  {Card,CardText,CardBody,CardTitle,Button} from 'reactstrap';



  function Products(props) {
    const {title,Description,Price,category,image} = props;
    return (
        <main>        
         <div  className='product'>
          <Card style={{width: '18rem',}}>
            <img alt="Sample" src={image}  style={{height: 220}} width="100%"/>
              <CardBody>
                  <CardTitle tag="h5" className='product__title'>Title:{title}</CardTitle>
                  <CardText className='product__desc'>Description:{Description}</CardText>
                  <CardText className='product__price'>Price:{Price}</CardText>
                  <CardText className='product__details'>Category:{category}</CardText>
                <Button color="primary" className='btn'> Click Me</Button>
              </CardBody>
          </Card>
         </div>
        </main>
    )
  }
  
  export default Products;