import { FieldErrors, UseFormRegister } from "react-hook-form";

import { PopulateFormFields } from "@/src/06_entities/populate-form-fields/ui";
import { IUser } from "@/src/07_shared/models";

import { Spinner } from "@/src/07_shared/ui";
import { FormFieldInfoTypeUser } from "@/src/06_entities/populate-form-fields/lib/types";

type FormProps = {
  onSubmit: () => void;
  register: UseFormRegister<IUser>;
  errors: FieldErrors<IUser>;
  status?: string;
  formFields: FormFieldInfoTypeUser[];
  buttonText: string;
};

export const Form = ({
  onSubmit,
  register,
  errors,
  status,
  formFields,
  buttonText,
}: FormProps) => {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-gray-950">
      <form className="space-y-6" onSubmit={onSubmit}>
        <PopulateFormFields
          register={register}
          errors={errors}
          formFields={formFields}
        />

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {status === "pending" ? <Spinner /> : buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};
