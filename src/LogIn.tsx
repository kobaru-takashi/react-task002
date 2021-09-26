import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';


export const LogIn = (props: any):any => {
  const [state, setState] = useState(props); //オブジェクトを渡すことが可能
  const { id, pass } = state;
  const logInId = "kobaru";
  const logInPass = "takashi";
  const history = useHistory();
  const handleClick = () => {
    if (id === logInId && pass === logInPass) {
      history.push('/LogIn/myPage');
    }
  };


  useEffect(() => {
    console.log("This is like componentDidMount ro componentDidUpdate");
  });

  useEffect(() => {
    console.log("This is like componentDidMount");
  }, []);

  useEffect(() => {
    console.log("This callback is for name only");
    handleClick()

  }, [id, pass]);

  return (
    <>
      <h1>ログインページ</h1>
      <Link to="/LogIn/myPage">MyPage</Link>
      <br />
      <button type="button" onClick={handleClick}></button>

      <p>IDとパスワードの入力をして下さい。</p>
      <label>
        <input
          value={id}
          onChange={(e) => setState({ ...state, id: e.target.value })}
        />
        ID
      </label>
      <br />
      <label>
        <input
          value={pass}
          onChange={(e) => setState({ ...state, pass: e.target.value })}
        />
        パスワード
      </label>
      <br />
      {/* <button onClick={move} >決定</button> */}
      <button onClick={() => setState(props)}>リセット</button>
    </>
  );
};

// export default LogIn;
LogIn.defaultProps = {
  id: "",
  pass: "",
};
