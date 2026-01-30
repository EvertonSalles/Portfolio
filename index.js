 const botao = document.querySelector('#botao');
 const modal = document.querySelector('.modal');
 const span = document.querySelector('span');

   botao.addEventListener('click', () => {
    if(modal.style.display === 'flex'){
        modal.style.display = 'none';
    }else{
        modal.style.display = 'flex';
    }
   });

 


