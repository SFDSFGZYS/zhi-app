// prettier.config.js or .prettierrc.js
module.exports = {
  // printWidth - 换行的行长度 int 默认 80 一般使用100
  printWidth: 100,
  // tabWidth - 每个缩进级别的空格数 int 默认 2
  tabWidth: 2,
  // useTabs - 用制表符而不是空格缩进行 bool 默认 false
  useTabs: false,
  // semi - 在语句末尾添加分号 默认true true-在每个语句的末尾添加一个分号 false-仅在可能导致 ASI 故障的行首添加分号。
  semi: false,
  // singleQuote - 使用单引号而不是双引号 默认false true-双引号 false-单引号
  singleQuote: true,
  // quoteProps - 对象属性的引号 有效选项：
  // "as-needed"- 仅在需要时给对象属性添加引号，默认值
  // "consistent"- 一致性：如果对象中至少有一个属性需要引号，则所有属性都需要引号
  // "preserve"- 遵循对象属性中引号的输入用法
  quoteProps: 'as-needed',
  // jsxSingleQuote - 在 JSX 中使用单引号而不是双引号 bool 默认 false
  jsxSingleQuote: false,
  // trailingComma - 末尾逗号 可选参数：
  // "es5"- 尾随逗号在ES5中有效（对象，数组等）。在 TypeScript 中的类型参数中没有尾随逗号 -- 默认值
  // "none"- 没有尾随逗号。
  // "all"- 尽可能使用尾随逗号（包括函数参数和调用）。要运行，以这种方式格式化的JavaScript代码需要一个支持ES2017（Node.js 8 +或现代浏览器）或下层编译的引擎。这还可以在 TypeScript 中的类型参数中使用尾随逗号（自 2018 年 1 月发布 TypeScript 2.7 以来一直受支持）
  trailingComma: 'es5',
  // bracketSpacing - 在对象文本中的括号之间打印空格，默认true 可选参数：
  // true- 示例：{ foo: bar }
  // false- 示例：{foo: bar}
  bracketSpacing: true,
  // bracketSameLine - 多行属性的HTML标签的末尾'>'号是否和最后一行属性在同一行;默认false 可选参数：
  // true- 示例：
  // <button
  //  className="prettier-class"
  //  id="prettier-id"
  //  onClick={this.handleClick}>
  //   Click Here
  // </button>
  // false- 示例：
  // <button
  //  className="prettier-class"
  //  id="prettier-id"
  //  onClick={this.handleClick}
  // >
  //   Click Here
  // </button>
  bracketSameLine: false,
  /* 
    arrowParens - 箭头函数在单个参数时是否要用括号包裹住该参数，默认"always" 
    可选参数：
    "always"- 始终使用括号。例：(x) => x
    "avoid"- 尽可能省略括号。例：x => x
    说明：
    乍一看，避免使用括号可能是更好的选择，因为视觉噪点较少。
    但是，当Prettier删除括号时，添加类型注释，额外参数或默认值以及进行其他更改变得更加困难。
    在编辑实际代码库时，一致使用括号可提供更好的开发人员体验，从而证明该选项的默认值是合理的。
  */
  arrowParens: 'always',
  /* 
    格式化文档的范围
    rangeStart和rangeEnd分别代表开始和结束范围，默认整个文档，即 0 - Infinity
  */
  rangeStart: 0,
  rangeEnd: Infinity,
  // vueIndentScriptAndStyle - 是否缩进 Vue 文件中的代码和标签
  // 有效选项：
  // false- 不要缩进 Vue 文件中的script和style标签
  // true- 缩进 Vue 文件中的script和style标签
  vueIndentScriptAndStyle: false,
  // endOfLine - 在 HTML、Vue 和 JSX 中强制执行每行一个属性。默认false
  // 有效选项：
  // "lf"- 仅换行符（\n），在Linux和macOS以及git存储库内部通用
  // "crlf"- 回车符 + 换行符 （\r\n），在 Windows 上很常见
  // "cr"- 仅回车符（\r），很少使用
  // "auto"- 维护现有的行尾（通过查看第一行之后使用的内容来规范化一个文件中的混合值）
  endOfLine: 'lf',
  // singleAttributePerLine - 在 HTML、Vue 和 JSX 中强制执行每行一个属性
  // 有效选项：
  // false- 不要强制每行具有单个属性。
  // true- 强制每行具有单个属性。
  singleAttributePerLine: false,
}
