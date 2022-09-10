(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{613:function(t,s,a){t.exports=a.p+"assets/img/serverConfig.d90e5f66.png"},614:function(t,s,a){t.exports=a.p+"assets/img/storage.7f224aba.png"},667:function(t,s,a){"use strict";a.r(s);var n=a(34),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"全局配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局配置"}},[t._v("#")]),t._v(" 全局配置")]),t._v(" "),n("p",[t._v("我们可以在项目的 public 文件夹下找到 serverConfig.json 文件，此文件为项目整体的全局配置"),n("br"),t._v(" "),n("a",{attrs:{href:"https://gitee.com/yiming_chang/pure-admin-thin/blob/main/public/serverConfig.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("serverConfig.json"),n("OutboundLink")],1),t._v(" "),n("Badge",{attrs:{text:"代码"}})],1),t._v(" "),n("h3",{attrs:{id:"配置解读"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置解读"}},[t._v("#")]),t._v(" 配置解读")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n  "Version": "2.8.5",         # 平台版本号\n  "Title": "PureAdmin",       # 平台标题\n  "FixedHeader": true,        # 是否固定页头和标签页（true 内容区超出出现纵向滚动条 false 页头、标签页、内容区可纵向滚动）\n  "HiddenSideBar": false,     # 隐藏菜单和页头，只显示标签页和内容区\n  "MultiTagsCache": false,    # 持久化标签\n  "KeepAlive": true,          # 是否启用组件缓存（此处不同于路由的keepAlive，如果此处为true表示设置路由的keepAlive起效，反之false屏蔽整体项目的keepAlive，即使路由设置了keepAlive也不起作用）\n  "Locale": "zh",             # 默认国际化语言 （zh 中文 en 英文）\n  "Layout": "vertical",       # 导航菜单模式 （vertical 左侧菜单模式 horizontal 顶部菜单模式）\n  "Theme": "default",         # 主题模式\n  "Grey": false,              # 灰色模式\n  "Weak": false,              # 色弱模式\n  "HideTabs": false,          # 是否隐藏标签页\n  "SidebarStatus": true,      # vertical左侧菜单模式模式下侧边栏状态（true 展开、false 收起）\n  "EpThemeColor": "#409EFF",  # 主题色（一般不用动）\n  "ShowLogo": true,           # 是否显示logo\n  "ShowModel": "smart"        # 标签页风格（smart 灵动模式、card 卡片模式）\n}\n')])])]),n("h3",{attrs:{id:"用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),n("p",[t._v("① 在 vue 文件中使用（setup 语法）")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getCurrentInstance "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconst instanceConfig "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getCurrentInstance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".appContext.app.config.globalProperties."),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole.log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instanceConfig?.Version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("② 在 vue 文件中使用（非 setup 语法）")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("computed: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("currentConfig")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" this."),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$config")]),t._v("?.Version\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("③ 在 ts 中使用 "),n("a",{attrs:{href:"https://gitee.com/yiming_chang/vue-pure-admin/blob/main/src/config/index.ts#L12",target:"_blank",rel:"noopener noreferrer"}},[t._v("config/index.ts"),n("OutboundLink")],1),t._v(" "),n("Badge",{attrs:{text:"代码"}})],1),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getConfig "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/@/config"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole.log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("?.Version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"实现细节"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现细节"}},[t._v("#")]),t._v(" 实现细节")]),t._v(" "),n("p",[t._v("采用"),n("code",[t._v("axios")]),t._v("在项目初始化前先请求全局配置文件，成功获取后再挂载 vue "),n("a",{attrs:{href:"https://gitee.com/yiming_chang/vue-pure-admin/blob/main/src/main.ts#L29",target:"_blank",rel:"noopener noreferrer"}},[t._v("main.ts"),n("OutboundLink")],1),t._v(" "),n("Badge",{attrs:{text:"代码"}}),t._v(" "),n("img",{attrs:{src:a(613),alt:"serverConfig"}})],1),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("Locale、Layout、Theme、Grey、Weak、HideTabs 这些配置修改后需清空对应的本地存储，如下图：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(614),alt:"storage"}})])]),t._v(" "),n("h2",{attrs:{id:"环境变量配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境变量配置"}},[t._v("#")]),t._v(" 环境变量配置")]),t._v(" "),n("p",[t._v("习惯性地，项目的环境变量配置在根目录下，以三种环境配置为主。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("├── .env                                                    # 基础环境变量\n├── .env.development                                        # 开发环境变量\n├── .env.production                                         # 生产环境变量\n")])])]),n("h3",{attrs:{id:"配置解读-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置解读-2"}},[t._v("#")]),t._v(" 配置解读")]),t._v(" "),n("p",[t._v("平台内置六个环境变量"),n("code",[t._v("VITE_PORT")]),t._v("、"),n("code",[t._v("VITE_PUBLIC_PATH")]),t._v("、"),n("code",[t._v("VITE_PROXY_DOMAIN")]),t._v("、"),n("code",[t._v("VITE_ROUTER_HISTORY")]),t._v("、"),n("code",[t._v("VITE_PROXY_DOMAIN_REAL")]),t._v("、"),n("code",[t._v("VITE_LEGACY")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目本地运行端口号")]),t._v("\nVITE_PORT "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8848")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开发环境读取配置文件路径")]),t._v("\nVITE_PUBLIC_PATH "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开发环境代理")]),t._v("\nVITE_PROXY_DOMAIN "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /api\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 开发环境路由历史模式（Hash 模式：`hash`、HTML5 模式：`h5`、Hash 模式带base参数："hash,base参数"、HTML5 模式带base参数："h5,base参数"）')]),t._v("\nVITE_ROUTER_HISTORY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hash"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开发环境后端地址")]),t._v("\nVITE_PROXY_DOMAIN_REAL "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:3000"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否为打包后的文件提供传统浏览器兼容性支持 支持 true 不支持 false")]),t._v("\nVITE_LEGACY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),n("h3",{attrs:{id:"用法-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用法-2"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),n("p",[t._v("① 在 vue 或 ts 文件中使用 "),n("a",{attrs:{href:"https://gitee.com/yiming_chang/vue-pure-admin/blob/main/build/index.ts#L37",target:"_blank",rel:"noopener noreferrer"}},[t._v("@build/index"),n("OutboundLink")],1),t._v(" "),n("Badge",{attrs:{text:"代码"}})],1),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" loadEnv "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@build/index"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconst "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" VITE_PUBLIC_PATH "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" loadEnv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole.log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VITE_PUBLIC_PATH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h2",{attrs:{id:"package-json-中-script-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#package-json-中-script-配置"}},[t._v("#")]),t._v(" package.json 中 script 配置")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://gitee.com/yiming_chang/vue-pure-admin/blob/main/package.json#L9",target:"_blank",rel:"noopener noreferrer"}},[t._v("package.json"),n("OutboundLink")],1),t._v(" "),n("Badge",{attrs:{text:"代码"}})],1)]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dev"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cross-env --max*old_space_size=4096 vite"')]),t._v(",    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行项目（cross-env 运行跨平台设置和使用环境变量的脚本）")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"serve"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pnpm dev"')]),t._v(",   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行项目（有人喜欢dev、有人喜欢serve）")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rimraf dist && cross-env vite build"')]),t._v(",    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包项目（rimraf 包的作用：以包的形式包装rm -rf命令，用来删除文件和文件夹的，不管文件夹是否为空，都可删除）")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"preview"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vite preview"')]),t._v(",     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 预览项目（需要先打包）")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"preview:build"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pnpm build && vite preview"')]),t._v(",    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包并预览项目（打包后本地会自动开启一个服务方便用户预览打包后的项目）")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clean:cache"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rm -rf node_modules && rm -rf .eslintcache && pnpm install"')]),t._v(",     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除node_modules、清空eslint缓存并重新安装项目依赖")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint:eslint"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --cache --max-warnings 0 '),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("{src,mock}/**/\\*.{vue,ts,tsx}"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(' --fix"')]),t._v(",   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# eslint修复")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint:prettier"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier --write '),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("src/**/*.{js,json,tsx,css,less,scss,vue,html,md}"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('"')]),t._v(",    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# prettier格式化")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint:stylelint"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylelint --cache --fix '),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("\\*\\*/\\_.{vue,css,scss,postcss,less}"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(' --cache --cache-location node_modules/.cache/stylelint/"')]),t._v(",  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stylelint格式化修复")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint:lint-staged"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged -c ./.husky/lintstagedrc.js"')]),t._v(",  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# lint-staged能够让lint只检测暂存区的文件（这里用于husky，提交前校验）")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint:pretty"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pretty-quick --staged"')]),t._v(",  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自动运行prettier（这里用于husky，提交前校验）")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pnpm lint:eslint && pnpm lint:prettier && pnpm lint:stylelint"')]),t._v(",  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 整体lint格式化并修复")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prepare"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"husky install"')]),t._v(",  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装husky（https://typicode.github.io/husky/#/）")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"preinstall"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npx only-allow pnpm"')]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只允许 pnpm（https://pnpm.io/zh/only-allow-pnpm）")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);