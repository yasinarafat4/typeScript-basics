{
  // Object: Represents any non-primitive value.

  let person: object = { name: "Alice", age: 30 };

  let user: {
    name: string;
    age: number;
  };
  user = {
    name: "yasin arafat",
    age: 22,
  };
  console.log(user);

  // Also we can do it another way
  let user2: object;
  // user2 = "Yasin"; //error
  // user2 = 22; //error
  user2 = { name: "yasin", age: 22 }; //correct
  console.log(user2);

  //   If we want to make array of object
  let user3: object[];
  // user3 = { name: "yasin", age: 22 }; // error
  user3 = [{ name: "yasin", age: 22 }]; // correct
  console.log(user3);
}

// Note: To keep any property optional then we can set ? mark after the value name. example:
let user5: {
  name: string;
  age?: number;
};
user5 = { name: "Arafat" }; // Normally we see an error that Property 'age' is missing in type but when we give "?" after age then it will be optional.
console.log(user5);
