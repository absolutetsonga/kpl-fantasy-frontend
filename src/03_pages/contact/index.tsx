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
          toast.success("Message created successfully. Check your email");
        },
      });
    } else {
      toast.error("You must agree with our privacy policy");
    }
  };

  const onInvalid = () => console.error(errors);

  return (
    <PageContainer>
      <PageTitle
        title="Contact Support Team"
        description="Describe under 70 words what problem have you faced and provide active email address, where we will respond you."
      />

      <Form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        register={register}
        errors={errors}
        formFields={CONTACT_FORM_FIELDS_INFO}
        buttonText={"Submit"}
        hasPolicyAgreed={true}
      />
    </PageContainer>
  );
}
