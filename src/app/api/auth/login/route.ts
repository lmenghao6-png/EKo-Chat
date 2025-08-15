import { NextResponse } from 'next/server';
import sql from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // 1. Validate input
    if (!email || !password) {
      return new NextResponse("Missing email or password", { status: 400 });
    }

    // 2. Find the user by email
    const users = await sql`SELECT * FROM users WHERE email = ${email}`;
    if (users.length === 0) {
      return new NextResponse("Invalid email or password", { status: 401 }); // Use a generic message for security
    }

    const user = users[0];

    // 3. Compare the provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return new NextResponse("Invalid email or password", { status: 401 });
    }

    // 4. Return user info on successful login (excluding password hash)
    const { password_hash, ...userInfo } = user;

    return NextResponse.json({ message: "Login successful", user: userInfo }, { status: 200 });

  } catch (error) {
    console.error("Error in /api/auth/login:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
