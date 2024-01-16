import { IUser } from "@/src/07_shared/models";

type FormFieldInfoType = {
  name: keyof IUser;
  type: string;
  text: string;
};

export const FORMFIELDINFO: FormFieldInfoType[] = [
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