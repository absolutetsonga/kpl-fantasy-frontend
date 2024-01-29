"use client";

import { AdminEditPlayerPage } from "@/src/03_pages/admin-pages/modify-player";

type Params = {
  params: {
    id: number;
  };
};

const Page = ({ params }: Params) => {
  return <AdminEditPlayerPage params={params} />;
};

export default Page;
