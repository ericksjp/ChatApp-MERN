const emojiArr = [
  "🐆",
  "🐴",
  "🐎",
  "🦓",
  "🐮",
  "🐂",
  "🐃",
  "🐄",
  "🐷",
  "🐖",
  "🐗",
  "🐽",
  "🐏",
  "🐑",
  "🐐",
  "🐪",
  "🐫",
  "🦙",
  "🦒",
  "🐘",
  "🦏",
  "🦛",
  "🐭",
  "🐁",
  "🐀",
  "🐹",
  "🐰",
  "🐇",
  "🐿️",
  "🦔",
  "🦇",
  "🐻",
  "🐨",
  "🐼",
  "🦘",
  "🦡",
  "🐾",
  "🦃",
  "🐔",
  "🐓",
  "🐦",
  "🐧",
  "🕊️",
  "🦅",
  "🦆",
  "🦢",
  "🦉",
  "🦚",
  "🦜",
  "🐸",
  "🐊",
  "🐢",
  "🦎",
  "🐍",
  "🐲",
  "🐉",
  "🦕",
  "🦖",
  "🐳",
  "🐋",
  "🐬",
  "🐟",
  "🐠",
  "🐡",
  "🦈",
  "🐙",
  "🐚",
  "🦀",
  "🦐",
  "🦑",
  "🐌",
  "🦋",
  "🐛",
  "🐜",
  "🐝",
  "🐞",
  "🦗",
  "🕷️",
  "🕸️",
  "🦂",
  "🦟",
  "🦠",
  "🌲",
  "🌳",
  "🌴",
  "🌵",
  "🌾",
  "🌿",
  "☘️",
  "🍀",
  "🍁",
  "🍂",
  "🍃",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🍎",
  "🍏",
];

export default function getRandomEmoji() {
  return emojiArr[Math.floor(Math.random() * emojiArr.length)];
}
