{
  // Number: Represents both integer and floating-point numbers.
  let age: number = 25;
  let price: number = 9.99;

  // String: Represents a sequence of characters.
  let name: string = "Arafat";

  // Boolean: Represents a true or false value.
  let isDone: boolean = false;

  // Any: Represents a dynamic or untyped value. Avoid using this when possible, as it bypasses type checking. if you have no knowledge about the variable type use any type: user input values
  let data: any = 42;
  data = "Hello";

  let password: any;
  let passwords: any[];

  // Void: Represents the absence of a value, typically used as the return type of functions that don't return anything.
  function logMessage(): void {
    console.log("This is a log message.");
  }

  // Null and Undefined: Represent null and undefined values, respectively.
  let n: null = null;
  let u: undefined = undefined;

  // Never: Represents a value that never occurs, such as a function that throws an error or an infinite loop.
  function throwError(message: string): never {
    throw new Error(message);
  }

  // Union: More than one type for variable or function parameter.
  let userId: string | number;
  // userId = 101; // no error
  // userId = "101"; // no error
  // userId = true; // error

  function userIdDataType(userId: string | number) {
    console.log(typeof userId);
  }
  userIdDataType("123"); // no error
  userIdDataType(123);
}
