import { FormFieldInfoTypeUser } from "./types";

export const REGISTER_FORM_FIELDS_INFO: FormFieldInfoTypeUser[] = [
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

export const LOGIN_FORM_FIELDS_INFO: FormFieldInfoTypeUser[] = [
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

export const REQUEST_PASSWORD_FORM_FIELDS_INFO: FormFieldInfoTypeUser[] = [
  {
    name: "email",
    type: "email",
    text: "Email",
  },
];

export const RESET_PASSWORD_FORM_FIELDS_INFO: FormFieldInfoTypeUser[] = [
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

