interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-50">
      {children}
    </div>
  );
}

export default Layout;
