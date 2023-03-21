const express=require('express')
const app = new express();
app.use(express.static(__dirname + "/public")); //将public下的代码静态化
app.listen(3001, () => {
     console.log('项目启动')
})