import React from 'react'
import {Card,CardTitle,CardBody,CardText,Button} from 'reactstrap'

const CardGrp = () => {
  return (
    <div>
           <div className='card-grp'>

        <Card style={{ width: '18rem'}}>
            <img
                alt="Sample"
                src="https://picsum.photos/300/200"
            />
            <CardBody>
                <CardTitle tag="h5"> Waterfall Tour</CardTitle>
                <hr/>
                <CardText>Mon, Fri </CardText>
                <CardText>3 hr</CardText>
                <CardText>$65</CardText>            
                <Button>Book Now</Button>
            </CardBody>
        </Card>

        {/*  */}
        <Card style={{ width: '18rem'}}>
            <img
                alt="Sample"
                src="https://picsum.photos/300/200"
            />
            <CardBody>
                <CardTitle tag="h5"> Waterfall Tour</CardTitle>
                <hr/>
                <CardText>Mon, Fri </CardText>
                <CardText>3 hr</CardText>
                <CardText>$65</CardText>            
                <Button>Book Now</Button>
            </CardBody>
        </Card>
    {/*  */}
    <Card style={{ width: '18rem'}}>
            <img
                alt="Sample"
                src="https://picsum.photos/300/200"
            />
            <CardBody>
                <CardTitle tag="h5"> Waterfall Tour</CardTitle>
                <hr/>
                <CardText>Mon, Fri </CardText>
                <CardText>3 hr</CardText>
                <CardText>$65</CardText>            
                <Button>Book Now</Button>
            </CardBody>
        </Card>
</div>
    </div>
  )
}

export default CardGrp