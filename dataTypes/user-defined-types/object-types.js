{
    // Object: Represents any non-primitive value.
    var person = { name: "Alice", age: 30 };
    var user = void 0;
    user = {
        name: "yasin arafat",
        age: 22,
    };
    console.log(user);
    // Also we can do it another way
    var user2 = void 0;
    // user2 = "Yasin"; //error
    // user2 = 22; //error
    user2 = { name: "yasin", age: 22 }; //correct
    console.log(user2);
    //   If we want to make array of object
    var user3 = void 0;
    // user3 = { name: "yasin", age: 22 }; // error
    user3 = [{ name: "yasin", age: 22 }]; // correct
    console.log(user3);
}
// Note: To keep any property optional then we can set ? mark after the value name. example:
var user5;
user5 = { name: "Arafat" }; // Normally we see an error that Property 'age' is missing in type but when we give "?" after age then it will be optional.
console.log(user5);
