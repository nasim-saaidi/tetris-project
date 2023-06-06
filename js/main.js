//variables;
const boxArray = document.querySelectorAll(".box");
const colors = document.querySelectorAll(".box");
let grid = new Array(boxArray.length).fill(0);
let number;
let number2;
let number3;
let number4;
let oneBlock;
let twoBlock;
let threeBlock;
let fourBlock;
let fiveBlock;
let blue;
let yellow;
let red;
let purple;


//Functions


//execute
tBlock();
idlePurple();


//shapes
function sblock() {
    threeBlock = true
    number = 0;
    number2 = 1;
    number3 = 11;
    number4 = 12;    
}

function lBlock() {
    fiveBlock = true;
    number = 0;
    number2 = 10;
    number3 = 20;
    number4 = 21;
}

function iBlock() {
    oneBlock = true;
    number = 0;
    number2 = 1;
    number3 = 2;
    number4 = 3;
}

function tBlock() {
    twoBlock = true;
    number = 0;
    number2 = 1;
    number3 = 2;
    number4 = 11;
}

function oBlock() {
    fourBlock = true;
    number = 0;
    number2 = 1;
    number3 = 10;
    number4 = 11;
}


//colors
function idleYellow() {
    yellow = true;
    grid[number] = 3;
    grid[number2] = 3;
    grid[number3] = 3;
    grid[number4] = 3;
    checkGrid();
}

function idleBlue() {
  blue = true;
    grid[number] = 1;
    grid[number2] = 1;
    grid[number3] = 1;
    grid[number4] = 1;
    checkGrid()
}

function idleRed() {
    red = true;
    grid[number] = 2;
    grid[number2] = 2;
    grid[number3] = 2;
    grid[number4] = 2;
    checkGrid();
}

function idlePurple() {
    purple = true;
    grid[number] = 4;
    grid[number2] = 4;
    grid[number3] = 4;
    grid[number4] = 4;
    checkGrid();
}


//control functions


//checks grid for colors depending on the number in the grid
function checkGrid() {
    grid.forEach(function checkNumber(element, index) {         
        if (element == 1) {
            boxArray[index].classList.add('blue');
        }else if (element == 2) {
            boxArray[index].classList.add('red');
        }else if (element == 3) {
            boxArray[index].classList.add('yellow');
        }else if (element == 4) {
            boxArray[index].classList.add('purple');
        } else if (element == 0) {
            boxArray[index].classList.remove('blue');
            boxArray[index].classList.remove('red');
            boxArray[index].classList.remove('yellow');
            boxArray[index].classList.remove('purple')
        }
    })
};


//moves grid depending on button
function changeGridNumber(direction) {
    grid[number] = 0;
    grid[number2] = 0;
    grid[number3] = 0;
    grid[number4] = 0;

    if (direction === "left") {
        number--;
        number2--;
        number3--;
        number4--;
    } else if (direction === 'right') {
        number++;
        number2++;
        number3++;
        number4++;
    }
    //checks which color is active and puts the number back depending on the color active
    if( blue == true) {
    grid[number] = 1;
    grid[number2] = 1;
    grid[number3] = 1;
    grid[number4] = 1;
    }else if(red == true) {
    grid[number] = 2;
    grid[number2] = 2;
    grid[number3] = 2;
    grid[number4] = 2;
    }else if(yellow == true){
    grid[number] = 3;
    grid[number2] = 3;
    grid[number3] = 3;
    grid[number4] = 3;
    }else if(purple == true) {
        grid[number]  = 4;
        grid[number2] = 4;
        grid[number3] = 4;
        grid[number4] = 4;
    }
}


//sets boundaries so the beginning and end of the shape cant go further than the row its in 
function checkStep(data) {
    if (data.key == 'ArrowRight') {
        if ( oneBlock == true && number4 != 9 && number4 != 19 && number4 != 29 && number4 != 39 && number4 != 49 && number4 != 59 && number4 != 69 && number4 != 79 && number4 != 89 && number4 != 99 && number4 != 109 && number4 != 119 && number4 != 129 && number4 != 139 && number4 != 149 && number4 != 159 && number4 != 169 && number4 != 179 && number4 != 189 && number4 != 199 ) {
            changeGridNumber("right");
        }else if (twoBlock == true && number4 != 8 && number4 != 18 && number4 != 28 && number4 != 38 && number4 != 48 && number4 != 58 && number4 != 68 && number4 != 78 && number4 != 88 && number4 != 98 && number4 != 108 && number4 != 118 && number4 != 128 && number4 != 138 && number4 != 148 && number4 != 158 && number4 != 168 && number4 != 178 && number4 != 188  && number4 != 198 ) {
            changeGridNumber("right");
        }else if(threeBlock == true && number4 != 19  && number4 != 29 && number4 != 39 && number4 != 49 && number4 != 59 && number4 != 69 && number4 != 79 && number4 != 89 && number4 != 99 && number4 != 109 && number4 != 129 && number4 != 139 && number4 != 149 && number4 != 159 && number4 != 169 && number4 != 179 && number4 != 189 && number4 != 199 ) {
            changeGridNumber("right");
        }else if(fourBlock == true && number4 != 19  && number4 != 29 && number4 != 39 && number4 != 49 && number4 != 59 && number4 != 69 && number4 != 79 && number4 != 89 && number4 != 99 && number4 != 109 && number4 != 129 && number4 != 139 && number4 != 149 && number4 != 159 && number4 != 169 && number4 != 179 && number4 != 189 && number4 != 199 ) {
            changeGridNumber("right");
        }
        
    } else if (data.key == 'ArrowLeft') {
        if( oneBlock == true && number != 0 && number != 10 && number != 20 && number != 30 && number != 40 && number != 50 && number != 60 && number != 70 && number != 80 && number != 90 && number != 100 && number != 110 && number != 120 && number != 130 && number != 140 && number != 150 && number != 160 && number != 170 && number != 180 && number != 190 && number != 200) {
            changeGridNumber("left");
        }else if ( twoBlock == true && number != 0 && number != 11 && number != 21 && number != 31 && number != 41 && number != 51 && number != 61 && number != 71 && number != 81 && number != 91 && number != 101 && number != 111 && number != 121 && number != 131 && number != 141 && number != 151 && number != 161 && number != 171 && number != 181 && number != 191 && number) {
            changeGridNumber("left");
        }else if ( threeBlock == true && number != 0 && number != 10 && number != 20 && number != 30 && number != 40 && number != 50 && number != 60 && number != 70 && number != 80 && number != 90 && number != 100 && number != 110 && number != 120 && number != 130 && number != 140 && number != 150 && number != 160 && number != 170 && number != 180 && number != 190 && number != 200) {
            changeGridNumber("left");
        }else if ( fourBlock == true && number != 0 && number != 10 && number != 20 && number != 30 && number != 40 && number != 50 && number != 60 && number != 70 && number != 80 && number != 90 && number != 100 && number != 110 && number != 120 && number != 130 && number != 140 && number != 150 && number != 160 && number != 170 && number != 180 && number != 190 && number != 200) {
            changeGridNumber("left");
        }
    }
    checkGrid();
}

addEventListener('keydown', checkStep);

