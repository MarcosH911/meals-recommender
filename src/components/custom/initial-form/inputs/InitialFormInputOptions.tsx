"use client";

import { useContext } from "react";
import { twMerge } from "tailwind-merge";

import InitialFormContext from "@/contexts/InitialFormContext";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Props {
  name: string;
  options: { text: string; value: string }[];
}

function InitialFormInputOptions({ name, options }: Props) {
  const { formValues, setFormValues } = useContext(InitialFormContext);

  return (
    <div>
      <RadioGroup
        value={formValues[name]}
        onValueChange={(value) =>
          setFormValues((values) => ({
            ...values,
            [name]: value.toString(),
          }))
        }
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={twMerge(
              "relative flex w-full items-center gap-2 rounded-lg border border-slate-900 px-4 py-2 transition duration-100 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-800",
              formValues[name] === option.value &&
                "bg-slate-900 text-slate-50 hover:bg-slate-900 dark:border-slate-700 dark:bg-slate-800",
            )}
          >
            <label
              htmlFor={option.value + index.toString()}
              className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            ></label>
            <RadioGroupItem
              value={option.value}
              id={option.value + index.toString()}
              className={twMerge(
                formValues[name] === option.value &&
                  "border-slate-50 text-slate-50 dark:border-slate-50 dark:text-slate-50",
              )}
            />
            <Label
              htmlFor={option.value + index.toString()}
              className="text-lg"
            >
              {option.text}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default InitialFormInputOptions;
