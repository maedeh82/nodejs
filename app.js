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
// برای کاربریه که قصد اپدیت کردنشو داریم
// const { validationResult, body, check } = require("express-validator")
// let Users = require("./users")
// // چون در خط 236 باید مقدار یوزرز تغییر بدیم باید از لت استفاده بشه


// const express = require('express')
// const app = express() 
// app.use(express.json());
// //  برای خواندن 
// // req.body
// // باید از این کد استفاده شود
// app.put("/api/users/:id" , [
  // check("id").not().isEmpty().withMessage("id وارد کنید"),
  // check("name").not().isEmpty().withMessage("نام را وارد کنید "),
  // check("family").not().isEmpty().withMessage("نام خانوادگی وارد کنید")
//   // برای ولیدیشن ها باید از این کد استفاده بشه در ورژن های جدید تغیر کرده 
//   // این کد میگه اگر مثلا نام وجود داشت و مقدارش خالی بود اوکیه اگر نه اون کامنت نشون میده
// ], (req , res)=>{
//   const user = Users.find(u=> u.id == req.params.id)
//   if (!user) {
//     return res.status(404).json({
//       data: null,
//       message:"کاربر وجود ندارد" 
//     })
//   }
//   const error = validationResult(req)
//   if (!error.isEmpty()) {
//     return res.status(400).json({data:null , errors:error.array() , message: "تمامی فیلد ها اجباری هست"})
//   }
  
//   Users = Users.map(u => {
//     if (u.id == req.params.id) {
//       return { ...u, ...req.body }; 
//     }
//     return u;
//   });
// // ایدی ک در پارامز ارسال شده 
// // /api/users/1
// // ویرایش کن و با ایدی قبلی ک در 
// // Users 
// // بود جایگزین کن 
 
//   res.json({
//     data:Users,
//     message:"ok"
//   })
// })
// const port = process.env.PORT || 3000
// app.listen(port, ()=> console.log(`listening on port ${port}`))


// // توضیحات کامل باید داده شود 


// api delete
// برای اینکه یک کاربر را حذف کنیم 

// const { validationResult, body, check } = require("express-validator")
// let Users = require("./users")

// const express = require('express')
// const app = express() 
// app.use(express.json());

// app.delete("/api/users/:id" , (req , res)=>{
//   const user = Users.find(u=> u.id == req.params.id)
//   if(!user){
//     return res.status(404).json({
//       data:null,
//       message:"user not difind"
//     })
//   }
//    const index = Users.indexOf(user)
//    Users.splice(index,1)
//    res.json({
//     data:Users,
//     message:"ok"
//    })
// })
// const port = process.env.PORT || 3000
// app.listen(port, ()=> console.log(`listening on port ${port}`))



// میدلور
// (req , res) 
// میدلور هستند 


// میدلور شخصی 
// const express = require('express')
// const app = express() 
// app.use((req , res , next)=>{
//   req.users = {id:1 , name : "maedeh"}
//   res.send("comming soon")
//   console.log('midd 1')
//   next()
// })
// برای اینکه درخواست بالا لاگ گرفته شود و به درخواست بعدی برود باید نکست را صدا کنیم
// به جایی که نکست را صدا میزنیم باید دقت شود
// app.use((req , res)=>{
//   console.log('midd 2')
// })
// const port = process.env.PORT || 3000
// app.listen(port, ()=> console.log(`listening on port ${port}`))
// ما از نکست نمیتونیم دو بار استفاده کنیم برای استفاده مجدد باید دوباره بیایم مثل 
// app.use
// بنویسیم و دوباره یه درخواست دیگر بفرستیم و دوباره یک نکست و به همین صورت



// urlencode میدلور
// کد های پایین برای این است که از برنامه پست من یک اسم یا هرچیز دیگه ای را ارسال کنیم و از اینجا 
// قابل تماشا باشد
// const express = require("express");
// const { body } = require("express-validator");
// const app = express()
// app.use(express.urlencoded({ extended: true }));

// app.post("/api/users",[
//   body("id").not().isEmpty().withMessage("id وارد کنید"),
//   body("name").not().isEmpty().withMessage("نام را وارد کنید "),
//   body("family").not().isEmpty().withMessage("نام خانوادگی وارد کنید")
// ], (req , res) => {
//   return console.log(req.body)
// })

// const port = process.env.PORT || 3000
// app.listen(port, ()=> console.log(`listening on port ${port}`))



// static میدلور
// کد های پایین برای اینه که عکسی که داخل پوشه پابلیک هست را در لوکال هاست بالا بیاریم
// const express = require ("express")
// const app = express()
// const helmet = require ("helmet")
// app.use(express.static('public'))
// app.use (helmet())
// که در بالا قرار گرفته است پکیجی است که نصب کردیم برای بالا بردن امنیت برنامه helmet
// که به صورت دو خط کد که در بالا قرار دارد باید در برنامه هایمان قرار دهیم
// const port = process.env.PORT || 3000
// app.listen(port, ()=> console.log(`listening on port ${port}`))



