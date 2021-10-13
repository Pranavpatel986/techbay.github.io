function Result(){
    var students= {
        PRANAV : {
            math: "95",
            pyhsics: "80",
            literature: "75"
        },
        RAM : {
            math: "85",
            pyhsics: "90",
            literature: "85"
        },
        SHIVANI : {
            math: "98",
            pyhsics: "84",
            literature: "73"
        }
    }
    var studentname=document.getElementById('studentname').value;
    var input=studentname.toUpperCase();
    var definition=students[input];
    var output=document.getElementById("output");
    
    if(definition==undefined){
        output.innerHTML=`<hr> There is no information about this student. <hr>`;
    }else{
        output.innerHTML=` Math score is ${definition.math}<hr> physics score is ${definition.pyhsics}<hr> Literature score is ${definition.literature} <hr>`
    }
}