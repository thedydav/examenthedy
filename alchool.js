function ordenar(){
    var res=true;
    var resultado=0;
    do{
  var altot=0;
        var botella=prompt("que botella quieres :\n1. Hipnotiq $700 \n2. Don Perignon $3000 \n3. Don Julio 70 $1500\n4. Chambord $900 \n5. Jägermeister $600 ")
   switch(botella){
    case "1": altot=700+0; 
    break;
    case "2": altot=3000+0; 
    break;
    case "3": altot=1500+0; 
    break;
    case "4": altot=900+0;
    break;
    case "5": altot=600+0;
    break;

    default: alert("no existe")
   break;
     

    }
  resultado=resultado+altot;
  
    res=confirm("deseas volver a comprar")
    }while(res==true)
    alert("total: $"+resultado)
   }
   