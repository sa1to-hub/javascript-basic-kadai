// 要素を取得して定数に入れる
const textEl = document.getElementById('text');
const btnEl  = document.getElementById('btn');

// クリックされたら見出しの文字を書き換える
btnEl.addEventListener('click', () => {
  textEl.textContent = 'ボタンをクリックしました';
});
