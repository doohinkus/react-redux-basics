import React from 'react';
import { connect }  from 'react-redux';
import { getFormSyncErrors, isInvalid, isValid, isDirty, isPristine } from 'redux-form';


function FieldErrors({errors, isInvalid, isValid, isDirty, isPristine }){
  console.log(`
    errors: ${Object.keys(errors)}
    isInvalid: ${isInvalid}
    isValid: ${isValid}
    isDirty: ${isDirty}
  `)
  return (
    <div>
      {Object.keys(errors) && (
        <React.Fragment>
          <h2>Errors</h2>
          {Object.keys(errors).map(error => <p key={error}>{errors[error]}</p>)}
        </React.Fragment>
      )}
    </div>
  )

}



function mapStateToProps(state){
// map to props
  return {
    errors: getFormSyncErrors('contactForm')(state),
    isInvalid: isInvalid('contactForm')(state),
    isValid: isValid('contactForm')(state),
    isDirty: isDirty('contactForm')(state),
    isPristine: isPristine('contactForm')(state)
  }
}
// connect state to component
export default connect(mapStateToProps)(FieldErrors);