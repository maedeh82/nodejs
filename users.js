var Users = [
  {
    id : 1 ,
    name : 'maedeh',
    famyli : 'khan'
  },
  {
    id : 2 ,
    name : 'mohamad',
    famyli : 'nematy'
  },
  {
    id : 3 ,
    name : 'ali',
    famyli : 'sedighi'
  },
  {    id : 4 ,
    name : 'zahra',
    famyli : 'moradi'}
]
module.exports = Users




router.get("/", async (req, res) => {
  const users = await User.find()
  res.json({
    data: users,
    message: "ok"
  })
})

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user)
    return res.status(404).json({
      data: null,
      message: "the user with the given id was not found"
    })
  res.json({
    data: user,
    message: "ok"
  })
})

router.post("/", async (req, res) => {
  let newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  })
  newUser = await newUser.save()
  res.json({
    data: newUser,
    message: "ok"
  })
})

router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    },
    { new: true }
  )
  if (!user) {
    return res.status(404).json({
      data: null,
      message: "the user with the given id was not found"
    })
  }
  res.json({
    data: user,
    message: "ok"
  })
})

router.delete("/:id",async(req,res)=>{
  const user = await User.findByIdAndRemove(req.params.id)

if (!user) {
  return res.status(404).json({
    data:null,
    message:"the user whit the given id was not found"
  })
}
res.json({
  data: user,
  message : "ok"
})
})
app.use("/users", router)


module.exports = userschema