import React from "react";

//JSの中でreturnして、HTMLのタグを返す＝JSX記法
//複数のタグを返す場合は1つのタグにまとめておく必要がある
//JSXで返しているHTMLタグの中で{}を書くと中身はJSとして認識される
const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={contentStyle}>こんにちは！</h1>
      <p style={{ color: "red" }}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
