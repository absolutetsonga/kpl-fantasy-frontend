"use client";

import { useForm } from "react-hook-form";
import { useCreatePlayer } from "@/src/07_shared/lib/hooks/player";

import { createPlayerSchema } from "@/src/07_shared/lib/schemas";

import { Form } from "@/src/04_widgets/form/ui";

import { zodResolver } from "@hookform/resolvers/zod";

import { CREATE_PLAYER_FORM_FIELDS_INFO } from "@/src/06_entities/populate-form-fields/lib/constants";
import { toast } from "react-toastify";
import { PageContainer } from "@/src/07_shared/ui";

export const AdminCreatePlayerPage = () => {
  const { mutate: createPlayer } = useCreatePlayer();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createPlayerSchema),
  });

  const onSubmit = (data: any) => {
    createPlayer(data, {
      onSuccess: () => {
        toast.success("Player created successfully");
      },
      onError: (err) => {
        console.error(err);
        toast.error("Something went wrong");
      },
    });
  };

  const onInvalid = () => console.error(errors);

  return (
    <PageContainer>
      <h2 className="text-2xl font-bold mb-4">Create Player</h2>

      <Form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        register={register}
        errors={errors}
        formFields={CREATE_PLAYER_FORM_FIELDS_INFO}
        buttonText={"Create Player"}
      />
    </PageContainer>
  );
};
