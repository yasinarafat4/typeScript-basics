{
    // Number: Represents both integer and floating-point numbers.
    var age = 25;
    var price = 9.99;
    // String: Represents a sequence of characters.
    var name_1 = "Arafat";
    // Boolean: Represents a true or false value.
    var isDone = false;
    // Any: Represents a dynamic or untyped value. Avoid using this when possible, as it bypasses type checking. if you have no knowledge about the variable type use any type: user input values
    var data = 42;
    data = "Hello";
    var password = void 0;
    var passwords = void 0;
    // Void: Represents the absence of a value, typically used as the return type of functions that don't return anything.
    function logMessage() {
        console.log("This is a log message.");
    }
    // Null and Undefined: Represent null and undefined values, respectively.
    var n = null;
    var u = undefined;
    // Never: Represents a value that never occurs, such as a function that throws an error or an infinite loop.
    function throwError(message) {
        throw new Error(message);
    }
    // Union: More than one type for variable or function parameter.
    var userId = void 0;
    // userId = 101; // no error
    // userId = "101"; // no error
    // userId = true; // error
    function userIdDataType(userId) {
        console.log(typeof userId);
    }
    userIdDataType("123"); // no error
    userIdDataType(123);
}
