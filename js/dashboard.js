// Social Media
    //ADD labal title từ icon
var socialMedia;
var githubElemnt;
function setHTML() {
    var inputContenHTML = `<div class="${socialMedia}">
                            <label class="labal_title">
                                ${socialMedia}
                                <i class="fas fa-times" onclick="deleteLabal(this)"></i>
                            </label>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" placeholder="link">
                                <label for="floatingInput">Liên Kết Đến Thông Tin Của Bạn</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" placeholder="description">
                                <label for="floatingInput">Nhập Thêm Mô Tả</label>
                            </div>
                        </div>`;
    document.querySelector('.input_conten').innerHTML += inputContenHTML;
}
document.querySelector('.input_icon .phone').onclick = function() {
    socialMedia = 'phone'
    setHTML();
}
document.querySelector('.website').onclick = function() {
    socialMedia ='website'
    setHTML();
}
document.querySelector('.facebook').onclick = function() {
    socialMedia ='facebook'
    setHTML();
}
document.querySelector('.instagram').onclick = function() {
    socialMedia ='instagram'
    setHTML();
}
document.querySelector('.youtube').onclick = function() {
    socialMedia ='youtube'
    setHTML();
}
document.querySelector('.zalo').onclick = function() {
    socialMedia ='zalo'
    setHTML();
}
document.querySelector('.skype').onclick = function() {
    socialMedia ='skype'
    setHTML();
}
document.querySelector('.mail').onclick = function() {
    socialMedia ='mail'
    setHTML();
}
document.querySelector('.twitter').onclick = function() {
    socialMedia ='twitter'
    setHTML();
}
document.querySelector('.whatsapp').onclick = function() {
    socialMedia ='whatsapp'
    setHTML();
}
document.querySelector('.snapchat').onclick = function() {
    socialMedia ='snapchat'
    setHTML();
}
document.querySelector('.pinterest').onclick = function() {
    socialMedia ='pinterest'
    setHTML();
}
document.querySelector('.linkedin').onclick = function() {
    socialMedia ='linkedin'
    setHTML();
}
document.querySelector('.wechat').onclick = function() {
    socialMedia ='wechat'
    setHTML();
}
document.querySelector('.line').onclick = function() {
    socialMedia ='line'
    setHTML();
}
document.querySelector('.reddit').onclick = function() {
    socialMedia ='reddit'
    setHTML();
}
document.querySelector('.github').onclick = function() {
    socialMedia ='github'
    setHTML();
}
 function deleteLabal(e) {
    var getElement = e.parentNode.parentElement;
    getElement.outerHTML = '';
 }