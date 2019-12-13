
var Paul_Pio = function(prop) {
	var current = {
		idol: 0,
		menu: document.querySelector(".pio-container .pio-action"),
		canvas: document.getElementById("pio"),
		body: document.getElementsByClassName("pio-container")[0],
		root: document.location.protocol + '//' + document.location.hostname + '/'
	};

	/* - 鏂规硶 */
	var modules = {
		// 鏇存崲妯″瀷
		idol: function() {
			current.idol < (prop.model.length - 1) ? current.idol++ : current.idol = 0;
			return current.idol;
		},
		// 鍒涘缓鍐呭
		create: function(tag, prop) {
			var e = document.createElement(tag);
			if(prop.class) e.className = prop.class;
			return e;
		},
		// 闅忔満鍐呭
		rand: function(arr) {
			return arr[Math.floor(Math.random() * arr.length + 1) - 1];
		},
		// 鍒涘缓瀵硅瘽妗嗘柟娉�
		render: function(text) {
			if(text.constructor === Array) {
				dialog.innerText = modules.rand(text);
			} else if(text.constructor === String) {
				dialog.innerText = text;
			} else {
				dialog.innerText = "杈撳叆鍐呭鍑虹幇闂浜� X_X";
			}

			dialog.classList.add("active");

			clearTimeout(this.t);
			this.t = setTimeout(function() {
				dialog.classList.remove("active");
			}, 3000);
		},
		// 绉婚櫎鏂规硶
		destroy: function() {
			current.body.parentNode.removeChild(current.body);
			document.cookie = "posterGirl=false;" + "path=/";
		}
	};

	var elements = {
		home: modules.create("span", {
			class: "pio-home"
		}),
		skin: modules.create("span", {
			class: "pio-skin"
		}),
		info: modules.create("span", {
			class: "pio-info"
		}),
		night: modules.create("span", {
			class: "pio-night"
		}),
		close: modules.create("span", {
			class: "pio-close"
		})
	};

	var dialog = modules.create("div", {
		class: "pio-dialog"
	});
	current.body.appendChild(dialog);

	/* - 鎻愮ず鎿嶄綔 */
	var action = {
		// 娆㈣繋
		welcome: function() {
			if(document.referrer !== "" && document.referrer.indexOf(current.root) === -1) {
				var referrer = document.createElement('a');
				referrer.href = document.referrer;
				prop.content.referer ? modules.render(prop.content.referer.replace(/%t/, "鈥�" + referrer.hostname + "鈥�")) : modules.render("娆㈣繋鏉ヨ嚜 鈥�" + referrer.hostname + "鈥� 鐨勬湅鍙嬶紒");
			} else if(prop.tips) {
				var text, hour = new Date().getHours();

				if(hour > 22 || hour <= 5) {
					text = '浣犳槸澶滅尗瀛愬憖锛熻繖涔堟櫄杩樹笉鐫¤锛屾槑澶╄捣鐨勬潵鍢�';
				} else if(hour > 5 && hour <= 8) {
					text = '鏃╀笂濂斤紒';
				} else if(hour > 8 && hour <= 11) {
					text = '涓婂崍濂斤紒宸ヤ綔椤哄埄鍢涳紝涓嶈涔呭潗锛屽璧锋潵璧板姩璧板姩鍝︼紒';
				} else if(hour > 11 && hour <= 14) {
					text = '涓崍浜嗭紝宸ヤ綔浜嗕竴涓笂鍗堬紝鐜板湪鏄崍椁愭椂闂达紒';
				} else if(hour > 14 && hour <= 17) {
					text = '鍗堝悗寰堝鏄撶姱鍥板憿锛屼粖澶╃殑杩愬姩鐩爣瀹屾垚浜嗗悧锛�';
				} else if(hour > 17 && hour <= 19) {
					text = '鍌嶆櫄浜嗭紒绐楀澶曢槼鐨勬櫙鑹插緢缇庝附鍛紝鏈€缇庝笉杩囧闃崇孩~';
				} else if(hour > 19 && hour <= 21) {
					text = '鏅氫笂濂斤紝浠婂ぉ杩囧緱鎬庝箞鏍凤紵';
				} else if(hour > 21 && hour <= 23) {
					text = '宸茬粡杩欎箞鏅氫簡鍛€锛屾棭鐐逛紤鎭惂锛屾櫄瀹墌';
				} else {
					text = "濂囪叮淇濈綏璇达細杩欎釜鏄棤娉曡瑙﹀彂鐨勫惂锛屽搱鍝�";
				}

				modules.render(text);
			} else {
				modules.render(prop.content.welcome || "娆㈣繋鏉ュ埌鏈珯锛�");
			}
		},
		// 瑙︽懜
		touch: function() {
			current.canvas.onclick = function() {
				modules.render(prop.content.touch || ["浣犲湪骞蹭粈涔堬紵", "鍐嶆懜鎴戝氨鎶ヨ浜嗭紒", "HENTAI!", "涓嶅彲浠ヨ繖鏍锋璐熸垜鍟︼紒"]);
			};
		},
		// 鍙充晶鎸夐挳
		buttons: function() {
			// 杩斿洖棣栭〉
			elements.home.onclick = function() {
				location.href = current.root;
			};
			elements.home.onmouseover = function() {
				modules.render(prop.content.home || "鐐瑰嚮杩欓噷鍥炲埌棣栭〉锛�");
			};
			current.menu.appendChild(elements.home);

			// 鏇存崲妯″瀷
			elements.skin.onclick = function() {
				loadlive2d("pio", prop.model[modules.idol()]);
				prop.content.skin && prop.content.skin[1] ? modules.render(prop.content.skin[1]) : modules.render("鏂拌。鏈嶇湡婕備寒~");
			};
			elements.skin.onmouseover = function() {
				prop.content.skin && prop.content.skin[0] ? modules.render(prop.content.skin[0]) : modules.render("鎯崇湅鐪嬫垜鐨勬柊琛ｆ湇鍚楋紵");
			};
			if(prop.model.length > 1) current.menu.appendChild(elements.skin);

			// 鍏充簬鎴�
			elements.info.onclick = function() {
				window.open(prop.content.link || "https://paugram.com/coding/add-poster-girl-with-plugin.html");
			};
			elements.info.onmouseover = function() {
				modules.render("鎯充簡瑙ｆ洿澶氬叧浜庢垜鐨勪俊鎭悧锛�");
			};
			current.menu.appendChild(elements.info);

			// 澶滈棿妯″紡
			if(prop.night) {
				elements.night.onclick = function() {
					eval(prop.night);
				};
				elements.night.onmouseover = function() {
					modules.render("澶滈棿鐐瑰嚮杩欓噷鍙互淇濇姢鐪肩潧鍛�");
				};
				current.menu.appendChild(elements.night);
			}

			// 鍏抽棴鐪嬫澘濞�
			elements.close.onclick = function() {
				modules.destroy();
			};
			elements.close.onmouseover = function() {
				modules.render(prop.content.close || "QWQ 涓嬫鍐嶈鍚");
			};
			current.menu.appendChild(elements.close);
		},
		custom: function() {
			prop.content.custom.forEach(function(t) {
				if(!t.type) t.type = "default";
				var e = document.querySelectorAll(t.selector);

				if(e.length) {
					for(var j = 0; j < e.length; j++) {
						if(t.type === "read") {
							e[j].onmouseover = function() {
								modules.render("鎯抽槄璇� %t 鍚楋紵".replace(/%t/, "鈥�" + this.innerText + "鈥�"));
							}
						} else if(t.type === "link") {
							e[j].onmouseover = function() {
								modules.render("鎯充簡瑙ｄ竴涓� %t 鍚楋紵".replace(/%t/, "鈥�" + this.innerText + "鈥�"));
							}
						} else if(t.text) {
							e[j].onmouseover = function() {
								modules.render(t.text);
							}
						}
					}
				}
			});
		}
	};

	/* - 杩愯 */
	var begin = {
		static: function() {
			current.body.classList.add("static");
		},
		fixed: function() {
			action.touch();
			action.buttons();
		},
		draggable: function() {
			action.touch();
			action.buttons();

			var body = current.body;
			body.onmousedown = function() {
				var location = {
					x: event.clientX - this.offsetLeft,
					y: event.clientY - this.offsetTop
				};

				function move(e) {
					body.classList.add("active");
					body.classList.remove("right");
					body.style.left = (event.clientX - location.x) + 'px';
					body.style.top = (event.clientY - location.y) + 'px';
				}

				document.addEventListener("mousemove", move);
				document.addEventListener("mouseup", function() {
					body.classList.remove("active");
					document.removeEventListener("mousemove", move);
				});
			};
		}
	};

	// 杩愯
	this.init = function() {
		if(prop.hidden === true && window.innerWidth < 400) {
			current.body.classList.add("hidden");
		} else {
			action.welcome();

			switch(prop.mode) {
				case "static":
					begin.static();
					break;
				case "fixed":
					begin.fixed();
					break;
				case "draggable":
					begin.draggable();
					break;
			}

			if(prop.content.custom) action.custom();

			loadlive2d("pio", prop.model[0]);
		}
	};
	this.init();
};

// 璇蜂繚鐣欑増鏉冭鏄�
if(window.console && window.console.log) {
	console.info("%c ", "background: url(https://images.cnblogs.com/cnblogs_com/miluluyo/1493340/o_a.gif) no-repeat center;padding-left:400px;padding-bottom: 160px;background-size:400px")
	console.info('\n' + ' %c 残梦 CNBlogs %c https://www.cnblogs.com/sunhang32/ ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
	console.info('\n' + ' %c 残梦 GitHub %c https://github.com/2662419405' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
	console.info('\n' + ' %c 残梦  QQ %c 2662419405 ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
	console.info('\n' + ' %c 残梦 wx %c qq18445623027 ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
}