// HTMLの要素を取得して定数に代入
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときの処理
btn.addEventListener('click', () => {
  // 2秒（2000ミリ秒）後に実行される処理
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});
