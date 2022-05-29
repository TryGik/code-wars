/*Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.*/

// let matrix = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [2, 3, 1, 5, 6, 4, 8, 9, 7],
//   [3, 1, 2, 6, 4, 5, 9, 7, 8],
//   [4, 5, 6, 7, 8, 9, 1, 2, 3],
//   [5, 6, 4, 8, 9, 7, 2, 3, 1],
//   [6, 4, 5, 9, 7, 8, 3, 1, 2],
//   [7, 8, 9, 1, 2, 3, 4, 5, 6],
//   [8, 9, 7, 2, 3, 1, 5, 6, 4],
//   [9, 7, 8, 3, 1, 2, 6, 4, 5]
// ];

let matrix = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];


//My Solution
function validSolution(matrix) {
  const maket = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < matrix.length; i++) {
    if (!matrix[i].includes(maket[i])) {
      return false;
    }
  }
  let res = [];
  for (let i = 0; i < 9; i++) {
    for (arr of matrix) {
      res.push(arr[i]);
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    let a = res.splice(0, 9);
    for (let j = 0; j < maket.length; j++) {
      if (!a.includes(maket[j])) {
        return false;
      }
    }  
  }
  let res1 = []
  for (let i = 0; i<3;i++){
    for (let j=0; j<3;j++) {
    res1.push(matrix[i][j])
    }
  }
  let setRes1 = new Set(res1)
  if (setRes1.size !== res1.length) {
    return false
  }

  return true; 
}

console.log(validSolution(matrix))


//Better than my////////////////////////////////////////////////////////////////

function validSolution(board){
  // check horizontal lines
  for(var j=0; j<9; j++){
    if(!check(board[j])) return false;
  }
  
  // check vertical lines
  for(var j=0; j<9; j++){
    var line = [];
    for(var k=0; k<9; k++){
      line.push(board[k][j]);
    }
    if(!check(line)) return false;
  }
  
  // check 3x3 squares
  for(var j=0; j<9; j+=3){
    for(var k=0; k<9; k+=3){
      var square = [];
      for(var l=j; l<j+3; l++){
        for(var m=k; m<k+3; m++){
          square.push(board[l][m]);
        }
      }
      if(!check(square)) return false;
    }
  }
  
  // if it hasn't returned false so far then we
  // have a valid 9x9 square, so return true
  return true;
}

// checks that an array of length 9 contains 
// exactly the numbers 1, 2, ..., 9
function check(numbers){
  return numbers.slice(0).sort().every(function(e, i){return e==i+1;});
}


//BIGGG///////////////////////////////////////////////////////

function validSolution(board){
  var board = new Board(board);
  
  return board.isValid();
}

