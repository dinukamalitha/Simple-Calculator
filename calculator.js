var historyValue = document.getElementById('history-value').innerHTML;
var finalResult = document.getElementById('current-value').innerHTML;

function outputHistoryValue(){
    document.getElementById('history-value').innerText = historyValue;
};

function outputFinalResult(){
    document.getElementById('current-value').innerText = finalResult;
};

var number = document.getElementsByClassName("num");
for (var i=0; i<number.length; i++){
    number[i].addEventListener("click", function(){
        // console.log(this.id);
        historyValue += this.id;
        outputHistoryValue();
        //document.getElementById('history-value').innerText = historyValue;
        finalResult = eval(historyValue);
    });
};

var operator = document.getElementsByClassName("opr");
for (var i=0; i<operator.length; i++){
    operator[i].addEventListener("click", function(){
        //console.log(this.id);
        if (this.id == "clear"){
            historyValue = "";
            finalResult = "";
            outputHistoryValue();
            outputFinalResult();
            //document.getElementById('history-value').innerText = historyValue;
            //document.getElementById('current-value').innerText = finalResult;
        }
        else if (this.id == "="){
            historyValue = "";
            outputHistoryValue();
            outputFinalResult();
            // document.getElementById('history-value').innerText = historyValue;
            // document.getElementById('current-value').innerText = finalResult;
        }
        else{
            historyValue += this.id;
            outputHistoryValue();
            //document.getElementById('history-value').innerText = historyValue;
        }
    });
};