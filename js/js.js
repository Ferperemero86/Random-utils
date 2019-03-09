
const getRandomNumbSubmit = document.querySelector('#get-random-number-submit');
const getRandomNumbValue = document.querySelector('#get-random-number-value');
const getRandomNumbErrorMessage = document.querySelector('.get-random-number-error-message');
const getRandomNumbResult = document.querySelector('.get-random-number-result');

const getProductSubmit = document.querySelector('#get-product-submit');
const getProductResult = document.querySelector('.get-product-result');
const getProductErrorMessage = document.querySelector('.get-product-error-message');

const getGreatestProductValue = document.querySelector('#get-greatest-product-value');
const getGreatestProductSubmit = document.querySelector('#get-greatest-product-submit');
const getGreatestProductErrorMessage = document.querySelector('.get-greatest-product-error-message');
const getGreatestProductResult = document.querySelector('.get-greatest-product-result');

const getInstancesNumberValue = document.querySelector('#get-instances-number-value');
const getInstancesNumberSubmit = document.querySelector('#get-instances-number-submit');
const getInstancesNumberErrorMessage = document.querySelector('.get-instances-number-error-message');
const getInstancesNumberResult = document.querySelector('.get-instances-number-result');

const inputValRegExp = /^([ ]{1,5})?\w{1,20}([ ]{1,5})?$/;


getRandomNumbSubmit.addEventListener('click', () => {
    let numberLength = getRandomNumbValue.value;
    
    //If value passes test and its minor than 20 generate random number.
    if (inputValRegExp.test(numberLength)) {
        if (numberLength <= 20) {
            getRandomNumbErrorMessage.innerHTML = '';
            RandomUtilsTasks.generateNumber(parseInt(numberLength));

        } else {
            getRandomNumbErrorMessage.innerHTML = `Please insert a maximum number of 20`;
        }

    } else {
        getRandomNumbErrorMessage.innerHTML = `Please insert a valid number`;
    }
    //If a value has been introduced for random number remove rest of error messages.
    if (numberLength !== '') {
        getProductErrorMessage.innerHTML = '';
        getGreatestProductErrorMessage.innerHTML = '';
        getInstancesNumberErrorMessage.innerHTML = '';
    }
})

getProductSubmit.addEventListener('click', () => {
    RandomUtilsTasks.getProduct();
})

getGreatestProductSubmit.addEventListener('click', () => {
    let consecutiveNumbers = getGreatestProductValue.value;

    if (inputValRegExp.test(consecutiveNumbers)){
        getGreatestProductErrorMessage.innerHTML = '';
        RandomUtilsTasks.getGreatestProductOfConsecutiveDigits(consecutiveNumbers);
    } else {
        getGreatestProductErrorMessage.innerHTML = `Please insert a valid Number`;
    }
})

getInstancesNumberSubmit.addEventListener('click', () => {
    let number = getInstancesNumberValue.value;

    if (inputValRegExp.test(number)){
        getInstancesNumberErrorMessage.innerHTML = '';
        RandomUtilsTasks.countInstancesOfNumber(number);
    } else {
        getInstancesNumberErrorMessage.innerHTML = `Please insert a valid Number`;
    }
})


class RandomUtils {
    constructor() {
        this.randomNumberVal = '';
    }

    generateNumber(numberLength) {
        //Generate random number
        let randmNumb = Math.floor(Math.random() * (Math.pow(10,numberLength)));
        
        getRandomNumbResult.innerHTML = `<p class="output-text">result: ${ randmNumb }</p>`;
        this.randomNumberVal = randmNumb;
    }

    getProduct() {
        let randomNumbVal = this.randomNumberVal.toString()
        let productVal = '';
        
        //Convert random number string in a array with the numbers separated by comas.
        let randomNumbValArray = randomNumbVal.split('');

        //Loop array and multiply values
        randomNumbValArray.map((number) => {
            if (productVal === '') {
                productVal = number
            } else {
                productVal *= parseInt(number);
            }
        })

        if (randomNumbVal === '') {
            getProductErrorMessage.innerHTML = `Please introduce a number above to get 
                                                random Number`;
        } else {
            getProductResult.innerHTML = `result: ${ productVal }`;
        }
    }

    getGreatestProductOfConsecutiveDigits(digits) {
        let randomNumbVal = this.randomNumberVal.toString();
        let greatestProduct =  '';
        
        //Convert random number string in a array with the numbers separated by comas.
        let randomNumbValArray = randomNumbVal.split('');
        
        //Loop array, establish limited length provided by the user and multiply numbers.
        for (let i=0; i<digits; i++) {
            if (greatestProduct === '') {
                greatestProduct = parseInt(randomNumbValArray[i]);
            }  else {
                greatestProduct *=  parseInt(randomNumbValArray[i]);
            }
        }

        if(randomNumbVal === '') {
            getGreatestProductErrorMessage.innerHTML = `Please introduce a number above 
                                                        to get random Number`;
        } else {
            if (digits > randomNumbValArray.length || digits <= 0) {
                getGreatestProductErrorMessage.innerHTML = `Please introduce a number 
                                                            bigger than 0 and smaller than 
                                                            random's number length`;
            } else {
                getGreatestProductResult.innerHTML = `<p class="output-text">result: ${ greatestProduct }</p>`; 
            }
        }
    }

    countInstancesOfNumber(number) {
        let randomNumbVal = this.randomNumberVal.toString();
        let instancesNumber = [];
        
        //Convert random number string in a array with the numbers separated by comas.
        let randomNumbValArray = randomNumbVal.split('');
        
        //Loop array. If mach occurs store number in instancesNumber Array.
        randomNumbValArray.map( arrayNumber => {
            if (arrayNumber === number) {
                instancesNumber.push(number);
            }
        })
        
        if(randomNumbVal === '') {
            getInstancesNumberErrorMessage.innerHTML = `Please introduce a number above 
                                                        to get random Number`;
        } else {
            if (number < 0) {
                getInstancesNumberErrorMessage.innerHTML = `Please introduce a number equal or bigger than 0`;                                         
            } else {
                getInstancesNumberResult.innerHTML = `<p class="output-text">result: ${ instancesNumber.length }</p>`; 
            }
        }
    }
}

//Create a instance of the Class.
const RandomUtilsTasks = new RandomUtils();

    
 


    


