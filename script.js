const descriptionElement = document.getElementById("description");
const imageElement = document.getElementById("cat_image");
const fetchBtn = document.getElementById("fetch");
async function getFact() {
	const res = await fetch("https://hmm.herokuapp.com/facts/random");
	return await res.json();
}

fetchBtn.addEventListener("click", async () => {
	const data = await getFact();
	descriptionElement.innerText = data.text;
    const image = await getImage();
	imageElement.src = URL.createObjectURL(image);
});
