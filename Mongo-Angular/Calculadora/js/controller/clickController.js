angular.module('teste')
.controller('clickOperacao', function(){

this.cont=0;
this.somar = function(v1, v2){
    this.cont =v1 + v2;
}
this.subtrair = function(v1, v2){
    
    this.cont = v1-v2;

}
this.dividir = function(v1, v2){
   
    this.cont = v1/v2;

}
this.multiplicar = function(v1, v2){
  
    this.cont = v1*v2;

}

});