const ap = new APlayer({
  container: document.getElementById('aplayer'),
  lrcType: 1,
  listFolded: true,
  audio: [
    {
      name: '光辉岁月',
      artist: 'Beyond',
      url: '/aplayer/url/Beyond-光辉岁月 mp3免费下载.mp3',
      lrc: "[ti:光辉岁月][ar:BEYOND][al:Control][by:][offset:0][00:00.00]光辉岁月 - BEYOND[00:09.54]词：黄家驹[00:19.08]曲：黄家驹[00:28.62]钟声响起归家的讯号[00:31.53][00:33.07]在他生命里[00:34.74][00:36.29]仿佛带点唏嘘[00:39.68][00:41.58]黑色肌肤给他的意义"
    }
  ]
});