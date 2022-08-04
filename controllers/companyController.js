"use strict";

const {app,db} = require('../db');
//const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


const Companies = require("../models/companies");


const addShop = async (req, res, next) => {
  try {
    const data = req.body;
    await db.collection("shops").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllShops = async (req, res, next) => {
  try {
    const shops = await db.collection("shops");
    const data = await shops.get();
    const shopsArray = [];
    if (data.empty) {
      res.status(404).send("No user record found");
    } else {
      data.forEach((doc) => {
        const shop = new Shops(
          doc.id,
          doc.data().accountName,
          doc.data().accountNumber,
          doc.data().ownerId,
          doc.data().address,
          doc.data().bankName,
          doc.data().district,
          doc.data().email,
          doc.data().imageId,
          doc.data().location,
          doc.data().lineName,
          doc.data().ownerName,
          doc.data().postCode,
          doc.data().promptpayId,
          doc.data().province,
          doc.data().shopDetail,
          doc.data().shopId,
          doc.data().shopName,
          doc.data().startDate,
          doc.data().tambon,
          doc.data().tel,
          doc.data().working
        );
        shopsArray.push(shop);
      });
      res.send(shopsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getShop = async (req, res, next) => {
  try {
    const id = req.params.id;
    const shop = await db.collection("shops").doc(id);
    const data = await shop.get();
    if (!data.exists) {
      res.status(404).send("Shop with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateShop = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const shop = await db.collection("shops").doc(id);
    await shop.update(data);
    res.send("Shop record updated successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteShop = async (req, res, next) => {
  try {
    const id = req.params.id;
    await db.collection("shops").doc(id).delete();
    res.send("Record deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addShop,
  getAllShops,
  getShop,
  updateShop,
  deleteShop
};


