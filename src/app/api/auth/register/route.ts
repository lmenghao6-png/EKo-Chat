import { NextResponse } from 'next/server';
import db from '@/lib/db';
import bcrypt from 'bcryptjs';
// 移除 mysql2 依赖，使用通用行类型

/**
 * @description 用户注册接口
 * @param {Request} request - 请求对象，包含用户信息
 * @returns {NextResponse} 返回响应结果
 */
export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // 1. Validate input
    if (!name || !email || !password) {
      return new NextResponse("Missing name, email, or password", { status: 400 });
    }

    // 2. Check if user already exists
    const [existingUsers] = await db.query<{
      id: string;
      email: string;
      name: string;
    }>(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (existingUsers.length > 0) {
      return new NextResponse("User with this email already exists", { status: 409 });
    }

    // 3. Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Insert the new user into the database
    await db.query(
      'INSERT INTO users (email, name, password_hash) VALUES (?, ?, ?)',
      [email, name, hashedPassword]
    );
    
    // Note: We need to add the password_hash column to our users table.
    // I will provide the SQL command for that shortly.

    return NextResponse.json({ message: "User created successfully" }, { status: 201 });

  } catch (error) {
    console.error("Error in /api/auth/register:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
