// pages/post/post-detail/post-detail.js
 var tmpPostDetails = require("../../../data/detailData.js")
Page({

  /**
   * Page initial data
   */
  data: {
   "isPlayingMusic": '',
    "backgroundMusic":'http://sc1.111ttt.cn/2018/1/03/13/396131229550.mp3'
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var postId = options.id
    this.setData({
      "detail": tmpPostDetails.postDetails[postId-1]
    })
    this.onMusicTap()
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '新闻详情',
    })
    this.setData({
      "isPlayingMusic": true
    })
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {
    this.onMusicTap()
  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {
    if(this.data.isPlayingMusic) {
      wx.pauseBackgroundAudio()
    }
  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  collectCollect: function(event) {
    var data = event.currentTarget.dataset.detail
    if (!data.collectionStatus) {
      data.collectionStatus = true
      this.setData({
        "detail.collectionStatus": true,
        "detail.upNum": data.upNum - 1 
      })
    } else {
      data.collectionStatus = false
      this.setData({
        "detail.collectionStatus": false,
        "detail.upNum": data.upNum + 1 
      })
    }
    wx.showToast({
      title: !data.collectionStatus ? "收藏成功" : "取消成功",
      duration: 1000,
      icon: "success",
      mask: true
    })
  },
  detailComment: function(event) {
    var tmpData = event.currentTarget.dataset.postId
    wx.navigateTo({
      url: '../post-comment/post-comment?id=tmpData',
    })
  },
  onMusicTap: function() {
    if(this.data.isPlayingMusic) {
      wx.pauseBackgroundAudio()
      this.setData({
        "isPlayingMusic": !this.data.isPlayingMusic
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: this.data.backgroundMusic,
        title: '最美的期待'
      })
      this.setData({
        "isPlayingMusic": !this.data.isPlayingMusic
      })
    }
  },
  onShareAppMessage: function() {
    return {
      title:"11",
      desc:"111",
      path:"pages/post/post-detail/post-detail"
    }
  }
})