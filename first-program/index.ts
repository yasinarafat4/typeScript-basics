{
  // JS
  let userName = "Arafat";
  console.log(userName);

  // TS
  let userName2: string;
  userName2 = "Arafat";

  // JS Function
  function JsEven(num1, num2) {
    console.log("JsEven", num1 + num2);
  }
  JsEven(4, 6);

  // TS Function
  function TsEven(num1: number, num2: number) {
    console.log("TsEven", num1 + num2);
  }
  TsEven(4, 7);
}
