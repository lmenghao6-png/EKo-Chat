import { NextResponse } from 'next/server';

/**
 * @description 忘记密码接口
 * @param {Request} request - 请求对象，包含用户邮箱
 * @returns {NextResponse} 返回响应结果
 */
export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return new NextResponse("Missing email", { status: 400 });
    }

    // In a real application, you would add logic here to:
    // 1. Check if a user with this email exists in the database.
    // 2. Generate a unique password reset token.
    // 3. Save the token and its expiration date to the database, associated with the user.
    // 4. Send an email to the user with a link containing the reset token.

    console.log(`Password reset requested for email: ${email}`);

    return NextResponse.json({ message: "If an account with that email exists, a password reset link has been sent." }, { status: 200 });

  } catch (error) {
    console.error("Error in /api/auth/forgot-password:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
