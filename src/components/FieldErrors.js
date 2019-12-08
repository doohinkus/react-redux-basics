import React from 'react';
import { connect }  from 'react-redux';
import { getFormSyncErrors, isInvalid, isValid, isDirty } from 'redux-form';


function FieldErrors({errors, isInvalid, isValid, isDirty}){
  console.log("ERRORS>>>",errors)
  return (
    <div>
      {isDirty && (
        <React.Fragment>
          {isInvalid && <h2>Errors</h2>}
          {isInvalid && Object.keys(errors).map(error => <p key={error}>{errors[error]}</p>)}
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
    isDirty: isDirty('contactForm')(state)
  }
}
// connect state to component
export default connect(mapStateToProps)(FieldErrors);