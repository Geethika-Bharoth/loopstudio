const btn =document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', function(){
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}
);