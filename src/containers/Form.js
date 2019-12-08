import React from 'react';
import { connect }  from 'react-redux';
import { formValueSelector } from 'redux-form';
import ContactForm from '../components/ContactForm';
import FieldErrors from '../components/FieldErrors';


function Form({ values }){
  function handleSubmit(e){
    e.preventDefault();
    console.log( values )
  }
  return (
    <React.Fragment>
      <FieldErrors />
      <ContactForm
        handleSubmit={handleSubmit}
      />
     {values.name}
    </React.Fragment>
  );
}
// select form
const selector = formValueSelector('contactForm');

function mapStateToProps(state){
// map to props
  return {
    values: selector(state, "name", "valid"),
  }
}
// connect state to component
export default connect(mapStateToProps)(Form);