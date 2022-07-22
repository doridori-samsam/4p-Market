import { useState, useContext } from "react";
import UserContext from "../../../context/UserContext";
import ModalFrame from "../modalBase/ModalFrame";
import ModalBtn from "../modalBase/ModalBtn";
import ModalLink from "../modalBase/ModalLink";
import DeleteAlert from "../alert/alerts/DeleteAlert";
import ReportAlert from "../alert/alerts/ReportAlert";

function ProductModal({ setOnModal, product }) {
  const { myAccountname } = useContext(UserContext);
  const [onAlert, setOnAlert] = useState(false);
  const productId = product.id;
  const accountname = product.author.accountname;
  const productUrl = product.link;
  console.log(product);

  function handleAlert() {
    setOnAlert(!onAlert);
  }

  function handleCancel() {
    setOnModal(false);
    setOnAlert(false);
  }

  return (
    <>
      {myAccountname === accountname ? (
        <>
          {onAlert && (
            <>
              <DeleteAlert
                text="삭제하시겠어요?"
                handleCancel={handleCancel}
                // DeleteAlert 내 remove 함수에 연결되는 backUrl
                backUrl={`product/${productId}`}
              />
            </>
          )}
          <ModalFrame setOnModal={setOnModal}>
            <ModalBtn handleClick={handleAlert}>삭제</ModalBtn>
            {/* Todo: 수정페이지 */}
            <ModalLink handleLink={"/"}>수정</ModalLink>
            <li>
              <a href={productUrl}>웹사이트에서 상품보기</a>
            </li>
          </ModalFrame>
        </>
      ) : (
        <>
          {onAlert && (
            <>
              <ReportAlert
                handleCancel={handleCancel}
                // ReportAlert 내 report 함수에 연결되는 backUrl
                backUrl={`product/${productId}/report`}
              />
            </>
          )}
          <ModalFrame setOnModal={setOnModal}>
            <ModalBtn handleClick={handleAlert}>신고</ModalBtn>
          </ModalFrame>
        </>
      )}
    </>
  );
}

export default ProductModal;
