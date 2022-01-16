document.addEventListener("keypress", e => {
  const code = e.keyCode;
  const element = document.querySelector(`div[key-code='${code}']`);
  const audio = document.querySelector(`audio[key-code='${code}']`);

  element.classList.add("playing");
  audio.play();
  setTimeout(() => {
    element.classList.remove("playing");
  }, 200);
});
