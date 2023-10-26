"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import WeightFormContext from "@/contexts/WeightFormContext";
import { useContext } from "react";

interface Props {
  name: string;
  options: { text: string; key: string }[];
}

function WeightInputSwitch({ name, options }: Props) {
  const { formValues, setFormValues } = useContext(WeightFormContext);

  return (
    <div className="flex flex-col gap-2 pt-6">
      {options.map((option, index) => (
        <div key={index} className="flex items-center gap-2">
          <Switch
            id="TODO"
            checked={formValues[name][option.key]}
            onCheckedChange={() =>
              setFormValues({
                ...formValues,
                [name]: {
                  ...formValues[name],
                  [option.key]: !formValues[name][option.key],
                },
              })
            }
          />
          <Label htmlFor="TODO" className="text-lg">
            {option.text}
          </Label>
        </div>
      ))}
    </div>
  );
}

export default WeightInputSwitch;
