writePassword.addEventListener("click", () => {
    modal.classList.add('visible');
    modal.classList.remove('hidden');
    });
     
    submitButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    });
    
    closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
    });
      
    function generatePassword() {
    return getArrayLength();
    }
    
    function getCriteria() {
       const arrayType = [];
       const special = specialCriteria.checked;
       const lower = lowerCaseCriteria.checked;
       const upper = upperCaseCriteria.checked;
       const number = numberCriteria.checked;
       if(special && lower && upper && number) {
           arrayType.push("s", "l", "u", "n");
           return arrayType;
       } else if(special && lower && upper && !number) {
           arrayType.push("s", "l", "u");
           return arrayType;
       } if(!special && lower && upper && number) {
           arrayType.push("l", "u", "n");
           return arrayType;
       }if(special && lower && !upper && number) {
           arrayType.push("s", "l", "n");
           return arrayType;
       } if(special && !lower && upper && number) {
           arrayType.push("s", "u", "n");
           return arrayType;
       } else if(special && !lower && upper && !number) {
            arrayType.push("s", "u");
            return arrayType;
       }else if(special && !lower && !upper && number) {
           arrayType.push("s", "n");
           return arrayType;
       } else if(special && lower && !upper && !number) {
           arrayType.push("s", "l");
           return arrayType;
       } else if(!special && lower && upper && !number) {
           arrayType.push("l", "u");
           return arrayType;
       } else if(!special && lower && !upper && number) {
           arrayType.push("l", "n");
           return arrayType;
       } else if(!special && !lower && upper && number) {
           arrayType.push("u", "n");
           return arrayType;
       } else if(special && !lower && !upper && !number) {
           arrayType.push("s");
           return arrayType;
       } else if(!special && lower && !upper && !number) {
           arrayType.push("l");
           return arrayType;
       } else if(!special && !lower && upper && !number) {
           arrayType.push("u");
           return arrayType;
       } else if(!special && !lower && !upper && number) {
           arrayType.push("n");
           return arrayType;
       }
        console.log("ARRAY-CRITERIA: ", arrayType);
    }
     
    function getArrayLength() { //parametro letras dentro de la funcion.....
    const inputLengthValue = lengthCriteria.value
    if(inputLengthValue >= 8 && inputLengthValue <= 128) {
      console.log("length array: ", parseInt(inputLengthValue));
      const arrayLength = parseInt(inputLengthValue);
      const passwordArray = [];
        for (let i = 0; i < arrayLength; i++) { 
           //  const characterTypeArray = ["s", "l", "u", "n"];
           const characterTypeArray = getCriteria();
           randomCharacter = characterTypeArray[Math.floor(Math.random()*characterTypeArray.length)];
           console.log("random Method choice: ",randomCharacter);      
               if(randomCharacter == "s") {
                   passwordArray.push(getSpecialCharacter());
               } else if(randomCharacter == "u") {
                   passwordArray.push(getUpperCaseCharacter());
               } else if(randomCharacter == "l") {
                   passwordArray.push(getLowerCaseCharacter());
               }else if(randomCharacter == "n") {
                   passwordArray.push(getNumber());
               }
        }
        console.log("password array: ",passwordArray)
      
        //passwordArray.forEach(item => console.log(item))
        const wholePassword = passwordArray.join('')
        console.log('join password: ',wholePassword);
        return wholePassword
    } else {
      return "ERROR! You must enter a number between 8 and 128."
      }
    }
    function getSpecialCharacter() {
    const specialCharactersArray = [];
      
    for(let specialCharacter = 0; specialCharacter <= 128; specialCharacter++) {
      if(specialCharacter >= 32 && specialCharacter <= 47 ||
        specialCharacter >= 58 && specialCharacter <= 64 ||
        specialCharacter >= 91 && specialCharacter <= 96 ||
        specialCharacter>=123 && specialCharacter<=126) {
        
          specialCharactersArray.push(String.fromCharCode(specialCharacter));
      }
    }
    console.log(specialCharactersArray);
    if(specialCriteria.checked) {
      const randomCharacter = specialCharactersArray[Math.floor(Math.random()* specialCharactersArray.length)];
      console.log("random special character:",randomCharacter);// ya me esta retornando un caracter special solo
      return randomCharacter
    }
    }
    
    function getLowerCaseCharacter() {
       //97 - 122
       const lowerCaseArray = [];
       for(let i = 0; i <= 128; i++) {
           if(i >= 97 && i <= 122) {
               lowerCaseArray.push(String.fromCharCode(i));
           }
       }
       console.log(lowerCaseArray);
       if(lowerCaseCriteria.checked) {
           const randomCharacter = lowerCaseArray[Math.floor(Math.random()* lowerCaseArray.length)];
           console.log('random lowerCase character:', randomCharacter);
           return randomCharacter
       }
    }
    function getUpperCaseCharacter() {
       //65 - 90
       const upperCaseArray = [];
       for(let i = 0; i <= 128; i++) {
           if(i >= 65 && i <= 90) {
               upperCaseArray.push(String.fromCharCode(i));
           }
       }
       console.log(upperCaseArray);
       if(upperCaseCriteria.checked) {
           const randomCharacter = upperCaseArray[Math.floor(Math.random()* upperCaseArray.length)];
           console.log('random upperCase character:', randomCharacter);
           return randomCharacter
       }
    }
    
    function getNumber () {
       if(numberCriteria.checked){
           const number = Math.floor(Math.random() * (9 - 1) + 1)
           console.log('random number: ', number);
           return number
       }
    }
    