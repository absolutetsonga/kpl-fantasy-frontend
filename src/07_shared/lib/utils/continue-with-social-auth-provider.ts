import { toast } from "react-toastify";

export default async function continueWithSocialAuth(
  provider: string,
  redirect: string
) {
  try {
    const url = `${process.env.NEXT_PUBLIC_REDIRECT_URL}/api/o/${provider}/?redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}/auth/${redirect}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      credentials: "include",
    });

    console.log(res);

    const data = await res.json();

    console.log(data);

    if (res.status === 200 && typeof window !== "undefined") {
      window.location.replace(data.authorization_url);
    } else {
      toast.error("Something went wrong");
    }
  } catch (err) {
    console.log(err);
    toast.error("Something went wrong");
  }
}