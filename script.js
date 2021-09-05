const achievementSection = document.querySelector(".achievement");

const cards = [
  {
    id: 1,
    img: "./img/memoryGame.png",
    title: "Memory Game Flip Card",
    link: "./MemoryGameFlipCard/index.html",
    code: "https://github.com/PharadolBrown/PortfolioJavascript/tree/main/MemoryGameFlipCard",
  },
  {
    id: 2,
    img: "./img/rachar.png",
    title: "Rachar Village",
    link: "./Rachar/index.html",
    code: "https://github.com/PharadolBrown/PortfolioJavascript/tree/main/Rachar",
  },
  {
    id: 3,
    img: "./img/currencyConverter.png",
    title: "Currency Converter",
    link: "./CurrencyConverter/index.html",
    code: "https://github.com/PharadolBrown/PortfolioJavascript/tree/main/CurrencyConverter",
  },
  {
    id: 4,
    img: "./img/recordFinancial.png",
    title: "Record income & expenses",
    link: "./RecordFinancial/index.html",
    code: "https://github.com/PharadolBrown/PortfolioJavascript/tree/main/RecordFinancial",
  },
  {
    id: 5,
    img: "./img/darkMode.png",
    title: "Dark Mode & Light Mode",
    link: "./Light_Dark_Mode/index.html",
    code: "https://github.com/PharadolBrown/PortfolioJavascript/tree/main/Light_Dark_Mode",
  },
  {
    id: 6,
    img: "./img/typingGame.png",
    title: "Speed Typing Game",
    link: "./SpeedTypingGame/index.html",
    code: "https://github.com/PharadolBrown/PortfolioJavascript/tree/main/SpeedTypingGame",
  },
  {
    id: 7,
    img: "./img/loadDataScroll.png",
    title: "Load Text On Scroll",
    link: "./TextReveal/index.html",
    code: "https://github.com/PharadolBrown/PortfolioJavascript/tree/main/TextReveal",
  },
  {
    id: 8,
    img: "./img/calculator.png",
    title: "Calculator",
    link: "./Calculator/index.html",
    code: "https://github.com/PharadolBrown/PortfolioJavascript/tree/main/Calculator",
  },
  {
    id: 9,
    img: "./img/music.png",
    title: "Music Player",
    link: "./MusicPlayer/index.html",
    code: "https://github.com/PharadolBrown/PortfolioJavascript/tree/main/MusicPlayer",
  },
];

function addCardEle(card) {
  const cardEle = document.createElement("div");
  cardEle.innerHTML = `<div class="flex flex-col rounded-md border-2 hover:shadow-lg transition duration-500">
        <a href="${card.link}" target="_blank" class="h-3/6">
            <img src="${card.img}" class="rounded-tr-sm rounded-tl-sm h-40 object-cover object-center">
        </a>
        <div class="px-3 py-2">
        <h3 class="text-lg mb-3">${card.title}</h3>
        <div class="flex justify-end text-sm">
            <a href='${card.code}' target='_blank' class="rounded-sm px-3 text-white py-1 bg-purple-500 mr-1 hover:bg-purple-600 transition duration-300">code</a>
            <a href='${card.link}' target='_blank' class="rounded-sm px-3 text-white py-1 bg-green-500  hover:bg-green-600 transition duration-300">website</a>
        </div>
        </div>
    </div>`;
  achievementSection.appendChild(cardEle);
}

cards.forEach(addCardEle);
