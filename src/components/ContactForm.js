import React from 'react';
import { Field, reduxForm } from 'redux-form';

function ContactForm({ handleSubmit, pristine, reset, submitting }){
  function phone (value){
    // only numbers
    return value.replace(/[^\d]/g, '');
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <Field
          component="input"
          name="name"
          type="text"
          placeholder="Enter name"
          normalize={phone}
        />
      </div>
    </form>
  );
}

export default reduxForm({
    form: 'contactForm'
  })(ContactForm);