const https = require('https');
const fs = require('fs');
const ca = fs.readFileSync('pem/cert.pem'); // 替换为你的自签名根证书路径
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// 创建一个忽略证书验证的 agent
const httpsAgent = new https.Agent({
    rejectUnauthorized: false, // 设置为 true 以启用证书验证
    ca: ca // 使用自签名证书
});

function fetchGetSSOKey(serverName, ssoKey) {
    return new Promise((resolve, reject) => {
        // 准备请求参数
        const requestData = {
            serverName: serverName,
            ssoKey: ssoKey
        };
        // 发送fetch请求
        fetch('https://127.0.0.1:8000/sso-login.api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData),
            agent: httpsAgent
        }).then(response => {
            if (!response.ok) {
                reject(new Error('网络响应不正常，状态码: ' + response.status));
            }
            resolve(response.json());
        })
    });
}

function RequestFetchLogin(serverName, ssoKey) {
    console.log("RequestFetchLogin:", serverName, ssoKey);
    fetchGetSSOKey(serverName, ssoKey)
        .then(data => {
            console.log('登录成功:', data);
            // 这里可以添加登录成功后的处理逻辑
        })
        .catch(error => {
            console.error('登录请求失败:', error);
            // 这里可以添加错误处理逻辑
        });
}

// 你的请求函数
async function testRequestFunction() {
    await RequestFetchLogin('testServer', 'testSsoKey123');
}

testRequestFunction();