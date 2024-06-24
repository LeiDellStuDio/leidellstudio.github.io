//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(https://s21.ax1x.com/2024/06/24/pksnaLQ.jpg)",
    "url(https://s21.ax1x.com/2024/06/24/pksnwZj.jpg)",
    "url(https://s21.ax1x.com/2024/06/24/pksn0ds.jpg)",
    "url(https://s21.ax1x.com/2024/06/24/pksnBon.jpg)",
    "url(https://s21.ax1x.com/2024/06/24/pksnriq.jpg)", 
    "url(https://s21.ax1x.com/2024/06/24/pksnsJ0.jpg)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * (backimg.length));
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  var bannerimg =[
    "url(https://s21.ax1x.com/2024/06/24/pksnaLQ.jpg)",
    "url(https://s21.ax1x.com/2024/06/24/pksnwZj.jpg)",
    "url(https://s21.ax1x.com/2024/06/24/pksn0ds.jpg)",
    "url(https://s21.ax1x.com/2024/06/24/pksnBon.jpg)",
    "url(https://s21.ax1x.com/2024/06/24/pksnriq.jpg)", 
    "url(https://s21.ax1x.com/2024/06/24/pksnsJ0.jpg)"
  ];
  //获取banner图片总数，生成随机数
  var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
  //重设banner图片
  document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];