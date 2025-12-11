function cashRegister(cart) {
  return Object.values(cart).reduce((sum, price) => sum + Number(price), 0);
}

const cartForParty = {
  banana: '1.25',
  handkerchief: '.99',
  Tshirt: '25.01',
  apple: '0.60',
  nalgene: '10.34',
  proteinShake: '22.36'
};

console.log(cashRegister(cartForParty));
