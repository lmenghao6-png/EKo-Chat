import { NextResponse } from 'next/server';
import db from '@/lib/db';
import bcrypt from 'bcryptjs';
// 移除 mysql2 类型依赖，使用通用行类型

/**
 * @description 用户登录接口
 * @param {Request} request - 请求对象，包含用户凭证
 * @returns {NextResponse} 返回响应结果
 */
export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // 1. Validate input
    if (!email || !password) {
      return new NextResponse("Missing email or password", { status: 400 });
    }

    // 2. Find the user by email
    const [users] = await db.query<{
      id: string;
      email: string;
      name: string;
      password_hash: string;
    }>(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (users.length === 0) {
      return new NextResponse("用户不存在", { status: 401 });
    }

    const user = users[0];

    // 3. Compare the provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return new NextResponse("密码错误", { status: 401 });
    }

    // 4. Return user info on successful login (excluding password hash)
    // @ts-ignore
    const { password_hash, ...userInfo } = user;

    return NextResponse.json({ message: "Login successful", user: userInfo }, { status: 200 });

  } catch (error) {
    console.error("Error in /api/auth/login:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
