
var message = document.getElementById('message')
const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', function () {
    message.style.transform = 'translateX(0%)'

})

const signupBtn = document.getElementById('signup');

signupBtn.addEventListener('click', function() {
    message.style.transform = 'translateX(100%)'
})

var password = document.getElementById('password')
var Cpassword = document.getElementById('Cpassword')




if(password !== Cpassword)
{alert('wrong password')}
else{alert('success')};

var submit = document.getElementById('submit');

submit.addEventListener('click' , display);