const descriptionElement = document.getElementById("description");
const imageElement = document.getElementById("cat_image");
const fetchBtn = document.getElementById("fetch");
async function getFact() {
	const res = await fetch("https://gist.github.com/Y4HYA4/d37185f25b88d67a7daad8aaf3207d4b");
	return await res.json();
}

fetchBtn.addEventListener("click", async () => {
	const data = await getFact();
	descriptionElement.innerText = data.text;
    const image = await getImage();
	imageElement.src = URL.createObjectURL(image);
});
