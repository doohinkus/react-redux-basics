import React from 'react';
import { Field, reduxForm } from 'redux-form';

function ContactForm({ handleSubmit, pristine, reset, submitting }){
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <Field
          component="input"
          name="name"
          type="text"
          placeholder="Enter name" 
        />
      </div>
    </form>
  );
}

export default reduxForm({
    form: 'contactForm'
  })(ContactForm);