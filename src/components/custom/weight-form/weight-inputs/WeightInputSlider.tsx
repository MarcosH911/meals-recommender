"use client";

import { useContext } from "react";

import WeightFormContext from "@/contexts/WeightFormContext";
import { Slider } from "@/components/ui/slider";

interface Props {
  options: {
    label?: string;
    min: number;
    max: number;
    step: number;
  }[];
  name: string;
}

function WeightInputSlider({ min, max, step, name }: Props) {
  const { formValues, setFormValues } = useContext(WeightFormContext);

  return (
    <div className="pt-6">
      <Slider
        autoFocus
        min={min}
        max={max}
        step={step}
        className="cursor-pointer mt-6"
        value={[Number(formValues[name])]}
        onValueChange={([value]) =>
          setFormValues((values) => ({
            ...values,
            [name]: value.toString(),
          }))
        }
      />
      <div className="pb-1 pt-3 flex justify-between -mx-1">
        {Array((max - min) / step + 1)
          .fill(true)
          .map((_, i) => (
            <p key={i} className="w-7 text-center">
              {min + i * step}
            </p>
          ))}
      </div>
    </div>
  );
}

export default WeightInputSlider;
