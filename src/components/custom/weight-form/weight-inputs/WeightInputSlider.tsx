"use client";

import Description from "@/components/ui/description";
import { Slider } from "@/components/ui/slider";
import WeightFormContext from "@/contexts/WeightFormContext";
import { useContext } from "react";

const descriptions = [
  {
    strong: "Slow but steady:",
    text: " Choose this option for a gradual and sustainable weight loss journey.",
  },
  {
    strong: "Steady progress:",
    text: " Opt for this level to maintain a balanced pace towards your weight loss goals.",
  },
  {
    strong: "Moderate pace:",
    text: " This option strikes a balance between speed and sustainability.",
  },
  {
    strong: "Accelerated results:",
    text: " Select this for faster weight loss with commitment and discipline.",
  },
  {
    strong: "Rapid transformation:",
    text: " For those ready to embrace an intense weight loss journey, choose this level.",
  },
];

function WeightInputSlider() {
  const { formValues, setFormValues } = useContext(WeightFormContext);

  return (
    <div>
      <Slider
        autoFocus
        defaultValue={[1]}
        min={1}
        max={5}
        step={1}
        className="cursor-pointer mt-6"
        value={[Number(formValues.speed)]}
        onValueChange={([value]) =>
          setFormValues((values) => ({
            ...values,
            speed: value.toString(),
          }))
        }
      />
      <div className="pb-2 pt-3 flex justify-between px-1.5">
        {Array(5)
          .fill(true)
          .map((_, i) => (
            <p key={i}>{i + 1}</p>
          ))}
      </div>
      <Description>
        <strong>{descriptions[Number(formValues.speed) - 1].strong}</strong>
        {descriptions[Number(formValues.speed) - 1].text}
      </Description>
    </div>
  );
}

export default WeightInputSlider;
