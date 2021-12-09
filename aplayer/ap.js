const ap = new APlayer({
  container: document.getElementById('aplayer'),
  lrcType: 3,
  listFolded: true,
  audio: [
    {
      name: '光辉岁月',
      artist: 'Beyond',
	  cover: '/aplayer/cover/光辉岁月.jpg',
      url: '/aplayer/url/光辉岁月.mp3',
      lrc: "/aplayer/lrc/光辉岁月.lrc"
    },
	{
      name: '不再犹豫',
      artist: 'Beyond',
	  cover: '/aplayer/cover/不再犹豫.jpg',
      url: '/aplayer/url/不再犹豫.m4a',
      lrc: "/aplayer/lrc/不再犹豫.lrc"
    },
	{
      name: '友情岁月',
      artist: '郑伊健,陈小春,谢天华,钱嘉乐',
	  cover: '/aplayer/cover/友情岁月.jpg',
      url: '/aplayer/url/友情岁月.m4a',
      lrc: "/aplayer/lrc/友情岁月.lrc"
    }
  ]
});