// ما چند تا فاز داریم یکیش تسته که زمانی است که داریم برنامه رو تست میکنیم 
// یکیش اینه که به ما نشون میده برنامه در حال اجراس 
// یکیشم مث الان که نه تست میکنیم نه چیزی فقط داریم کد میزنیم 
// حالا اگر بخواهیم بفهمیم برنامه تو چه فازی است کافی است کد های زیر را به کد هامون اضافه کنیم
const express = require ("express")
const app = express()
const helmet = require ("helmet")
const morgan = require ('morgan')
const debug = require("debug")('app;main')

app.use(express.static('public'))
app.use (helmet())


if(app.get('env') === 'development'){
  debug('morgan is active')
  app.use(morgan('tiny'))
}

console.log(app.get('env'))
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening on port ${port}`))
// پکیجی است که که به تازگی نصب کردم morgan
// برای این است که لاگ هامون رو در یک فرمت خیلی خلاصه بیاد اجرا کنه

// برای اینکه مطمئن شویم که در چه محیطی قرار داریم کافیه از کد زیر استفاده کنیم
// console.log(process.env.NODE-ENV)



// کانفیگ های محیطی
// یک پکیج وجد دارد که تنظیماتش رو بتونیم اوکی کنیم که در هر محیط یا فازی که بودیم نسبت به
// همان فاز تنظیمات را انجام دهیم
// npm i config برای نصب این پکیج باید از این کد در قسمت ترمینال استفاده کنیم
// تنظیمات این کانفیگ ها برای دولوپمنت داخل فولدر کانفیگ در سه فایل انجام شده است
// حالا برای استفاده از این ماژول کافی است کد های زیر را به کدهای خودمون اضافه کنیم
// const config = require('config')

// console.log("Application Name:" , config.get("name"))
// console.log("Application version:" , config.get("version"))
// console.log("sms:" , config.get("SMS.ip"))



// وقتی بخواهیم یک متغیر رو ست کنیم در قسمت ترمینال کد زیر راه مینویستیم
// این فرم برای اطلاعات حساسمون است
// set expressapp_smskey=123456
// عدد کد بالا برای مثال جای رمزمونه 
// در قسمت کانفیگ فایل کاستوم یک کد مربوط به این کد است که برای اینکه
// اطلاعات مهم را در خود صفحه اصلی نریزیم استفاده میشود ان را در متغیر های محیطی میریزیم 
// و هر وقت خواستیم از ان استفاده میکنیم اینجوری امنیت بالا تری دارد 
// وقتی هم که بخواهیم اجراش کنیم از کد زیر استفاده میکنیم و به کد های دیگرمون اضافه میکنیم
// console.log("sms key:" , config.get("SMS.key"))



// پکیج دیباگ
// npm i debug برای نصب این بکیج در قسمت ترمینال این کد را باید بزنیم
// با استفاده از این پکیج میتوانیم لاگ گرفتنمونو هر موثع که خواستیم استفاده نکنیم
// یا اینکه نزاریم خونده بشه اون کنسول دات لاگی که نوشتیم یه همچین چیزی که انگار غیر فعال میکنیم لاگ هار
// const debug = require("debug")('app;main')
// اول باید کد بالا در پروژه باشد بعد میتونیم مث کد پایین ازش استفاده کنیم
// برای مثال به جای کنسول دات لاگ میایم کد پایین را مینوسیم
// debug('hello world')
// برای اینکه دیباگ فعال شود باید از یک متغیر محیطی استفاده کنیم در قسمت ترمینال کد زیر زده شود
// DEBUG=app:main


// >>>>>>>>>>> این کد یک باگ داره که میگه به خاطر فرمت اشتباه در ویندوز <<<<<<<<<<<<


// برای اینکه غیر فعال شود متغیر محیطی بالا کافیه کد زیر را در قسمت ترمینال بزنیم
// DEBUG=
// یدونه دیگ هم از دیباگ هست که در پایین گذاشتم کدشو
// dbdebug("hello world")
// ولی قسمت دیباگ رو مشکل دارم کلا علی باید توضیح بده



// برای اینکه در پاسخ به درخواستی که میخواد یک صفحه اچ تی ام ال برگردونیم دوتا راه داریم
// راه اول اینه که یک فایل با پسوند اچ تی ام ال میسازیم
// را دومش اینه که از ویو انجین استفاده کنیم ویو انجین هم خودش چند تا بخش داره که ما میخوایم از راه
// ejs استفاده کنیم
// باید اول پکیجشو نصب کنیم ک کد زیر را در ترمینال وارد میکنیم
// npm i ejs
// حالا برای اینکه بتوانیم در کد هامون ازش استفاده کنیم باید کد زیر را در کد هامون قرار دهیم
// app.set('view engine', 'ejs')
// کامل نیست کد های بالا  


