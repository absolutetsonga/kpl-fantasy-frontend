"use client";
import { Form } from "@/src/04_widgets/form/ui";
import { useCreateGameWeekStats } from "@/src/07_shared/lib/hooks/gameweek-stats";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CREATE_GAMEWEEK_STATS_FIELD_INFO } from "@/src/06_entities/populate-form-fields/lib/constants";
import { toast } from "react-toastify";
import { PageContainer } from "@/src/07_shared/ui";
import { createGameWeekStatsSchema } from "@/src/07_shared/lib/schemas";
import { useRouter } from "next/navigation";

export const AdminCreateGameweekStatsPage = () => {
  const { mutate: createGameWeekStats } = useCreateGameWeekStats();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createGameWeekStatsSchema),
  });

  const onSubmit = (data: any) => {
    createGameWeekStats(data, {
      onSuccess: () => {
        toast.success("Информация об игроке обновлена");
        router.push("/admin");
      },
      onError: (err) => {
        console.error(err);
      },
    });
  };

  const onInvalid = () => console.error(errors);

  return (
    <PageContainer>
      <button>Get Player Stats</button>

      <Form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        register={register}
        errors={errors}
        formFields={CREATE_GAMEWEEK_STATS_FIELD_INFO}
        buttonText={"Create Game Week Stats"}
      />
    </PageContainer>
  );
};
