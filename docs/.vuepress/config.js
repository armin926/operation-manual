module.exports = {
  // 部署的基础路径
  base: '/',
  // 网站标题
  title: '操作手册',
  // 配置网站html的head标签 网站图标
  head: [],
  // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  description: '这是一段描述',
  // 主题配置
  themeConfig: {
    // 导航栏logo
    logo: './public/logo1.png',
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '跳转至平台', link: 'http://qionglai.cdwalker.com', target: '_blank' }
    ],
    // 侧边栏
    sidebar: [
      '/intro/',
      '/login-doc/',
      '/pe-doc/',
      '/psy-doc/'
    ],
    sidebarDepth: 1,
    displayAllHeaders: true, // 默认值：false
    lastUpdated: '上次更新：',
    
  }
}