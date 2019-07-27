import React, { Component } from 'react';
import { Form, Container, Input, Select, TextArea, Step, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

var steps = [
  {
    key: 'details',
    icon: 'address card',
    active: true,
    title: 'Details',
    description: 'Enter information about your business'
  },
  {
    key: 'inventory',
    icon: 'clipboard',
    active: false,
    title: 'Inventory Management',
    description: 'Connect your store inventory'
  },
  {
    key: 'payment',
    icon: 'payment',
    active: false,
    title: 'Payment',
    description: 'Complete your registration!'
  }
];

class BusinessRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: steps
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    let idx = this.state.steps.filter((step) => {
      return step['active'] == true
    });
    let newState = Object.assign({}, this.state);

    switch (idx[0].key) {
      case 'details':
        newState.steps[0]['active'] = false;
        newState.steps[1]['active'] = true;
        newState.steps[2]['active'] = false;
      break;
      case 'inventory':
        newState.steps[0]['active'] = false;
        newState.steps[1]['active'] = false;
        newState.steps[2]['active'] = true;
      break;
      case 'payment':
        newState.steps[0]['active'] = false;
        newState.steps[1]['active'] = false;
        newState.steps[2]['active'] = false;
      break;
    }
    this.setState(newState);
    console.log(idx[0].key);
  }

  render() {
    return (
      <div>
      <Container textAlign='center'>
      <h1 class='text2-black'>Register Your Business</h1>

        <Step.Group items={this.state.steps} />
        {steps[0].active ?
        <div>
        <Form success>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Business Name' placeholder='ex. ABC' />
            <Form.Field control={Input} label='ABN' placeholder='ex. 1234 5678 1234 5678' />
          </Form.Group>
          <Form.Field control={TextArea} label='Sustainability Statement' placeholder='Tell us more about your efforts towards a better Earth...'/>
          <h4>Contact Details</h4>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Phone' placeholder='ex. +61 4 1234 5678' />
            <Form.Field control={Input} label='Email' placeholder='ex. your.name@email.com' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Address' placeholder='ex. 123 Jane St' />
            <Form.Field control={Input} label='Suburb' placeholder='ex. Sydney' />
            <Form.Field control={Input} label='Postcode' placeholder='ex. 2000' />
          </Form.Group>
          <Form.Button onClick={this.handleClick}>Submit</Form.Button>
        </Form>
        </div>
        : null }

        {steps[1].active ? <div><BusinessRegistrationInventory /><Button onClick={this.handleClick}>Next</Button></div> : null}
        {steps[2].active ? <div><BusinessRegistrationPayment /><Link to='/my-dashboard'><Button>Complete</Button></Link></div> : null}
      </Container>
      </div>
    );
  }
}

const BusinessRegistrationInventory = () => {
  return <div></div>;
}

const BusinessRegistrationPayment = () => {
  return <div></div>;

}

export default BusinessRegistration;
