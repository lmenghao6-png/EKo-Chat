"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MountainIcon } from 'lucide-react';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push('/chat');
      } else {
        const data = await res.json();
        setError(data.message || '登录失败，请检查您的邮箱或密码。');
      }
    } catch (err) {
      setError('网络错误，请检查您的网络连接。');
    }
  };

  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-screen bg-transparent p-4">
        <div className="w-full max-w-md space-y-8 bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <div className="text-center">
            <MountainIcon className="mx-auto h-12 w-auto" />
            <h2 className="mt-6 text-3xl font-extrabold text-foreground">
              登录您的账户
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              欢迎回到 EKo-Aggregator Chat
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  邮箱地址
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-border placeholder-muted-foreground text-foreground rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="邮箱地址"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  密码
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-border placeholder-muted-foreground text-foreground rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="密码"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-muted rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-foreground">
                  记住我
                </label>
              </div>

              <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-primary hover:text-primary/90">
                  忘记密码?
                </Link>
              </div>
            </div>

            {error && <p className="text-sm text-red-500 text-center">{error}</p>}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                登录
              </button>
            </div>
            <div className="text-sm text-center">
                <Link href="/register" className="font-medium text-primary hover:text-primary/90">
                    还没有账户？立即注册
                </Link>
            </div>
          </form>
        </div>
      </div>
    </PageTransition>
  );
};

export default LoginPage;
