import { FORMFIELDINFO } from "../lib/constants";
import { FormField } from "@/src/07_shared/ui";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { IUser } from "@/src/07_shared/models";

type PopulateFormProps = {
  register: UseFormRegister<IUser>;
  errors: FieldErrors<IUser>;
};

export const PopulateFormField = ({ register, errors }: PopulateFormProps) => {
  return (
    <>
      {FORMFIELDINFO.map((ff) => {
        return (
          <FormField
            key={ff.name}
            name={ff.name}
            type={ff.type}
            text={ff.text}
            register={register}
            errorMessage={errors?.[ff.name]?.message}
          />
        );
      })}
    </>
  );
};
