
export default {
  autoRem (){
    var pixclPatio = 1 / window.devicePixelRatio;
    document.write('<meta name="viewport" content="width=device-width,initial-scale='
      +pixclPatio+',minimum-scale='+pixclPatio+',maximum-scale='+pixclPatio+',user-scalable=yes" />');
    var html = document.getElementsByTagName('html')[0];
    var pageWidth = html.getBoundingClientRect().width;
    html.style.fontSize = pageWidth / 15 + 'px';
    alert(pageWidth / 15 + 'px')
  }
}
