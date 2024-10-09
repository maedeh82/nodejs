// کد های پایین برای ماژول بندی استفاده میشه 
// const maede = require('./maede')



// console.log(maede.zarb(5,6))

// path ماژول
// این ماژول برای اینه که با ادرس ها کار کنیم
// ینی اینکه در خط 13 داره ادرس فایل را به ما نشون میده که در کجا ذخیره شده است
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
// در مثال زیر دستور داده شده که وقتی زنگ بل به صدا در اومد بعد دستور اوپن د دور امجام شود
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


// npm نصب پکیج به کمک 
// هر پکیجی که میخواهیم نصب کنیم باید وارد سایتش بشویم و کد که دارد را برای نصبش کپی کنیم
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
//     {id : 1 , name : "users1"},
//     {id : 2 , name : "users2"}

//   ])
// })
// const port = process.env.port || 3000
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
// const { validationResult, check } = require("express-validator")
// let Users = require("./users")
// // // چون در خط 236 باید مقدار یوزرز تغییر بدیم باید از لت استفاده بشه


// const express = require('express')
// const app = express() 
// app.use(express.json());
// //  برای خواندن 
// // req.body
// // باید از این کد استفاده شود
// app.put("/api/users/:id" , [
//   check("id").not().isEmpty().withMessage("id وارد کنید"),
//   check("name").not().isEmpty().withMessage("نام را وارد کنید "),
//   check("family").not().isEmpty().withMessage("نام خانوادگی وارد کنید")
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
// در صورتی که میدلور شخصی نباشد و درخواست به روی میدلور های اماده برود از اونجا به بعد رو نمیتونیم 
// دیگه نکست را صدا بزنیم و به بعدی برویم برای اینکه اگر درخواست داخل میدلور اماده اجرا شود دیگر بر روی
// میلدور شخصی خودمون نمیره در صورتی میره روی میدلور شخصی خودمان که اون میلور اماده اجرا نشه



// urlencode میدلور
// کد های پایین برای این است که از برنامه پست من یک اسم یا هرچیز دیگه ای را ارسال کنیم و از اینجا 
// قابل تماشا باشد
// فقط در برنامه پست من باید بریم در قسمت بادی و در قسمت فورم یو ار ال در اون قسمت میتونیم چیزی 
//  بخوایم بنویسیمش
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
// بعد از نوشتن این کد ها در گوگل بعد از پورت سه هزار به جای ای پی ای اسم پوشه ای که عکس داخلشه رو 
// میزاریم



// ما چند تا فاز داریم یکیش تسته که زمانی است که داریم برنامه رو تست میکنیم 
// یکیش اینه که به ما نشون میده برنامه در حال اجراس 
// یکیشم مث الان که نه تست میکنیم نه چیزی فقط داریم کد میزنیم 
// حالا اگر بخواهیم بفهمیم برنامه تو چه فازی است کافی است کد های زیر را به کد هامون اضافه کنیم
// const express = require ("express")
// const app = express()
// const helmet = require ("helmet")
// const morgan = require ('morgan')
// const debug = require("debug")('app:main')

// app.use(express.static('public'))
// app.use (helmet())


// if(app.get('env') === 'development'){
//   debug('morgan is active')
//   app.use(morgan('tiny'))
// }

// console.log(app.get('env'))
// const port = process.env.PORT || 3000
// app.listen(port, ()=> console.log(`listening on port ${port}`))
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



// برای اینکه با اطلاعات حساس چجوری رفتار کنیم
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
// const debug = require("debug")('app:main')
// اپ ماین که در کد بالا نوشته شده است یک اسم اختیاری است
// اول باید کد بالا در پروژه باشد بعد میتونیم مث کد پایین ازش استفاده کنیم
// برای مثال به جای کنسول دات لاگ میایم کد پایین را مینوسیم
// debug('hello world')
// برای اینکه دیباگ فعال شود باید از یک متغیر محیطی استفاده کنیم در قسمت ترمینال کد زیر زده شود
// set DEBUG=app:main

// >>>>>>>>>باگش اینه که لاگ نمیگیره <<<<<<<<<<


