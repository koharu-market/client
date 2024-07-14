interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  return <main className="flex-1">{children}</main>;
}
