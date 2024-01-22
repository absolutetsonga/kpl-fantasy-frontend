"use client";

import { PageContainer } from "@/src/07_shared/ui";

import { Form } from "@/src/04_widgets/form/ui";
import { useResetPasswordRequestForm } from "@/src/05_features/auth-user/lib/hooks";
import { REQUEST_PASSWORD_FORM_FIELDS_INFO } from "@/src/06_entities/populate-form-fields/lib/constants";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KPL Fantasy | Password Request Page",
  description: "KPL Fantasy Password Request Page",
};

export const PasswordRequestPage = () => {
  const { register, handleSubmit, onSubmit, onInvalid, errors, status } =
    useResetPasswordRequestForm();

  return (
    <PageContainer>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-gray-950 dark:text-gray-50">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
          Reset your password
        </h2>
      </div>

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
