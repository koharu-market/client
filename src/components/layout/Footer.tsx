import { COMPANY_ADDRESS } from '@/constants/address';

export default function Footer() {
  return (
    <footer className="bg-primary-200">
      <div className="container py-10">
        <div>
          <span>코하루 마켓</span>
        </div>
        <div className="flex flex-wrap gap-7">
          <dl className="flex gap-2.5">
            <dt className="font-bold">대표</dt>
            <dd>문정은</dd>
          </dl>
          <dl className="flex gap-2.5">
            <dt className="font-bold">주소</dt>
            <dd>{COMPANY_ADDRESS}</dd>
          </dl>
          <dl className="flex gap-2.5">
            <dt className="font-bold">사업자등록번호</dt>
            <dd>1020207827</dd>
          </dl>
          <dl className="flex gap-2.5">
            <dt className="font-bold">고객센터</dt>
            <dd>010-6629-0232</dd>
          </dl>
        </div>
      </div>
    </footer>
  );
}
