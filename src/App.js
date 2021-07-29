import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

//JSの中でreturnして、HTMLのタグを返す＝JSX記法
//複数のタグを返す場合は1つのタグにまとめておく必要がある
//JSXで返しているHTMLタグの中で{}を書くと中身はJSとして認識される
//以下のColorfulMessageで指定しているcolorとmessageがプロップス
//コンポーネントに対して渡す引数のようなイメージ
//コンポーネント内で動的に変数を変更する場合、useStateを用いる
//以下の例だと、数値のカウントアップ、文字の表示非表示を制御している
const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  //useEffect野中の関数の第2引数に配列をとれる
  //空の配列を指定した際は、ページが最初に読み込まれた際だけに
  //useEffectの中身が実行されるように制御できる
  //配列の中に指定した変数が変化したときだけuseEffect内の関数を
  //走らせることができる
  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>('ω')</p>}
    </>
  );
};

export default App;
