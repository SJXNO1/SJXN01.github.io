module.exports = {
    title: "VuePress",
    description: "Vue 驱动的静态网站生成器",
    base: "/",
    plugins: {
        '@vuepress/active-header-links': {},
//          'vuepress-plugin-auto-sidebar':{}
        'autobar':{}
    },
    themeConfig: {
        // logo: '/assets/img/logo.png',
        nav: [
            { text: 'External', link: 'https://google.com', target: '_self', rel: '' },
            { text: 'Guide', link: '/guide/', target: '_blank' }
        ]
    }
}
