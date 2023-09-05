function countTheText() {
  let textCount = document.getElementById("myInput");
  textCount = textCount.value;

  if (textCount.length > 100){
    alert(`You wrote ${textCount.length} characters, You Lose! Try again`)
  }
  else{
    alert(`You wrote ${textCount.length} characters, your score is ${textCount.length}`);
  }
}

