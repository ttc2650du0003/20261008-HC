particlesJS('particles-js',
  {
    "particles": {
      //シェイプ数
      "number": {
        //要素内に表示するシェイプの数
        "value": 140,
        "density": {
          //シェイプ表示間隔設定
          "enable": true, //true:有効, false:無効
          //シェイプ表示間隔
          "value_area": 1000
        }
      },
      //シェイプ色
      "color": {
        "value": "#ffffa4" //複数指定["#ffffff", "#8be9ff", "#a8b8ff"]
      },

      //シェイプの設定
      "shape": {
        //シェイプ形
        "type": "circle", //設定値：circle, edge, triangle, polygon, star, image, 複数指定["circle", "triangle", "image"]

        //シェイプボーダー設定
        "stroke": {
          //ボーダー幅
          "width": 0,
          //ボーダー色
          "color": "#000000"
        },
        //シェイプの形でpolygonを指定した場合
        "polygon": {
          //ポリゴン角数指定
          "nb_sides": 5
        },

        //シェイプの形でimageを指定した場合
        "image": {
          //画像パス
          "src": "img/github.svg",
          //画像幅
          "width": 100,
          //画像高さ
          "height": 100
        }
      },

      //シェイプ透過率指定
      "opacity": {
        //透過率指定
        "value": 0.7,
        //ランダム設定
        "random": true, //true:有効, false:無効

        //透過アニメーション設定
        "anim": {
          //アニメーション設定
          "enable": true, //true:有効, false:無効
          //アニメーション速度
          "speed": 0.6,
          //アニメーション最小透過率
          "opacity_min": 0.1,
          //アニメーション同期
          "sync": false //true:有効, false:無効
        }
      },

      //シェイプサイズ
      "size": {
        //シェイプサイズ指定
        "value": 2.2,
        //ランダムサイズ
        "random": true, //true:有効, false:無効
        //サイズアニメーション設定
        "anim": {
          //アニメーション設定
          "enable": true, //true:有効, false:無効
          //アニメーション速度
          "speed": 1.5,
          //アニメーション時のシェイプ最小サイズ,
          "size_min": 0.3,
          //アニメーション同期設定
          "sync": false //true:有効, false:無効
        }
      },

      //シェイプを線で繋ぐか
      "line_linked": {
        //線の設定
        "enable": true, //true:有効, false:無効
        //線の間隔
        "distance": 130,
        //線の色
        "color": "#8ea4ff",
        //線の透過率
        "opacity": 0.18,
        //線の幅
        "width": 0.7
      },
      //シェイプの動きの設定
      "move": {
        //動きを制御するか
        "enable": true, //true:有効, false:無効
        //動く速度
        "speed": 0.8,
        //動く方向
        "direction": "none", //none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left
        //ランダム設定
        "random": true, //true:有効, false:無効
        //静止状態にする
        "straight": false, //true:有効, false:無効
        //シェイプの動き
        "out_mode": "out", //ボックス内で動かす bounce ボックス外に逃がす out
        "attract": {
          "enable": true,
          "rotateX": 700,
          "rotateY": 1400
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",

      //マウスイベント設定
      "events": {
        //マウスオーバー時の処理
        "onhover": {
          "enable": true, //true:有効, false:無効
          "mode": "grab" //grad:付近のシェイプと線を繋ぐ, bubble:拡大, repulse:拒絶
        },

        //クリック時の処理処理
        "onclick": {
          //クリック時の処理
          "enable": true, //true:有効, false:無効
          //クリック時の処理の設定
          "mode": "push" //push:追加, remove:削除, bubble:拡大, repulse:拒絶
        },
        "resize": true
      },
      //以下でマウスイベント発生時の詳細値を設定
      "modes": {
        "grab": {
          "distance": 220,
          "line_linked": {
            "opacity": 0.8
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 1
        },
        "push": {
          "particles_nb": 6
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    //Retina Display対応
    "retina_detect": true, //true:有効, false:無効
  }
);

const starField = document.createElement("div");
starField.id = "star-field";

document.body.appendChild(starField);

const starCount = 12;

for (let i = 0; i < starCount; i++) {

    const star = document.createElement("div");

    star.className = "star twinkle";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    // 每顆星大小不同
    const size = Math.random() * 2 + 2;

    star.style.width = size + "px";
    star.style.height = size + "px";

    // 每顆星閃爍速度不同
    star.style.animationDuration =
        (2.5 + Math.random() * 4) + "s";

    // 每顆星不同時間開始
    star.style.animationDelay =
        (Math.random() * 8) + "s";

    starField.appendChild(star);
}

function createMeteor() {

    const meteor = document.createElement("div");

    meteor.className = "meteor";

    // 從右上方隨機位置出現
    meteor.style.left =
        (50 + Math.random() * 50) + "%";

    meteor.style.top =
        (-10 + Math.random() * 45) + "%";

    document.body.appendChild(meteor);

    // 開始飛行
    requestAnimationFrame(() => {
        meteor.classList.add("shooting");
    });

    // 動畫結束後刪除
    setTimeout(() => {
        meteor.remove();
    }, 1500);
}


// 隨機產生流星
function meteorLoop() {

    createMeteor();

    const nextTime =
        1500 + Math.random() * 2500;

    setTimeout(meteorLoop, nextTime);
}

meteorLoop();


// 第一次等待 2 秒
setTimeout(meteorLoop, 2000);