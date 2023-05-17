function calcularPrecio() {
    var cantidad = document.getElementById("cantidad").value;
    var descuento = document.getElementById("descuento").value;
    
    var precioEntrada = 200;
    var precioConDescuento = precioEntrada * (1 - descuento);
    var precioTotal = precioConDescuento * cantidad;
  
  
   var mensaje = "Total a pagar $ " + precioTotal.toFixed(2);
  
    document.getElementById("total").innerHTML = mensaje;
    document.getElementById("total").style.color = 'blue'
    document.getElementById("total").style.fontWeight = 'bold'
   
  }


  function borrarPrecio() {
    var cantidad = document.getElementById("cantidad").value;
    var descuento = document.getElementById("descuento").value;
    
   
    var precioTotal = 0;
  
  
   var mensaje = "Total a pagar $";
  
    document.getElementById("total").innerHTML = mensaje;
    document.getElementById("total").style.color = 'black'
    document.getElementById("total").style.fontWeight = 'normal'
   
 
  }