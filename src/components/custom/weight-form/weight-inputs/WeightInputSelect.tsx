"use client";

import { Checkbox } from "@/components/ui/checkbox";
import WeightFormContext from "@/contexts/WeightFormContext";
import Image from "next/image";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  name: string;
  options: { text: string; key: string; imageUrl: string }[];
}

function WeightInputSelect({ name, options }: Props) {
  const { formValues, setFormValues } = useContext(WeightFormContext);

  return (
    <div>
      {options.map((option, index) => (
        <div
          key={index}
          className={twMerge(
            "border-2 border-transparent",
            formValues.includeIngredients.includes(option.key) &&
              "border-slate-800"
          )}
        >
          <Checkbox />
          <Image src={option.imageUrl} alt={option.text} />
          <p>{option.text}</p>
        </div>
      ))}
    </div>
  );
}

export default WeightInputSelect;
