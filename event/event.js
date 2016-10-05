var parent1 = document.getElementById('parent1'),
    result = document.getElementById('result');

    parent1.addEventListener('mouseover', function(e) {
       result.innerHTML = "L'élément déclencheur de l'événement \"mouseover\" possède l'ID : " + e.currentTarget.id;
   });
