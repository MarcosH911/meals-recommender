"use client";

import { useContext } from "react";
import { twMerge } from "tailwind-merge";

import WeightFormContext from "@/contexts/WeightFormContext";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Props {
  description: string;
  name: string;
  options: { text: string; value: string }[];
}

function WeightInputOptions({ name, options }: Props) {
  const { formValues, setFormValues } = useContext(WeightFormContext);

  return (
    <div className="mt-6">
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
              "flex relative items-center gap-2 px-4 py-2 rounded-lg w-full border-2 border-slate-900 transition duration-100 hover:bg-slate-50",
              formValues[name] === option.value &&
                "bg-slate-900 text-slate-50 hover:bg-slate-900"
            )}
          >
            <label
              htmlFor={option.value + index.toString()}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full cursor-pointer"
            ></label>
            <RadioGroupItem
              value={option.value}
              id={option.value + index.toString()}
              className={twMerge(
                formValues[name] === option.value &&
                  "border-slate-50 text-slate-50"
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

export default WeightInputOptions;
