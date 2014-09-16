<script>
  function Runner (name,time) {
  
  this.name = name;
  this.time = time;
  this.startBy ;

  this.checkWinner = function () {
    return (Math.random() * 1.1) + 1.4;
    
  };
  
  this.start = this.checkWinner();
}

function Speedters (racer1,racer2){
  racer1.startBy = racer1.time * racer1.start;
  racer2.startby = racer2.time * racer2.start;
  if (racer1.startBy < racer2.startBy){
    alert(racer1.name +  " has won with a time of " + racer1.startby);
  }
  else{
    alert(racer2.name +  " has won with a time of " + racer2.startby);  
  }
}

var usianRunner = new Runner('Usian', 9.53);
var yohanRunner = new Runner('Yohan', 9.23);

Speedters(usianRunner, yohanRunner); 

  


  


</script>


  
  



