var tttapp = angular.module('tttapp', []);

tttapp.controller('tttController', function($scope) {
    
    //initialize tic tac toe boxes
    $scope.boxes = [{
        name: 0, 
        clicked: false, 
        odd: false,
        even: false,
    }, {
        name: 1, 
        clicked: false, 
        odd: false,
        even: false,
    }, {
        name: 2, 
        clicked: false, 
        odd: false,
        even: false,
    }, {
        name: 3, 
        clicked: false, 
        odd: false,
        even: false,
    }, {
        name: 4, 
        clicked: false, 
        odd: false,
        even: false,
    }, {
        name: 5, 
        clicked: false, 
        odd: false,
        even: false,
    }, {
        name: 6, 
        clicked: false, 
        odd: false,
        even: false,
    }, {
        name: 7, 
        clicked: false, 
        odd: false,
        even: false,
    }, {
        name: 8, 
        clicked: false, 
        odd: false,
        even: false,
    }];

    $scope.p1Name = "X"
    $scope.p2Name = "O"
    $scope.p1Score = 0
    $scope.p2Score = 0
    var howManyClicks = 0;
    var gameOver = false;

    $scope.setName1 = function(p1Name) {
        $scope.p1Name = '';
    }

    $scope.setName2 = function(p2Name) {
        $scope.p2Name = '';
    }

    //clears board for the next game
    $scope.clearBoard = function() {
        $scope.leftMessage = "";
        $scope.rightMessage = "";
        howManyClicks = 0;
        gameOver = false;
        for(i = 0; i<9;i+=1)
        {
            $scope.boxes[i].name = 0;
            $scope.boxes[i].clicked = false;
            $scope.boxes[i].odd = false;
            $scope.boxes[i].even = false;
        }
    };

    // event handler when box is clicked
    $scope.clickIt = function(box) {
        if (gameOver == true) {
            alert("Game is over! Wanna play again? Then press 'New Game' button below!")
            return;
        }
    	if (box.clicked == false && gameOver == false) {
            box.clicked = true;
            if(howManyClicks % 2 == 0) {
                box.even = true;
            }
            else {
                box.odd = true;
            }
            howManyClicks++;
            checkBoard(box);
        }
    }

    //called when player o wins
    xWin = function () {
        $scope.leftMessage = $scope.p1Name + " wins!";
        $scope.p1Score += 1;
        gameOver = true
    };

    //called when player x wins
    oWin = function () {
        $scope.rightMessage = $scope.p2Name + " wins!";
        $scope.p2Score += 1;
        gameOver = true
    };

    //checks for winning combinations or tie in the array
    checkBoard = function (box) {
        if ($scope.boxes[0].odd && $scope.boxes[1].odd && $scope.boxes[2].odd) {
            oWin(); return;
        }
        else if ($scope.boxes[3].odd && $scope.boxes[4].odd && $scope.boxes[5].odd) {
            oWin(); return;
        }
        else if ($scope.boxes[6].odd && $scope.boxes[7].odd && $scope.boxes[8].odd) {
            oWin(); return;
        }
        else if ($scope.boxes[0].odd && $scope.boxes[3].odd && $scope.boxes[6].odd) {
            oWin(); return;
        }
        else if ($scope.boxes[1].odd && $scope.boxes[4].odd && $scope.boxes[7].odd) {
            oWin(); return;
        }
        else if ($scope.boxes[2].odd && $scope.boxes[5].odd && $scope.boxes[8].odd) {
            oWin(); return;
        }
        else if ($scope.boxes[0].odd && $scope.boxes[4].odd && $scope.boxes[8].odd) {
            oWin(); return;
        }
        else if ($scope.boxes[2].odd && $scope.boxes[4].odd && $scope.boxes[6].odd) {
            oWin(); return;
        }
        else if ($scope.boxes[0].even && $scope.boxes[1].even && $scope.boxes[2].even) {
            xWin(); return;
        }
        else if ($scope.boxes[3].even && $scope.boxes[4].even && $scope.boxes[5].even) {
            xWin(); return;
        }
        else if ($scope.boxes[6].even && $scope.boxes[7].even && $scope.boxes[8].even) {
            xWin(); return;
        }
        else if ($scope.boxes[0].even && $scope.boxes[3].even && $scope.boxes[6].even) {
            xWin(); return;
        }
        else if ($scope.boxes[1].even && $scope.boxes[4].even && $scope.boxes[7].even) {
            xWin(); return;
        }
        else if ($scope.boxes[2].even && $scope.boxes[5].even && $scope.boxes[8].even) {
            xWin(); return;
        }
        else if ($scope.boxes[0].even && $scope.boxes[4].even && $scope.boxes[8].even) {
            xWin(); return;
        }
        else if ($scope.boxes[2].even && $scope.boxes[4].even && $scope.boxes[6].even) {
            xWin(); return;
        }
        var filledArray = [];
        for (var i = 0; i <9 ; i++){
            if ($scope.boxes[i].clicked == true){
                filledArray.push(i);
            }
        }
        if (filledArray.length == 9) {
            alert("It's cat's game!")
        }
    };

});


