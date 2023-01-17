<img style="max-width:600px;" alt="木易跟打器macOS版" src="img/logo-lanscape%402x.png">

# 木易跟打器macOS版 {{ version }}

> macOS上可直接载文的跟打器

本人是个五笔爱好者，也一直在使用五笔，曾经(差不多10年前了)也做过Windows平台的跟打器[易跟打Windows版](https://github.com/owenyang0/FollowTyperAndSender)。

从 `Windows` 转到 `Mac` 之后，苦于`macOS`没有可用的跟打器，偶然看到了[QT](https://gitee.com/hotleave/quick-typing)基于他们的代码做一个`macOS`上可直接载文用的跟打器，外理了一些macOS系统的兼容，于是便有了这个项目。

<img style="max-width:600px;" alt="木易跟打器macOS版" src="img/ui%402x.png">
<img style="max-width:600px;" alt="木易跟打器macOS版" src="img/kata.png">
<img style="max-width:600px;" alt="木易跟打器macOS版" src="img/history.png">

## 一、快速上手
因为需要载文，在`系统偏好设置-安全性与隐私-辅助功能`中，允许木易跟打器控制电脑

<img width="500" alt="木易跟打器macOS版" src="img/setting.png">

同时由于QQ macOS版本的限制，无法全文获取，可通过以下方式载文
- 鼠标移至聊天窗口对应消息位置
- 按`F4`载入文本
- 开始打字

## 二、主要功能

- [x] QQ群直接载文
- [x] 赛文跟打
- [x] 词语提示
- [x] 本地发文-复合指标
- [x] 成绩发送

## 三、Contributing

- 有问题，提个[Issue](https://github.com/owenyang0/easy-typer/issues)
- 有想法，提个[Issue](https://github.com/owenyang0/easy-typer/issues)
- 或通过QQ群联系我：**木易跟打器** `787343469`
- 有能力，提个[PR](https://github.com/owenyang0/easy-typer/pulls)

## 四、声明

1. 本程序系私人用途，非商业产品，即不提供相应的服务
1. 本程序所有数据均保存在用户浏览器的[IndexedDB](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API)中，**不会上传到任何服务器**
1. 如果有侵权行为，请联系：`songallica@gmail.com`，会在看到后第一时间取消
1. 用户使用本程序所引发的一切问题，由用户自己承担，本程序概不负责
1. **使用本程序则旨在接受本条及以上条款**

## 五、操作说明

### 5.1 快捷键

- `F4`：激活QQ聊天窗口，从当前鼠标位置载文（确保鼠标在需要载文的消息上面）
- `Ctrl` + `v`：从剪切板载文（Mac下为`Cmd` + `v`，与粘贴快捷键一致）
- `F3`：重打
- `Esc`：暂停
- `Enter`: 继续


### 5.2 载文
由于QQ macOS版本的限制，无法全文获取。可将鼠标移至聊天窗口对应消息位置，按`F4`载入文本。

1. 『赛文文字』从QQ群使用指令获取赛文，然后鼠标移至赛文外，按`F4`即可
2. 『自由文本』将要打的文本复制到剪切板，然后到主页粘贴即可

### 5.3 打文

> 载文后，下方的输入框自动获取焦点，当按下任**意键**时，开始计时。

> 打文过程中可以使用`Esc`暂停。暂停后，使用`Enter`继续，按下`Enter`后，输入框自动获取焦点，并立即继续计时。

> 如果打的过程中，或完成后，对结果不满意，可以按`F3`重新开始。计时会清零，并等待第一个键按下后，再次开始计时。

> 如果赛文较长，而对照文本区域无法完全显示，那么在打文过程中，对照文本会自动根据输入进度移动滚动条，方便跟打。

> 如果在打文时输入错误的字词，会以指定颜色的背景（默认是红色）显示。

> 跟打时，必须将赛文**全部输入正确**才会停止计时，如果发现打完最后一个字时，并没有提示完成，计时还在继续，则需要到对照文本中查找被标成错误背景的字词并加以修正，直至全部正确。

#### 词语提示

> 程序提供词语提示功能，方便前期掌握词库中的词语。

> 在词语提示功能打开时，程序会将赛文中的词语去词库中匹配，并计算出**码长最短**的一个组合，这个码长就是理论码长。

> 开始输入后，如果没按词语提示的内容输入，那么提示的内容会同时进行调整，提示从当前位置开始的码长最短的组合。

基础的词语提示以间隔加粗的方式展示，如：“这个**码长**短”。在此基础上，还提供：

- 码长提示：用不同的颜色（不是背景颜色）来区分1，2，3，4码的字词。
- 选重提示：在需要选重的字词下方增加下划线，并在下划线下方显示选重键。如果某个字词不需要选重，则下方什么都不显示。
- 编码提示：在字词下方显示该字词的编码（不含选重键）。除了该方式外，界面右上角也有编码及选重键的提示。
- 标点顶屏：在可以使用标点顶屏的字词下显示顶屏提示（默认是“顶”字），如果某个首选字词后是标点，则可以利用标点直接将首选上屏，这样可以减少1码。

***词语提示需要上传码表后才可以使用，具体见设置中的相关内容***

### 5.4 发送成绩

跟打结束后，成绩会**自动**发送至QQ群当前激活的窗口并发送，并复制到系统剪切板

如不想自动发送成绩，可在左侧开启 **`潜水`** 模式

### 5.5 查看理想编码

程序能根据词库中的词条计算出理想码长，也可以计算出该码长对应的编码。点击左侧面板中的`理想`二字，即可查看理想编码对应的编码。

### 5.6 查看录入的编码

程序会记录打文过程中按下的每一个按键，点击左侧面板中的`码长`二字，即可查看打文过程中按下的所有按键。

## 六、设置

> 设置中的变更，除了上传码表文件会自动保存外，其余的变动均需手动点击下方的”保存按钮进行保存

- `保存`: 将变更写入数据库
- `重置`：恢复设置到数据库中的状态
- `恢复默认`: 将所有设置恢复到默认状态

### 6.1 基础设置

- `自动重新开始`：当删除输入的所有文字后自动重新开始
- `结束条件`: 赛文结束的条件，默认为赛文中所有的字及标点都正确时结束。`打完`则比较赛文和输入的长度，一致就认为结束。但在结束时如果输入的内容中有错字，则每错一个字罚5个字，会导致速度降低

### 6.2 词提设置

- `词语提示`: 总开关，关闭时不会进行词语提示，默认关闭
- `码表文件`: 输入法使用的码表文件，文件使用`多多格式`，`UTF-8`编码，如：

  ```tsv
  五  pf
  五笔    pfr
  笔  rkq
  ```

- `提示选项`：选择提示内容，`词语`是必选的。
- `候选词条数`: 输入法每页候选词条数，对于需要翻页的字词，会的选重提示上增加`翻页键`。默认：9
- `最大候选词位置`：为避免某些生僻词位置过去靠后，可以通过设置该值，将位置过于靠后的词略掉，拆成位置更靠前一些的短词或单字。该设置可能会影响码长。默认：0
- `翻页键`：指定的词条位置比较靠后，需要翻页才能选择时，会在选重码提示上增加该符号。只需要指定提示的符号，方便自己识别，即使输入法设置了多组翻页键。默认：+
- `选重键`：提示时展示的选重键。每个字符表示一个选重键，字符数不得少于`候选词条数`。默认：`␣23456789`
- `选重键文本`：选重键对应的文本，当这些字符出现在字词后面时，**必须**手动选择词条。默认：` 234567890;+'＋；’`
- `标点顶屏提示`: 顶屏提示符号
- `四码唯一自动上屏`：如题
- `第五码首选上屏`：如题

### 6.3 成绩设置

- 标识：赛文标识，如`第999段`
- 速度：每分钟输入的字数，数值越大说明打字的速度越快
- 击键：每秒钟敲击按键的次数
- 码长：平均每个字（含标点符号）所需要的按键次数
- 理想码长：程序计算出的最短码长
- 字数：文章总字数
- 错字：结束时输入的错字数
- 用时：总时间，单位秒
- 暂停：打文时暂停的次数和总暂停时长
- 键准：按键准确率，退格数及回改数作为失误按键来源，算法：`(总按键数 - 退格数 - 回改数 * 平均码长) / 总按键数`
- 键法：左手与右手按键数的均衡性，算法：`(1 - abs(左 - 右) / (左 + 右)) * 100`
- 左：左手按键次数
- 右：右手按键次数
- 打词：有多少字是通过词组的方式输入的
- 打词率：打词数占总字数的比率
- 选重：要输入的字词不在首选位置的次数
- 回改：输入错误被删除的字数
- 键数：总按键次数
- 退格：退格键被按次数
- 回车：回车键被按次数
- 重打：重新打的次数
- 版本：版本信息
- 输入法：所使用的输入法名称
- 个性签名：想立的Flag

### 6.4 标点设置

标点用于：
  - 顶屏计算：仅用于顶屏计算，不将标点加入码表
  - 码表及顶屏计算：将标点加入码表，防止码表中的标点码长过长

> 如果需要将标点加入码表，则需要重新导入词库文件

### 6.5 载文设置

- `去除空格`: 移除文章中的所有空白字符，包括：空格、回车、换行、制表符等
