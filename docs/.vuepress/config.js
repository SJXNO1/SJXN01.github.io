module.exports = {
    title: "VuePress",
    description: "Vue 驱动的静态网站生成器",
    base: "/",
    plugins: {
        '@vuepress/active-header-links': {},
        // 'vuepress-plugin-auto-sidebar':{}
    },
    themeConfig: {
        // logo: '/assets/img/logo.png',
        nav: [
            { text: 'External', link: 'https://google.com', target: '_self', rel: '' },
            { text: 'Guide', link: '/guide/', target: '_blank' }
        ],
        sidebar: [
            {
                title: 'Group 1',   // 必要的
                path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/'
                ]
            },
            {
                title: 'Group 2',
                children: [ /* ... */],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ]
    }
}
