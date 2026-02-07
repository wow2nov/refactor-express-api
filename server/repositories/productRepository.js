import { db } from "../utils/db.js";
import { ObjectId } from "mongodb";

const collection = db.collection("products");

const findAll = async (query) => {
  return collection.find(query).limit(10).toArray();
};

const findById = async (id) => {
  return collection.findOne({ _id: new ObjectId(id) });
};

const create = async (productData) => {
  const result = await collection.insertOne(productData);
  return { ...productData, _id: result.insertedId };
};

const update = async (id, productData) => {
  await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: productData }
  );
  return productData;
};

const remove = async (id) => {
  return collection.deleteOne({ _id: new ObjectId(id) });
};

export default {
  findAll,
  findById,
  create,
  update,
  delete: remove,
};
