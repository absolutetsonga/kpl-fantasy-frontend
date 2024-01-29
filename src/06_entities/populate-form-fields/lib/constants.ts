import { FormFieldInfoType } from "./types";

export const REGISTER_FORM_FIELDS_INFO: FormFieldInfoType[] = [
  {
    name: "first_name",
    type: "text",
    text: "First Name",
  },
  {
    name: "last_name",
    type: "text",
    text: "Last Name",
  },
  {
    name: "email",
    type: "email",
    text: "Email",
  },
  {
    name: "password",
    type: "password",
    text: "Password",
  },
  {
    name: "re_password",
    type: "password",
    text: "Confirm Password",
  },
];

export const LOGIN_FORM_FIELDS_INFO: FormFieldInfoType[] = [
  {
    name: "email",
    type: "email",
    text: "Email",
  },
  {
    name: "password",
    type: "password",
    text: "Password",
    link: {
      linkText: "Forgot password?",
      linkUrl: "/password-reset",
    },
  },
];

export const REQUEST_PASSWORD_FORM_FIELDS_INFO: FormFieldInfoType[] = [
  {
    name: "email",
    type: "email",
    text: "Email",
  },
];

export const RESET_PASSWORD_FORM_FIELDS_INFO: FormFieldInfoType[] = [
  {
    name: "password",
    type: "password",
    text: "Password",
  },
  {
    name: "re_password",
    type: "password",
    text: "Confirm Password",
  },
];

export const MODIFY_PLAYER_FORM_FIELDS_INFO: FormFieldInfoType[] = [
  {
    name: "name",
    type: "text",
    placeholder: "Name",
    text: "Name",
  },
  {
    name: "age",
    type: "number",
    placeholder: "Age",
    text: "Age",
  },
  {
    name: "market_value",
    type: "number",
    placeholder: "Market Value",
    text: "Market Value",
  },
  {
    name: "price",
    type: "number",
    placeholder: "Price",
    text: "Price",
  },
  {
    name: "club",
    type: "text",
    placeholder: "Club",
    text: "Club",
  },
  {
    name: "position",
    type: "text",
    placeholder: "Position",
    text: "Position",
  },
  {
    name: "nationality",
    type: "text",
    placeholder: "Nationality",
    text: "Nationality",
  },
  {
    name: "image_url",
    type: "text",
    placeholder: "Image URL",
    text: "Image URL",
  },
  {
    name: "nationality_image_url",
    type: "text",
    placeholder: "Nationality Image URL",
    text: "Nationality Image URL",
  },
  {
    name: "is_injured",
    type: "checkbox",
    placeholder: "Is Injured",
    text: "Is Injured",
  },
  {
    name: "is_right_foot",
    type: "checkbox",
    placeholder: "Is Right Foot",
    text: "Is Right Foot",
  },
];