// برای اینکه غیر فعال شود متغیر محیطی بالا کافیه کد زیر را در قسمت ترمینال بزنیم
// set DEBUG=
// یدونه دیگ هم از دیباگ هست که در پایین گذاشتم کدشو
// dbdebug("hello world")



// برای اینکه در پاسخ به درخواستی که میخواد یک صفحه اچ تی ام ال برگردونیم دوتا راه داریم
// راه اول اینه که یک فایل با پسوند اچ تی ام ال میسازیم
// را دومش اینه که از ویو انجین استفاده کنیم ویو انجین هم خودش چند تا بخش داره که ما میخوایم از راه
// ejs استفاده کنیم
// باید اول پکیجشو نصب کنیم ک کد زیر را در ترمینال وارد میکنیم
// npm i ejs
// حالا برای اینکه بتوانیم در کد هامون ازش استفاده کنیم باید کد زیر را در کد هامون قرار دهیم
// app.set('view engine', 'ejs')
// کامل نیست کد های بالا  



// مسئله
// مسئله زیر میاد داخلش یه ابجکت میسازیم و اطلاعات داخل اون ابجکت رو در بادی لاگ میگیریم به نوعی
// const express = require('express')
// const app =express()

// app.post('/api/users',(req,res)=>{
//   res.send({name : 'maedeh' , family: 'khan'})
//   return 
// })


// const port = process.env.PORT || 3000
// app.listen(port, ()=> console.log(`listening on port ${port}`))



// مسئله
// مسئله زیر کد هاییه که وقتی بخواهیم از طریق ماژول بندی یه سری اطلاعات دریافت کیم
// const express=require('express')
// let users = require("./users")
// const app = express()

// app.get('/api/users',(req , res)=>{
//   res.json(users)

// })
// const port = process.env.PORT || 3000
// app.listen(port, ()=> console.log(`listening on port ${port}`))



// به مسئله بالا میخوایم یک گاربر اضافه کنیم
// const express=require('express')
// let users = require("./users")
// const app = express()

// app.use(express.json()); // اضافه کردن این خط برای پارس کردن JSON

// app.get('/api/users',(req , res)=>{
//   res.json(users)

// })

// app.post('/api/users', (req , res)=>{
//   const newUser = req.body
//     newUser.id = users.length+1
//     users.push(newUser)
//     res.status(200).json(newUser)
//   }else{
//     res.status(404).json({error: 'undifind'})
//   }
  
// })
// const port = process.env.PORT || 3000
// app.listen(port, ()=> console.log(`listening on port ${port}`))





// ویو انجین
// فایلمون رو اچ تی ام الی میکنه
// ejs
// باید نصب کرد پکیج ای جی اس را 
// npm i ejs
// بعداز نصبش باید به نود جی اس بگیم که از چه ویو انجینی میخوایم استفاده کنیم
// بین کد هامون کد زیر رو مینویسیم
// app.set('view engine' , 'ejs')
// و با کد پایین فولدری که ویو هامون توش قرار داره رو میایم به نود جی اس میفهمونیم
// app.set('views' , './views')
// بعد میریم یه فولدر درست میکنیم به اسم ویوس و داخل یک فایل درست میکنیم به اسم
// home ejs
// و داخل اون فایل کد های زیر را میگذاریم
// برای استفاده از ویو در کد هامون به شکل زیر است
// app.get("/", (req,res)=>{
//   res.render('home')
// })


// کد های زیر تست ویو انجین بالا است
// const express = require('express')
// const app = express()
// app.set('view engine' , 'ejs')
// app.set('views' , './views')

// app.get("/", (req,res)=>{
//   res.render('home')
// })

// const port = process.env.PORT || 3000
// app.listen(port, ()=> console.log(`listening on port ${port}`))



