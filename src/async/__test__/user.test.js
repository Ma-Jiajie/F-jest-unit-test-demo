import { register } from "../user";
import axios from "../../__mocks__/axios";
jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // Arrange
    const username = "abcdef";
    const password = "123451qa";
    // Act
    const result = await register(username, password);
    // Assert
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(result).toEqual({});
  });
});
