(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{627:function(t,s,n){"use strict";n.r(s);var a=n(34),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("平台内置了国际化，支持自定义国际化、element-plus 国际化及 vxe-table 国际化。")]),t._v(" "),n("h2",{attrs:{id:"vscode-插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vscode-插件"}},[t._v("#")]),t._v(" vscode 插件")]),t._v(" "),n("p",[t._v("如果您使用的编辑器是 "),n("code",[t._v("vscode")]),t._v(" 请安装插件 "),n("code",[t._v("i18n Ally")]),t._v(" 以便带来更友好的国际化提示\n"),n("img",{attrs:{src:"/img/guide/i18nAlly.png",alt:"i18nAlly"}})]),t._v(" "),n("p",[t._v("当然不要忘记把下图红框包起来的代码添加到您 "),n("code",[t._v("vscode")]),t._v(" 的 "),n("code",[t._v("settings.json")]),t._v(" 中")]),t._v(" "),n("p",[n("img",{attrs:{src:"/img/guide/settings.png",alt:"settings"}})]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i18n-ally.localesPaths"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"locales"')]),t._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i18n-ally.keystyle"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nested"')]),t._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i18n-ally.sortKeys"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" true,\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i18n-ally.namespace"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" true,\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i18n-ally.enabledParsers"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yaml"')]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i18n-ally.sourceLanguage"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),t._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i18n-ally.displayLanguage"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zh-CN"')]),t._v(",\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i18n-ally.enabledFrameworks"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[n("img",{attrs:{src:"/img/guide/vscode.png",alt:"vscode"}})]),t._v(" "),n("h2",{attrs:{id:"注入国际化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注入国际化"}},[t._v("#")]),t._v(" 注入国际化")]),t._v(" "),n("p",[t._v("平台使用 "),n("a",{attrs:{href:"https://www.npmjs.com/package/@intlify/vite-plugin-vue-i18n",target:"_blank",rel:"noopener noreferrer"}},[t._v("@intlify/vite-plugin-vue-i18n"),n("OutboundLink")],1),t._v(" 这个国际化 "),n("code",[t._v("vite")]),t._v(" 插件配合  "),n("a",{attrs:{href:"https://www.npmjs.com/package/vue-i18n",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-i18n"),n("OutboundLink")],1),t._v("来实现国际化，采用了 "),n("code",[t._v("yaml")]),t._v(" 格式。当然这款国际化 "),n("code",[t._v("vite")]),t._v(" 插件不光支持 "),n("code",[t._v("yaml")]),t._v(" 格式，具体看"),n("a",{attrs:{href:"https://github.com/intlify/bundle-tools/blob/main/packages/vite-plugin-vue-i18n/README.md#include",target:"_blank",rel:"noopener noreferrer"}},[t._v("vite-plugin-vue-i18n/README.md"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("img",{attrs:{src:"/img/guide/i18n.png",alt:"i18n"}}),t._v("\n如上图：中文添加到 "),n("code",[t._v("zh-CN.yaml")]),t._v(" 文件里，英文添加到 "),n("code",[t._v("en.yaml")]),t._v(" 文件里\n使用方法如下：(比如上图蓝框框选的 "),n("code",[t._v("hsLoginOut")]),t._v(" ，按照文件名加国际化命名结构即可)")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'buttons.hsLoginOut'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("精简版完全剔除了 vxe-table，如果需要 vxe-table 国际化请参考完整版"),n("a",{attrs:{href:"https://gitee.com/yiming_chang/vue-pure-admin/blob/main/src/plugins/vxe-table/index.ts#L65",target:"_blank",rel:"noopener noreferrer"}},[t._v("vxe-table/index.ts"),n("OutboundLink")],1),t._v(" "),n("Badge",{attrs:{text:"代码"}})],1)]),t._v(" "),n("h2",{attrs:{id:"用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),n("ul",[n("li",[t._v("如何配合 "),n("code",[t._v("i18n Ally")]),t._v(" 插件带来智能提示（无实际意义，只对提示起作用）\n")])]),t._v(" "),n("h3",{attrs:{id:"_1-在-ts-文件中使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-在-ts-文件中使用"}},[t._v("#")]),t._v(" 1. 在 ts 文件中使用")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$t")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/@/plugins/i18n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$t")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"menus.hslogin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("效果\n"),n("img",{attrs:{src:"/img/guide/i18nRouter.png",alt:"i18n"}})]),t._v(" "),n("h3",{attrs:{id:"_2-在-vue-文件中使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-在-vue-文件中使用"}},[t._v("#")]),t._v(" 2. 在 vue 文件中使用")]),t._v(" "),n("p",[t._v("对于 "),n("code",[t._v("i18n Ally")]),t._v(" 插件来说要想得到智能提示必须使用带有 "),n("code",[t._v("t")]),t._v(" 的别名而且 "),n("code",[t._v("t")]),t._v(" 永远在最后一位，例如 "),n("code",[t._v("$$t")]),t._v(" 、 "),n("code",[t._v("&t")]),t._v(" 类似格式都是生效的，而 "),n("code",[t._v("$t$")]),t._v(" 、 "),n("code",[t._v("t&")]),t._v(" 不生效 "),n("a",{attrs:{href:"https://gitee.com/yiming_chang/pure-admin-thin/blob/main/src/views/login/index.vue#L159",target:"_blank",rel:"noopener noreferrer"}},[t._v("/views/login/index.vue"),n("OutboundLink")],1),t._v(" "),n("Badge",{attrs:{text:"代码参考"}})],1),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$t")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/@/plugins/i18n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$t")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'login.usernameReg'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("效果\n"),n("img",{attrs:{src:"/img/guide/i18nLogin.jpg",alt:"i18n"}})]),t._v(" "),n("ul",[n("li",[n("p",[t._v("国际化函数、方法")]),t._v(" "),n("p",[n("code",[t._v("useI18n")]),t._v(" 必须在 "),n("code",[t._v("setup")]),t._v(" 中使用 "),n("a",{attrs:{href:"https://vue-i18n.intlify.dev/guide/migration/vue3.html#usei18n-in-vue-component",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-i18n"),n("OutboundLink")],1),t._v(" "),n("Badge",{attrs:{text:"vue-i18n文档"}}),t._v(" "),n("code",[t._v("useI18n in Vue Component")])],1),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useI18n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-i18n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconst "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" t "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" useI18n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item.text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])])])]),t._v(" "),n("p",[t._v("平台提供 "),n("code",[t._v("transformI18n")]),t._v(" 国际化转换工具函数 "),n("a",{attrs:{href:"https://gitee.com/yiming_chang/pure-admin-thin/blob/main/src/plugins/i18n.ts#L38",target:"_blank",rel:"noopener noreferrer"}},[t._v("transformI18n"),n("OutboundLink")],1),t._v(" "),n("Badge",{attrs:{text:"代码"}})],1),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" transformI18n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/@/plugins/i18n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument.title "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" transformI18n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  item.meta.title as string,\n  item.meta?.i18n as boolean\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("有的朋友不想要国际化，那我也录制了剔除国际化的教程 "),n("a",{attrs:{href:"https://www.bilibili.com/video/BV1Ru411B7k3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pure-admin-thin 剔除国际化（代码上完全剔除、页面上快速剔除）"),n("OutboundLink")],1),t._v(" "),n("Badge",{attrs:{text:"视频教程"}})],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);