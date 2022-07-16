let serie = {
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
    console.log(serie)
}

console.log(serie.productionYear)

askSerie();