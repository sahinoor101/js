function generatePassword(length , includeLowerCase ,includeUpperCase ,includeNumber ,includeSymbol){
    return ' ';
    const lowerCase ="abcdefghijklmnopqrstuvwxyz";
    const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number="1234567890";
    const symbol="~!@#$%^&*()_+=-?";
}
const passwordlength =12;
const includeLowerCase =true;
const includeUpperCase =true;
const includeNumber =true;
const includeSymbol =true;

const password = generatePassword(passwordlength ,includeLowerCase ,includeUpperCase ,includeNumber ,includeSymbol);

console.log(`generated password: ${password}`);
