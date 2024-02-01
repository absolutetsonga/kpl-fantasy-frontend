"use client";

import { PageContainer } from "@/src/07_shared/ui";
import { Form } from "@/src/04_widgets/form/ui";

import { useRegisterForm } from "@/src/05_features/auth-user/lib/hooks";
import { useRouter } from "next/navigation";
import { Metadata } from "next";

import { SocialButtons } from "@/src/04_widgets/social-auth/ui";
import { PageTitle } from "@/src/07_shared/ui";

import { REGISTER_FORM_FIELDS_INFO } from "@/src/06_entities/populate-form-fields/lib/constants";

export const metadata: Metadata = {
  title: "KPL Fantasy | Register Page",
  description: "KPL Fantasy Register Page",
};

export const Register = () => {
  const router = useRouter();

  const { register, handleSubmit, onSubmit, onInvalid, errors, status } =
    useRegisterForm(router);

  return (
    <PageContainer>
      <PageTitle title="Sign up for your account" />

      <Form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        register={register}
        errors={errors}
        status={status}
        formFields={REGISTER_FORM_FIELDS_INFO}
        buttonText={"Sign in"}
        hasPolicyAgreed
      />

      <SocialButtons />
    </PageContainer>
  );
};
