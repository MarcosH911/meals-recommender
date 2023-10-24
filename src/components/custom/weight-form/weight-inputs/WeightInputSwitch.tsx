import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface Props {
  options: { text: string }[];
}

function WeightInputSwitch({ options }: Props) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Switch id="TODO" />
        <Label htmlFor="TODO">Breakfast</Label>
      </div>
    </div>
  );
}

export default WeightInputSwitch;
