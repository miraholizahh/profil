const txtElement = ['Mahasiswa', 'Kpopers', 'Anak Rumahan', 'Pengusaha Kecil'];
Let count = 0;
Let txtElement = 0;
Let currentTxt = '';

(function ngetik(){

    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    word = currentTxt.slice(0, ++txtElement);
    document.querySelector('efek-ngetik').textContent = word;

    if(word.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 500);

})();