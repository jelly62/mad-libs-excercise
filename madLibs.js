window.onload=function(){

    var btnSubmit=document.getElementById("btnSubmit");
    var btnBack=document.getElementById("btnBack");

    var inputWords=document.getElementsByClassName("words");
    var hint=document.getElementsByTagName("i");
    var wordList=document.getElementById("wordList");

    var outputWords=document.getElementsByClassName("outputWords");
    var paragraphMad=document.getElementById("paragraphMad");

    var emptyStr = false;

    btnSubmit.onclick=function(){
        emptyStr = false;
        for(var i=0;i<inputWords.length;i++){
            if(inputWords[i].value=="")
            {
                emptyStr=true;
                hint[i].style.display="inline";
            }
            else{
                hint[i].style.display="none";
            }
            
        }
        if(emptyStr==false)
        {
            paragraphMad.style.display="block";
            wordList.style.display="none";
            for(var i=0;i<inputWords.length;i++){   
                console.log(inputWords[i].value);
                outputWords[i].innerHTML="&nbsp;"+inputWords[i].value+"&nbsp;";
            }
        }
    }
    btnBack.onclick=function(){

        for(var i=0;i<inputWords.length;i++){
            inputWords[i].value="";
    
        }
        paragraphMad.style.display="none";
        wordList.style.display="block";
    }

}