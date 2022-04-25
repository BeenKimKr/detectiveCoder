import React from 'react';
import './style.css';
import { SurveyQuestion } from './Question';

const SurveyContainer = () => {
  console.log(SurveyQuestion);
  return (
    <div className="AnswerContainer">
      <div className="AnswerCard">
        <button>
          <div>
            <h5>{SurveyQuestion[0].options[0].option}</h5>
          </div>
        </button>
      </div>
      <div className="AnswerCard">
        <button>
          <div>
            <h5>{}</h5>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SurveyContainer;
