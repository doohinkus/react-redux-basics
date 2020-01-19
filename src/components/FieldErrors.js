import React, {useEffect} from 'react';
import { connect }  from 'react-redux';
import { getFormSyncErrors, isInvalid, isValid, isDirty, isPristine } from 'redux-form';


// field level errors
function FieldLevelErrors({ children, isInvalid, isDirty }){
  useEffect(() => {
    
  }, [])
  return (
    <React.Fragment>
     {children}
    </React.Fragment>
  );
}



function mapStateToProps(state){
// map to props
  return {
    isInvalid: isInvalid('contactForm')(state),
    isValid: isValid('contactForm')(state),
    isDirty: isDirty('contactForm')(state),
    isPristine: isPristine('contactForm')(state)
  }
}
// connect state to component
export default connect(mapStateToProps)(FieldLevelErrors);