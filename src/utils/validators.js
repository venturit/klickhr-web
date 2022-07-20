export const EMAIL_REGEX = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const NUMBER_REGEX = /^[0-9]+$/;
export const TEXT_REGEX = /^[^0-9]+$/;
export const PHONE_REGEX = /^[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
export const PHONE_PREFIX_REGEX = /^[+]*[0-9]{2,4}$/;
export const LEAST_SMALL = /^(?=.*[a-z])/;
export const LEAST_LARGE = /^(?=.*[A-Z])/;
export const LEAST_NUMBER = /^(?=.*[0-9])/;
export const SPECIAL_CHARACTER = /^(?=.*[@$!%*?&])/;
export const LEAST_LENGTH = /^[A-Za-z\d@$!%*?&]{8,}$/;

export const validateEmail =(value)=> !EMAIL_REGEX.test(value);
export const validatePassword = (value)=>{
    let count =0;
    const obj = {isLeastSmall:false,isLeastLarge:false,isLeastNumber:false,isLeastSpecial:false,isLeastLength:false,all:false,strength:0}
    if(!LEAST_SMALL.test(value)){obj.isLeastSmall=true;count+=1;}
    if(!LEAST_LARGE.test(value)){obj.isLeastLarge=true;count+=1;}
    if(!LEAST_NUMBER.test(value)){obj.isLeastNumber=true;count+=1;}
    if(!SPECIAL_CHARACTER.test(value)){obj.isLeastSpecial=true;count+=1;}
    if(!LEAST_LENGTH.test(value)){obj.isLeastLength=true;count+=1;}
    if(!LEAST_SMALL.test(value)||!LEAST_LARGE.test(value)||!LEAST_NUMBER.test(value)||!SPECIAL_CHARACTER.test(value)||!LEAST_LENGTH.test(value) )obj.all=true;
    obj.strength= ((5-count)/5)*100;
    return obj;
}