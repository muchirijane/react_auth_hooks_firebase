export default function ValidationInfo (values){
  let errors = {};

  if(!values.firstName.trim()){
    errors.firstName = 'First Name required'
  }
  if(!values.lastName.trim()){
    errors.lastName = 'Last Name required'
  }

  if(!values.email){
    errors.email = 'Email required'
  }else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  
}

