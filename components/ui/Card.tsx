import React, { ReactNode } from "react";
import classes from "./Card.module.css";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;

// React와 ReactNode를 임포트합니다.
// CardProps 인터페이스를 정의합니다. 여기서 children은 ReactNode 타입으로 지정합니다.
// Card 컴포넌트의 함수 시그니처를 React.FC<CardProps>로 변경합니다.
// Card 컴포넌트 함수 내에서 props의 타입을 CardProps로 지정합니다.
// 이렇게 타입을 적용한 Card 컴포넌트를 사용하면 타입스크립트에서 정확한 타입 검사가 이루어지고, 오류를 사전에 방지할 수 있습니다.

//ReactElement 는 함수형 컴포넌트(Component, props, ...children) 제네릭 , ReactNode는 클래스형 컴포넌트 하지만 ReactElement와 JSX Element를 감싼다.
// ReactNode만이 null타입을 가지기에 ReactElement를 사용시에는 null을 union 해줘야한다.
