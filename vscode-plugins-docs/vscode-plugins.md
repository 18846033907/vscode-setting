# Vs Code 插件推荐

| 推荐插件                                                                                              | 简述                                          | 官网链接                                                                                       |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [Auto Close Tag](#Auto-Close-Tag-Demo)                                                                | 自动闭合标签                                  | [详情](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)       |
| [Auto Rename Tag](##Auto-Rename-Tag-Demo)                                                             | 自动重命名标签                                | [详情](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)      |
| [Bracket Pair Colorizer](##Bracket-Pair-Colorizer-Demo)                                               | 生成易读的彩色括号                            | [详情](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)   |
| [ES7 React/Redux/GraphQL/React-Native snippets](##ES7-React/Redux/GraphQL/React-Native-snippets-Demo) | ES7 React/Redux/GraphQL/React-Native 语法提示 | [详情](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)    |
| [ESLint](##ESLint-Demo)                                                                               | 用于支持 JavaScript 实时语法校验              | [详情](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)             |
| [Git History](##Git-History-Demo)                                                                     | 可查看文件的 git log 并进行对比               | [详情](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)            |
| [GitLens-Git supercharged](##GitLens-Git-supercharged-Demo)                                           | 显示代码每一行的最新修改人                    | [详情](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)                    |
| [HTML Snippets](##HTML-Snippets-Demo)                                                                 | HTML 相关语法提示                             | [详情](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)             |
| [JavaScript (ES6) code snippets](##JavaScript-ES6-code-snippets-Demo)                                 | JavaScript 相关语法提示                       | [详情](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)         |
| [Path Intellisense](##Path-Intellisense-Demo)                                                         | 路径匹配                                      | [详情](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) |
| [Prettier - Code formatter](##Prettier-Code-formatter-Demo)                                           | 格式化为标准风格                              | [详情](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)             |
| [EditorConfig for VS Code](##EditorConfig-for-VS-Code-Demo)                                           | EditorConfig 规范不同编辑器的配置             | [详情](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)          |
| [stylelint](##stylelint-Demo)                                                                         | 样式检查                                      | [详情](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)                   |

## Auto-Close-Tag-Demo

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Auto-Close-Tag/close-tag.gif)
![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Auto-Close-Tag/st3.gif)
![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Auto-Close-Tag/usage.gif)

## Auto-Rename-Tag-Demo

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Auto-Rename-Tag/usage.gif)

## Bracket-Pair-Colorizer-Demo

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Bracket-Pair-Colorizer/usage.gif)

## ES7-React/Redux/GraphQL/React-Native-snippets-Demo

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/ES7-React-Redux-GraphQL-ReactNative-snippets/usage.gif)

## Git-History-Demo

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Git-History/compare.gif)
![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Git-History/fileHistoryCommand.gif)
![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Git-History/fileHistoryCommandMore.gif)
![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Git-History/gitLogv2.gif)
![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Git-History/lineHistoryCommand.gif)

## GitLens-Git-supercharged-Demo

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/GitLens%20%E2%80%94%20Git%20supercharged/gitlens-preview.gif)
![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/GitLens%20%E2%80%94%20Git%20supercharged/usage.gif)

## HTML Snippets

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/HTML-Snippets/usage.gif)

## JavaScript (ES6) code snippets

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/JavaScript-ES6-code-snippets/usage.gif)

## Path Intellisense

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Path-Intellisense/iaHeUiDeTUZuo.gif)
![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Path-Intellisense/usage.gif)

# vscode 配置文件

cd 项目文件
mkdir .vscode
cd .vscode
type NUL>settings.json(新建 setting.json 文件)
settings.json 的基础配置

```json
{
  // 设置行尾序列为LF
  "files.eol": "\n",
  // 编辑器字体大小
  "editor.fontSize": 14,
  // 空格
  "editor.tabSize": 2,
  // 保存时是否自动化格式文档
  "editor.formatOnSave": true,
  // 调整窗口的缩放级别
  "window.zoomLevel": 2,
  // 文件保存时，是否自动根据eslint进行格式化
  "eslint.autoFixOnSave": true,
  // 是否开启eslint检测
  "eslint.enable": false,
  // VScode 文件搜索区域配置
  "search.exclude": {
    "**/dist": true,
    "**/build": true,
    "**/package-lock.json": true,
    "**/.gitignore": true,
    "**/.vscode": false,
    "**/yarn.lock": true,
    "**/package.json": true
  }
}
```

<br>更多配置项 [https://code.visualstudio.com/docs/getstarted/settings](https://code.visualstudio.com/docs/getstarted/settings)<br>

# vscode 常用快捷键

## 主命令框

<br>打开命令面板：F1 或 Ctrl+Shift+P,在打开的输入框内,可以输入任何命令<br>
<br>例如：按一下 Backspace 会进入到 Ctrl+P 模式<br>
<br>在 Ctrl+P 下输入 > 可以进入 Ctrl+Shift+P 模式<br>

## 编辑器以及窗口管理

<br>打开一个新窗口： Ctrl+Shift+N<br>
<br>关闭窗口： Ctrl+Shift+W<br>
<br>新建文件： Ctrl+N<br>
<br>文件之间切换： Ctrl+Tab<br>

## 代码格式调整

<br>代码格式化： Shift+Alt+F(vscode 有些 bug，有时需要按多次才能格式化，也可以直接在当前文件右键选择格式化文档)<br>
<br>撤销操作：Ctrl+Z<br>
<br>保存操作：Ctrl+S<br>

## 查找替换

<br>查找： Ctrl+F<br>
<br>查找替换： Ctrl+H<br>
<br>整个文件夹中查找： Ctrl+Shift+F<br>

## 显示相关

<br>全屏：F11<br>

<br>更多快捷键 文件>首选项>键盘快捷方式<br>

vscode 相关配置查询 [https://code.visualstudio.com/docs](https://code.visualstudio.com/docs)
