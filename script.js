const upload = document.getElementById("upload");
const topTextInput = document.getElementById("topText");
const bottomTextInput = document.getElementById("bottomText");
const generateBtn = document.getElementById("generate");
const randomBtn = document.getElementById("random");
const downloadBtn = document.getElementById("download");
const memeImage = document.getElementById("memeImage");
const memeTop = document.getElementById("memeTop");
const memeBottom = document.getElementById("memeBottom");
const memeDiv = document.getElementById("meme");

const randomMemes = [
  "https://i.imgflip.com/30b1gx.jpg", // Drake
  "https://i.imgflip.com/1bij.jpg",   // Distracted boyfriend
  "https://i.imgflip.com/26am.jpg",   // Spongebob
  "https://i.imgflip.com/1ur9b0.jpg"  // Change my mind
];

upload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      memeImage.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

generateBtn.addEventListener("click", () => {
  memeTop.textContent = topTextInput.value;
  memeBottom.textContent = bottomTextInput.value;
});

randomBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * randomMemes.length);
  memeImage.src = randomMemes[randomIndex];
  memeTop.textContent = topTextInput.value;
  memeBottom.textContent = bottomTextInput.value;
});

downloadBtn.addEventListener("click", () => {
  html2canvas(memeDiv).then(canvas => {
    const link = document.createElement("a");
    link.download = "meme.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});
