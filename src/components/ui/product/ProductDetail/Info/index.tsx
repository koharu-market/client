interface Props {
  content: string;
}

export default function Info({ content }: Props) {
  return (
    <div className="pt-16 pb-14">
      <h2>상품정보</h2>
      <div className="text-center whitespace-pre-line mt-5" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
