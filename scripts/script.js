$(function() {
    console.log("document is ready!");

    var userName, nameLength, nameMsg, nameReverse, Spiritanimal = ""; 

    $('#btnName').click(function() {
        userName = $('#userName').val(); 

        nameLength = getStringLength(userName);
        nameMsg = "The Length of your name is: ";
        $('#nameOutput').append(nameMsg + nameLength + "<br/>"); 

        nameReverse = reverseString(userName);
        nameMsg = "Your Name reversed letters is: ";
        $('#nameOutput').append(nameMsg + nameReverse + "<br/>"); 

        Spiritanimal = getspiritanimal(userName);
        $('#nameOutput').append(Spiritanimal + "<br/>"); 

        console.log(thirdLetter(userName)); 

        stringArrayPosition(userName); 

        });

        $('#btnClear').click(function(){
            clearElement("#nameOutput", "html");
            clearElement("#userName", "input");
      })

    function getStringLength(stringVal){
        var stringLength = stringVal.length; 
       return stringLength; 
    }

    function reverseString(stringVal){
        var revString = stringVal.split("").reverse().join("");
       return revString; 
    }

    function thirdLetter(stringVal){
        
       return thirdString; var thirdString = stringVal[2]; 
    }

    function clearElement(elementId, elementType){
        if(elementType == "html"){
            $(elementId).html(""); 
        }
        else if(elementType=="input"){
            $(elementId).val(" "); 
        }
      
        
    } 

    function stringArrayPosition(stringVal){

        for(i=0; i<stringVal.length; i++){
            console.log(i + " " + stringVal[i]);
        }


    }

    function getspiritanimal(stringVal){
        Animalmessage = "";
        if (stringVal.length <= 3){
           Animalmessage = ("You are a phoenix your heart shines bright.");
        } else {  Animalmessage = ("You are a very friendly Unicorn.");

        }
        return Animalmessage;
        }


    }
);