const toggler = document.getElementsByClassName("folder-closed-icon");

function toggleClass() {
  console.log("logging this: ", this);
  this.parentElement.querySelector(".nested").classList.toggle("active");
  this.classList.toggle("folder-open-icon");
}

for (let i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", toggleClass);
}

function showPdf(li) {
  const iframe = document.getElementById("pdfIframe");
  iframe.setAttribute("src", li.dataset.name);
}
