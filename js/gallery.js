

function upDate(previewPic){

    document.getElementById('image').style.backgroundImage = 'url(' + previewPic.src + ')';
    document.getElementById('image').textContent = previewPic.alt;
}

function unDo(){

    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').textContent = 'Hover over an image below to display here.';
		
	}

function pickImage(){
    imgs = document.querySelectorAll('body > img')
    randomImg = imgs[Math.floor(Math.random() * imgs.length)];
    img = document.querySelector('header img')
    img.setAttribute("src", randomImg.src)
    img.setAttribute("alt", "random image")
}

function addTabIndex(){
    imgs = document.querySelectorAll('body > img')
    for(let i = 0; i < imgs.length; i++){
        imgs[i].setAttribute("tabindex", i)
        console.log('adding tab index')
    }
}