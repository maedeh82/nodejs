// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/relation')
// .then(()=>console.log("connected to mongodb"))
// .catch(()=>console.log("could not connect"))
// // با استفاده از کد های بالا به مونگو دیبی متصل شدیم

// // حالا با استفاده از کد های زیر یک کالکشن بوک و یک کالکشن یوز درست میکنیم به صورت زیر 
// const Book = mongoose.model("Book",new mongoose.Schema({
//   title:String,
//   pages:Number
// }))

// const User = mongoose.model("User",new mongoose.Schema({
//   first_name: String,
//   last_name: String,
//   Book:{
//     type: mongoose.Schema.Types.ObjectId,
//     ref:"Book"
//   }
// }))

// // مرحله بعد ساخت فانگشن برای ایجاد کاربر
// async function createUser(first_name , last_name , Book_id){
//   const user = new User ({
//     first_name ,
//     last_name ,
//     Book : Book_id
//   })
//   const result = await user.save()
//   console.log(result)
// }

// // حالا یک فانگشن برای ایجاده بوک
// async function createBook(title , pages){
//   const book = new Book({
//     title , 
//     pages
//   })
//   const result = await book.save()
//   console.log(result)
  
// }

// // و حالا یک فانگشن برای دریافت کاربر ها ایجاد میکنیم
// async function getUsers(title,pages){
//   const users = await User.find().populate('book')
//   console.log(users)
// }

// createBook('nodejs programming',100)
// در کد بالا کتابی که ایجاد کرده بودیم را در دیتابیس میتونستیم ببینیم
// createUser('maedeh' , 'khan' , '672222d351dbd0228a375aba')
// در کل بالا به کتابی که ایجاد کرده بودیم اسم وفامیل فامیل اضافه کردیم و همراه ایدیش ثبتش کردیم 
// و در قسمت ترمینال برامون نمایش داده شد
// getUsers()
// کد بالا هم یوزر را برامون برمیگردونه




// رویکرد دوم یعنی رویکرد جاسازی

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/relation')
.then(()=>console.log("connected to mongodb"))
.catch(()=>console.log("could not connect"))

const bookSchema = new mongoose.Schema({
  title: String ,
  pages : Number
})
const Book = mongoose.model("Book", bookSchema)

const User = mongoose.model("User",new mongoose.Schema({
  first_name: String,
  last_name: String,
    // برای اینکه تبدیل به ارایه کنیم و چند تا کتاب داشته باشیم کافیه بوک اسکیمای ریر را داخل []بگذاریم
    // و اسم بوک دست چپشم یه اس بهش اضاف کنیم 
  books : [bookSchema]
}))

async function createUser(first_name , last_name , books){
  const user = new User ({
    first_name ,
    last_name ,
        // و برای چند تا کتاب داشته علاوه بر کار بالا باید بوک پایین را در سمت راست قرار داره رو به 
    // books
    // تغییر دهیم
    book : books
  })
  const result = await user.save()
  console.log(result)
}
// وقتی بخواهیم به کتابمون یک یوزر اضافه کنیم از کد زیر استفاده میکنیم 
// کد فراخونیش پایین مینوسیم 
async function addBook(userId , book){
  const user = await User.findById(userId)
  user.books.push(book)
  await user.save()
}

// فانگشن حذف یک کتاب 
// async function removeBook(userId , bookId){
//   const user = await User.findById(userId);
//   const book = user.books.id(bookId);
//   book.remove();
//   await user.save()
//   }
// برای حذف کتاب کد بالا باگ داره نمیدونم چرا نمیشه 
// ولی کد پایین کار میکنه و کتابی ک بخوای رو پاک میکنه
// کد بالایی که باگ داره رو میزارم بمونه چون روشیه که ویدیو اموزشی از اون رفته 
const removeBook = async (userId, bookId) => {
  await User.findByIdAndUpdate(userId, { $pull: { books: { _id: bookId } } });
  console.log("Book removed successfully");
}
  // کد فراخونیش پایین نوشته شده

async function getUsers(title,pages){
  const users = await User.find()
  console.log(users)
}
// اگر بخواهیم کتابمون رو اپدیت کنیم از کد های زیر استفاده میکنیم
// منظور از اپدیته کتاب اینه که اسمشو عوض کنیم 
// الان مثلا میخوایم تایتلش رو تغییر بدیم 
async function updateUser(id){
  const user = await User.findById(id)
  user.book.title = 'react programming',
  await user.save()
}
// برای اینکه چیزی که اپدیت کردیم را فراخونی کنیم از کد زیر استفاده میکنیم 
// updateUser('67235912fad0865afc71a3b5')

// createUser('maedeh' , 'khan' , new Book({title:'nodejs progamming' , pages:100}))
// کد های پایین برای چند کتاب درست کردن با همه 
// createUser('maedeh' , 'khan' ,[
//   new Book ({title:'nodejs progamming', pages:100}),
//   new Book ({title:'react progamming', pages:150}),
//   new Book ({title:'mongodb tutorial', pages:200})
  
// ] )

// کد فراخونی اد بوک یا همون به کتابمون یوزر اضافه کنیم 
// addBook('67236570afcd74d90cb5af46', new Book({title:'js tutorial', pages:300}))

// کد فراخونی فانگشن حذف یک ایدی 
removeBook('67236570afcd74d90cb5af46' , '672369b563e44c797063c4bb')

