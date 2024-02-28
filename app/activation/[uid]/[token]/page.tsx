import { ActivationPage } from "@/src/03_pages/auth-pages/activation";

type Params = {
  params: {
    uid: string;
    token: string;
  };
};

const page = ({ params }: Params) => {
  return <ActivationPage params={params} />;
};

export default page;
