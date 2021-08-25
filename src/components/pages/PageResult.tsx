import React, { memo, useContext, VFC } from "react";
import { InputDataContext } from "../../providers/InputDataProvider";
import { LinkButton, SButtons } from "../atoms/button/LinkButton";

import { SContainer } from "../organisms/Header";

export const PageResult: VFC = memo(() => {
  const { inputData } = useContext(InputDataContext);

  const { year, month, day } = inputData.birthday;

  return (
    <SContainer>
      <header>
        <h2>以下の内容をご確認ください</h2>
      </header>

      <div>
        <p>-性別-</p>
        <p>{inputData.sex}</p>
        <p>-生年月日-</p>
        <p>{`${year}年${month}月${day}日`}</p>
        <p>-現在、生命保険に加入されていますか？-</p>
        <p>{inputData.questions[1]}</p>
        <p>
          -現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたこをはありますか？-
        </p>
        <p>{inputData.questions[2]}</p>
        <p>
          -過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-
        </p>
        <p>{inputData.questions[3]}</p>
        <p>-ご相談内容-</p>
        <p>{inputData.consultationText}</p>
      </div>

      <SButtons>
        <LinkButton path="/consultation">前へ戻る</LinkButton>
        <LinkButton path="/">送信</LinkButton>
      </SButtons>
    </SContainer>
  );
});
