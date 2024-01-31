"use client";

import { Form } from "@/src/04_widgets/form/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSupportTeamSchema } from "@/src/07_shared/lib/schemas";
import { CONTACT_FORM_FIELDS_INFO } from "@/src/06_entities/populate-form-fields/lib/constants";
import { PageTitle } from "@/src/07_shared/ui";
import { useCreateContactMessage } from "@/src/07_shared/lib/hooks/contact";
import { toast } from "react-toastify";

export function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSupportTeamSchema),
  });

  const { mutate: createContact } = useCreateContactMessage();

  const onSubmit = (data: any) => {
    createContact(data, {
      onSuccess: () => {
        toast.success("Player created successfully");
      },
      onError: (err) => {
        toast.error("Something went wrong");
      },
    });

    console.log(data);
  };

  const onInvalid = () => console.error(errors);

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <PageTitle
        title="Contact Support Team"
        description="Aute magna irure deserunt veniam aliqua magna enim voluptate."
      />

      <Form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        register={register}
        errors={errors}
        formFields={CONTACT_FORM_FIELDS_INFO}
        buttonText={"Submit"}
        hasPolicyAgreed={true}
      />
    </div>
  );
}
