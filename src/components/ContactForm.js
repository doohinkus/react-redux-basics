import React from 'react';
import { Field, reduxForm } from 'redux-form';

// validations 
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const required = value => value  ? undefined : 'Required';

// field level validation component
function renderField({ input, label, type, meta: { touched, error, warning } }){
  return (
    <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
  }
  function renderPageErrors({ meta: { touched, error, warning }}){
    return (
      <div>
        {touched && (error && <h2>Errors</h2>)}
      </div>
    );
  }
  // use form selector for top level validations
  
 
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
          component={renderField}
          name="name"
          type="text"
          placeholder="Enter name"
          // normalize={phone}
          validate={required}
        />
        <Field
          component={renderField}
          name="valid"
          type="text"
          label="validate"
          placeholder="Enter text"
          validate={[number]}
        />
        <button type="submit" disabled={submitting}>Submit</button>
      </div>
    </form>
  );
}

export default reduxForm({
    form: 'contactForm'
  })(ContactForm);