const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptUser() {
  rl.question('Masukkan bilangan genap positif (atau ketik "s" untuk berhenti): ', (input) => {
    if (input.toLowerCase() === 's') {
      console.log('Program telah dihentikan.');
      rl.close();
      return;
    }
    const x = parseInt(input);

    if (isNaN(x)) {
      console.log('Inputan harus angka');
    } else if (x < 0) {
      console.log('Tidak bisa input bilangan negatif');
    }else if (x % 2 !== 0){
      console.log('Tidak bisa input bilangan ganjil');
   } else {
      const resultAkar = Math.sqrt(x);
      console.log(`Hasil akar kuadrat 2 dari ${x} adalah ${resultAkar}`);
    }
    promptUser(); 
  });
}
promptUser(); 