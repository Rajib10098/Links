var thumbnail_img = document.querySelectorAll('.thumbnail_img');
var thumbnail_img_con = document.querySelectorAll('.thumbmail_img_con')
for(let i = 0; i < thumbnail_img.length; i++){
  var image = thumbnail_img[i].content.replace(/\/s\d+\//, /s2000/)
  console.log(image)
  thumbnail_img_con[i].innerHTML = '<img src="' + image + '">'
}
