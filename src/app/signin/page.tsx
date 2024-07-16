'use client';

import { useInput } from '@/hooks/useInput';

export default function Page() {
  const [id, setId] = useInput('');
  const [password, setPassword] = useInput('');

  const onSubmit = async () => {
    const response = await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: id, password }),
      credentials: 'include', // 자격 증명 포함
    });

    if (response.ok) {
      alert('로그인 성공');
    } else {
      alert('로그인 실패');
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      아이디
      <input type="text" value={id} onChange={setId} />
      비밀번호
      <input type="password" value={password} onChange={setPassword} />
      <div>
        <button onClick={onSubmit}>로그인</button>
      </div>
    </div>
  );
}
