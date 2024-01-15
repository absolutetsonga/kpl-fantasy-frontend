"use client";

import { useGetUser } from "@/src/07_shared/lib/hooks/auth/useGetUser";
import { useGoogleUser } from "@/src/07_shared/lib/hooks/auth/useGoogleUser";
import { PageContainer } from "@/src/07_shared/ui";

export const Activation = () => {
  const { data: user, isLoading, isSuccess, isError } = useGetUser();
  const googleUser = useGoogleUser();

  const handleClick = () => {
    const response = googleUser.mutate(
      {
        state: "JMluI69k2i9Jp9LWdSma17G9aOKeqvuG",
        code: "4%2F0AfJohXkhKK2vH7P1W4neDvnhBfma0fWNnsDRKdXGYpIbaAlBa_jlJzfbryPb9zuZL7Q6_g",
      },
      {
        onSuccess: () => console.log("success"),
        onError: () => console.log("error"),
      }
    );

    console.log(response);
  };

  return <PageContainer>Activation</PageContainer>;
};
