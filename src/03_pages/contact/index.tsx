"use client";

import { Form } from "@/src/04_widgets/form/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSupportTeamSchema } from "@/src/07_shared/lib/schemas";
import { CONTACT_FORM_FIELDS_INFO } from "@/src/06_entities/populate-form-fields/lib/constants";

export function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSupportTeamSchema),
  });

  const onSubmit = (data: any) => {
    // createPlayer(data, {
    //   onSuccess: () => {
    //     toast.success("Player created successfully");
    //   },
    //   onError: (err) => {
    //     console.error(err);
    //     toast.error("Something went wrong");
    //   },
    // });
    console.log(data);
  };

  const onInvalid = () => console.error(errors);

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Support Team
        </h2>
        
      </div>

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
