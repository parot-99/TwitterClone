const url = 'tweets'
const tweetElement = document.getElementById('tweets-container')
let tweets = ''

fetch(url)
.then(response => response.json())
.then((data) => {
    data.response.forEach(tweet => {
        tweets += formatTweetElement(tweet)
    });
    tweetElement.innerHTML = tweets
})
.catch(err => { throw err })


function formatTweetElement(tweet) {
    return '<article class="tweet-container"><h3 class="tweet-container-item">' + tweet.id + '-> ' + tweet.content + '</h3>' + likeBtn(tweet) + '</article>'
}

function likeBtn(tweet) {
    return '<button class="prim-btn tweet-container-item" onclick=handleLike(' + tweet.id + ',' +  tweet.likes +')>' + tweet.likes + ' Likes</button>'
}

function handleLike(tweetId, currentCount) {
    currentCount++
    return
}


