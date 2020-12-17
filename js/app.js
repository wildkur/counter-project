// Tu código aquí. 

const buttons = document.querySelectorAll('.counterBtn')
let count = 0

buttons.forEach(function(button){
    button.addEventListener('click', function(){
      if (button.classList.contains('prevBtn')){
        count--
      } 
      else if (button.classList.contains('nextBtn')){
        count++
      }

      const counter = document.querySelector('#counter')
      counter.textContent = count
      counter.classList.remove('myred', 'mygreen', 'mygrey')
      
      
      if (count < 0 ){
        counter.classList.add('myred')
      }
      else if (count > 0){
        counter.classList.add('mygreen')
      }
      else{
        counter.classList.add('mygrey')
      }
    })
  })
