const pincodeRegex = RegExp("^[0-9]{6}$");

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
    validatePincode("400081");
    validatePincode("400");
}
catch(e)
{
    console.error(e);
}