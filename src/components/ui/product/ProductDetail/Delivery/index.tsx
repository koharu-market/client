import { COMPANY_ADDRESS } from '@/constants/address';

export default function Delivery() {
  return (
    <div>
      <section className="mt-10">
        <h2>배송</h2>
        <div className="mt-4">
          <table className="product-table">
            <tbody>
              <tr>
                <th>배송</th>
                <td>일반택배</td>
              </tr>
              <tr>
                <th>배송비</th>
                <td>무료배송</td>
              </tr>
              <tr>
                <th>도서산간 추가 배송비</th>
                <td>8,000원 </td>
              </tr>
              <tr>
                <th>배송불가 지역</th>
                <td>배송불가 지역이 없습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2>교환/환불</h2>
        <div className="mt-4">
          <table className="product-table">
            <tbody>
              <tr>
                <th>반품배송비</th>
                <td>10,000원 (최초 배송비가 무료인 경우 20,000원 부과)</td>
              </tr>
              <tr>
                <th>교환배송비</th>
                <td>20,000원</td>
              </tr>
              <tr>
                <th>보내실 곳</th>
                <td>{COMPANY_ADDRESS}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold text-xl mt-8">반품/교환 사유에 따른 요청 가능 기간</h3>
        <p className="text-sm mt-3">
          반품 시 먼저 판매자와 연락하셔서 반품사유, 택배사, 배송비, 반품지 주소 등을 협의하신 후 반품상품을 발송해
          주시기 바랍니다.
        </p>
        <ol className="text-sm mt-3 list-decimal pl-5">
          <li>
            구매자 단순 변심은 상품 수령 후 7일 이내&nbsp;<small>(구매자 반품배송비 부담)</small>
          </li>
          <li>
            표시/광고와 상이, 계약내용과 다르게 이행된 경우 상품 수령 후 3개월 이내, 그 사실을 안 날 또는 알 수 있었던
            날로부터 30일 이내.
            <br />둘 중 하나 경과 시 반품/교환 불가&nbsp;<small>(판매자 반품배송비 부담)</small>
          </li>
        </ol>

        <h3 className="font-semibold text-xl mt-6">반품/교환 불가능 사유</h3>
        <p className="text-sm mt-3">아래와 같은 경우 반품/교환이 불가능합니다.</p>
        <ol className="text-sm mt-3 list-decimal pl-5">
          <li>반품요청기간이 지난 경우</li>
          <li>
            구매자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우&nbsp;
            <small>(단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외)</small>
          </li>
          <li>
            포장을 개봉하였으나 포장이 훼손되어 상품가치가 현저히 상실된 경우&nbsp;<small>(예: 식품, 화장품)</small>
          </li>
          <li>
            구매자의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우&nbsp;
            <small>(라벨이 떨어진 의류 또는 태그가 떨어진 명품관 상품인 경우)</small>
          </li>
          <li>
            시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우&nbsp;
            <small>(예: 식품, 화장품)</small>
          </li>
          <li>고객주문 확인 후 상품제작에 들어가는 주문제작상품</li>
          <li>
            복제가 가능한 상품 등의 포장을 훼손한 경우&nbsp;<small>(CD/DVD/GAME/도서의 경우 포장 개봉 시)</small>
          </li>
        </ol>
      </section>
    </div>
  );
}
