"use client";

import { PageContainer } from "@/src/07_shared/ui";

import { Form } from "@/src/04_widgets/form/ui";
import { useResetPasswordRequestForm } from "@/src/05_features/auth-user/lib/hooks";
import { REQUEST_PASSWORD_FORM_FIELDS_INFO } from "@/src/06_entities/populate-form-fields/lib/constants";

import { Metadata } from "next";
import { PageTitle } from "@/src/06_entities/page-title";

export const metadata: Metadata = {
  title: "KPL Fantasy | Password Request Page",
  description: "KPL Fantasy Password Request Page",
};

export const PasswordRequestPage = () => {
  const { register, handleSubmit, onSubmit, onInvalid, errors, status } =
    useResetPasswordRequestForm();

  return (
    <PageContainer>
      <PageTitle>Reset your password</PageTitle>

      <Form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        register={register}
        errors={errors}
        status={status}
        formFields={REQUEST_PASSWORD_FORM_FIELDS_INFO}
        buttonText={"Reset password"}
      />
    </PageContainer>
  );
};
