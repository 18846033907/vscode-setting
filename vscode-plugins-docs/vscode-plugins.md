# Vs Code 插件推荐

## 编码格式

| 插件                                                       | 简述                              | 官网链接                                                                                       |
| ---------------------------------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------- |
| [Auto Close Tag](#Auto-Close-Tag-Demo)                     | 自动闭合标签                      | [详情](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)       |
| [Auto Rename Tag](#Auto-Rename-Tag-Demo)                   | 自动重命名标签                    | [详情](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)      |
| [Bracket Pair Colorizer](#Bracket-Pair-Colorizer-Demo)     | 生成易读的彩色括号                | [详情](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)   |
| [Path Intellisense](#Path-Intellisense-Demo)               | 路径匹配                          | [详情](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) |
| [ESLint](#ESLint-Demo)                                     | 用于支持 JavaScript 实时语法校验  | [详情](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)             |
| [Prettier - Code formatter](#Prettier-Code-formatter-Demo) | 格式化为标准风格                  | [详情](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)             |
| [EditorConfig for VS Code](#EditorConfig-for-VS-Code-Demo) | EditorConfig 规范不同编辑器的配置 | [详情](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)          |
| [stylelint](#stylelint-Demo)                               | 样式检查                          | [详情](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)                   |

### Auto-Close-Tag-Demo

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Auto-Close-Tag/close-tag.gif)
![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Auto-Close-Tag/st3.gif)
![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Auto-Close-Tag/usage.gif)

### Auto-Rename-Tag-Demo

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Auto-Rename-Tag/usage.gif)

### Bracket-Pair-Colorizer-Demo

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Bracket-Pair-Colorizer/usage.gif)

### Path-Intellisense-Demo

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Path-Intellisense/usage.gif)

### ESLint-Demo

```
npm install eslint babel-eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-babel eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-react prettier --save-dev
```

在项目根目录下添加.eslintrc 文件

```json
{
  "parser": "babel-eslint",
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["import", "react"],
  "env": {
    "browser": true,
    "jest": true,
    "es6": true,
    "node": true
  },
  "rules": {
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"],
        "specialLink": ["hrefLeft", "hrefRight", "to"],
        "aspects": ["noHref", "invalidHref", "preferButton"]
      }
    ],
    "react/jsx-filename-extension": 0,
    "react/no-multi-comp": 0,
    "react/destructuring-assignment": 0,
    "operator-assignment": 0,
    "no-mixed-operators": "error",
    "no-tabs": "error",
    "no-unexpected-multiline": "error",
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": false
      }
    ]
  },
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  }
}
```

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/ESLint/usage.gif)

### Prettier-Code-formatter-Demo

```
npm install prettier --save-dev
```

在项目根目录下添加.prettierrc 文件

```json
{
  "eslintIntegration": true,
  "stylelintIntegration": true,
  "tabWidth": 2,
  "singleQuote": true,
  "semi": false
}
```

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Prettier-Code-formatter/usage.gif)

### EditorConfig-for-VS-Code-Demo

在项目根目录下添加.editorconfig 文件

```json
[*]
# Indentation style
# Possible values - tab, space
indent_style = space

# Indentation size in single-spaced characters
# Possible values - an integer, tab
indent_size = 2

# Line ending file format
# Possible values - lf, crlf, cr
end_of_line = lf

# File character encoding
# Possible values - latin1, utf-8, utf-16be, utf-16le
charset = utf-8

# Denotes whether to trim whitespace at the end of lines
# Possible values - true, false
trim_trailing_whitespace = true

# Denotes whether file should end with a newline
# Possible values - true, false
insert_final_newline = true
```

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/EditorConfig-for-VS-Code/usage.gif)

### stylelint-Demo

```
npm install stylelint --save-dev
npm install stylelint-config-standard --save-dev
```

在项目根目录下添加 stylelintrc 文件

```json
{
  "extends": "stylelint-config-standard"
}
```

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/stylelint/usage.gif)

## Git

