const { MongoMemoryServer } = require("mongodb-memory-server");
const { default: mongoose } = require("mongoose");
const Tuitero = require("../../db/models/Tuitero");
const connectDataBase = require("../../db/index");
const getAllTuitero = require("./tuiteroController");

jest.mock("../../db/models/Tuitero");

let tuiteros;
let dataBase;

beforeAll(async () => {
  dataBase = await MongoMemoryServer.create();
  const mongoUrl = dataBase.getUri();
  await connectDataBase(mongoUrl);
});

beforeEach(async () => {
  jest.resetAllMocks();
  tuiteros = [
    {
      name: "Adam",
      username: "Adam0",
    },
  ];
});

afterEach(async () => {
  await Tuitero.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
  await dataBase.stop();
});

describe("Given an getAllTuitero controller", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe("When it receives a response", () => {
    test("Then it should call method json with a list of tuitero of the received response", async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      Tuitero.find = jest.fn().mockResolvedValue(tuiteros);

      await getAllTuitero(null, res);

      expect(Tuitero.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ tuiteros });
    });
  });
});
