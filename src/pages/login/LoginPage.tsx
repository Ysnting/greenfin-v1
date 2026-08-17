import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>登入 GreenFin</h1>

      <button onClick={() => navigate('/farmer')}>
        小農端
      </button>

      <button onClick={() => navigate('/bank')}>
        銀行端
      </button>
    </div>
  );
}

export default LoginPage;