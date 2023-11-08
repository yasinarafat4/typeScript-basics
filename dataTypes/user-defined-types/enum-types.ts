{
  //  Enum: Represents a set of named constants. Duplicate data is not allowed.

  enum Color {
    Red,
    Green,
    Blue,
  }

  let selectedColor: Color = Color.Red;

  // Types (Numeric, String, Heterogeneous)
  // Numeric enum: Assigns numeric values to each of its enum members.
  enum UserRequest {
    ReadData,
    // ReadData = 2,
    SaveData,
    UpdateData,
  }
  console.log(UserRequest);
  console.log(UserRequest.ReadData); //1st way to access by Numaricly

  // String enum: Each member is associated with a descriptive string value, making code more readable and self-explanatory.
  enum UserRequest2 {
    ReadData = "READ_DATA",
    // ReadData = 2,
    SaveData = "SAVE_DATA",
    UpdateData = "UPDATE_DATA",
  }
  console.log(UserRequest2.SaveData);
  console.log(UserRequest2["UpdateData"]); // 2nd wat to access by String

  // Heterogeneous enum: Have both numeric and string values, providing flexibility to assign different types of values
  enum User {
    id = 101,
    name = "anisul",
  }
}
