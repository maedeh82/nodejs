// کد های پایین برای ماژول بندی استفاده میشه 
// const maede = require('./maede')



// console.log(maede.zarb(5,6))

// path ماژول
// این ماژول برای اینه که با ادرس ها کار کنیم
// const path = require('path')

// let parsedPath = path.parse(__filename)
// console.log(parsedPath)

// OS ماژول 
// اطلاعات سخت افزار سرور رو به ما میده
// برای اینکه میزان خالی ک از رممون مونده رو ببینیم از کد زیر استفاده میکنیم
// const os = require('os')
// console.log('free memory', os.freemem())
// برای اینکه کل حافظه رو ببینیم از کد زیر استفاده میکنیم
// console.log('total memory', os.totalmem())


// ماژول فایل سیستم
// اگر یک فایلی وجود داشته باشه لاگش بگیره اگر نه ارور و لاگ بگیره
// const fs = require('fs')

// fs.readdir('../' , (err , fils)=>{
//   console.log(err)
//   console.log(fils)
// })


// برای اینکه یک دستور را بخواهیم اجرا کنیم
// const EventsEmitter = require('events')
// const emiiter = new EventsEmitter()

// emiiter.on('bell' , ()=>{
//   console.log('open the door')
// })
// emiiter.emit('bell')


// http ماژول
// میتونیم با این این ماژول یک سرور درست کنیم و به پاسخ هایی که به سمت سرور میاد پاسخ دهیم
// const http = require('http')

// const server = http.createServer((req , res)=>{
//   console.log(req.url)
//   res.wraite('response')
//   res.end()
// })
// server.listen(3000)
// توضیح بیشتر علی باید بده


// npm نصب پکیج به کمک 
// هر پکیجی که میخواهیم نصب کنیم باید وارد سایتش بشویم و کد مه دارد را برای نصبش کپی کنیم
// و در قسمت ترمینال بگذاریم و در این صورت نصب خواهد شد 
// استفاده هر پکیج باهم فرق داره داخل همون سایت طرز استفاده اش هم نوشته شده


// برای نوشتن یک ای پی مثل کد های زیر عمل میکنیم 
// const express = require ('express')

// const app = express()

// app.get('/',(req , res)=>{
//   res.send('hello express')
// })

// app.listen(3000, ()=> console.log('listening on port 3000'))



// برای نوشتن ای پی یوزر مثل کد های زیر عمل میکنیم
// const express = require('express')

// const app = express()

// app.get('/api/users',(req , res)=>{
//   res.send([
//     {id : 1 , name : users1 },
//     {id : 2 , name : users2 }

//   ])
// })

// app.listen(3000 , ()=>console.log('listening on port 3000'))
// کد های بالا تست نشده است 



// وقتی میخواهیم از طریق ای پی ای یه ایدی مشخص را پیدا کنیم از روش زیر استفاده میکنیم
// const express = require('express')

// const app = express()

// app.get('/api/users',(req , res)=>{
//   res.send([
//     {id : 1 , name : 'users1' },
//     {id : 2 , name : "users2" }

//   ])
// })

// app.get('/api/users/:id',(req , res)=>{
//   res.send({id: req.params.id , name : `user ${req.params.id}`})
  
// })
// const port = process.env.port || 3000
// app.listen(port , ()=> console.log(`listening on port ${port}`))

// query کد های
// app.get('/api/users/',(req , res)=>{
//   res.send({id: req.query.id , name : `user ${req.query.id}`})
  
// })
// const port = process.env.port || 3000
// app.listen(port , ()=> console.log(`listening on port ${port}`))


// برای فیلتر کردن یوزر ها برای مثال بر اساس تاریخ از روش زیر استفاده میشود
// کد پایین برای داخل کروم است 
// localhost:3000/api/users?sort=date
// کد زیر برای سمت سرور است
// در وسط کد هایمان کد زیر را قرار میدهیم
// console.log(req.query)


// دریافت همه کاربر ها در ای پی ای نویسی
// const express = require('express')
// const Users = require('./users')
// const app = express()

