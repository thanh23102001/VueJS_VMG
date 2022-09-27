const tweets = [
    {
      id: 1,
      name: 'James',
      handle: '@jokerjames',
      img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
      tweet: "If you don't succeed, dust yourself off and try again.",
      likes: 10,
    },
    { 
      id: 2,
      name: 'Fatima',
      handle: '@fantasticfatima',
      img: 'https://semantic-ui.com/images/avatar2/large/molly.png',
      tweet: 'Better late than never but never late is better.',
      likes: 12,
    },
    {
      id: 3,
      name: 'Xin',
      handle: '@xeroxin',
      img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
      tweet: 'Beauty in the struggle, ugliness in the success.',
      likes: 18,
    }
  ]
  
  
  Vue.component('tweet-component', {
    template: `
      <div class="tweet">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img :src="tweet.img" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{tweet.name}}</strong> <small>{{tweet.handle}}</small>
                  <br>
                  {{tweet.tweet}}
                </p>
              </div>
                <div class="level-left">
                  <a class="level-item">
                    <span class="icon is-small"><i class="fas fa-heart"></i></span>
                    <span class="likes">{{tweet.likes}}</span>
                  </a>
                </div>
            </div>
          </article>
        </div>
      </div> 
    `,
    props: {
      tweet: Object
    }
  });
  
  new Vue({
    el: '#app',
    data: {
      tweets
    }
  });