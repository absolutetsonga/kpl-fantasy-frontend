import { IUser } from "@/src/07_shared/models";

export type FormFieldInfoType = {
  name: keyof IUser;
  type: string;
  text: string;
  placeholder?: string;
  link?: {
    linkText: string;
    linkUrl: string;
  };
};
