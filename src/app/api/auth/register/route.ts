import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

// این فایل برای ثبت‌نام کاربر جدید است
// فعلاً بدون دیتابیس کار می‌کنه (In-Memory)
// بعداً می‌تونی به MongoDB یا Prisma وصلش کنی

// آرایه موقت برای نگهداری کاربران (فقط برای تست)
// در production باید از دیتابیس استفاده کنی
const users: Array<{
  id: string
  name: string
  email: string
  password: string
  role: string
}> = [
  {
    id: '1',
    name: 'ادمین',
    email: 'admin@example.com',
    password: '$2a$10$X9kX9X9X9X9X9X9X9X9X9eK', // admin123 هش شده
    role: 'admin'
  }
]

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    // اعتبارسنجی ورودی‌ها
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'لطفاً همه فیلدها را پر کنید' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: 'رمز عبور باید حداقل ۶ کاراکتر باشد' },
        { status: 400 }
      )
    }

    // بررسی ایمیل تکراری
    const existingUser = users.find(user => user.email === email)
    if (existingUser) {
      return NextResponse.json(
        { message: 'این ایمیل قبلاً ثبت شده است' },
        { status: 409 }
      )
    }

    // هش کردن پسورد
    const hashedPassword = await bcrypt.hash(password, 10)

    // ساخت کاربر جدید
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
      role: 'user'
    }

    // اضافه کردن به آرایه موقت
    users.push(newUser)

    // برگرداندن اطلاعات کاربر (بدون پسورد)
    return NextResponse.json(
      {
        message: 'ثبت‌نام با موفقیت انجام شد',
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role
        }
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('خطا در ثبت‌نام:', error)
    return NextResponse.json(
      { message: 'خطای سرور. لطفاً دوباره تلاش کنید' },
      { status: 500 }
    )
  }
}
