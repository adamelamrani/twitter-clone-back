const { MongoMemoryServer } = require("mongodb-memory-server");
const { default: mongoose } = require("mongoose");
const Tuit = require("../../db/models/Tuit");
const { getAllTuits, updateTuit } = require("./tuitahController");
const connectDataBase = require("../../db/index");

jest.mock("../../db/models/Tuit");

let tuits;
let dataBase;

beforeAll(async () => {
  dataBase = await MongoMemoryServer.create();
  const mongoUrl = dataBase.getUri();
  await connectDataBase(mongoUrl);
});

beforeEach(async () => {
  jest.resetAllMocks();
  tuits = [
    {
      date: "2020",
      text: "tuitah rules",
      likes: 0,
      id: 2,
    },
  ];
});

afterEach(async () => {
  await Tuit.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
  await dataBase.stop();
});

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

      Tuit.find = jest.fn().mockResolvedValue(tuits);

      await getAllTuits(null, res);

      expect(Tuit.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ tuits });
    });
  });
});

describe("Given an updateTuit function", () => {
  describe("When it receives a request with an update in the body", () => {
    test("Then it should call the method json with with the update", async () => {
      const id = 2;
      const update = { text: "hola" };
      const req = { params: id, body: update };

      const res = { status: jest.fn().mockReturnThis, json: jest.fn() };
      Tuit.findByIdAndUpdate = jest.fn().mockResolvedValue(id, req.body);

      await updateTuit(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
