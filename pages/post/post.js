// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "avatar": "../../images/post/zly2.jpg",
    "date": "2019-10-10",
    "title": "赵傻小妞",
    "postImg": "../../images/post/zly3.jpg",
    "postContent": "赵丽颖，1987年10月16日出生于河北省廊坊市，中国内地影视女演员、歌手。2006年，因获得雅虎搜星比赛冯小刚组冠军而进入演艺圈；同年，在冯小刚执导的广告片《跪族篇》中担任女主角。2011年，因在古装剧《新还珠格格》中饰演晴儿一角而被观众认识",
    "readCount": 109
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      "title": "赵大漂亮"
    })
    this.setData({
      "dynamicImgs": [
        "../../images/post/zly1.jpg",
        "../../images/post/zly2.jpg",
        "../../images/post/zly3.jpg",
        "../../images/post/zly4.png",
        "../../images/post/zly5.jpg"
      ]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("onReady :被调用")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("onShow :被调用")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("onHide :被调用")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log("onUnload :被调用")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log("onPullDownRefresh :被调用")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("onReachBottom :被调用")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log("onShareAppMessage :被调用")
  }
})