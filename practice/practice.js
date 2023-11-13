{
    var firstName = "Yasin";
    var lastName = " Arafat";
    var age = 22;
    var isMale = true;
    var fullName = firstName.concat(lastName);
    // console.log(
    //   `This is ${fullName}. I am ${age} yars old. Gender Male : ${isMale}`
    // );
    // We can do lost of work on the variable. For example:
    // console.log(fullName.split(" "));
    // console.log(fullName.toUpperCase());
    // console.log(fullName.toLocaleLowerCase());
    // Array types
    var persons = ["Yasin", "Arafat", "Hasib"];
    // console.log(persons);
    // or we can use Array<string>
    var colors = ["Red", "Green", "Blue"];
    // console.log(colors);
    // Multiple types (union)
    var multiple = ["Yasin", 111, true];
    // console.log(multiple);
    var multipleUnion = [
        "Arafat",
        444,
        false,
    ];
    // console.log(multipleUnion);
    // Array methods
    // for
    for (var i = 0; i < persons.length; i++) {
        var result = persons[i];
        // console.log(result);
    }
    // forEach
    persons.forEach(function (person) {
        // console.log(person);
    });
    // sort
    persons.sort();
    // console.log(persons);
    // push
    persons.push("Jeri");
    // console.log(persons);
    // pop
    persons.pop();
    // console.log(persons);
    // shift
    persons.shift();
    // console.log(persons);
    // unshift
    persons.unshift("Habib");
    // console.log(persons);
    var users = [];
    var user1 = void 0;
    user1 = { userName: "Yasin", userId: 213425161 };
    users.push(user1);
    // console.log(users);
    var user2 = void 0;
    user2 = { userName: "Arafat", userId: 213425162 };
    users.push(user2);
    // console.log(users);
    for (var key in users) {
        console.log([key]);
        console.log(users[key]);
        console.log(users[key]["userName"]);
    }
}
