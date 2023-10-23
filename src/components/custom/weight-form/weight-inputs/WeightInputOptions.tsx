import Description from "@/components/ui/description";

interface Props {
  description: string;
}

function WeightInputOptions({ description }: Props) {
  return (
    <div>
      <div className="text-sm pt-2 text-slate-500">{description}</div>
      <Description>{description}</Description>
    </div>
  );
}

export default WeightInputOptions;
