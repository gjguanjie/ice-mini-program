// pages/post/post.js
var tmpImgs = require("../../data/postData.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      "title": "赵大漂亮"
    })
    var tmpPostDatas = wx.getStorageSync("postContents")
    this.setData({
      "dynamicImgs": tmpImgs.dynamicImgs,
      "postContents": tmpPostDatas
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
  },
  postDetail: function(event) {
    var postId = event.currentTarget.dataset.postId
    wx.navigateTo({
      url: "../post/post-detail/post-detail?id=" + postId,
    })
  }
})