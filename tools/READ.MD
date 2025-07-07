### 在项目根目录执行该命令，下载缺失的资源

```bash
make build
```

### 替换js原文件

找到tools/indexjs/index.eaa70.js 该文件，复制到astarte/3.6/web-mobile/assets/other/index.4b18e.js该文件到文件夹中，并修改名称直接替换掉原始文件
复制到位置需要模糊查询一下，就是项目根目录中所有文件夹中的子文件夹的包含“3.6”的文件夹，就是需要找的入口

### 添加全局变量

在项目根目录中的所有文件夹中的找到拥有index.html的文件的文件夹就是入口
首先先需要注释掉index.html中的类似于如下的代码,就是包含gtag.js有关的代码

```html
<!-- Google tag (gtag.js) -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-MTXM3DWCZJ"
    ></script>
```

然后需要删除掉如下类似的代码,也是gtag有关的代码

```html
<script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-MTXM3DWCZJ");
    </script>
```

然后把这部份代码替换为以下代码

```html
<script>
      // window.dataLayer = window.dataLayer || [];
      // function gtag() {
      //   dataLayer.push(arguments);
      // }
      // gtag("js", new Date());
      //
      // gtag("config", "G-MTXM3DWCZJ");
      const queryStringTest = window.location.search;
      const urlParamsTest = new URLSearchParams(queryStringTest);
      const urlParams_getTest = function(name) {
        return urlParamsTest.get(name) || '';
      }
      window["TEST"] = urlParams_getTest('demo') == 'true';;
      window["DW_GAME"] = "fgp";
      // window["DW_URL_HTTP"] = "https://ws-dadaslot.schemefun.com";
      window["DW_URL_HTTP"] = "https://127.0.0.1:8000";
      // window["DW_URL_WS"] = "wss://ws-dadaslot.schemefun.com/lifeservice/ws2";
      window["DW_URL_WS"] = "wss://127.0.0.1:8000/lifeservice/ws2";
    </script>
```

其中 window["DW_GAME"]的值需要修改为index.html的父文件夹的名称，其他保持不变

### 添加上传游戏记录接口

在与index.html同一级目录中的“assets”中，查找“game”与“main”文件夹中的以index为开头的js脚本，读取后，需要去查找“OnCommand”字符，找到类似于如下的代码

```javasscript
(i.OnCommand = function (e, t) {
                  switch (e) {
                    case node$k.AckType.info:
                      var i = _cjsExports.fg3Proto.GameInfoData.decode(t);
                      (this.m_extraBetMul = i.Mul),
                        this.SettingBottomBar(),
                        node$8.AutoPlayPanelInit(),
                        node$9.FeaturesInit(
                          [
                            "/Features/left/spriteFrame",
                            "/Features/right/spriteFrame",
                          ],
                          [
                            Game_Define.StringKey.TWK_FEATURES_LEFT,
                            Game_Define.StringKey.TWK_FEATURES_RIGHT,
                          ],
                          3,
                          this.m_titleSpriteAtlas
                        );
                      var n = node$d.GetGameAtlas();
                      node$9.SetFeatruesDesc([
                        n.getSpriteFrame("txt1"),
                        n.getSpriteFrame("txt2"),
                      ]),
                        node$9.CheckFirstFeatures(),
                        this.LoginSuccess();
                      break;
                    case node$k.AckType.spin:
                    case node$k.AckType.lastSpin:
                      var r;
                      (r = _cjsExports.fg3Proto.SpinAck.decode(t)),
                        this.OnRecvSpinAck(this.ConvertSpinAck(r));
                      break;
                    case node$k.AckType.unshow:
                      var o = _cjsExports.fg3Proto.SpinAck.decode(t);
                      this.m_unshowSpinAck = o;
                  }
                }),
```

其中的i.OnCommand可能会是其他的对象名称，需要匹配到OnCommand隶属于那个对象
并在方法中加入一个参数“data”，下面会用到

### 添加方法

最终在以上步骤完成后，需要在OnCommand方法体中最开头的位置，添加一个新的方法,SendTestSpinInfo

```js
const SendTestSpinInfo = function (data,trueData) {
                        const gameData = {
                            userId: 123,
                            gameId: parseInt(GetLinkParameterByName("gameId")), // mc game
                            betAmount: trueData.RealBet,
                            baseBet: trueData.BaseBet,
                            gameData: data
                        };
                        const init = {
                            method: "POST",
                            headers: new Headers({
                                'Content-Type': 'application/json'
                            }),
                            body:  JSON.stringify(gameData),
                            mode: "cors",
                            credentials: "same-origin",
                            cache: "default",
                            redirect: "follow",
                            referrer: "about:client",
                            integrity: "",
                            duplex: 'half'  // 仅在 body 存在时设置 duplex
                        };
                        let newUrl=DW_URL_HTTP+"/save-game-data.api"+"?tag="+GetLinkParameterByName("gameTag")+"&gameId="+GetLinkParameterByName("gameId");
                        const request= new Request(newUrl, init);
                        // 使用 fetch API 发送请求 如果 TEST 为 true 不用請求接口
                        if(TEST){
                            fetch(request);
                        }
                    }
```

在OnCommand方法体中去匹配

```js
case node$k.AckType.spin:
case node$k.AckType.lastSpin:
```

类似的2行代码，前缀可能不一样，但是都是以AckType.spin与AckType.lastSpin结尾
然后查找到的语句中在break之前插入SendTestSpinInfo(r,data),其中第一个参数需要去匹配查询，比如如下，第一个就是r，第二个参数就是data

```js
case node$k.AckType.spin:
case node$k.AckType.lastSpin:
var r;
(r = _cjsExports.fg3Proto.SpinAck.decode(t)),
this.OnRecvSpinAck(this.ConvertSpinAck(r));
break;
```
