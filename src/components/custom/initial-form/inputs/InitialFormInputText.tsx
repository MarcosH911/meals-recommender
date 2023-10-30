"use client";

import { useContext, useState } from "react";

import InitialFormContext from "@/contexts/InitialFormContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  name: string;
  placeholder: { kg: string; lb: string };
}

function InitialFormInputText({ name, placeholder }: Props) {
  const { formValues, setFormValues } = useContext(InitialFormContext);

  const [units, setUnits] = useState(formValues.units);

  return (
    <div>
      <div className="flex gap-2 pb-4">
        <Button
          variant={units === "lb" ? "secondary" : "ghost"}
          onClick={(e) => {
            e.preventDefault();
            setUnits("lb");
            setFormValues((values) => ({
              ...values,
              units: "lb",
            }));
          }}
        >
          lb
        </Button>
        <Button
          variant={units === "kg" ? "secondary" : "ghost"}
          onClick={(e) => {
            e.preventDefault();
            setUnits("kg");
            setFormValues((values) => ({
              ...values,
              units: "kg",
            }));
          }}
        >
          kg
        </Button>
      </div>
      <Input
        autoFocus
        type="number"
        min={1}
        max={999}
        value={formValues[name]}
        onChange={(e) =>
          setFormValues((values) => ({
            ...values,
            [name]: e.target.value,
          }))
        }
        placeholder={
          units === "lb"
            ? placeholder && placeholder.lb
            : placeholder && placeholder.kg
        }
      />
    </div>
  );
}

export default InitialFormInputText;
