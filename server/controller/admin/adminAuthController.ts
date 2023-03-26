import adminAuth from "../../model/admin/adminAuth";
import mongoose from "mongoose";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import adminWalletModel from "../../model/admin/admindashboard/adminWallets";
import otpgenerator from "otp-generator";


//admin sign up

export const adminSignup = async (req: Request, res: Response) => {
    try {
      const { companyname, companyEmail, yourName, password, walletNumber } =
        req.body;
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
  
      const dater = Date.now();
  
      const generateNumber = Math.floor(Math.random() * 78) + dater;
      const genCode = otpgenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        digits: true,
        lowerCaseAlphabets: false,
      });
      const admin = await adminAuth.create({
        companyCode: genCode,
        companyname,
        companyEmail,
        yourName,
        password: hash,
        walletNumber: generateNumber,
      });
  
      const createWallet = await adminWalletModel.create({
        _id: admin?._id,
        balance: 15000,
  
        credit: 0,
        debit: 0,
      });
  
      admin?.wallet.push(new mongoose.Types.ObjectId(createWallet?._id));
  
      admin.save();
  
      return res.status(200).json({
        message: "Success",
        data: admin,
      });
    } catch (error: any) {
      return res.status(400).json({
        message: "an error occurred while creating admin",
        data: error.message,
      });
    }
  };


  //admin sign in

  export const adminSignin = async (req: Request, res: Response) => {
    try {
      const { companyEmail, password } = req.body;
  
      const admin = await adminAuth.findOne({ companyEmail });
  
      return res.status(200).json({
        message: "Success , admin is logged in",
        data: admin,
      });
    } catch (error: any) {
      return res.status(400).json({
        message: "an error occurred while creating admin",
        data: error.message,
      });
    }
  };


//get all admins
export const getAllAdmin = async (req: Request, res: Response) => {
    try {
      const admin = await adminAuth.find();
  
      return res.status(200).json({
        message: "get all admins",
        data: admin,
      });
    } catch (error: any) {
      return res.status(400).json({
        message: "failed to get admin",
        data: error,
        err: error.message,
      });
    }
  };  


  export const getOneAdmin = async (req: Request, res: Response) => {
    try {
      const admin = await adminAuth.findById(req.params.adminId).populate([
        {
          path: "wallet",
          select: "balance credit debit",
        },
        {
          path: "viewUser",
        },
      ]);
  
      return res.status(200).json({
        message: "get one admin",
        data: admin,
      });
    } catch (error: any) {
      return res.status(400).json({
        message: "failed to get one admin",
        data: error,
        err: error.message,
      });
    }
  };  