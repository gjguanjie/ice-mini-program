// pages/post/post-comment/post-comment.js
var tmpData = require("../../../data/commentData.js")
Page({

  /**
   * Page initial data
   */
  data: {
    "comments": tmpData.comments,
    "useKeyboardFlag":true,
    "keyboardInputValue":"",
    "sendMoreMsgFlag": false,
    "chooseFiles":[],
    "deleteIndex":-1,
    "recordingClass":'',
    "startTime":0,
    "endTime":0,
    "currentAudio":''
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
    wx.previewImage({
      urls: imgs,
      current: tmpImg
    })
  },
  switchInputType: function() {
    this.setData({
      "useKeyboardFlag": !this.data.useKeyboardFlag
    }) 
  },
  bindCommentInput: function(event) {
    this.data.keyboardInputValue = event.detail.value
    console.log(this.data.keyboardInputValue)
  },
  submitComment: function() {
    console.log(this.data.keyboardInputValue)
    this.setData({
      "keyboardInputValue":''
    })
    this.showCommitSuccessToast()
  },
  showCommitSuccessToast: function() {
    wx.showToast({
      title: '评论成功',
      duration: 1000,
      icon: "success"
    })
  },
  sendMoreMsg: function() {
    this.setData({
      "sendMoreMsgFlag": !this.data.sendMoreMsgFlag
    })
  },
  chooseImage: function(event) {
    var sourceType = [event.currentTarget.dataset.category]
    var that = this
    wx.chooseImage({
      sourceType: sourceType,
      success: function(res) {
        that.setData({
          "chooseFiles": res.tempFilePaths
        })
      },
    })
  },
  deleteImage: function(event) {
    var idx = event.currentTarget.dataset.idx;
    this.setData({
      "deleteIndex":idx
    })
    this.data.chooseFiles.splice(idx,1)
    var that = this
    setTimeout(function() {
      this.setData({
        "deleteIndex": -1,
        "chooseFiles": that.data.chooseFiles
      })
    })
  },
  recordStart: function() {
    var that = this
    this.setData({
      "recordingClass": 'recording'
    })
    this.startTime = new Date()
    wx.startRecord({
      success: function(res) {
        var diff = (that.endTime - that.startTime)/1000;
        diff = Math.ceil(diff)
        console.log(res.tempFilePath)
        debugger
        //that.submitVoiceComment({url:res.tempFilePaths,timeLen:diff})
      }
    })
  },
  recordEnd: function() {
    this.setData({
      "recordingClass": ''
    })
    this.endTime = new Date()
    wx.stopRecord()
  },
  playAudio: function(event) {
    var url = event.currentTarget.dataset.url
    that = this
    if(url == this.data.currentAudio) {
      wx.stopVoice()
      this.data.currentAudio =''
    } else {
      this.data.currentAudio = url
      wx.playVoice({
        filePath: url,
        complete: function() {
          that.data.currentAudio =''
        }
      })
    }
  }
})