/**
 * Created by julia on 29.07.2016.
 */
var voice = require('../../../utility/voice');
var nowPlaying = function nowPlaying(bot,message) {
    if (!message.channel.isPrivate) {
        voice.now(bot,message);
    }
};
module.exports = nowPlaying;