import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

export type AuthTokenPayload = {
  userId: string;
  role: 'admin' | 'user';
  email: string;
};

/**
 * @description 生成 JWT
 */
export function signAuthToken(payload: AuthTokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

/**
 * @description 验证并解析 JWT
 */
export function verifyAuthToken(token: string): AuthTokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AuthTokenPayload;
  } catch {
    return null;
  }
}

/**
 * @description 从请求中提取 token（Cookie 或 Authorization）
 */
export function extractTokenFromRequest(request: Request): string | null {
  const cookie = request.headers.get('cookie');
  if (cookie) {
    const match = cookie.match(/auth_token=([^;]+)/);
    if (match) return decodeURIComponent(match[1]);
  }
  const auth = request.headers.get('authorization');
  if (auth && auth.startsWith('Bearer ')) return auth.slice(7);
  return null;
}


