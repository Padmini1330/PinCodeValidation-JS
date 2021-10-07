const pincodeRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");

function validatePincode(pincode)
{
    if(pincodeRegex.test(pincode))
        console.log(pincode + " is Valid");
    else
        throw pincode + " is Invalid";
}

try
{
    validatePincode("400088");
    validatePincode("400 088");
    validatePincode("400111");
    validatePincode("A00111");
}

catch(e)
{
    console.error(e);
}