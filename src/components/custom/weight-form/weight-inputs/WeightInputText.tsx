"use client";

import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WeightFormContext from "@/contexts/WeightFormContext";

interface Props {
  name: string;
  placeholder: { kg: string; lb: string };
  description: string;
}

function WeightInputText({ name, placeholder }: Props) {
  const [units, setUnits] = useState<"lb" | "kg">("lb");

  const { formValues, setFormValues } = useContext(WeightFormContext);

  return (
    <div>
      <div className="py-4 flex gap-2">
        <Button
          variant={units === "lb" ? "secondary" : "ghost"}
          onClick={(e) => {
            e.preventDefault();
            setUnits("lb");
          }}
        >
          lb
        </Button>
        <Button
          variant={units === "kg" ? "secondary" : "ghost"}
          onClick={(e) => {
            e.preventDefault();
            setUnits("kg");
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
          setFormValues((values) => ({ ...values, [name]: e.target.value }))
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

export default WeightInputText;
