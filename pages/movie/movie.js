// pages/movie/movie.js
var util = require('../../utils/util.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inThreaters: {},
    comingSoon:{},
    top250: {},
    containerShow: true,
    searchPanelShow:false,
    searchResult:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var inThreatersUrl = app.globalData.doubanBase + "/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10";
    var comingSooUrl = app.globalData.doubanBase + "/v2/movie/coming_soon?start=0&count=3&apikey=0df993c66c0c636e29ecbb5344252a4a";
    var top250Url = app.globalData.doubanBase + "/v2/movie/top250?start=0&count=3&apikey=0df993c66c0c636e29ecbb5344252a4a";
    this.getMovieListData(inThreatersUrl,"inThreaters","正在热映")
    this.getMovieListData(comingSooUrl, "comingSoon", "即将上映")
    this.getMovieListData(top250Url, "top250", "豆瓣250")

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getMovieListData:function(url,settedKey,categoryTitle) {
    var that = this;
    wx.request({
      url: url,
      method: "GET",
      header: {
        "content-type":"JSON"
      },
      success: function(res) {
        that.processDoubanData(res.data, settedKey, categoryTitle)
      }
    })
  },
  processDoubanData: function (dbMovies, settedKey, categoryTitle) {
    var movies = []
    for (var idx = 0; idx < dbMovies.subjects.length; idx++ ) {
      var subject = dbMovies.subjects[idx]
      var title = subject.title
      if (title >= 6) {
        title = title.substring(0,6) + "..."
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
    var readData = {}
    readData[settedKey] = {
      "categoryTitle": categoryTitle,
      "movies": movies
    }
    this.setData(readData)
  },
  onMovieTap: function(event) {
    var movieId = 
    wx.navigateTo({
      url: '',
    })
  },
  onMoreTap: function(event) {
    var category = event.currentTarget.dataset.category
    wx.navigateTo({
      url: '/pages/movie/more-movie/more-movie?category=' + category
    })
  },
  onBindFocus: function() {
    this.setData({
      containerShow: false,
      searchPanelShow: true
    })
  },
  onCancelImgTap: function() {
    this.setData({
      containerShow: true,
      searchPanelShow: false,
      searchResult: {},
      inputValue:''
    })
  },
  onBindConfirm: function(event) {
    var keyword = event.detail.value
    var searchUrl = app.globalData.doubanBase + "/v2/movie/top250?start=0&count=9&apikey=0df993c66c0c636e29ecbb5344252a4a"
    this.getMovieListData(searchUrl,"searchResult",'')
  },
  onMovieTap: function (event) {
    var movieId = event.currentTarget.dataset.movieId
    wx.navigateTo({
      url: 'movie-detail/movie-detail?id=' + movieId,
    })
  }
})