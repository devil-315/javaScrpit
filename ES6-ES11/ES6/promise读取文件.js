//1.导入fs模块
const { rejects } = require('assert')
const fs = require('fs')

// //2.调用方法读取文件
// fs.readFile('./resources/为学.md',(err,data1)=>{
//   fs.readFile('./resources/插秧诗.md',(err,data2)=>{
//     fs.readFile('./resources/观书有感.md',(err,data3)=>{
//         let result = data1 + '\r\n' + data2 + '\r\n' + data3
//         console.log(result.toString());
//     })
//   })
// })

//3.使用promise 封装
const p = new Promise(function(resolve,reject){
  fs.readFile('./resources/为学.md',(err,data)=>{
    // 传给下一轮文件读取操作
      resolve(data)
  })
})

const result = p.then(value => {
  return new Promise(function(resolve,reject){
    fs.readFile('./resources/插秧诗.md',(err,data)=>{
      // value 为第一次读取的文件数据，data 为第二次（当前）读取的数据
      resolve([value,data])
    })
  })
}).then(value => {
  return new Promise((resolve,reject) => {
    fs.readFile('./resources/观书有感.md',(err,data)=>{
      //数组压入
      value.push(data)
      resolve(value)
    })
  })
}).then(value => {
  // 合并数组元素，输出
  console.log(value.join('\r\n'));
})