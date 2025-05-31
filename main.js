let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
   navbar.classList.toggle('active');
   search.classList.remove('active');
   cart.classList.remove('active');
   user.classList.remove('active');
}