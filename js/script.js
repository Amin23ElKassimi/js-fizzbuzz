

// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:








for ( let index = 1; index <= 100 ; index++){

    // per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del
    if ((index % 3 === 0) && (index % 5 === 0)){
        console.log(index +' FizzBuzz');
    }
    // per i numeri che NON sono sia multipli di 3 che di 5 stampi solo Index
    if (!(index % 3 === 0) && !(index % 5 === 0)){
        console.log(index );
    }
// //  Solo per i multipli di 3 stampi “Fizz” al posto del numero
    if ((index % 3 === 0)  &&  !((index % 3 === 0) && (index % 5 === 0))){
        console.log(index +' Fizz');
    }
// //  Solo per i multipli di 5 stampi Buzz al posto del numero
    if ((index % 5 === 0)  &&  !((index % 3 === 0) && (index % 5 === 0))){
        console.log(index +' Buzz');
    }

    





// //  per i multipli di 3 stampi “Fizz” al posto del numero

//     if (index % 3 === 0){
//         console.log(index +' Fizz');
//     }
// //  per i multipli di 5 stampi “Buzz” al posto del numero

//     if (index % 5 === 0){
//         console.log(index +' Buzz');
//     }


}










    // const cardElement = document.createElement('div');
    // cardElement.className = 'card';

    // const headingCardElement = document.createElement('h2');
    // headingCardElement.innerHTML = i;

    // cardElement.appendChild(headingCardElement);
    // wrapperElement.appendChild(cardElement);
