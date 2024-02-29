export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  re_password: string;
  has_draft?: boolean;
  is_staff?: boolean;
  team_admin?: null | number;
}
