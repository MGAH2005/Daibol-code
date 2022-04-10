function n1() {

    document.getElementById("contenr1").style.display = "none";
    document.getElementById("contenr2").style.display = "block";

}

function n2() {

    document.getElementById("contenr1").style.display = "block";
    document.getElementById("contenr2").style.display = "none";

}

function n3() {

    document.getElementById("contenr3").style.display = "block";
    document.getElementById("contenr2").style.display = "none";

}

function n4() {

    document.getElementById("contenr2").style.display = "block";
    document.getElementById("contenr3").style.display = "none";

}


function n6() {
    
    document.getElementById("contenr55").style.display = "block";
    document.getElementById("contenr4").style.display = "none";
}

function n7() {
    document.getElementById("contenr55").style.display = "none";
    document.getElementById("contenr4").style.display = "block";
    
 }
function n5() {
     var alert1 = confirm("Are you sure of your answers \n It is better to review them");
     if(alert1 == true){
    document.getElementById("contenr4").style.display = "block";
    document.getElementById("contenr3").style.display = "none";
     }
     n= 0 ;
     id_1= document.getElementById("true1").checked;
     if(id_1 == true){
       n +=1;
     }
     id_2= document.getElementById("true2").checked;
     if(id_2 == true){
       n +=1;
     }
     id_3= document.getElementById("true3").checked;
     if(id_3 == true){
       n +=1;
     }
     id_4= document.getElementById("true4").checked;
     if(id_4 == true){
       n +=1;
     }
     id_5= document.getElementById("true5").checked;
     if(id_5 == true){
       n +=1;
     }
     id_6= document.getElementById("true6").checked;
     if(id_6 == true){
       n +=1;
     }
     //اول ست اساله امن الامتحان 
     /************************************************************************************/
     id2_1 = document.getElementById("true7");
     if(id2_1.value == "charset"){
       n +=1;
     }

     id2_2 = document.getElementById("true8");
     if(id2_2.value == "stylesheet"){
       n +=1;
     }

     id2_3 = document.getElementById("true9");
     if(id2_3.value == "target"){
       n +=1;
     }

     id2_4 = document.getElementById("true10");
     if(id2_4.value == "alt"){
       n +=1;
     }

     id2_5 = document.getElementById("true11");
     if(id2_5.value == "author"){
       n +=1;
     }

     id2_6 = document.getElementById("true12");
     if(id2_6.value == "type"){
       n +=1;
     }

     id2_7 = document.getElementById("true13");
     if(id2_7.value == "script"){
       n +=1;
     } 
     id2_7_1= document.getElementById("true13_1");
     if(id2_7_1.value == "script"){
       n +=1;
     }

     id2_8 = document.getElementById("true14");
     if(id2_8.value == "icon"){
       n +=1;
     } 
  
     id2_9 = document.getElementById("true15");
     if(id2_9.value == "lang"){
       n +=1;
     } 
     id2_10 = document.getElementById("true16");
     if(id2_10.value == "type"){
       n +=1;
     } 


     
     id2_11 = document.getElementById("true17");
     if(id2_11.value == "title"){
       n +=1;
     } 
     id2_11_1 = document.getElementById("true17_1");
     if(id2_11_1.value == "title"){
       n +=1;
     } 


     id2_12 = document.getElementById("true18");
     if(id2_12.value == "h1"){
       n +=1;
     } 
     id2_12_1 = document.getElementById("true18_1");
     if(id2_12_1.value == "h1"){
       n +=1;
     }


     id2_13 = document.getElementById("true19");
     if(id2_13.value == "p"){
       n +=1;
     } 
     id2_13_1 = document.getElementById("true19_1");
     if(id2_13_1.value == "p"){
       n +=1;
     } 



     id2_14 = document.getElementById("true20");
     if(id2_14.value == "em"){
       n +=1;
     } 
     id2_14_1 = document.getElementById("true20_1");
     if(id2_14_1.value == "em"){
       n +=1;
     } 

     id2_15 = document.getElementById("true21");
     if(id2_15.value == "width"){
       n +=1;
     } 
//اسؤال الثاني 15 سؤال
/**********************************************************************************************///////////////////////********************/

id_3_1= document.getElementById("true22").checked;
if(id_3_1 == true){
  n +=1;
}
id_3_2= document.getElementById("true23").checked;
if(id_3_2 == true){
  n +=1;
}
id_3_3= document.getElementById("true24").checked;
if(id_3_3 == true){
  n +=1;
}
id_3_4= document.getElementById("true25").checked;
if(id_3_4 == true){
  n +=1;
}
id_3_5= document.getElementById("true26").checked;
if(id_3_5 == true){
  n +=1;
}
id_3_6= document.getElementById("true27").checked;
if(id_3_6 == true){
  n +=1;
}
id_3_7= document.getElementById("true28").checked;
if(id_3_7 == true){
  n +=1;
}
id_3_8= document.getElementById("true29").checked;
if(id_3_8 == true){
  n +=1;
}

//الشرط
if (n > 25) {
   document.getElementById("elnteg1").style.display="inline-block";
  document.getElementById("nase7a_1_1").style.display="inline-block";
  document.getElementById("koes").style.display="inline-block";
} 
else {
  document.getElementById("elnteg2").style.display="inline-block";
  document.getElementById("nase7a_2_2").style.display="inline-block";
  document.getElementById("khra_foc_demagk").style.display="inline-block"; 
}

/*document.getElementById("result").innerHTML= n;*/
}
function n8() {
  document.getElementById("contenr55").style.display = "none";
  document.getElementById("contenr6").style.display = "block";
  
}function n9() {
  document.getElementById("contenr6").style.display = "none";
  document.getElementById("contenr55").style.display = "block";
  
}

oncontextmenu=function(){
  return false
  }
