{
  const firstName: string = "Yasin";
  const lastName: string = " Arafat";
  const age: number = 22;
  const isMale: boolean = true;
  const fullName = firstName.concat(lastName);

  console.log(
    `This is ${fullName}. I am ${age} yars old. Gender Male : ${isMale}`
  );

  // We can do lost of work on the variable. For example:
  console.log(fullName.split(" "));
  console.log(fullName.toUpperCase());
  console.log(fullName.toLocaleLowerCase());
}
