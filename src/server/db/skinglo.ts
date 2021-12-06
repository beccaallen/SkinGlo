import { query } from "express";
import { Connection } from "./index";

export const all = async () => {
  return new Promise((resolve, reject) => {
    Connection.query("Select * from skinglo", (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

const getPhotoPath = async (apiID: number) => {
  return new Promise((resolve, reject) => {
    Connection.query(
      `Select pictures.image from pictures WHERE pictures.api_id = ${apiID}`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

const getConflicts = (productOneID: number, ProductTwoID: number) => {
  return new Promise((resolve, reject) => {
    Connection.query(
      `select ingredientid, conflictid, reason from conflicts where ingredientid = ${productOneID} and conflictid = ${ProductTwoID};`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

export default {
  all,
  getPhotoPath,
  getConflicts
};
