const express = require("express");
const mongoose = require("mongoose");
const app = express();

// اتصال به MongoDB
mongoose
  .connect("mongodb://localhost:27017/note-taking-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// تنظیم موتور قالب EJS
app.set("view engine", "ejs");

// پیکربندی برای دسترسی به داده‌های POST
app.use(express.urlencoded({ extended: true }));

// معرفی پوشه استاتیک برای فایل‌های CSS و JS
app.use(express.static("public")); // این خط برای دسترسی به فایل‌های CSS است

// تعریف مدل یادداشت‌ها
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// صفحه اصلی برای نمایش یادداشت‌ها
app.get("/", async (req, res) => {
  const notes = await Note.find();
  res.render("index", { notes });
});

// صفحه برای ایجاد یادداشت جدید
app.get("/create", (req, res) => {
  res.render("create");
});

// دریافت اطلاعات از فرم و ذخیره آن
app.post("/notes", async (req, res) => {
  const { title, content, important } = req.body;

  // بررسی اینکه آیا تیک important زده شده است یا خیر
  const isImportant = important === "on"; // اگر تیک زده باشد، 'on' خواهد بود

  const newNote = new Note({
    title,
    content,
    important: isImportant,
  });

  // ذخیره یادداشت جدید در پایگاه داده
  await newNote.save();

  // بازگشت به صفحه اصلی بعد از ذخیره
  res.redirect("/");
});

// حذف یک یادداشت
app.get("/delete/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

// راه‌اندازی سرور
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
