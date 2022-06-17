let count = getCount();

if(count % 10 == 0){
  console.log('今'+count+'回ループしました。');
}else if(count % 4 == 0){
  console.log('4で割り切れる数です。'+count);
}
if(count == 50) {
  alert('50回カウントが終わりました。');
 }

function getCount(){
  let total = 1;
  for(let i = 0; i < 51 ;i++){
    total = i
  }
return total;
}