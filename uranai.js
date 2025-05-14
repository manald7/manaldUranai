const uranai = [`大吉`,`中吉`,`小吉`,`吉`,`凶`,`大凶`];
const uranaikekka = uranai[Math.floor(Math.random() * uranai.length)];
const luckyItem = [`ラッキーアイテム`,`ポリコレアドバイザー`,`いつも逆張りする人`,`バロンヒルfromガララワニの口の中`,`League of Legends`,`サッカーボール`,`インド人のカレー`,`CPS9以上の人`,`特にない`,`マコモ湯`,`あなた自身`,`顔に紙袋を被ること`,`乗っ取られたことのあるアカウント`,`Vtuber経験者`,`JRPGのおすすめありますか？`];
const luckyItems = luckyItem[Math.floor(Math.random() * luckyItem.length)];


// luckyItemsのところだけ文字を少し大きくしたい
const result = document.getElementById(`result1`);
const lucky = document.getElementById(`result2`);
const img = document.getElementById(`img1`);

const button = document.getElementById(`btn01`);
button.addEventListener(`click`,function(){
  this.classList.add(`btn01`);
  img.classList.add(`img_uranaishi`);
  lucky.innerHTML = `ラッキーアイテムは<span class="highlight">${luckyItems}</span>です`;
  result.innerHTML = uranaikekka;
  const index = uranai.indexOf(uranaikekka);
  if (index === 4 || index === 5) {
    result.classList.add(`unluckyresult`);
  } else {
    result.classList.add(`luckyresult`);
  }
});
