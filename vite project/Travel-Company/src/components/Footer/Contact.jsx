import React from 'react'
import {Form,Label,Input, FormGroup} from 'reactstrap';

const Contact = () => {
  return (
    <div className='contact'>
        <div className='m-5'>
            <h2 className='common-h2'>Ask Us Anything</h2>
            <p>500 Terry Francine Street San Francisco, CA 94158</p>
            <p> info@mysite.com | 123-456-7890</p>
            </div>
       <Form>
            <FormGroup>
                <Label>Name *</Label>
                <Input type='text' />
            </FormGroup>
            <FormGroup>
            <Label>Email *</Label>
            <Input type='email' />
            </FormGroup>

            <FormGroup>
            <Label>Type your message here...</Label>
            <Input type='text'/>
            </FormGroup>
            <button className='btn btn-dark common-btn'>submit</button>
       </Form>
    </div>
  )
}

export default Contact