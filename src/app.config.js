export default {
  pages: [
    'pages/home/index',
    'pages/health/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#333333',
    selectedColor: '#25b864',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: 'assets/images/tabs/home.png',
        selectedIconPath: 'assets/images/tabs/home_selected.png'
      },
      {
        pagePath: 'pages/health/index',
        text: '健康',
        iconPath: 'assets/images/tabs/health.png',
        selectedIconPath: 'assets/images/tabs/health_selected.png'
      }
    ]
  }
}