// app.get('/api/users' , (req , res)=>{
//   res.json(Users)
// })

// console.log(Users)

// const port = process.env.port || 3000
// app.listen(port , ()=> console.log(`listening on port ${port}`))


// دریافت یک کاربر
// ای پی ای بنویسیم که یه یوزر مشخص را بر حثب ایدی پیدا کنیم
// const express = require('express')
// let users = require('./users')
// const app = express()

// app.get('/api/users/:id' , (req , res )=>{
//   const user = user.find(u => u.id == req.params.id)
//   res.json({
//     date:user,
//     message : 'ok'
//   })
// })
// const port = process.env.PORT || 3000
// app.listen(port, ()=> console.log(`listening on port ${port}`))



// مثلا وقتی میخواهیم یم بدنه یا یک متنی یا هرچیزی رو موقع فرستادن درخواست ارسال کنیم مثل زیر مینویسیم
// const express = require('express')
// const {body , validationResult} = require('express-validator');
// let users = require("./users")
// const app = express() 

// app.use(express.json()) // این کد برای نشون دادن درخواست در قسمت بادی

// app.get('/api/users/:id' , (req , res )=>{
//   const user = users.find(u => u.id == req.params.id)
//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }
//   res.json({
//     data:user,
//     message : 'ok'
//   })
// })
// کد های زیر برای اعتبار سنجی به معنای دیگر اینجوریه که اگر برای مثال ایمیلش درست نبود متن رو به رو
// را نشان دهد که مشکل داره
 
// const port = process.env.PORT || 3000
// app.listen(port, ()=> console.log(`listening on port ${port}`))


// app.post("/api/users", [
//   body('id','id must be valid').notEmpty(),
//   body('name','name cant be empty').notEmpty(),
//   body('family', 'family cant be empty').notEmpty()
// ], (req , res )=>{
//   const errors = validationResult(req)
//   if (!errors.notEmpty()) {
//     return res.status(400).json({data : null , errors: errors.array(),message:'validation error'})
//   } 
//   const user = req.body;

//   if (!user) {
//     res.status(404).json({ message: "not fund"  })
//   }else{
//     let name = user.name + " ali"
//     console.log(name)
//     res.status(200).json({ message: "ok" ,data : name })
//   }
// })
// باگ کیری


// api put

const { validationResult, body, check } = require("express-validator")
let Users = require("./users")
// چون در خط 236 باید مقدار یوزرز تغییر بدیم باید از لت استفاده بشه


const express = require('express')
const app = express() 
app.use(express.json());
//  برای خواندن 
// req.body
// باید از این کد استفاده شود
app.put("/api/users/:id" , [
  check("id").not().isEmpty().withMessage("id وارد کنید"),
  check("name").not().isEmpty().withMessage("نام را وارد کنید "),
  check("family").not().isEmpty().withMessage("نام خانوادگی وارد کنید")
  // برای ولیدیشن ها باید از این کد استفاده بشه در ورژن های جدید تغیر کرده 
  // این کد میگه اگر مثلا نام وجود داشت و مقدارش خالی بود اوکیه اگر نه اون کامنت نشون میده
], (req , res)=>{
  const user = Users.find(u=> u.id == req.params.id)
  if (!user) {
    return res.status(404).json({
      data: null,
      message:"کاربر وجود ندارد" 
    })
  }
  const error = validationResult(req)
  if (!error.isEmpty()) {
    return res.status(400).json({data:null , errors:error.array() , message: "تمامی فیلد ها اجباری هست"})
  }
  
  Users = Users.map(u => {
    if (u.id == req.params.id) {
      return { ...u, ...req.body }; 
    }
    return u;
  });
// ایدی ک در پارامز ارسال شده 
// /api/users/1
// ویرایش کن و با ایدی قبلی ک در 
// Users 
// بود جایگزین کن 
 
  res.json({
    data:Users,
    message:"ok"
  })
})
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening on port ${port}`))


// توضیحات کامل باید داده شود 
// f

