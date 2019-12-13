var pio = new Paul_Pio({
    "mode": "fixed",
    "hidden": false,
    "content": {
			"welcome": ["你好，欢迎来到残梦的博客园啊", "前端路上的小学生", "技术改变命运,技术成就未来"],
					"touch": ["别碰我！", "是…是不小心碰到了吧", "再摸的话我可要报警了！⌇●﹏●⌇", "110吗，这里有个变态一直在摸我(ó﹏ò｡)"],
			"skin": ["想看看我的新服装吗？", "新衣服真漂亮~"],
			"home": "点击这里回到首页！",
			"link": "https://paul.ren/about",
			"close": "QWQ 有缘再会吧~",
			"referer": "你通过 %t 来到了这里",
			"custom": [{
				"selector": ".comment-form",
				"text": ["欢迎参与本文评论，别发小广告噢~", "快来参加本文的评论吧~"]
			}]
		},
    "night": "single.night()",
    "model": ["https://unpkg.com/live2d-widget-model-hijiki/assets/hijiki.model.json"]
});