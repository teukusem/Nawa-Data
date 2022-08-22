function psbb(num) {
  const totalFamily = 4;
  var result = 0;
  let totalBis = 0;

  if (num.length < totalFamily) {
    console.log("input harus sama dengan anggota keluarga");
  } else {
    for (let i = 0; i < num.length; i++) {
      result += num[i];
    }
    totalBis = Math.ceil(result / 4);
  }

  return totalBis;
}

console.log(psbb([1, 435, 3]));
