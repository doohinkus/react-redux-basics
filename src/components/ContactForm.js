import React from 'react';
import { Field, reduxForm, isInvalid } from 'redux-form';
import { connect } from 'react-redux';
import FieldLevelErrors from '../components/FieldErrors';

// validations 
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const required = value => value  ? undefined : 'Required';



// field level validation component
function renderField({ input, label, type, meta: { touched, error, warning } }){
  return (
    <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} data-test-id={label} />
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
  }
  
 // page level errors
 function renderError({ input, meta: { touched, error }, ...props }){
  return (
    <React.Fragment>
   
      { touched && error && (<span {...props} className='error'>{error}</span>) }
    </React.Fragment>
  );
 }
 function renderTitleError({meta: { touched, error }}){
   return (
    <React.Fragment>
      {touched && error && <h2>Please address errors:</h2>}
    </React.Fragment>
   );
 }

const validate = values => {
  const errors = {};
  if (!values.name) errors.name = "Required";
  if (isNaN(Number(values.valid))) errors.valid = "Enter a number";
  return errors;

}



  function ContactForm({ handleSubmit, pristine, reset, submitting, isInvalid, isPristine, errors }){
    console.log(`
      isPristine: ${isPristine}
      isInvalid: ${isInvalid}
    `)
  function phone (value){
    // only numbers
    return value.replace(/[^\d]/g, '');
  }
   
  return (
    <form onSubmit={handleSubmit}>
       <FieldLevelErrors>
        {/* <Field
          name={["name", "valid"]}
          component={renderTitleError}
        /> */}
        <Field 
          name='name'
          component={renderError}
        />
        <Field 
          name='valid'
          component={renderError}
        />
      </FieldLevelErrors>
      <div>
        <label>Name</label>
        <Field
          component={renderField}
          name="name"
          type="text"
          placeholder="Enter name"
          // normalize={phone}
          // validate={required}
        />
        <Field
          component={renderField}
          name="valid"
          type="text"
          label="validate"
          placeholder="Enter text"
          // validate={number}
        />
        <button type="submit" disabled={submitting}>Submit</button>
      </div>
    </form>
  );
}

export default reduxForm({
    form: 'contactForm',
    validate
  })(ContactForm);