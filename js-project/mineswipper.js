
document.addEventListener('DOMContentLoaded', () => {
 //selects the gird elements,which is the game's container//
    const grid = document.querySelector(`.grid`);
    const totalCells = 50;
    const totalBombs = 30;
    let isGameOver = false;

//loop to craete boxes equal to the total number of cells//
    for(let i = 0; i < totalCells; i++){
        const cell = document.createElement(`div`);
        cell.classList.add(`box`);
        cell.setAttribute('data-id', i);
        cell.addEventListener(`click`, checkBomb);
        grid.appendChild(cell);
       
    }
//takes all boxes into an array for esay manegament//
    let box = Array.from(document.querySelectorAll(`.box`));

//loop to place bombs in equal to the total number of cells//
    for(let i = 0; i < totalBombs; i++){
        let randomIndex = Math.floor(Math.random() * totalCells);

 // Checks if the selected box already contains a bomb//      
        if (box[randomIndex].classList.contains('mine')) {
            i--;
        }else {
            box[randomIndex].classList.add('mine');
           
        }
    }

//This function runs when a box is clicked.//
    function checkBomb(event){
        const clickedCell = event.target;
        if (isGameOver || clickedCell.classList.contains('clicked')) {
            return;
        }

 // Checks if the clicked box has the 'mine' class.//
        if(clickedCell.classList.contains('mine')){
            isGameOver = true;

            //game over logic//
            alert('Game Over! You hit a bomb.');

  // Loops through all boxes to show all bombs.//
            box.forEach(cell => {
                if(cell.classList.contains('mine')) {
                    cell.style.backgroundColor = 'red'; 
                    cell.innerHTML = `<span>💣</span>`;

                     cell.classList.add('bomb-explodes');

  // Removes the class when the animation ends.//
                      cell.addEventListener('animationend', () => {
                    cell.classList.remove('bomb-explodes')
                      });  
                }
                 
            });

        } else{
             // Changes the background color if there is no bomb.//
            clickedCell.style.backgroundColor = `rgb(214,214,214)`;
            
            // clickedCell.classList.add('clicked');
            clickedCell.innerHTML = `<span>🤥</span>`;
            clickedCell.removeEventListener(`click`,checkBomb);
        }
    }
});