var Board = function(data)
{
  this.data = data;
  
  /**
  *  Return a row with a given index
  *
  *  @param integer index - Index of the row to return
  *  @return array - Array of elements in a column
  */
  this.getRow = function(index)
  {
    return this.data[index];
  }
  
  /**
  *  Return a column with a given index.
  *
  *  @param integer index - Index of the column to return
  *  @return array - Array of elements in a column
  */
  this.getColumn = function(index)
  {
    var elements = [];
    
    for(var i = 0;i<this.data.length;i++)
    {
      elements.push(this.data[i][index]);
    }
    
    return elements;
  }
  
  /**
  *  Return all 3x3 sectors
  *  @return array - Array of sectors
  */
  this.getSectors = function()
  {
    var sectors = [];

    for(var x = 0; x<3; x++)
    {

      for(var y = 0; y<3; y++)
      {
        var xOffset = x * 3;
        var yOffset = y * 3;
        var sector = [];
        
        for(var i = 0;i<3;i++)
        {
          var retrieved = this.get3ElementsAt(xOffset, yOffset + i);
          
          for(var a = 0;a<3;a++)
          {
            sector.push(retrieved[a]);
          }
        }
        sectors.push(sector);
      }
    }
    return sectors;
  }
  
  /**
  *  Return an array of 3 elements starting at position x,y
  *
  *  @param integer x - X coordinate
  *  @param integer y - Y coordinate
  *  @return array - Array of numbers starting at position x,y
  */
  this.get3ElementsAt = function (x, y)
  {
    var result = [];
    
    for(var i = 0 ;i<3;i++)
    {
      result.push(this.getElement(x + i, y));
    }
    
    return result;
  }
  
  /**
  *  Return an element at x, y
  *
  *  @param integer X - The x coordinate
  *  @param integer Y - The y coordinate
  *  @return integer - The element
  */
  this.getElement = function(x, y)
  {
    return this.getRow(y)[x];
  }
  
  /**
  *  Validate a group of numbers for being a valid sudoku group.
  *  @param group - Group of numbers to validate
  *  @return boolean - Whether the group is valid or not
  */
  this.validateGroup = function(group)
  {
    // the group is valid if it has all the numbers from 1
    // to 9
    for(var i = 1; i<=9; i++)
    {
      if(group.indexOf(i) == -1)
      {
        return false;
      }
    }
    return true;
  }
  
  /**
  *  Checks whether this Sudoku board is valid or not.
  *  @return boolean - Whether the board is valid
  */
  this.isValid = function()
  {
    // validate rows
    // validate columns
    // validate sectors
    return this.validateRows() && this.validateColumns() && this.validateSectors();
  }

  /**
  *  Validate all of this boards columns
  *  @return boolean
  */
  this.validateColumns = function()
  {
    for(var i = 0;i<9;i++)
    {
      if(!this.validateGroup(this.getColumn(i)))
      {
        return false;
      }
    }
    
    return true;
  }

  /**
  *  Validate all of this boards rows
  *  @return boolean
  */
  this.validateRows = function()
  {
    for(var i = 0;i<9;i++)
    {
      if(!this.validateGroup(this.getRow(i)))
      {
        return false;
      }
    }
    
    return true;
  }
  
  /**
  *  Validate all of this boards sectors
  *  @return boolean
  */
  this.validateSectors = function()
  {
    var sectors = this.getSectors();
    
    for(var i = 0;i<sectors.length;i++)
    {
      if(!this.validateGroup(sectors[i]))
      {
        return false;
      }
    }
    
    return true;
  }
}

//Set//////////////////

function validSolution(board){
  
  for (i=0; i<9; i++){
  
    let rowSet = new Set(board[i]);
    let colSet = new Set([board[0][i],board[1][i],board[2][i],board[3][i],board[4][i],board[5][i],board[6][i],board[7][i],board[8][i]]);
    
    let cubSet = new Set([  
                           board[3*Math.floor(i/3)]        [3*(i%3)],
                           board[3*Math.floor(i/3)]        [3*(i%3)+1],
                           board[3*Math.floor(i/3)]        [3*(i%3)+2],
                           
                           board[3*Math.floor(i/3) + 1]    [3*(i%3)],
                           board[3*Math.floor(i/3) + 1]    [3*(i%3) + 1],
                           board[3*Math.floor(i/3) + 1]    [3*(i%3) + 2],
                           
                           board[3*Math.floor(i/3) + 2]    [3*(i%3)],
                           board[3*Math.floor(i/3) + 2]    [3*(i%3)+1],
                           board[3*Math.floor(i/3) + 2]    [3*(i%3)+2] 
                        ]);
    
    if (rowSet.size !== 9 || colSet.size !==9 || cubSet.size !==9){
      return false
    }
  }
  
  return true;
  
}

//Short//////////////////////////////////////////////

const validSolution = board =>
  ((ver, sqr) => [...board, ...ver, ...sqr].every(val => val.sort().join(``) === `123456789`))
  ([...Array(9).keys()].map(val => [...Array(9)].map((_, idx) => board[idx][val])),
   [...Array(9).keys()].map(val => [0, 1, 2].reduce((pre, v) => [...pre, ...board[(val / 3 ^ 0) * 3 + v].slice(val % 3 * 3, val % 3 * 3 + 3)], [])));


//Interested
function validSolution(board){
  let sumR = 0;
  let sumC = 0;
  let sumB = [[0,0,0],[0,0,0],[0,0,0]];
  
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      sumR += board[i][j];
      sumC += board[j][i];
      sumB[i/3|0][j/3|0] += board[i][j];
    }
    if (sumR != sumC) return false;
    if (i%3 == 2 && sumB[i/3|0][0] != 45) return false;
  }
  
  return true;
}