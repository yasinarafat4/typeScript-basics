{
    var firstName = "Yasin";
    var lastName = " Arafat";
    var age = 22;
    var isMale = true;
    var fullName = firstName.concat(lastName);
    console.log("This is ".concat(fullName, ". I am ").concat(age, " yars old. Gender Male : ").concat(isMale));
    // We can do lost of work on the variable. For example:
    console.log(fullName.split(" "));
    console.log(fullName.toUpperCase());
    console.log(fullName.toLocaleLowerCase());
}
