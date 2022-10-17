// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "cloud1-1goquyyvbe1eab85"
})
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  let size = event.size;
  return await db.collection("material").orderBy("_createTime","desc")
  .limit(7)
  .skip(size)
  .get();
}