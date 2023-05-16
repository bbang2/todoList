/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function SignUp() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [inputPwCk, setInputPwCk] = useState('')
 
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const handleInputPwCk = (e) => {
        setInputPwCk(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const onClickSignUp = () => {
        console.log('click 정보입력완료')
        if (inputPw !== inputPwCk) {
            return alert("비밀번호와 비밀번호확인은 같아야 합니다.");
          }
          let body = {
            user_id: inputId,
            user_pw: inputPw,
          };
          console.log(body,'입력된 값')
        //   dispatch(registerUser(body)).then((response) => {
        //     if (response.payload.success) {
        //       navigate("/login");
        //     } else {
        //       alert("Failed to sign up");
        //     }
        //   });
    }
 
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    // useEffect(() => {
    //     axios.get('/signup/login')
    //     .then(res => console.log(res,'456'))
    //     .catch()
    // }, [])
 
    return(
        <div>
            <h2>회원가입</h2>
            <div>
                <label htmlFor='input_id'></label>
                <input type='text' name='input_id' placeholder='아이디' value={inputId} onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='input_pw'></label>
                <input type='password' name='input_pw' placeholder='비밀번호' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <label htmlFor='input_pw_ck'></label>
                <input type='password' name='input_pw_ck' placeholder='비밀번호 확인' value={inputPwCk} onChange={handleInputPwCk} />
            </div>
            <div>
                <button type='button' onClick={() => onClickSignUp()}>회원가입</button>
            </div>
        </div>
    )
}
 
export default SignUp;