// ریفکتور کردن کد ها
// ریفکتور کردن ینی ساختار پروژه تغییر کرده بدون اینکه رفتارش تغییر کنه
// یه نوع مرتب کردن مث ماژول بندی میمونه که برای تمیز تر شدن کدمون بهتره که اینکارو کنیم
// ابتدا یک فودر به اسم زیر ایجاد میکنیم
// routes
// و بعد داخلش یک فایل باز میکنیم به اسم زیر 
// users.js
// بعدش کد هامون که با اپ شروع میشن رو داخلش میریزیم و بعد کد های زیر را در دو خط اول وارد میکنیم
// const express = require("express")
// const router = express.Router()
// و در ادامه هرچی کد که با اپ شروع میشه رو قسمت اپ را به روتر تغییر میدهیم به شکل کد های زیر میشود
// app.post       =>       router.post
// و بعد کد های زیر را باید به فایل یوزر اضافه کنیم
// module.exports = router
// بعد برای اینکه اون کد هایی که در ان فایل است رو استفاده کنیم کد های زیر به کد های اصلیمون باید 
// اضافه کنیم
// const userRouter = require('./routers/users')
// و حالا وقتی بخوایم استفاده کنیمش به صورت یک میدلور مث کد های پایین استفاده اش میکنیم
// app.use('/api/users', userRouter)


// تست مسئله برای کد های بالا
// const express = require('express')
// const app = express()
// const userRouter = require('./routers/users')


// app.use('/api/users', userRouter)

// const port = process.env.PORT || 3000
// app.listen(port, ()=> console.log(`listening on port ${port}`))



// دیتابیس
// mongoose
// ابتدا باید این پکیج را نصب کنیم کد های پایین را در ترمینال بزنید
// npm i mongoose
// یرای اینکه در کد هامون از این پکیج استفاده کنیم باید کد زیر را به کد هامون اضافه کنیم
const mongoose = require('mongoose')
// حالا برای اینکه این پکیج را کانکت کنیم باید از کد زیر استفاده کنیم
mongoose.connect('mongodb://localhost:27017/mongoproject')
// استرینگ داخل پرانتز بالا ادرسی است که ما بهش میدیم روش اجرا شه و عدد 
// 27017 
// پورت دیفالت مونگو دیبی است
// در خط 589 کدی که نوشتیم اگر همچین دیتا بیسی وجود داشته باشه بهش متصل میشه اگر نه میسازه این دیتابیس
// رو و بعد بهش متصل میشه
// بهتره که این کد هارو در پوشه کانفیگ ذخیره کنیم    <<<<<<<<<<

// حالا اگر با موفقیت به دیتابیس وصل شد کد پایین اجرا میشه
.then(()=>{console.log('connected to mongodb')})
// اگر مشکل داشت کدمون کد های زیر اجرا میشه
.catch((error)=>{console.log('could not connected to mongodb')})  



// اسکیما
// schema
// const userschema = new mongoose.Schema({
//   first_name:String,
  // کد خط بالا و خط پایین یک کار را انجام میدهند ولی خط پایین در ادامه اش میگه که برای مثال پر کردن
  // فلان فیلد ضروری است
  // last_name:{type:String,required:true},
  // favorites:[String],
  // data:{type:Date,default:Date.now},
  // admin:Boolean
// })
// قسمت ریکوایر و وقتی ترو میزاریم ینی فیلد اجباریه
// کلید ها یا مقدار هایی که میخواهیم درون کالکشنمون وجود داشته باشه باید در ابجکت یا {}بالا قرار بگیرد
// برای استفاده از کد های بالا باید یوزر بسازیم که برای این کار باید ابتدا مدل درست کنیم به شکل زیر
// const User = mongoose.model('User', userschema)
// const user = new User({
  // first_name:'maedeh',
  // last_name:'khan',
  // favorites:['music','movi'],
  // admin:true
  //})
// دقت کن که در کد های بالا فقط یک ابجکت داریم میسازیم که در دیتا بیس هم ذخیره نمیشود
// برای اینکه کد های بالا در دیتابیس ذخیره شود فقط کافیه کد پایین را صدا کنیم
// user.save()
// فقط برای اجرای بهتر کد های بهتر است مثل کد های پایین پیش بری


// برای استفاده از کد های بالا یکبار دیگه اومدم نوشتمشون که مرتب ازشون استفاده کنم
// const userschema = new mongoose.Schema({
//   first_name:String,
// last_name:{type:String,required:true},
// favorites:[String],
// data:{type:Date,default:Date.now},
// admin:Boolean
// })
// const User = mongoose.model('User', userschema)
// async function createUser(){
//   const user = new User({
//     first_name:'maedeh',
//     last_name:'khan',
//     favorites:['music','movi'],
//     admin:true
//   })
//   const result = await user.save()
//   console.log(result)
// }
// createUser()





