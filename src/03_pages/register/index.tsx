"use client";

import { PageContainer } from "@/src/07_shared/ui";
import { Form } from "@/src/04_widgets/form/ui";

import { useRegisterForm } from "@/src/05_features/register-user/lib/hooks";
import { useRouter } from "next/navigation";
import { Metadata } from "next";

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
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-gray-950 dark:text-gray-50">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
          Sign up for your account
        </h2>
      </div>

      <Form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        register={register}
        errors={errors}
        status={status}
        formFields={REGISTER_FORM_FIELDS_INFO}
        buttonText={"Sign in"}
      />
    </PageContainer>
  );
};
