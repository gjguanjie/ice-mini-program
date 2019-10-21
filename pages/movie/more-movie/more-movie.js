// pages/movie/more-movie/more-movie.js
var app = getApp()
var util = require('../../../utils/util.js')
Page({

  /**
   * Page initial data
   */
  data: {
    "movies":[],
    "count": 0,
    "url":''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var category = options.category
    var url = '';
    switch(category) {
      case "正在热映":
        url = app.globalData.doubanBase + "/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&count=9&start="
        break
      case "即将上映":
        url = app.globalData.doubanBase + "/v2/movie/coming_soon?count=9&apikey=0df993c66c0c636e29ecbb5344252a4a&start=" 
        break
      case "豆瓣250":
        url = app.globalData.doubanBase + "/v2/movie/top250?count=9&apikey=0df993c66c0c636e29ecbb5344252a4a&start=" 
        break
    }
    this.setData({
      "url": url
    })
    this.getDoubanData(url + this.data.count)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    wx.showNavigationBarLoading()
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
    this.getMoreDoubanData()
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    this.getMoreDoubanData()
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  getDoubanData: function(url) {
    wx.showNavigationBarLoading()
    util.http(url,this.processDoubanData)
    wx.stopPullDownRefresh()
  },
  processDoubanData: function(tmpDoubanData) {
    var movies = []
    for (var idx = 0; idx < tmpDoubanData.subjects.length; idx++) {
      var subject = tmpDoubanData.subjects[idx]
      var title = subject.title
      if (title >= 6) {
        title = title.substring(0, 6) + "..."
      }
      var temp = {
        "stars": util.convertToStarsArray(subject.rating.stars),
        "title": title,
        "average": subject.rating.average,
        "coverageUrl": subject.images.large,
        "movieId": subject.id
      }
      movies.push(temp)
    }
    this.setData({
      "movies": movies
    })
    wx.hideNavigationBarLoading()
  },
  getMoreDoubanData: function() {
    var tmpCount = this.data.count + 1
    this.setData({
      "count": tmpCount
    })
    console.log(this.data.count)
    this.getDoubanData(this.data.url + tmpCount)
  }
})