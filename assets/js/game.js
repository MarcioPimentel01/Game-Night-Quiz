let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let smallImages = document.querySelectorAll('.smallImages .item');
// Config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0
    }
    showSlider();
}
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let smallImagesActiveOld = document.querySelector('.smallImages .item.active');
    itemActiveOld.classList.remove('active');
    smallImagesActiveOld.classList.remove('active');
    // Active New Item
    items[itemActive].classList.add('active');
    smallImages[itemActive].classList.add('active');
}
// Click smallImages
smallImages.forEach((smallImages, index) => {
    smallImages.addEventListener('click',() => {
        itemActive = index;
        showSlider();
    })
})