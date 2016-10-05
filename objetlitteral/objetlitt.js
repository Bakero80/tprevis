var family = {
    self: 'Sébastien',
    sister: 'Laurence',
    brother: 'Ludovic',
    cousin_1: 'Pauline',
    cousin_2: 'Guillaume'
};

for (var id in family) { // On stocke l'identifiant dans « id » pour parcourir l'objet « family »

    console.log(family[id]);

}
