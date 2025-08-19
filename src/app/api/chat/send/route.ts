import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

// 这是一个模拟的函数，用于获取当前登录的用户ID
// 在实际应用中，您需要从会话或Token中获取用户ID
const getUserId = async () => {
  // 暂时返回一个固定的用户ID，例如 1
  // 您需要根据您的认证系统来实现真实的逻辑
  return 1; 
};

/**
 * @description 发送聊天消息接口
 * @param {Request} request - 请求对象
 * @returns {NextResponse} 返回响应结果
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    let { message, conversationId } = body;
    
    // 假设您已经有办法获取当前登录用户的ID
    const userId = await getUserId(); 
    
    // 1. 如果没有会话ID，创建一个新的会话
    if (!conversationId) {
      conversationId = uuidv4();
      await db.query(
        'INSERT INTO conversations (id, user_id) VALUES (?, ?)',
        [conversationId, userId]
      );
    }

    // 2. 将用户的消息存入数据库
    await db.query(
      'INSERT INTO messages (conversation_id, sender, content) VALUES (?, ?, ?)',
      [conversationId, 'user', message]
    );

    // 3. 生成AI的回复（暂时使用固定回复）
    const aiResponseContent = `这是对您消息的智能回复: "${message}"`;
    
    // 4. 将AI的回复存入数据库
    await db.query(
      'INSERT INTO messages (conversation_id, sender, content) VALUES (?, ?, ?)',
      [conversationId, 'ai', aiResponseContent]
    );
    
    // 5. 将AI的回复返回给前端
    const finalAnswer = {
      id: uuidv4(),
      text: aiResponseContent,
      provider: "eko-ai",
      latencyMs: 100,
      cost: 0,
    };

    return NextResponse.json({
      conversationId,
      finalAnswer,
    });
    
  } catch (error) {
    console.error("Error in /api/chat/send:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
