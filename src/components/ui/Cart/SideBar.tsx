export default function SideBar() {
  return (
    <div className="w-72">
      <div className="py-4 border">
        <div className="px-6">
          <ul>
            <li className="flex justify-between">
              <div>
                <span>총 상품 금액</span>
              </div>
              <div>
                <span>0</span>
              </div>
            </li>
            <li>배송비</li>
          </ul>
          <div className="flex justify-between">
            <span>결제 금액</span>
            <span>10000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
