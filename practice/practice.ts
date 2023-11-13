{
  const firstName: string = "Yasin";
  const lastName: string = " Arafat";
  const age: number = 22;
  const isMale: boolean = true;
  const fullName = firstName.concat(lastName);

  // console.log(
  //   `This is ${fullName}. I am ${age} yars old. Gender Male : ${isMale}`
  // );

  // We can do lost of work on the variable. For example:
  // console.log(fullName.split(" "));
  // console.log(fullName.toUpperCase());
  // console.log(fullName.toLocaleLowerCase());

  // Array types
  const persons: string[] = ["Yasin", "Arafat", "Hasib"];
  // console.log(persons);

  // or we can use Array<string>
  const colors: Array<string> = ["Red", "Green", "Blue"];
  // console.log(colors);

  // Multiple types (union)
  const multiple: (number | string | boolean)[] = ["Yasin", 111, true];
  // console.log(multiple);

  const multipleUnion: Array<number | string | boolean> = [
    "Arafat",
    444,
    false,
  ];
  // console.log(multipleUnion);

  // Array methods

  // for
  for (let i = 0; i < persons.length; i++) {
    const result = persons[i];
    // console.log(result);
  }

  // forEach
  persons.forEach((person) => {
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

  let users: object[] = [];
  let user1: { userName: string; userId: number };
  user1 = { userName: "Yasin", userId: 213425161 };
  users.push(user1);
  // console.log(users);

  let user2: { userName: string; userId: number };
  user2 = { userName: "Arafat", userId: 213425162 };
  users.push(user2);
  // console.log(users);

  for (let key in users) {
    console.log([key]);
    console.log(users[key]);
    console.log(users[key]["userName"]);
  }
}
