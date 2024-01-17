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
