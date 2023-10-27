"use client";

import WeightInputWrapper from "@/components/custom/weight-form/WeightInputWrapper";
import WeightInputSlider from "@/components/custom/weight-form/weight-inputs/WeightInputSlider";
import WeightFormContext from "@/contexts/WeightFormContext";
import { useContext } from "react";

const speedDescriptions = [
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

function Page() {
  const { formValues } = useContext(WeightFormContext);

  return (
    <WeightInputWrapper
      step={3}
      name="speed"
      label="How fast do you want to achieve your goal?"
      description={
        <span>
          <strong>
            {speedDescriptions[Number(formValues.speed) - 1].strong}
          </strong>
          {speedDescriptions[Number(formValues.speed) - 1].text}
        </span>
      }
    >
      <WeightInputSlider name="speed" options={[{ min: 1, max: 5, step: 1 }]} />
    </WeightInputWrapper>
  );
}

export default Page;
