import React from "react";
import CommonButton from "../button/CommonButton";
import "./style.css";
const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, click } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <main>테스트를 완료하였습니다😊</main>
          <div className="button">
            <CommonButton text={"결과 확인"} onClick={click} />
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
