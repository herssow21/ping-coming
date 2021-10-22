const submit=document.querySelector('.form');
const email=document.querySelector('.email');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control erorr';
    const small =formControl.querySelector('small');
    small.innerText = message;
  }

//   Check validity
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
submit.addEventListener('submit', function(){
    
  if(email.value === ''){
    showError(email,'Whoops! It looks like you forgot to add your email');
  }else if(!isValidEmail(email.value)){
    showError(email,'Please provide a valid email address');
  }
  else{
    alert('Saved Successfully');
  }
});


  