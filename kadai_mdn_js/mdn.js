// 今日の日時オブジェクトを作る
const today = new Date();

// 各要素を取り出す
const year  = today.getFullYear();   // 例: 2024
const month = today.getMonth() + 1;  // 0始まりなので +1
const day   = today.getDate();       // 例: 12

// 目的の形式で出力（ゼロ埋めなし）
console.log(year + '年' + month + '月' + day + '日');

