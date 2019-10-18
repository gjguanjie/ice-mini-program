// pages/post/post-comment/post-comment.js
var tmpData = require("../../../data/commentData.js")
Page({

  /**
   * Page initial data
   */
  data: {
    "comments": tmpData.comments,
    "useKeyboardFlag":true
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
      var id = options.postId
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

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
  preview: function(event) {
    var tmpImg = event.currentTarget.dataset.url
    var imgs = [tmpImg]
    debugger
    wx.previewImage({
      urls: imgs,
      current: tmpImg
    })
  }
})