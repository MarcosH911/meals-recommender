"use client";

import InitialFormInputWrapper from "@/components/custom/initial-form/InitialFormInputWrapper";
import InitialFormInputSlider from "@/components/custom/initial-form/inputs/InitialFormInputSlider";
import InitialFormContext from "@/contexts/InitialFormContext";
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
  const { formValues } = useContext(InitialFormContext);

  return (
    <InitialFormInputWrapper
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
      <InitialFormInputSlider
        name="speed"
        options={[{ min: 1, max: 5, step: 1 }]}
      />
    </InitialFormInputWrapper>
  );
}

export default Page;
