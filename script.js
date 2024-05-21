function encrypt() {
    var inputText = document.getElementById('inputText').value;
    var encryptedText = CryptoJS.AES.encrypt(inputText, 'secret').toString();
    document.getElementById('outputText').value = encryptedText;
  }
  
  function decrypt() {
    var encryptedText = document.getElementById('outputText').value;
    var decryptedText = CryptoJS.AES.decrypt(encryptedText, 'secret').toString(CryptoJS.enc.Utf8);
    document.getElementById('inputText').value = decryptedText;
  }
  