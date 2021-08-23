import React, { memo, VFC } from 'react'

import { LinkButton,SButtons } from '../atoms/button/LinkButton';
import { SContainer } from '../organisms/Header';


export const PageConsultation : VFC = memo(() => {
  return (
    <SContainer>

      <header>
        <h2>ご相談内容をご記入ください</h2>
      </header>

      <div>
        <p>-ご相談内容をご記入ください-</p>
        <textarea cols={100} rows={40} name="consultationText"/>
      </div>

      <SButtons>
        <LinkButton path="/question">前へ戻る</LinkButton>
        <LinkButton path="/result">次へ進む</LinkButton>
      </SButtons>

    </SContainer>
  )
});