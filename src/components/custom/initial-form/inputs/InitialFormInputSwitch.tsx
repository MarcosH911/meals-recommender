"use client";

import { useContext } from "react";

import InitialFormContext from "@/contexts/InitialFormContext";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface Props {
  name: string;
  options: { text: string; key: string }[];
}

function InitialFormInputSwitch({ name, options }: Props) {
  const { formValues, setFormValues } = useContext(InitialFormContext);

  return (
    <div className="flex flex-col gap-2">
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

export default InitialFormInputSwitch;
