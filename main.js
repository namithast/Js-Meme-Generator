const generateMemeBtn = document.querySelector(
    ".memeGenerator .btn"
  );
  const memeImage = document.querySelector(".memeGenerator img");
  const memeTitle = document.querySelector(".memeGenerator .memeTitle");
  const memeAuthor = document.querySelector(".memeGenerator .memeAuthor");
  
  const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
  };
  
  const generateMeme = () => {
    fetch("https://meme-api.com/gimme")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      });
  };
  
  generateMemeBtn.addEventListener("click", generateMeme);
  
  generateMeme();