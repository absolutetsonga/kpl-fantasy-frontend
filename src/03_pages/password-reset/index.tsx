"use client";

import { PageContainer } from "@/src/07_shared/ui";

import { Form } from "@/src/04_widgets/form/ui";
import { Metadata } from "next";

import { RESET_PASSWORD_FORM_FIELDS_INFO } from "@/src/06_entities/populate-form-fields/lib/constants";
import { useResetPasswordConfirm } from "@/src/05_features/auth-user/lib/hooks";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "KPL Fantasy | Password Request Page",
  description: "KPL Fantasy Password Request Page",
};

type Props = {
  params: {
    uid: string;
    token: string;
  };
};

export const PasswordResetPage = ({ params }: Props) => {
  const { uid, token } = params;
  const router = useRouter()

  const { register, handleSubmit, onSubmit, onInvalid, errors, status } =
    useResetPasswordConfirm({ uid, token, router });

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
        formFields={RESET_PASSWORD_FORM_FIELDS_INFO}
        buttonText={"Reset password"}
      />
    </PageContainer>
  );
};
