import React from 'react';
import { connect }  from 'react-redux';
import { formValueSelector, isInvalid, isPristine, getFormSyncErrors } from 'redux-form';
import ContactForm from '../components/ContactForm';
import FieldErrors from '../components/FieldErrors';


function Form({ values, isInvalid, isPristine, errors }){
  function handleSubmit(e){
    e.preventDefault();
    console.log( values, " " , errors )
  }
  return (
    <React.Fragment>
      { Object.keys(errors).length ? (<h2>Errors</h2>) : null}
      { Object.keys(errors).length ? Object.keys(errors).map(key => <p key={key}>{key} : {errors[key]}</p>) : null}
      <ContactForm
        handleSubmit={handleSubmit}
        isInvalid={isInvalid}
        isPristine={isPristine}
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
    isInvalid: isInvalid('contactForm')(state),
    isPristine: isPristine('contactForm')(state),
    errors: getFormSyncErrors('contactForm')(state)
  }
}
// connect state to component
export default connect(mapStateToProps)(Form);