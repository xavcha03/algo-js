let learners = [
    "Guillaume",
    "Rinaldo",
    "Benoit",
    "Xavier",
    "Xavier",
    "Daniela",
    "Anthony",
    "Julien",
    "Sophie",
    "Axel",
    "Hazem",
    "Kamilla",
    "Stéphanie",
    "Julien", 
    "Doriano",
    "Eddy",
    "Selim",
    "Titouan",
    "Guillaume"
];



/**
 * Return ana rray of randomly selected learners
 * @param {Array} An array of learner  
 * @param {*} n 
 */

function pickLearner(inputAr, n){
     let arrReturn = [];
     if(n>0 && n<learners.length){
        for(let i=0; i<n ; i++){
            arrReturn.push(learners[Math.round(Math.random() * learners.length)]);
        }
     }

     return arrReturn;

}