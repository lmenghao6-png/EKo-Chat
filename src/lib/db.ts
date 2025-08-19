import postgres, { Sql } from 'postgres';

/**
 * @description 创建 PostgreSQL 连接（兼容 mysql2 的 db.query 调用方式）
 * - 允许使用 `?` 占位符，内部自动转换为 `$1 ... $n`
 * - 返回值为 `[rows]`，以兼容现有 `const [rows] = await db.query(...)` 写法
 */
const sql: Sql = postgres({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_NAME || 'thinking',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  ssl: process.env.DB_SSL === 'true' ? 'require' : undefined,
});

/**
 * @description 将 `?` 占位符转换为 `$1...$n`
 * @param {string} text - SQL 文本
 * @param {unknown[]} params - 参数数组
 * @returns {{ text: string; params: unknown[] }} 转换后的 SQL 与参数
 */
function transformPlaceholders(text: string, params: unknown[]): { text: string; params: unknown[] } {
  if (!params || params.length === 0) return { text, params };
  let index = 0;
  const converted = text.replace(/\?/g, () => `$${++index}`);
  return { text: converted, params };
}

/**
 * @description 兼容 mysql2 风格的 db 对象，仅提供 query 方法
 */
const db = {
  /**
   * @description 执行 SQL 查询
   * @template TRow
   * @param {string} text - SQL 文本，支持 `?` 占位符
   * @param {unknown[]} [params] - 参数数组
   * @returns {Promise<[TRow[]]>} 以 `[rows]` 形式返回结果，兼容 `mysql2` 解构写法
   */
  async query<TRow = any>(text: string, params: any[] = []): Promise<[TRow[]]> {
    const { text: converted, params: values } = transformPlaceholders(text, params);
    const rows = (await (sql as unknown as any).unsafe(converted, values)) as TRow[];
    return [rows];
  },
};

export default db;
