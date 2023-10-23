interface Props {
  children: React.ReactNode;
}

function Description({ children }: Props) {
  return <div className="text-sm pt-2 text-slate-500">{children}</div>;
}

export default Description;
