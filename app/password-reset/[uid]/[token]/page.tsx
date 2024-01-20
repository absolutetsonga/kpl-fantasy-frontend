import { PasswordResetPage } from "@/src/03_pages/password-reset";

type Params = {
  params: {
    uid: string;
    token: string;
  };
};

const page = ({ params }: Params) => {
  return <PasswordResetPage params={params}/>;
};

export default page;
