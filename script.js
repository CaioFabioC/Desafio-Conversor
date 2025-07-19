const convertButton = document.querySelector("#convert-button");
const currencySelect1 = document.querySelector("#to-convert");
const currencySelect2 = document.querySelector("#to-converted");
const currencyName1 = document.querySelector(".currency1");
const currencyName2 = document.querySelector(".currency2");
const imgCurrency1 = document.querySelector("#img-currency1");
const imgCurrency2 = document.querySelector("#img-currency2");

function convertValues() {
  const inputValue = document.querySelector("#value").value;
  const currencyValue1 = document.querySelector(".currency-value1");
  const currencyValue2 = document.querySelector(".currency-value2");

  const dolarToday = 5.6;
  const euroToday = 6.43;
  const bitcoinToday = 658000;
  const realToday = 1;

const moedaDeOrigem = currencySelect1.value

let valorEmReal;

if (moedaDeOrigem === "reais") {
  valorEmReal = inputValue;
}

if (moedaDeOrigem === "dolares") {
  valorEmReal = inputValue * dolarToday;
}

if (moedaDeOrigem === "euros") {
  valorEmReal = inputValue * euroToday;
}

if (moedaDeOrigem === "bitcoins") {
  valorEmReal = inputValue * bitcoinToday;
}

  const convertedDolar = valorEmReal / dolarToday;
  const convertedEuro = valorEmReal / euroToday;
  const convertedBitcoin = valorEmReal / bitcoinToday;
  const convertedReal = valorEmReal / realToday


if (currencySelect1.value == "reais") {
    currencyValue1.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(convertedReal);
    currencyName1.innerHTML = "Real";
    imgCurrency1.src = "./assets/real.png";
  }


  if (currencySelect1.value == "dolares") {
    currencyValue1.innerHTML = new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(convertedDolar);
    currencyName1.innerHTML = "Dólar";
    imgCurrency1.src = "./assets/dolar.png";
  }

if (currencySelect1.value == "euros") {
    currencyValue1.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(convertedEuro);
    currencyName1.innerHTML = "Euro";
    imgCurrency1.src = "./assets/euro.png";
  }

  if (currencySelect1.value == "bitcoins") {
    currencyValue1.innerHTML ="₿" +
      new Intl.NumberFormat("en", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 3,
      }).format(convertedBitcoin);
    currencyName1.innerHTML = "Bitcoin";
    imgCurrency1.src = "./assets/bitcoin.png";
  }


  if (currencySelect2.value == "dolares") {
    currencyValue2.innerHTML = new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(convertedDolar);
    currencyName2.innerHTML = "Dólar";
    imgCurrency2.src = "./assets/dolar.png";
  }

  if (currencySelect2.value == "euros") {
    currencyValue2.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(convertedEuro);
    currencyName2.innerHTML = "Euro";
    imgCurrency2.src = "./assets/euro.png";
  }

  if (currencySelect2.value == "bitcoins") {
    currencyValue2.innerHTML = currencyValue2.innerHTML =
      "₿" +
      new Intl.NumberFormat("en", {
        style: "decimal",
        minimumFractionDigits: 4,
        maximumFractionDigits: 8,
      }).format(convertedBitcoin);
    currencyName2.innerHTML = "Bitcoin";
    imgCurrency2.src = "./assets/bitcoin.png";
  }

if (currencySelect2.value == "reais") {
    currencyValue2.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(convertedReal);
    currencyName2.innerHTML = "Real";
    imgCurrency2.src = "./assets/real.png";
  }

}

convertButton.addEventListener("click", convertValues);
