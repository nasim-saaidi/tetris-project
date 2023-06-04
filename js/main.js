const boxArray = document.querySelectorAll(".box")

console.log(boxArray)

grid = new Array(boxArray.length).fill(0);

const colors = document.querySelectorAll(".box")

function getRandomNumber() {
    return Math.round(Math.random() * 10);
}

    let number = 0;
    let number2 = 1;
    let number3 = 2;

function idle() {
    grid[number] = 1;
    grid[number2] = 1;
    grid[number3] = 1;
}


function sidestep(data) {
    if (data.key == 'ArrowRight');
    grid[0] = 0
    grid[number++] = 1
    grid[number2++] = 1;
    grid[number3++] = 1;
    console.log('bruh');

    grid.forEach(function checkNumber(element, index) {
        if (element == 1) {
            colors[index].classList.add('blue');
            console.log('blue')
        }
    })
}

addEventListener('keydown', sidestep);


function longBlock() {
    const startBlock = getRandomNumber();
    if (startBlock <= 7) {
        
        grid[startBlock] = 1;
        grid[startBlock + 1] = 1;
        grid[startBlock + 2] = 1;
    }
    if (startBlock == 8) {
        grid[startBlock] = 1;
        grid[startBlock + 1] = 1;
        grid[startBlock - 1] = 1;    
    }
    if (startBlock == 9 ) {
        grid[startBlock] = 1;
        grid[startBlock - 1] = 1;
        grid[startBlock - 2] = 1;
    }
}

grid.forEach(function checkNumber(element, index) {
    if (element == 1) {
        colors[index].classList.add('blue');
        console.log('blue')
    }
})





// for (let i = 0; i < colors.length; i++) {
//     const color = colors[i];
//     if(i < 3){
//         color.classList.add("blue");
//     }
// }



