
export default {
  autoRem (){

    var html = document.getElementsByTagName('html')[0];
    var pageWidth = html.getBoundingClientRect().width;
    html.style.fontSize = pageWidth / 15 + 'px';
    alert(pageWidth / 15 + 'px')
  }
}
