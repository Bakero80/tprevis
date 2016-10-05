var list = document.getElementById('list');

list.addEventListener('change', function() {

       // On affiche le contenu de l'élément <option> ciblé par la propriété selectedIndex
       console.log(list.options[list.selectedIndex].innerHTML);

   });
