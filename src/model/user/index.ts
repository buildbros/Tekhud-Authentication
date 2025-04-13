import { model, Schema, Types } from'mongoose';
// import { message } from'../../config/responseJson';
// import ROLE   from'../roles';
// import {  IUser } from '../../lib/interface/Auth';

const authSchema = new Schema(
  {
    passKey: {
      type: String,
    },
  },
  { _id: false },
);

const addressSchema = new Schema(
  {
    formattedAddress: {
      type: String,
      default: '',
    },
    streetAddress: String,
    locality: String,
    subLocality: String,
    region: String,
    country: String,
    postalCode: String,
    geo: {
      index: '2dsphere',
      type: [Number],
      default: [0, 0],
    },
  },
  { _id: false },
);

const phoneSchema = new Schema(
  {
    dialCode: Number,
    iso2: {
      type: String,
      uppercase: true,
    },
    country: {
      type: String,
      uppercase: true,
    },
    number: String,
  },
  { _id: false },
);

const contactSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
    },
    phone: phoneSchema,
  },
  { _id: false },
);

const userSchema = new Schema (
  {
    auth: authSchema,
    userName: String,
    contact: contactSchema,
    address: addressSchema,
    picture: { type: String, default: '' },
    verification: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    role: { type: String, enum: ['ADMIN', 'EMPLOYEE'] },
    emailOtp: String,
    resetPassword: {
      otp: String,
      token: String,
      isUsed: Boolean,
    },
    isArchived: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ['ACTIVE', 'FIRED', 'RESIGNED', 'PART_TIME', 'FULL_TIME', 'IN_ACTIVE'],
      default: 'ACTIVE',
    },
    dob: Date,
    travelAccounts: [
      {
        type: {
          type: String,
          trim: true,
        },
        name: {
          type: String,
          trim: true,
        },
        number: String,
        reward: String,
      },
    ],
    skills: [
      {
        name: {
          type: String,
          trim: true,
        },
        level: {
          type: String,
          enum: ['BEGINNER', 'INTERMEDIATE', 'EXPERT'],
        },
      },
    ],
    restrictions: [
      {
        name: {
          type: String,
          trim: true,
        },
        value: String,
        expirationDate: Date,
      },
    ],
    personalEmail: String,
    dateOfJoining: Date,
    dateOfTermination: Date,
    session: [
      {
        startDate: Date,
        endDate: { type: Date, default: null },
        status: {
          type: String,
          enum: ['FIRED', 'LEFT', 'ACTIVE', 'IN_ACTIVE'],
        },
      },
    ],
    accessRoles: [
      {
        type: String,
        enum: ['LEVEL_1', 'LEVEL_2', 'LEVEL_3', 'LEVEL_4', 'LEVEL_5'],
        default: 'LEVEL_1',
      },
    ],
    title: {
      type: String,
    },
    roleInfo: {
      type: Types.ObjectId,
      // ref: ROLE,
    },
    two_factor_auth: {
      isEnabled: { type: Boolean, default: false },
      auth_type: {
        type: String,
        enum: ['EMAIL', 'MOBILE', 'APP'],
      },
      otp_auth_url: String,
      otp_base32: String,
    },
    nickName: String,
    isNotification: { type: Boolean, default: true },
    isEmailSubscribe: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const User = model('USER', userSchema);

export default User;
