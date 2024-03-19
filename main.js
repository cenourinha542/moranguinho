var motivos = [
    " É muito educativo",
    "É bem melhor do que a versão atual",
    "É muito fofinha",
    "Ela é amiga dos animais",
      "Fez a infância de muitas crianças"
  ];
  
  var imagens = [ "https://i.ytimg.com/vi/r-0CUY8xK1I/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDX9VTxfvEzhiUYq-8Zym0h-nOybg",
    "https://www.abcdacomunicacao.com.br/wp-content/uploads/image008.jpg",
    "https://i.pinimg.com/474x/76/04/e1/7604e1232c7f173ae62c8b638a4518a9.jpg","https://i.ytimg.com/vi/hQWXe4u5ctE/maxresdefault.jpg",         "https://m.media-amazon.com/images/S/pv-target-images/56794e8e603c496462fbb906cf511e18dbe3f63b5449bbd55751a25188b51d37.jpg"
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }
  