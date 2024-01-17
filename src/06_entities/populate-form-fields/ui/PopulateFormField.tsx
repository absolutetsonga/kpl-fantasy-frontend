import { FormField } from "@/src/07_shared/ui";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { IUser } from "@/src/07_shared/models";
import { FormFieldInfoType } from "../lib/types";

type PopulateFormProps = {
  register: UseFormRegister<IUser>;
  errors: FieldErrors<IUser>;
  formFields: FormFieldInfoType[];
};

export const PopulateFormFields = ({
  register,
  errors,
  formFields,
}: PopulateFormProps) => {
  return (
    <>
      {formFields.map((ff) => {
        return (
          <FormField
            key={ff.name}
            name={ff.name}
            type={ff.type}
            text={ff.text}
            register={register}
            errorMessage={errors?.[ff.name]?.message}
            link={ff.link}
          />
        );
      })}
    </>
  );
};
