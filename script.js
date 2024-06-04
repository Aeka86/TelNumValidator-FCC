function telephoneCheck(str) {
  let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
  return regex.test(str);
}

function validatePhoneNumber() {
  let phoneNumber = document.getElementById('phoneNumber').value;
  let isValid = telephoneCheck(phoneNumber);
  document.getElementById('validationResult').innerText = isValid ? 'Valid phone number' : 'Invalid phone number';
}
