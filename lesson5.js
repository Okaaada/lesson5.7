for (let count = 1; count < 51 ;count++) {
  if (count % 10 == 0) {
    console.log('今'+count+'回ループしました。');
  }
  if (count % 4 == 0) {
    console.log('4で割り切れる数です。'+count);
  }
  if (count == 50) {
    alert('50回カウントが終わりました。');
  }
}