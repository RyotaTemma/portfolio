import axios from 'axios';

export default async function (req, res) {
  // CORS (Cross-Origin Resource Sharing) の設定
  // 開発中は '*' で許可し、本番環境ではポートフォリオのドメインに限定
  res.setHeader('Access-Control-Allow-Origin', process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // プリフライトリクエストへの対応
    return res.status(204).end();
  }

  // POSTリクエスト以外は拒否
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ status: 'error', message: 'Missing required fields: name, email, message' });
  }

  // Vercelの環境変数からLINE Messaging APIの認証情報を取得
  // Vercelで LINE_CHANNEL_ACCESS_TOKEN="YOUR_CHANNEL_ACCESS_TOKEN" のように設定
  // Vercelで LINE_USER_ID="YOUR_USER_ID" のように設定
  const LINE_CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN; 
  const LINE_USER_ID = process.env.LINE_USER_ID; 

  if (!LINE_CHANNEL_ACCESS_TOKEN || !LINE_USER_ID) {
    console.error('LINE Messaging APIの環境変数が設定されていません。');
    return res.status(500).json({ status: 'error', message: 'サーバー設定エラー: LINE認証情報が不足しています。' });
  }

  // LINE Messaging APIのPush Messageエンドポイント
  const LINE_PUSH_API_URL = 'https://api.line.me/v2/bot/message/push';

  // LINEに送るメッセージを作成
  const lineMessageContent = `
新しいお問い合わせがありました！
--------------------
お名前: ${name}
メール: ${email}
メッセージ:
${message}
--------------------
`;

  const requestBody = {
    to: LINE_USER_ID,
    messages: [
      {
        type: 'text',
        text: lineMessageContent
      }
    ]
  };

  try {
    // LINE Messaging APIを呼び出す
    const response = await axios.post(
      LINE_PUSH_API_URL,
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`
        }
      }
    );

    console.log('LINE Messaging APIによる通知が成功しました。', response.data);
    return res.status(200).json({ status: 'success', message: 'メッセージが正常に送信されました。' });

  } catch (error) {
    console.error('LINE Messaging APIによる通知の送信中にエラーが発生しました:', error.response ? error.response.data : error.message);
    let errorMessage = 'メッセージの送信に失敗しました。';
    if (error.response && error.response.status) {
      errorMessage += ` (LINE APIエラー: ${error.response.status} ${JSON.stringify(error.response.data)})`;
    }
    return res.status(500).json({ status: 'error', message: errorMessage });
  }
}
