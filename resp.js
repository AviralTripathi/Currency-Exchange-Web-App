const bur_ger=document.querySelector('.burger');
const nav_bar=document.querySelector('.Navbar');
const nav_list=document.querySelector('.navlist');
const right_nav=document.querySelector('.rightNav');
if(bur_ger)
{
bur_ger.addEventListener('click', function  () {
right_nav.classList.toggle('v-resp');
nav_list.classList.toggle('v-resp');
nav_bar.classList.toggle('h-resp');
});
}

