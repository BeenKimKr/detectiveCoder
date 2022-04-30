import React, { useContext } from 'react';
import { PercentContext } from '../../pages/MainSurvey';
import CommonButton from '../button/CommonButton';
import Spinner from '../Spinner';
import './style.css';
const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, click } = props;
  const { loading, setLoading } = useContext(PercentContext);

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      <section>
        {loading == true ? (
          <div className="p-8">
            <span className="mb-2">결과를 분석중입니다.🔎</span>
            <div>
              <Spinner />
            </div>
          </div>
        ) : (
          <>
            <main>테스트를 완료하였습니다😊</main>
            <div className="button">
              <CommonButton text={'결과 확인'} onClick={click} />
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Modal;
