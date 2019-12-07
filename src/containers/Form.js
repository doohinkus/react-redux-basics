import React from 'react';
import { connect }  from 'react-redux';
import { formValueSelector } from 'redux-form';
import ContactForm from '../components/ContactForm';

function Form({ name }){
  function handleSubmit(e){
    e.preventDefault();
    console.log("NAME>>>", name)
  }
  return (
    <React.Fragment>
      <ContactForm
        handleSubmit={handleSubmit}
      />
     {name}
    </React.Fragment>
  );
}
const selector = formValueSelector('contactForm');

function mapStateToProps(state){
  return {
    name: selector(state, "name")
  }
}

export default connect(mapStateToProps)(Form);