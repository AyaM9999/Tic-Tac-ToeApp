let title =document.querySelector(".title");

let turn="x";

function gameOX(id){

    let element =document.getElementById(id);

    if ( turn ==='x'&& element.innerHTML== ''){
        element.innerHTML='X';
        turn='o';
        title.innerHTML="O";
        

    }
    else if(turn ==='o'&& element.innerHTML== ''){
        element.innerHTML='O';
        turn='x';
        title.innerHTML="X";
     
        

    }
    winnner();
}



let squares=[];
 
function winnner(){
   for (let i=1;i<10;i++){

    squares[i]=document.getElementById("item"+i).innerHTML;
   }
   
//horizantially
   if(squares[1]==squares[2]  &&  squares[2]==squares[3]  && squares[1]!=''){ 
    
       end(1,2,3);


   }

   else if(squares[4]==squares[5]  &&  squares[5]==squares[6]  && squares[4]!=''){end(4,5,6);}

   else if(squares[7]==squares[8]  &&  squares[8]==squares[9]  && squares[7]!=''){end(7,8,9);}

// vertically

  else if(squares[1]==squares[4]  &&  squares[4]==squares[7]  && squares[1]!=''){end(1,4,7);}

  else if(squares[2]==squares[5]  &&  squares[5]==squares[8]  && squares[2]!=''){end(2,5,8);}

  else if(squares[3]==squares[6]  &&  squares[6]==squares[9]  && squares[3]!=''){end(3,6,9);}


  //triangly

  else if(squares[1]==squares[5]  &&  squares[5]==squares[9]  && squares[1]!=''){end(1,5,9);}

  else if (squares[3]==squares[5]  &&  squares[5]==squares[7]  && squares[3]!='') {end(3,5,7);}
}



//the fuction that relod the page and announce the winner
function end(num1,num2,num3){

    //announce the winner
    title.innerHTML=`${squares[num1] } Winner`;

   
    document.getElementById('item'+num2).style.background='#000';
    document.getElementById('item'+num3).style.background='#000';
    document.getElementById('item'+num1).style.background='#000';

    //pre reload
    setInterval(function(){title.innerHTML+='..'},1000);

    //relod page.
    setTimeout(function(){location.reload()},5000);

}