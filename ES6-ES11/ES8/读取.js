const fs = require('fs')

//读取 【为学】
function readWeiXue(){
  return new Promise((resolve,reject) => {
    fs.readFile('./resources/为学.md',(err,data) => {
      //如果失败
      if(err) reject(err)
        //如果成功
      resolve(data)
    })
  })
}
//读取 【插秧诗】
function readChaYangShi(){
  return new Promise((resolve,reject) => {
    fs.readFile('./resources/插秧诗.md',(err,data) => {
      //如果失败
      if(err) reject(err)
        //如果成功
      resolve(data)
    })
  })
}
//读取 【观书有感】
function readGuanShu(){
  return new Promise((resolve,reject) => {
    fs.readFile('./resources/观书有感.md',(err,data) => {
      //如果失败
      if(err) reject(err)
        //如果成功
      resolve(data)
    })
  })
}

//声明一个 async函数
async function main() {
  //获取 为学 的内容
  let weixue = await readWeiXue()

  let chayang = await readChaYangShi()

  let guanshu = await readGuanShu()

   //第一种输出方式
  // console.log(weixue.toString());
  // console.log(chayang.toString());
  // console.log(guanshu.toString());

  //第二种输出方式
  console.log([weixue,chayang,guanshu].join('\n\r'));
}

main()