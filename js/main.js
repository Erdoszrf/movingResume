var css1 =
`/* 大家好,欢迎收看会动的简历
 * 我叫张镕凡,24岁,前端开发一枚
 * 爱好:摄影:旅行
 * 下面开始向您展示我的技能
 * 首先我需要一些样式
 */


*{
  transition: all 1s;
  box-sizing:border-box;
}
body{
  background:#eee;
}
#code{
  border: 1px solid black;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  padding: 20px;
  width:50%;
}
/*我需要一个代码高亮*/
.token.selector{
  color: #690;
}
.token.property{
  color: #905;
}
/*太单调了,在来一个小动画吧*/
#code{
  transform: rotateX(360deg);
}
/*不玩了,我们正式开始*/
/*首先,我需要一张白纸*/
#code{
  position: fixed;
  left: 0;
  width:49%;
  height:90vh;
}
#md{
  position:fixed;
  right: 0;
  width: 49%;
  height:90vh;
  padding: 20px;
  background:white;
  border: 1px solid black;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

  `
var css2 =
`
/*接下来,我们把markdown格式的文本转换一下*/
`
var md =
`
# 自我介绍
张镕凡,24岁,本科学历,学习前端开发2个月
# 所学技能
- HTML,CSS,JavaScript
- jQuery
- NodeJs
- Vue,Recet

# 项目介绍
- 移动端豆瓣电影(通过豆瓣API获取数据)
- 在线音乐播放器(实现暂停,播放,拖动进度,音乐切换)
- 画板(实现画笔选择,线条大小,颜色切换,橡皮擦,图片保存)

# 联系方式
- 邮箱:erdoszrf@qq.com
- 微信:zrfdwx
- QQ:976814442
`

function writeCode(initcode,code1,fn){
  console.log('writecode执行了')
  let n = 0
  let domCode = document.querySelector('#code')

  var timer = setInterval(function(){
    domCode.innerHTML = Prism.highlight(initcode+code1.substring(0, n), Prism.languages.css);
    styleTag.innerHTML = styleTag.innerHTML+code1.substr(n,1)
    domCode.scrollTop = domCode.scrollHeight
    n++
    if(n>=code1.length){
      window.clearInterval(timer)
      fn && fn.call()
    }
  },100)
}
function writeMd(markdown,fn){
  console.log('writeMd执行了')
  let n = 0
  let domCode = document.querySelector('#md')
  console.log(domCode)
  var timer = setInterval(function(){
  domCode.innerHTML = markdown.substring(0, n)
  domCode.scrollTop = domCode.scrollHeight
  n++
  if(n>=markdown.length){
    window.clearInterval(timer)
    fn && fn.call()
  }
  },50)
}
function mdToHtml(){
  let md = document.querySelector('#md')
  md.innerHTML = marked(md.innerText)
}

function createPaper(fn){
  console.log('createPaper执行了')
var markdown = document.createElement('pre')
markdown.id = 'md'
document.body.appendChild(markdown)
fn && fn.call()
}
writeCode('',css1,function(){
  createPaper(function(){
    writeMd(md,function(){
      writeCode(css1,css2,function(){
        mdToHtml()
      })
    })
  })
})