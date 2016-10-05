var link = document.getElementById('link');

link.addEventListener('click', function(e) {
       e.preventDefault(); // On bloque l'action par défaut de cet événement
       alert('Vous avez cliqué !');
   });
