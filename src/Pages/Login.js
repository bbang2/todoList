/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
    const onClickLogin = () => {
        console.log('click login')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputId,'입력아이디')
        console.log(inputPw,'입력 비번')
    }
 
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    // useEffect(() => {
    //     axios.get('/sign_up/login')
    //     .then(res => console.log(res,'123'))
    //     .catch()
    // }, [])
 
    return(
        <div>
            <h2>Todo List</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='input_id'></label>
                    <input type='text' name='input_id' placeholder='아이디' value={inputId} onChange={handleInputId} />
                </div>
                <div>
                    <label htmlFor='input_pw'></label>
                    <input type='password' name='input_pw' placeholder='비밀번호' value={inputPw} onChange={handleInputPw} />
                </div>
                <div>
                    <button type='submit'>로그인</button>
                    <Link to={'/signup'}>
                        <button type='button' onClick={() => console.log('회워ㅓㄴ가이니')}>회원가입</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
 
export default Login;