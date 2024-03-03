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
    text: "Почта",
  },
  {
    name: "password",
    type: "password",
    text: "Пароль",
    link: {
      linkText: "Забыли пароль?",
      linkUrl: "/password-reset",
    },
  },
];

export const REQUEST_PASSWORD_FORM_FIELDS_INFO: FormFieldInfoType[] = [
  {
    name: "email",
    type: "email",
    text: "Почта",
  },
];

export const RESET_PASSWORD_FORM_FIELDS_INFO: FormFieldInfoType[] = [
  {
    name: "password",
    type: "password",
    text: "Пароль",
  },
  {
    name: "re_password",
    type: "password",
    text: "Повторите пароль",
  },
];

export const CONTACT_FORM_FIELDS_INFO: FormFieldInfoType[] = [
  {
    name: "email",
    type: "email",
    text: "Почта",
  },
  {
    name: "message",
    type: "message",
    text: "Сообщение",
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
  {
    name: "sofascore_id",
    type: "number",
    placeholder: "Sofascore Id",
    text: "Sofascore Id",
  },
];

export const CREATE_PLAYER_FORM_FIELDS_INFO: FormFieldInfoType[] = [
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
    name: "height",
    type: "text",
    placeholder: "Height",
    text: "Height",
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
  {
    name: "sofascore_id",
    type: "number",
    placeholder: "Sofascore Id",
    text: "Sofascore Id",
  },
  {
    name: "team",
    type: "number",
    placeholder: "Team Id",
    text: "Team Id",
  },
];

export const CREATE_GAMEWEEK_STATS_FIELD_INFO: FormFieldInfoType[] = [
  {
    name: "player",
    type: "text",
    placeholder: "Player ID",
    text: "Player ID",
  },
  {
    name: "gameweek",
    type: "text",
    placeholder: "Gameweek ID",
    text: "Gameweek ID",
  },
  {
    name: "goals_scored",
    type: "number",
    placeholder: "Goals Scored",
    text: "Goals Scored",
  },
  {
    name: "assists",
    type: "number",
    placeholder: "Assists",
    text: "Assists",
  },
  {
    name: "own_goals_scored",
    type: "number",
    placeholder: "Own Goals Scored",
    text: "Own Goals Scored",
  },
  {
    name: "clean_sheets",
    type: "number",
    placeholder: "Clean Sheets",
    text: "Clean Sheets",
  },
  {
    name: "yellow_cards",
    type: "number",
    placeholder: "Yellow Cards",
    text: "Yellow Cards",
  },
  {
    name: "red_cards",
    type: "number",
    placeholder: "Red Cards",
    text: "Red Cards",
  },
];