// کوئری نویسی 
// مثل کد های بالا میمونه با یه سری تغییرات ریز که ببینی خودت متوجه میشی
// کاری که کوئر نویسی میکنه اینه که به ما اجازه میدهد که بتوانیم چیزی که میخوایم رو فقط لاگ بگیره 
// برای مثال میگیم کسی ک اسم مائده رو در کد ها دارند رو فقط برای من لاگ بگیر
// یا کسی که ادمینه رو به من نشون بده و از این قبیل کارها
// const userschema = new mongoose.Schema({
//   first_name:String,
// last_name:{type:String,required:true},
// favorites:[String],
// data:{type:Date,default:Date.now},
// admin:Boolean
// })
// const User = mongoose.model('User', userschema)
// async function createUser(){
//   const user = new User({
//     first_name:'maedeh',
//     last_name:'khan',
//     favorites:['music','movi'],
//     admin:true
//   })
//   const result = await user.save()
//   console.log(result)
// }
// async function getUsers(){
//   // در کد زیر داخل پرانتز فایند یک {}یا ابجکت میتونیم بزاریم و چیزی ک میخوایم رو فقط لاگ بگیره
//   const users = await User.find({first_name:'maedeh'})
//   console.log(users)
// }
// getUsers()




// عملگر ها در مانگو
// برای مثال میخواهیم تمام کاربر هایی ک سنشون 27 ساله رو برگردونه از کد های زیر استفاده میکنیم
// const userschema = new mongoose.Schema({
//   first_name:String,
// last_name:{type:String,required:true},
// favorites:[String],
// data:{type:Date,default:Date.now},
// admin:Boolean
// })
// const User = mongoose.model('User', userschema)
// async function createUser(){
//   const user = new User({
//     first_name:'maedeh',
//     last_name:'khan',
//     age:27,
//     favorites:['music','movi'],
//     admin:true
//   })
//   const result = await user.save()
//   console.log(result)
// }
// async function getUsers(){
//   const users = await User.find({age:{$eq:27}})
//   console.log(users)
// }
// getUsers()
// کد بالا تست نشده
// چند تا علامت هایی داریم که پایین معنی هرکدومو زیرش مینویسم
// eq
// میگه که هر کس که با شرطی که گذاشتیم یکی بود رو نشون بده
// nq
// میگه که هرکسی که با شرطی که گذاشتیم یکی بود رو نشون نده بقیه رو نشون بده
// gt 
// کاربر هایی رو بهمون نشون میده که بزرگتر از عددی که نوشتیم یا سنی که نوشتیم باشند
// gte
// مثل جی تی میمونه فقط فرقش اینه که بزرگتر مساوی رو نشون میده ینی خود اون عدد هم نشون میده 
// lt 
// کاربر هایی که کمتر از اون عدد هستند رو نشون میده 
// lte 
// کاربرهایی که کمتر و مساوی همون عدد هست رو نشون میده
// in 
// کاربرهایی رو نشون میده که اون اعدادی که ما وارد میکنیم است 
// nin
// کاربر هایی که وارد میکنیم رو نشون نمیده برعکس بالایی است



// or کوئری
// برای مثال ما دوتا شرط رو میزاریم که اگ یکیش پیدا شد اون شرط رو عملی کنه مثل کد های زیر 
// تغییری کد ها در قسمت فایند انجام میشود 
// کلمه اور به معنی این است که اگر یکی از شرط ها درست بود اجراش کن
// const userschema = new mongoose.Schema({
//   first_name:String,
// last_name:{type:String,required:true},
// favorites:[String],
// data:{type:Date,default:Date.now},
// admin:Boolean
// })
// const User = mongoose.model('User', userschema)
// async function createUser(){
//   const user = new User({
//     first_name:'maedeh',
//     last_name:'khan',
//     age:27,
//     favorites:['music','movi'],
//     admin:true
//   })
//   const result = await user.save()
//   console.log(result)
// }
// async function getUsers(){
//   const users = await User.find().or([{first_name:'mohamad'},{admin:true}])
//   console.log(users)
// }
// getUsers()




