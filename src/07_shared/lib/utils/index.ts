import continueWithSocialAuth from "./continue-with-social-auth-provider";

export const continueWithGoogle = async () =>
  await continueWithSocialAuth("google-oauth2", "google");
