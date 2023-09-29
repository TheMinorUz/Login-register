"use strict";

const register=document.querySelector('.register');
const login=document.querySelector('.login');
const password=document.querySelector('#password');
const block1=document.querySelector('.h1');
const block2=document.querySelector('.h2');
const submit=document.querySelector('.registerBtn')
const logged=document.querySelector('.loginBtn')
const name=document.querySelector('#email');
const checkName=document.querySelector('#checkEmail');
const checkPassword=document.querySelector('#checkPassword');
const username=document.querySelector('#username');


login.style.display='none'
block1.style.borderBottom='1px solid blue';



block1.addEventListener('click',()=>{
    block1.style.borderBottom='1px solid blue';
    register.style.display='grid'
    login.style.display='none'
    block2.style.border='none'
})
block2.addEventListener('click',()=>{
    block2.style.borderBottom='1px solid blue';
    register.style.display='none'
    login.style.display='grid'
    block1.style.border='none'
})

submit.addEventListener('click',()=>{
    block2.style.borderBottom='1px solid blue';
    register.style.display='none'
    login.style.display='grid'
    block1.style.border='none'
})

logged.addEventListener('click',()=>{
    if(name.value==checkName.value || username.value==checkName.value && password.value==checkPassword.value){
        alert('Welcome back!')
    }else{
        alert('⚠Incorrect password or username')
    }
})