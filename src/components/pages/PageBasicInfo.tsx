import React from 'react';

import { LinkButton } from '../atoms/button/LinkButton';
import { SContainer } from '../organisms/Header';

export const PageBasicInfo = () => {
  return (
    <SContainer>
      <header>
        <h2>お客様の情報を入力してください</h2>
      </header>

      <div>
        <p>-性別-</p>
        <input type="radio" name="sex" />男性
        <input type="radio" name="sex" />女性

        <p>生年月日</p>
        <input type="number" min="1990" max="2021" name="year"/>年
        <input type="number" min="1" max="12"  name="month"/>月
        <input type="number" min="1" max="31"  name="day"/>日
      </div>

      <LinkButton path="/question">次へ進む</LinkButton>
    </SContainer>
  )
}