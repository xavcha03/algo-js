var serie = {
    title : "",
    productionYear : "",
    castMembers : []
}

function askSerie(){
    

    serie.title = prompt("Nom de la série : ");
    serie.productionYear = prompt("Année de production : ");
    let castMember = prompt("Membre du casting (laisser blanc pour stopper)");
    while(castMember!=""){
        serie.castMembers.push(castMember);
        castMember = prompt("Membre du casting (laisser blanc pour stopper)");
    }
    
    return serie;
}


function randomizeCast(tvSerie){
    //parcourir le casting et changer la position
    for(let i=0; i<tvSerie.castMembers.length;i++){
        let rand = Math.floor(Math.random() * serie.castMembers.length);
        let curentCastMembre = tvSerie.castMembers[rand]
        tvSerie.castMembers[rand] = tvSerie.castMembers[i];
        tvSerie.castMembers[i] =curentCastMembre;
        console.log("rand" + rand);
    }
    return tvSerie.castMembers;
}

serie = askSerie()

castMembers = randomizeCast(serie);

console.log(serie);

