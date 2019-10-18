// pages/post/post-detail/post-detail.js
 var tmpPostDetails = require("../../../data/detailData.js")
Page({

  /**
   * Page initial data
   */
  data: {
   
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var postId = options.id
    this.setData({
      "detail": tmpPostDetails.postDetails[postId-1]
    })
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '新闻详情',
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

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

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
  }
})