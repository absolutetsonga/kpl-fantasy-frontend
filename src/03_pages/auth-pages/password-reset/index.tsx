"use client";

import { PageContainer } from "@/src/07_shared/ui";

import { Form } from "@/src/04_widgets/form/ui";
import { Metadata } from "next";

import { RESET_PASSWORD_FORM_FIELDS_INFO } from "@/src/06_entities/populate-form-fields/lib/constants";
import { useResetPasswordConfirmForm } from "@/src/05_features/auth-user/lib/hooks";
import { useRouter } from "next/navigation";
import { PageTitle } from "@/src/06_entities/page-title";

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
  const router = useRouter();

  const { register, handleSubmit, onSubmit, onInvalid, errors, status } =
    useResetPasswordConfirmForm({ uid, token, router });

  return (
    <PageContainer>
      <PageTitle>Reset your password</PageTitle>

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
