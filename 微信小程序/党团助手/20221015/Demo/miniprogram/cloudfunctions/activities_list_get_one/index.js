// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "cloud1-1goquyyvbe1eab85"
})

// 云函数入口函数
const db = cloud.database();
exports.main = async (event, context) => {
  let id = event.id;
  return await db.collection("activities").doc(id).get()
}