// pagination
// مثل کاری که سایتا انجام میدن میمونه مثلا یه سری اطلاعات در صفحه اول میباشد اگر بخوایم ادامشو ببینیم 
// باید به صفحه دوم برویم 
// مثلا میخواییم الان درست کنیم که در هر صفحه 8 تا از اطلاعاتی که میخوایم رو قرار دهیم
// کد های این داستانا در قسمت اسینک فانکشن گت یوزر است
// const userschema = new mongoose.Schema({
//   first_name:String,
// last_name:{type:String,required:true},
// favorites:[String],
// data:{type:Date,default:Date.now},
// admin:Boolean
// })
// const User = mongoose.model('User', userschema)
// async function createUser(){
//   const user = new User({
//     first_name:'maedeh',
//     last_name:'khan',
//     age:27,
//     favorites:['music','movi'],
//     admin:true
//   })
//   const result = await user.save()
//   console.log(result)
// }
// async function getUsers(){
//   const pageNumber = 1
//   const pageSize = 8
//   const users = await User.find()
//   .skip((pageNumber - 1)* pageSize)
//   .limit(pageSize)
//   console.log(users)
// }
// getUsers()




// بروزرسانی داکیومنت ها به وسیله مانگوس
// دو نوع روش داریم برای اینکار
// برای روش اول 
// داکیومنت رو میگیریم تغییرش میدیم و دوباره سیوش میکنیم
// ابتدا باید ایدی مورد نظرمون رو پیدا کنیم که تغییرش بدیم که در خط 833 اینکار را انجام میدهیم
// const userschema = new mongoose.Schema({
//   first_name:String,
// last_name:{type:String,required:true},
// favorites:[String],
// data:{type:Date,default:Date.now},
// admin:Boolean
// })
// const User = mongoose.model('User', userschema)
// async function createUser(){
//   const user = new User({
//     first_name:'maedeh',
//     last_name:'khan',
//     age:27,
//     favorites:['music','movi'],
//     admin:true
//   })
//   const result = await user.save()
//   console.log(result)
// }
// async function getUsers(){
//   const users = await User.find()
//   console.log(users)
// }
// async function updateUser(id){
//   const user = await User.findById(id)
//   // حالا اگر این یوزر وجود نداشت میگیم بقیه کد هارو انجام نده اگر وجود داشت که تغییرات رو اعمال میکنیم
//   // برای اینکار از کد های زیر استفاده میکنیم
//   if (!user)return 
//   user.admin = true
//   user.first_name = "updated name"
//   await user.save()
// }
// // برای اعدادی که داخل پرانتز زیر نوشته شده است باید بریم از برنامه مونگودی بی ایدی کار بر مورد نظر را 
// // در پرانتز زیر کپی کنیم
// updateUser('67064883d3b98fc769af6f20')


// روش دوم از موضوع بالا
// در روش دوم نیاز نیست اول دریافت کنیم بعد اپدیت کنیم میتونیم مستقیم اپدیت کنیم
// const userschema = new mongoose.Schema({
//   first_name:String,
// last_name:{type:String,required:true},
// favorites:[String],
// data:{type:Date,default:Date.now},
// admin:Boolean
// })
// const User = mongoose.model('User', userschema)
// async function createUser(){
//   const user = new User({
//     first_name:'maedeh',
//     last_name:'khan',
//     age:27,
//     favorites:['music','movi'],
//     admin:true
//   })
//   const result = await user.save()
//   console.log(result)
// }
// async function getUsers(){
//   const users = await User.find()
//   console.log(users)
// }
// async function updateUser(id){
//   const result = await User.update({_id: id},{
//     $set:{
//       first_name: 'ali'
//     }
//   })
//   console.log(result)
// }
// updateUser("67064883d3b98fc769af6f20")
// کد های بالا ارور داره




