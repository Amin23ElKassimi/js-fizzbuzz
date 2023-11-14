

// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
for ( let index = 1; index <= 100 ; index++){

    // per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del
    if ((index % 3 === 0) && (index % 5 === 0)){
        console.log(index +' FizzBuzz');

    }
    // per i numeri che NON sono sia multipli di 3 che di 5 stampi solo Index
    if (!(index % 3 === 0) && !(index % 5 === 0)){
        console.log(index);
  
    }
    //  Solo per i multipli di 3 stampi “Fizz” al posto del numero
    if ((index % 3 === 0)  &&  !((index % 3 === 0) && (index % 5 === 0))){
        console.log(index +' Fizz');

    }
    //  Solo per i multipli di 5 stampi Buzz al posto del numero
    if ((index % 5 === 0)  &&  !((index % 3 === 0) && (index % 5 === 0))){
        console.log(index +' Buzz');

    }
}


// ################### Bonus 01 & Bonus 02 ################### 

// Create Cards
const wrapperElement = document.querySelector('div.wrapper');

for ( let i = 1; i <= 100 ; i++){
    const cardElement = document.createElement('div');

    // per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log(i +' FizzBuzz');
        const headingCardElement = document.createElement('span');
        headingCardElement.innerHTML ='FizzBuzz';
        cardElement.appendChild(headingCardElement);
        wrapperElement.appendChild(cardElement);
        cardElement.className = 'card bg-danger';
    }

    // per i numeri che NON sono sia multipli di 3 che di 5 stampi solo Index
    if (!(i % 3 === 0) && !(i % 5 === 0)){
        console.log(i);
        const headingCardElement = document.createElement('span');
        headingCardElement.innerHTML = i;
        cardElement.appendChild(headingCardElement);
        wrapperElement.appendChild(cardElement);
        cardElement.className = 'card bg-info';
    }

    //  Solo per i multipli di 3 stampi “Fizz” al posto del numero
    if ((i % 3 === 0)  &&  !((i % 3 === 0) && (i % 5 === 0))){
        console.log(i +' Fizz');
        const headingCardElement = document.createElement('span');
        headingCardElement.innerHTML = 'Fizz';
        cardElement.appendChild(headingCardElement);
        wrapperElement.appendChild(cardElement);
        cardElement.className = 'card bg-success';
    }
    //  Solo per i multipli di 5 stampi Buzz al posto del numero
    if ((i % 5 === 0)  &&  !((i % 3 === 0) && (i % 5 === 0))){
        console.log(i +' Buzz');
        const headingCardElement = document.createElement('span');
        headingCardElement.innerHTML ='Buzz';
        cardElement.appendChild(headingCardElement);
        wrapperElement.appendChild(cardElement);
        cardElement.className = 'card bg-warning';
    }
}












