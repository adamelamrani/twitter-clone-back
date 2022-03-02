const Tuit = require("../../db/models/Tuit");
const getAllTuits = require("./tuitahController");

jest.mock("../../db/models/Tuit");

describe("Given an getAllTuits controller", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe("When it receives a response", () => {
    test("Then it should call method json with a list of tuits of the received response", async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
      const tuits = [
        {
          date: "2020",
          text: "tuitah rules",
          likes: 0,
        },
      ];

      Tuit.find = jest.fn().mockResolvedValue(tuits);

      await getAllTuits(null, res);

      expect(Tuit.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ tuits });
    });
  });
});
