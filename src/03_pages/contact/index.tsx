"use client";

import { Form } from "@/src/04_widgets/form/ui";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { PageContainer, PageTitle } from "@/src/07_shared/ui";

import { useCreateContactMessage } from "@/src/07_shared/lib/hooks/contact";
import { useAtomValue } from "jotai";

import { toast } from "react-toastify";
import { hasAgreedAtom } from "@/src/07_shared/lib/store";

import { CONTACT_FORM_FIELDS_INFO } from "@/src/06_entities/populate-form-fields/lib/constants";
import { contactSupportTeamSchema } from "@/src/07_shared/lib/schemas";

export function ContactPage() {
  const hasAgreed = useAtomValue(hasAgreedAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSupportTeamSchema),
  });

  const { mutate: createContact } = useCreateContactMessage();

  const onSubmit = (data: any) => {
    if (hasAgreed) {
      createContact(data, {
        onSuccess: () => {
          toast.success("Сообщение отправлено. Ожидайте ответ в течении дня.");
        },
      });
    } else {
      toast.error("Согласитесь с политикой конфиденциальности прежде чем отправить сообщение");
    }
  };

  const onInvalid = () => console.error(errors);

  return (
    <PageContainer>
      <PageTitle
        title="Служба поддержки"
        description="Опишите менее чем в 70 словах, с какой проблемой вы столкнулись, и укажите активный адрес электронной почты, по которому мы вам ответим."
      />

      <Form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        register={register}
        errors={errors}
        formFields={CONTACT_FORM_FIELDS_INFO}
        buttonText={"Отправить"}
        hasPolicyAgreed={true}
      />
    </PageContainer>
  );
}
