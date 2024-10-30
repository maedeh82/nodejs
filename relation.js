const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/relation')
.then(()=>console.log("connected to mongodb"))
.catch(()=>console.log("could not connect"))
// با استفاده از کد های بالا به مونگو دیبی متصل شدیم

// حالا با استفاده از کد های زیر یک کالکشن بوک و یک کالکشن یوز درست میکنیم به صورت زیر 
const Book = mongoose.model("Book",new mongoose.Schema({
  title:String,
  pages:Number
}))

const User = mongoose.model("User",new mongoose.Schema({
  first_name: String,
  last_name: String,
  Book:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Book"
  }
}))

// مرحله بعد ساخت فانگشن برای ایجاد کاربر
async function createUser(first_name , last_name , Book_id){
  const user = new User ({
    first_name ,
    last_name ,
    Book : Book_id
  })
  const result = await user.save()
  console.log(result)
}

// حالا یک فانگشن برای ایجاده بوک
async function createBook(title , pages){
  const book = new Book({
    title , 
    pages
  })
  const result = await book.save()
  console.log(result)
  
}

// و حالا یک فانگشن برای دریافت کاربر ها ایجاد میکنیم
async function getUsers(title,pages){
  const users = await User.find().populate('book')
  console.log(users)
}

createBook('nodejs programming',100)
// در کد بالا کتابی که ایجاد کرده بودیم را در دیتابیس میتونستیم ببینیم
// createUser('maedeh' , 'khan' , '672222d351dbd0228a375aba')
// در کل بالا به کتابی که ایجاد کرده بودیم اسم وفامیل فامیل اضافه کردیم و همراه ایدیش ثبتش کردیم 
// و در قسمت ترمینال برامون نمایش داده شد
// getUsers()
// کد بالا هم یوزر را برامون برمیگردونه