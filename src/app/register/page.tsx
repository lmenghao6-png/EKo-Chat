"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MountainIcon } from 'lucide-react';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);
    console.log('Form submitted. Sending data:', { name, email, password });

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      console.log('API Response Status:', res.status);
      const data = await res.json();
      console.log('API Response Data:', data);

      if (res.ok) {
        setSuccess('账户创建成功！正在跳转至登录页面...');
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      } else {
        setError(data.message || '注册失败，请稍后再试。');
      }
    } catch (err) {
      console.error('Fetch Error:', err);
      setError('网络错误，请检查您的网络连接。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-screen bg-transparent p-4">
        <div className="w-full max-w-md space-y-8 bg-background/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <div className="text-center">
            <MountainIcon className="mx-auto h-12 w-auto" />
            <h2 className="mt-6 text-3xl font-extrabold text-foreground">
              创建您的新账户
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              即刻开始，体验AI的聚合智慧
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  您的姓名
                </label>
                <input
                  id="full-name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-border placeholder-muted-foreground text-foreground rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="您的姓名"
                />
              </div>
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-border placeholder-muted-foreground text-foreground focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
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

            {error && <p className="text-sm text-red-500 text-center">{error}</p>}
            {success && <p className="text-sm text-green-500 text-center">{success}</p>}

            <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                >
                  {isLoading ? '正在创建...' : '创建账户'}
                </button>
            </div>
            <div className="text-sm text-center">
              <Link href="/login" className="font-medium text-primary hover:text-primary/90">
                已经有账户了？直接登录
              </Link>
            </div>
          </form>
        </div>
      </div>
    </PageTransition>
  );
};

export default RegisterPage;
