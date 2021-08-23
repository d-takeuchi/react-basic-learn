import React, { ChangeEvent, useContext } from 'react';

import { InputDataContext } from '../../providers/InputDataProvider';
import { LinkButton } from '../atoms/button/LinkButton';
import { SContainer } from '../organisms/Header';


export const PageBasicInfo = () => {

  const {inputData,setInputData} = useContext(InputDataContext);

  //性別データのセット
  const onChangeSetSex = (event : ChangeEvent<HTMLInputElement>) => {
    setInputData({...inputData,sex : event.target.value});
  }

  //生年月日データのセット
  const onChangeSetBirthDay = (event : ChangeEvent<HTMLInputElement>) => {
    setInputData(prevState => ({
      ...prevState,
      birthday : {
        ...prevState.birthday,
        [event.target.name] : event.target.value
      }
    }))
  }

  return (
    <SContainer>
      <header>
        <h2>お客様の情報を入力してください</h2>
      </header>

      <div>
        <p>-性別-</p>
        <input type="radio" name="sex" onChange={onChangeSetSex} value="男性" checked={inputData.sex === "男性"}/>男性
        <input type="radio" name="sex" onChange={onChangeSetSex} value="女性" checked={inputData.sex === "女性"}/>女性

        <p>生年月日</p>
        <input type="text" name="year" value={inputData.birthday.year?.toString()} onChange={onChangeSetBirthDay}/>年
        <input type="text" name="month"  value={inputData.birthday.month?.toString()} onChange={onChangeSetBirthDay}/>月
        <input type="text" name="day"  value={inputData.birthday.day?.toString()} onChange={onChangeSetBirthDay}/>日
      </div>

      <LinkButton path="/question">次へ進む</LinkButton>
    </SContainer>
  )
}