interface Props {
  children: React.ReactNode;
}

export default function Header({ children }: Props) {
  return (
    <div className="border-b">
      <div className="md:container">
        <div>{children}</div>
      </div>
    </div>
  );
}