// پاک کردن داکیومنت 
// const userschema = new mongoose.Schema({
//   first_name:String,
// last_name:{type:String,required:true},
// favorites:[String],
// data:{type:Date,default:Date.now},
// admin:Boolean
// })
// const User = mongoose.model('User', userschema)
// async function createUser(){
//   const user = new User({
//     first_name:'maedeh',
//     last_name:'khan',
//     age:27,
//     favorites:['music','movi'],
//     admin:true
//   })
//   const result = await user.save()
//   console.log(result)
// }
// async function getUsers(){
//   const users = await User.find()
//   console.log(users)
// }
// async function updateUser(id){
//   const result = await User.update({_id: id},{
//     $set:{
//       first_name: 'update name 2'
//     }
//   })
//   console.log(result)
// }

// async function removeUser (id){
//   const result = await User.deleteOne({_id: id})
//   console.log(result)
// }
// removeUser("67064883d3b98fc769af6f20")

// برای اینکه چند تا یوزر حذف کنیم کافیه به جای 
// deleteOne
// از 
// deleteMany
// استفاده کنیم




// ولیدیتور 
// مهم ترین و پرکاربرد ترین ولیدیتور 
// require است
// که میتونیم برای اینکه فیلد هامون رو اجباری کنیم ازش استفاده کنیم
// که در خط 941 ما با استفاده از اون کد اون فیلد رو اجباری کردیم
// const userschema = new mongoose.Schema({
//   first_name:String,
// last_name:{type:String,required:true},
// favorites:[String],
// data:{type:Date,default:Date.now},
// admin:Boolean
// })
// const User = mongoose.model('User', userschema)
// async function createUser(){
//   const user = new User({
//     first_name:'maedeh',
//     last_name:'khan',
//     favorites:['music','movi'],
//     admin:true
//   })
//   const result = await user.save()
//   console.log(result)
// }
// createUser()



// انواع ولیدیتور ها 
// minlength , maxlength
// برای مثال اگر یک فرست نیمی میخواست ذخیره بشه میتونیم براش یه شرطی بزاریم ک برای مثال کمترین حدی 
// که میتونه از کلمات استفاده کنه و بیشترین حدش چقدر باشد 
// تغییرات این ولیدیتور در خط 967
// const userschema = new mongoose.Schema({
//   first_name:{type:String,minlength:3 , maxlength:20},
// last_name:{type:String,required:true},
// favorites:[String],
// data:{type:Date,default:Date.now},
// admin:Boolean
// })
// const User = mongoose.model('User', userschema)
// async function createUser(){
//   const user = new User({
//     first_name:'maedeh',
//     last_name:'khan',
//     favorites:['music','movi'],
//     admin:true
//   })
//   const result = await user.save()
//   console.log(result)
// }
// createUser()


// ولیدیتور بعدی برای قسمت علاقه مندی ها است که یکسری گزینه داره طرف و خارج از اون نمیتونه انتخاب کنه
// const userschema = new mongoose.Schema({
//   first_name:{type:String,minlength:3 , maxlength:20},
// last_name:{type:String,required:true},
// favorites:{ type : [String], enum:[
//   "sport",
//   "data science",
//   "productivity",
//   "programming",
//   "music",
//   "politics",
//   "health"
// ]},
// data:{type:Date,default:Date.now},
// admin:Boolean
// })
// const User = mongoose.model('User', userschema)
// async function createUser(){
//   const user = new User({
//     first_name:'maedeh',
//     last_name:'khan',
//     favorites:['music','movi'],
//     admin:true
//   })
//   const result = await user.save()
//   console.log(result)
// }
// createUser()



// ولیدیتور بعدی برای عدد باشد هم در قسمت سن گذاشته شده است
const userschema = new mongoose.Schema({
  first_name:{type:String,minlength:3 , maxlength:20},
last_name:{type:String,required:true},
age: {type: number, min:8 , max:120},
favorites:{ type : [String], enum:[
  "sport",
  "data science",
  "productivity",
  "programming",
  "music",
  "politics",
  "health"
]},
data:{type:Date,default:Date.now},
admin:Boolean
})
const User = mongoose.model('User', userschema)
async function createUser(){
  const user = new User({
    first_name:'maedeh',
    last_name:'khan',
    favorites:['music','movi'],
    admin:true
  })
  const result = await user.save()
  console.log(result)
}
createUser()
// بیشتر کد های بالا صرفا جهت اینکه کد هارو یادبگیری هست و در اینکه معنی خاصی نمیدهد و ممکن است 
// کد ها اجرا نشود  