| 插件                                                       | 简述                            | 官网链接                                                                            |
| ---------------------------------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------- |
| [Git History](#Git-History-Demo)                           | 可查看文件的 git log 并进行对比 | [详情](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) |
| [GitLens-Git supercharged](#GitLens-Git-supercharged-Demo) | 显示代码每一行的最新修改人      | [详情](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)         |

### Git-History-Demo

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Git-History/compare.gif)
![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Git-History/fileHistoryCommand.gif)
![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Git-History/fileHistoryCommandMore.gif)
![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Git-History/gitLogv2.gif)
![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/Git-History/lineHistoryCommand.gif)

### GitLens-Git-supercharged-Demo

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/GitLens%20%E2%80%94%20Git%20supercharged/gitlens-preview.gif)
![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/GitLens%20%E2%80%94%20Git%20supercharged/usage.gif)

## 语法提示

| 插件                                                                                                 | 简述                                          | 官网链接                                                                                    |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [HTML Snippets](#HTML-Snippets-Demo)                                                                 | HTML 相关语法提示                             | [详情](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)          |
| [JavaScript (ES6) code snippets](#JavaScript-ES6-code-snippets-Demo)                                 | JavaScript 相关语法提示                       | [详情](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)      |
| [ES7 React/Redux/GraphQL/React-Native snippets](#ES7-React-Redux-GraphQL-React-Native-snippets-Demo) | ES7 React/Redux/GraphQL/React-Native 语法提示 | [详情](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) |

### HTML-Snippets-Demo

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/HTML-Snippets/usage.gif)

### JavaScript-ES6-code-snippets-Demo

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/JavaScript-ES6-code-snippets/usage.gif)

### ES7-React-Redux-GraphQL-React-Native-snippets-Demo

![image](https://github.com/18846033907/vscode-setting/blob/master/vscode-plugins-docs/imges/ES7-React-Redux-GraphQL-ReactNative-snippets/usage.gif)

# vscode 配置文件

```
cd 项目文件
mkdir .vscode
cd .vscode
type NUL>settings.json(新建 setting.json 文件)
```

settings.json 的必需配置

```json
{
  // 设置行尾序列为LF
  "files.eol": "\n",
  // 是否开启eslint检测
  "eslint.enable": false
}
```

settings.json 的推荐配置

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

| 功能         | win 快捷键         | mac 快捷键 |
| ------------ | ------------------ | ---------- |
| 打开命令面板 | F1 或 Ctrl+Shift+P | -          |

## 编辑器以及窗口管理

| 功能           | win 快捷键   | mac 快捷键  |
| -------------- | ------------ | ----------- |
| 打开一个新窗口 | Ctrl+Shift+N | Cmd+Shift+N |
| 关闭窗口       | Ctrl+Shift+W | Cmd+Shift+W |
| 新建文件       | Ctrl+N       | Cmd+N       |
| 文件之间切换   | Ctrl+Tab     | Cmd+Tab     |

## 代码格式调整

| 功能       | win 快捷键  | mac 快捷键     |
| ---------- | ----------- | -------------- |
| 代码格式化 | Shift+Alt+F | shift+Option+F |
| 撤销操作   | Ctrl+Z      | Cmd+Z          |
| 保存操作   | Ctrl+S      | Cmd+S          |

## 查找替换

| 功能             | win 快捷键   | mac 快捷键  |
| ---------------- | ------------ | ----------- |
| 查找             | Ctrl+F       | Cmd+F       |
| 查找替换         | Ctrl+H       | Cmd+H       |
| 整个文件夹中查找 | Ctrl+Shift+F | Cmd+Shift+F |

## 显示相关

| 功能 | win 快捷键 | mac 快捷键 |
| ---- | ---------- | ---------- |
| 全屏 | F11        | -          |

<br>更多快捷键 文件>首选项>键盘快捷方式<br>

vscode 相关配置查询 [https://code.visualstudio.com/docs](https://code.visualstudio.com/docs)
