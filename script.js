"use strict";

const register=document.querySelector('.register');
const login=document.querySelector('.login');
const password1=document.querySelector('#password1');
const password2=document.querySelector('#password2');
const block1=document.querySelector('.h1');
const block2=document.querySelector('.h2');
const submit=document.querySelector('.registerBtn')

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
    alert('Your account has been succesfully created!');
})