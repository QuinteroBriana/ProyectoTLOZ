/*Para mostrar mas opciones con JavaScript*/
  function vermas(id, mostrar){
    if(document.getElementById(id).className=='fas fa-sort-down'){
      document.getElementById(mostrar).style.display='flex';
      document.getElementById(id).classList.remove('fa-sort-down');
      document.getElementById(id).classList.add('fa-sort-up');
    }else{
      document.getElementById(mostrar).style.display='none';
      document.getElementById(id).classList.remove('fa-sort-up');
      document.getElementById(id).classList.add('fa-sort-down');
    }
  }