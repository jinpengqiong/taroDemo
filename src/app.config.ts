export default {
  pages: [
    'pages/index/index',
    'pages/class/index',
    'pages/find/index',
    'pages/my/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#666",
    selectedColor: "#b4282d",
    backgroundColor: "#fafafa",
    borderStyle: 'black',
    list: [{
      pagePath: "pages/index/",
      // iconPath: "./assets/tab-bar/home.png",
      // selectedIconPath: "./assets/tab-bar/home-active.png",
      text: "首页"
    }, {
      pagePath: "pages/class/",
      // iconPath: "./assets/tab-bar/cate.png",
      // selectedIconPath: "./assets/tab-bar/cate-active.png",
      text: "班级"
    }, {
      pagePath: "pages/find/",
      // iconPath: "./assets/tab-bar/cart.png",
      // selectedIconPath: "./assets/tab-bar/cart-active.png",
      text: "发现"
    }, {
      pagePath: "pages/my/",
      // iconPath: "./assets/tab-bar/user.png",
      // selectedIconPath: "./assets/tab-bar/user-active.png",
      text: "我的"
    }]
  }
}
