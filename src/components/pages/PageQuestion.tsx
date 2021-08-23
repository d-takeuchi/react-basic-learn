import React,{ ChangeEvent, memo, useContext, useState, VFC } from 'react';

import { InputDataContext } from '../../providers/InputDataProvider';
import { LinkButton,SButtons } from '../atoms/button/LinkButton';
import { SContainer } from '../organisms/Header';

type Question = {
  number : number;
  text : string;
  displayFlg : boolean;
}

const defaultQuestions : Question[] = [
  {
    number : 1,
    text :  "現在、生命保険に加入されていますか？",
    displayFlg : true
  },
  {
    number : 2,
    text :  "現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたこをはありますか？",
    displayFlg : false
  },
  {
    number : 3,
    text :  "過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？",
    displayFlg : false
  },
]

export const PageQuestion : VFC = memo(() => {

  const [questions , setQuestions] = useState<Array<Question>>(defaultQuestions);

  const {inputData, setInputData} = useContext(InputDataContext);

  //質問の表示フラグを更新
  const updateQuestionDisplayFlg = (currentQuestionNumber : number) => {

    const nextQuestion = questions.find(q => q.number === currentQuestionNumber + 1);

    if(nextQuestion){
      nextQuestion.displayFlg = true;
      const newQuestions = [...questions];
      setQuestions(newQuestions);
    }
  }

  //回答データをセット
  const onChangeSetAnswer = (event : ChangeEvent<HTMLInputElement>) => {

    updateQuestionDisplayFlg(+event.target.name);

    setInputData(prevState => ({
      ...prevState,
      questions : {
        ...prevState.questions,
        [event.target.name] : event.target.value
      }
    }))

  }
  return (
    <SContainer>
      
      <header>
        <h2>以下にお答えください</h2>
      </header>

      <div>
        {questions.map(question => (

          question.displayFlg && (

            <div key={question.number}>
              <p>{question.text}</p>
              <input type="radio" name={question.number.toString()} onChange={onChangeSetAnswer} value="はい" checked={inputData.questions[question.number] === "はい"}/>はい
              <input type="radio" name={question.number.toString()} onChange={onChangeSetAnswer} value="いいえ" checked={inputData.questions[question.number] === "いいえ"}/>いいえ
            </div>
          )
        ))}
      </div>

      <SButtons>
        <LinkButton path="/">前へ戻る</LinkButton>
        <LinkButton path="/consultation">次へ進む</LinkButton>
      </SButtons>

    </SContainer>
  )
});