"use client";

import {
  useGetPlayer,
  useUpdatePlayer,
} from "@/src/07_shared/lib/hooks/player";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { playerSchema } from "@/src/07_shared/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/src/04_widgets/form/ui";
import { MODIFY_PLAYER_FORM_FIELDS_INFO } from "@/src/06_entities/populate-form-fields/lib/constants";
import { toast } from "react-toastify";
import { IPlayer } from "@/src/07_shared/models";

type Params = {
  params: {
    id: number;
  };
};

export const AdminEditPlayerPage = ({ params }: Params) => {
  const { data: playerData } = useGetPlayer(params.id);
  const { mutate: updatePlayer } = useUpdatePlayer();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(playerSchema),
  });

  useEffect(() => {
    if (playerData) {
      reset(playerData);
    }
  }, [playerData, reset]);

  const onSubmit = (data: any) => {
    updatePlayer(data, {
      onSuccess: () => {
        toast.success("Player updated successfully");
      },
      onError: (err) => {
        console.error(err);
      },
    });
  };

  const onInvalid = () => console.error(errors);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Player</h2>

      <Form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        register={register}
        errors={errors}
        formFields={MODIFY_PLAYER_FORM_FIELDS_INFO}
        buttonText={"Modify Player"}
      />
    </div>
  );
};
