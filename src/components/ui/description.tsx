interface Props {
  children: React.ReactNode;
}

function Description({ children }: Props) {
  return (
    <div className="pt-2 text-sm text-slate-500 dark:text-slate-400">
      {children}
    </div>
  );
}

export default Description;
