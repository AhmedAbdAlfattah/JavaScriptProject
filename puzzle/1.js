var myPix = new Array("10.jpg","11.jpg","12.jpg","13.png", "14.png", "20.jpg", "15.png", "17.jpg", "18.png", "19.jpg","21.jpg","22.jpg","23.png","24.png","25.jpg");
var mySettings = {
    rows: 3,     //number of rows [3...9]
    cols: 3,     // number of columns[3 ... 9]
    hole: 9,     //initial hole position[1... rows*columns]
    shuffle: false,  //initially show shuffled pieces [true|false]
    numbers: true,   //initially show numbers on pieces[true|false]
    language: 'en',  //language for gui elements [language code]

    control: {
        shufflePieces: true,     // display 'Shuffle' button [true|false]
        confirmShuffle: true,    // ask before shuffling [true|false]
        toggleOriginal: true,    // display 'Original' button [true|false]
        toggleNumbers: true,     //display 'Numbers' button [true|false]
        counter: true,           // display moves counter [true|false]
        timer: true,             // display timer (seconds) [true|false]
        pauseTimer: true         // pause timer if 'Original' button is activated //[true|false]
    },
    success: {
        fadeOriginal: false,     // cross-fade original image [true|false]
        callback: function (results) {
            
                alert('YOU ARE WINNER ' + results.moves + '  ' + results.seconds);
           
        },  // callback a user-defined function [function] 
            //the function is passed an object as its argument
            // which includes the fields 'moves' and 'seconds'
        callbackTimeout: 300     // time in ms after which the callback is called
    },

    animation: {
        shuffleRounds: 3,        // number of shuffle rounds[1...]
        shuffleSpeed: 800,       // time in ms to perform a shuffle round 
        slidingSpeed: 200,       // time in ms for a single move 
        fadeOriginalSpeed: 600   // time in ms to cross-fade original image 
    },
    style: {
        gridSize: 2,         
        overlap: true,       
        
        backgroundOpacity: 0.1  
      
    }
}

var texts = {
    shuffleLabel: 'Start Game',
    toggleOriginalLabel: 'Pause|Resume',
    toggleNumbersLabel: 'Numbers',
    confirmShuffleMessage: 'Do you really want to start?',
    movesLabel: 'moves',
    secondsLabel: 'seconds'
}

var mySettingsMidLevel = {
    rows: 4,     
    cols: 4,     
    hole: 16,     
    shuffle: false, 
    numbers: true,   
    language: 'en',  
}
var textsMidLevel = {
    shuffleLabel: 'Start Game',
    toggleOriginalLabel: 'Pause/Resume',
    toggleNumbersLabel: 'Numbers',
    confirmShuffleMessage: 'Do you really want to start?',
    movesLabel: 'moves',
    secondsLabel: 'seconds'
}

var mySettingsHighLevel = {
    rows: 5,     
    cols: 4,    
    hole: 20,     
    shuffle: false,  
    numbers: true,   
    language: 'en',  
}

var textsHighLevel = {
    shuffleLabel: 'Start Game',
    toggleOriginalLabel: 'Pause/Resume',
    toggleNumbersLabel: 'Numbers',
    confirmShuffleMessage: 'Do you really want to start?',
    movesLabel: 'moves',
    secondsLabel: 'seconds'
}


$(document).ready(function () {
    choose();
});
function choose() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    var level = Math.floor(Math.random() * 3) + 1  


    if (typeof level === 'number') {
        switch (level) {
            case 1:

                document.getElementById("picture").src = myPix[randomNum];
                $('#picture').jqPuzzle(mySettings, texts);

                break;
            case 2:
                document.getElementById("picture").src = myPix[randomNum];
                $('#picture').jqPuzzle(mySettingsMidLevel, textsMidLevel);
                break;
            case 3:
                document.getElementById("picture").src = myPix[randomNum];
                $('#picture').jqPuzzle(mySettingsHighLevel, textsHighLevel);
                break;

        }

    }



}



