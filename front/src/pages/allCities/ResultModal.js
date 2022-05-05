import React, { useContext } from "react";
import Bigmac from "../../components/charts/Bigmac";
import HPIChart from "../../components/charts/HPIChart";
import "./style.css";

const ResultModal = (props) => {
  const { open, rank } = props;
  return (
    <div className={open ? "openModal modal" : "modal"}>
      <section>
        <div className="flex flex-row">
          <div className="w-5 h-5">
            <Bigmac resultAmount={rank} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultModal;
