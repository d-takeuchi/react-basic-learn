import React, { ChangeEvent, memo, useContext, VFC } from "react";

import { InputDataContext } from "../../providers/InputDataProvider";
import { LinkButton, SButtons } from "../atoms/button/LinkButton";
import { SContainer } from "../organisms/Header";

export const PageConsultation: VFC = memo(() => {
  const { inputData, setInputData } = useContext(InputDataContext);

  //相談内容データのセット
  const onChangeSetConsultationText = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputData((prevState) => ({
      ...prevState,
      consultationText: event.target.value,
    }));
  };

  return (
    <SContainer>
      <header>
        <h2>ご相談内容をご記入ください</h2>
      </header>

      <div>
        <p>-ご相談内容をご記入ください-</p>
        <textarea
          cols={100}
          rows={40}
          name="consultationText"
          onChange={onChangeSetConsultationText}
          value={inputData.consultationText?.toString()}
        />
      </div>

      <SButtons>
        <LinkButton path="/question">前へ戻る</LinkButton>
        <LinkButton path="/result">次へ進む</LinkButton>
      </SButtons>
    </SContainer>
  );
});
