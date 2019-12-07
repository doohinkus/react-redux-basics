import React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm';

function Form({ formValues }){
  function handleSubmit(e){
    const { values } = formValues;
    e.preventDefault();
    console.log("values>>>>", values)
  }
  return (
    <ContactForm
       handleSubmit={handleSubmit}
    />
  );
}
function mapStateToProps(state){
  const { contactForm } = state.form;
  return {
    formValues: contactForm
  }
}

export default connect(mapStateToProps)(Form);