//ubreddit search button handler
var searchButtonHandler = function(){
  var subredditInputField = document.getElementById("subreddit-search-text")
  var searchButton = document.getElementById("subreddit-search-button")
  var container = document.getElementsByClassName("container")[0]
  searchButton.addEventListener('click', function(event){
    var subreddit = document.createElement("subreddit")
    subreddit.setAttribute("name", subredditInputField.value)
    container.appendChild(subreddit)
  })
}

window.addEventListener('load', searchButtonHandler)


//subreddit component code
var subreddit = Vue.component("subreddit", {
  // render: function (createElement) {
  //   return createElement(
  //     'subreddit'
  //   )
  // },
  props: ["name"],
  template: "#subreddit",
  data: function(){return {posts:[]} },
  created: function(){
    this.$http.get("https://www.reddit.com/r/" + this.name + "/top.json?limit=5")
    .then(function(response){
      if (typeof response.data == 'string'){
        response.data = JSON.parse(response.data);
      }
      this.posts = response.data.data.children;
    });
  }

})

//post component code
var post  = Vue.component('post', {
  template: "#post",
  props: ['item'],
  methods: {
    getImageBackgroundCSS: function(img) {
      if (img && img!="self" && img != "nsfw"){
        return "background-image: url(" + img + ")";
      }
      else {
        return 'background-image: url(assets/img/placeholder.png)';
      }
    }
  }
})


//Defining Custom Filters

Vue.filter('uppercase', function(value){
  return value.toUpperCase();
})

Vue.filter('truncate', function(value){
  var length = 60;

  if (value.length <= length){
    return value;
  } else {
    return value.substring(0, length) + "..."
  }
})



//initializes app
new Vue({
    el: '#main',
    data: {
      subreddits: [],
      newSubreddit: ''
    },
    methods: {
      addSubreddit: function () {
        this.subreddits.push(this.newSubreddit)
        this.newComment = ''
      }
    }

});
