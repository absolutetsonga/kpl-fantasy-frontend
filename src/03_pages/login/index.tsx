"use client";

import { LOGIN_FORM_FIELDS_INFO } from "@/src/06_entities/populate-form-fields/lib/constants";

import { useRouter } from "next/navigation";

import { PageContainer } from "@/src/07_shared/ui";
import { Form } from "@/src/04_widgets/form/ui";

import { Metadata } from "next";
import { useLoginForm } from "@/src/05_features/login-user/lib/hooks";

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
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-gray-950 dark:text-gray-50">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
          Login to your account
        </h2>
      </div>

      <Form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        register={register}
        errors={errors}
        status={status}
        formFields={LOGIN_FORM_FIELDS_INFO}
        buttonText={"Sign in"}
      />
    </PageContainer>
  );
};
