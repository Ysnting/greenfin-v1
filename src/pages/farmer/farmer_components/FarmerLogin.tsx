"use client";

import { useState } from "react";
import { ShieldCheck, Leaf } from "lucide-react";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      account === "farmer.demo" &&
      password === "greenfin2026"
    ) {
      setError("");
      onLogin();
    } else {
      setError("帳號或密碼錯誤，請使用 Demo 帳號");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Brand */}
        <div className="login-brand">
          <div className="brand-icon">
            <Leaf size={30} />
          </div>

          <h1>GreenFin</h1>

          <p>
            小農綠色數位融資履歷平台
          </p>
        </div>

        {/* Login Card */}
        <div className="login-card">

          <div className="login-card-header">
            <ShieldCheck size={24} />

            <div>
              <h2>小農入口</h2>
              <p>Farmer Portal</p>
            </div>
          </div>

          {/* Account */}
          <div className="form-group">
            <label>小農帳號</label>

            <input
              type="text"
              placeholder="請輸入帳號"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>密碼</label>

            <input
              type="password"
              placeholder="請輸入密碼"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error */}
          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            className="login-button"
            onClick={handleLogin}
          >
            登入小農端
          </button>

          {/* Demo Account */}
          <div className="demo-account">
            <strong>Demo 帳號</strong>

            <p>帳號：farmer.demo</p>
            <p>密碼：greenfin2026</p>
          </div>

        </div>

        <p className="login-disclaimer">
          Demo Prototype · 本系統資料僅供展示
        </p>

      </div>
    </div>
  );
}