{
  //  Enum: Represents a set of named constants. Duplicate data is not allowed.

  enum Color {
    Red,
    Green,
    Blue,
  }

  let selectedColor: Color = Color.Red;

  // Types (Numeric, String, Heterogeneous)
  // Numeric enum:
  enum UserRequest {
    ReadData,
    // ReadData = 2,
    SaveData,
    UpdateData,
  }
  console.log(UserRequest);
  console.log(UserRequest.ReadData); //1st way to access by Numaricly

  // String enum:
  enum UserRequest2 {
    ReadData = "READ_DATA",
    // ReadData = 2,
    SaveData = "SAVE_DATA",
    UpdateData = "UPDATE_DATA",
  }
  console.log(UserRequest2.SaveData);
  console.log(UserRequest2["UpdateData"]); // 2nd wat to access by String

  // Heterogeneous enum:
  enum User {
    id = 101,
    name = "anisul",
  }
}
