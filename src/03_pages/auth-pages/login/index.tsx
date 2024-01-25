"use client";

import { LOGIN_FORM_FIELDS_INFO } from "@/src/06_entities/populate-form-fields/lib/constants";

import { useRouter } from "next/navigation";

import { PageContainer } from "@/src/07_shared/ui";
import { Form } from "@/src/04_widgets/form/ui";

import { Metadata } from "next";
import { useLoginForm } from "@/src/05_features/auth-user/lib/hooks";
import { SocialButtons } from "@/src/04_widgets/social-auth/ui";
import { PageTitle } from "@/src/06_entities/page-title";

export const metadata: Metadata = {
  title: "KPL Fantasy | Login Page",
  description: "KPL Fantasy Login Page",
};

export const Login = () => {
  const router = useRouter();

  const { register, handleSubmit, onSubmit, onInvalid, errors, status } =
    useLoginForm(router);

  return (
    <PageContainer>
      <PageTitle>Log in</PageTitle>

      <Form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        register={register}
        errors={errors}
        status={status}
        formFields={LOGIN_FORM_FIELDS_INFO}
        buttonText={"Sign in"}
      />

      <SocialButtons />
    </PageContainer>
  );
};
