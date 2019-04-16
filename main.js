var Twitter = require ('twitter');
var fs = require ('fs');

function twitterAuthentication()
{
    var twitterCredentials = fs.readFileSync('Keys.json', 'utf-8');
    var twitterParsedCredentials = JSON.parse(twitterCredentials);
    var client = new Twitter
    ({
        consumer_key: twitterParsedCredentials.twitter[1].consumer_key,
        consumer_secret: twitterParsedCredentials.twitter[1].consumer_secret,
        access_token_key: twitterParsedCredentials.twitter[1].access_token_key,
        access_token_secret: twitterParsedCredentials.twitter[1].access_token_secret
    });
    
//    client.get('statuses/home_timeline', {screen_name: twitterParsedCredentials.twitter[1].name, count: '50', include_rts: 'false'} , function(error, tweets, response)
//    {
//        var allTweets = JSON.parse(JSON.stringify(tweets, null, 2));
//        for(var i = 0; i < allTweets.length; i ++)
//            {
//                console.log(allTweets[i].user.name);
//            }
//    });
    
}

function postTweet(status)
{
    client.post('statuses/update', {status: status},function(){});
}

setTimeout(twitterAuthentication, 0);