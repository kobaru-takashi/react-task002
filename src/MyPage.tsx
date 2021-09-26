import React,{ useEffect, useState } from 'react';

export const MyPage = (props:any):any => {
  const [state, setState] = useState(props)//オブジェクトを渡すことが可能
  const {name,price,number} = state

  useEffect(() => {
    console.log('This is like componentDidMount ro componentDidUpdate');
  },)

  useEffect(() => {
    console.log('This is like componentDidMount');
  }, [])

  useEffect(() => {
     console.log('This callback is for name only');
     return
  }, [name])

  return (
    <>
      <p>{name}さん、残高{number}円です。</p>
      <button onClick={()=> setState(props)}>Reset</button>
      <br />
    　<label><input value={name} onChange={e => setState({...state, name:e.target.value})}/>名前</label>
      <br />
      <label><input value={number} onChange={e => setState({...state, number:e.target.value})}/>金額を入力</label>
    </>
  )
}

MyPage.defaultProps = {
  name: '',
  price: 1000,
  number:''

}

