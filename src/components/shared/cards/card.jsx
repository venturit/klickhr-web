import React from "react";
import dragIdentifier from "./Group2Copy.svg";
import { QuestionContentType } from "./questionContent";
import { options } from "../../../utils/optionsQuestionTemplate";
import "./styles.css";
import { CustomSelect } from "../selects/select";

export const DragAnnoucementCard = (props) => {
  const [selected, setSelected] = React.useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

    const announcementData = [
        {
            title: "ATTENTION ALL STAFF",
            description: "The East Parking Lot will be unavailable on December 4th & 5th. Please plan accordingly.",
            dates: "Created in July 01, 2021  |   Valid thru December 31, 2021",
            position: 1,
        }
    ]

  return (
    <>
      {/* Ele refers to element */}
      {announcementData.map((ele, index) => (
        <div
          key={index}
          className={`${
            selected === index
              ? "dragCard__container show"
              : "dragCard__container"
          }`}
        >
          <div className="drag__indicator">
            <img src={dragIdentifier} className="drag__img" alt="" />
          </div>

          <div className="dragCard__content" onClick={() => toggle(index)}>
            <div className="announcement__title">{ele.title}</div>
            <div
              className={`${
                selected === index
                  ? "announcement__body show"
                  : "announcement__body"
              }`}
            >
              <p> {ele.description} </p>

              <div className="announcement__footer">
                <div
                  style={{
                    fontFamily: "Feather-Icons",
                    fontSize: 20,
                    color: "#0063F0",
                    marginRight: 10,
                  }}
                >
                  
                </div>
                <div
                  style={{
                    color: "#8280B1",
                    fontSize: 11,
                  }}
                >
                  {ele.dates}
                </div>
              </div>
            </div>
          </div>

          <div className="dragCard__end">
            <div className="announcement__end__card">{ele.position}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export const DragTemplateCard = () => {
  const [questionType, setQuestionType] = React.useState(null);
  return (
    <div className={`dragCard__container`}>
      {questionType !== "Summary Status" && (
        <div className="drag__indicator">
          <img src={dragIdentifier} className="drag__img" alt="" />
        </div>
      )}
      <div className="dragCard__content__template">
        <div className="newTemplate__card__body">
          <QuestionContentType questionType={questionType} />
        </div>
      </div>

      <div className="dragCard__end">
        <CustomSelect
          options={options}
          setQuestionType={setQuestionType}
          id={"questionType"}
          defaultValue={"Summary Status"}
          placeholder={"Select"}
          selectLabel={"Question type"}
          st={{ width: "160px" }}
        />
      </div>
    </div>
  );
};
