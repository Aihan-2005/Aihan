'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Users, Code, Zap, Target, Trophy, Lightbulb, TrendingUp, Phone } from 'lucide-react';
import ContactModal from './ContactModal';

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { number: "50+", label: "پروژه موفق", icon: Trophy },
    { number: "30+", label: "مشتری راضی", icon: Users },
    { number: "10+", label: "متخصص حرفه‌ای", icon: Code },
    { number: "24/7", label: "پشتیبانی", icon: Zap },
  ];

  const values = [
    {
      title: "نوآوری مداوم",
      description: "ما همیشه در حال یادگیری و بهره‌گیری از جدیدترین تکنولوژی‌ها هستیم",
      icon: Lightbulb,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "تمرکز بر نتیجه",
      description: "هدف ما رشد واقعی کسب‌وکار شماست، نه فقط تحویل پروژه",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "رشد همراه",
      description: "موفقیت شما، موفقیت ماست. ما در کنار شما رشد می‌کنیم",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const teamHighlights = [
    "فارغ‌التحصیلان دانشگاه‌های برتر ایران (شریف، تهران، امیرکبیر)",
    "تجربه کار در استارتاپ‌های موفق داخلی و بین‌المللی",
    "تخصص در AI، Machine Learning و توسعه وب مدرن",
    "مشارکت فعال در جامعه توسعه‌دهندگان و رویدادهای تکنولوژی"
  ];

  const handleCallClick = () => {
    window.location.href = 'tel:09916393684';
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg9.jpg" 
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">استارتاپ نوآور ایرانی</span>
            </div>
            <h1 className="mb-6 bg-gradient-to-l from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              ما وایزر هستیم
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-300 md:text-xl">
              تیمی جوان، خلاق و متخصص که با هوش مصنوعی و تکنولوژی‌های روز دنیا، آینده کسب‌وکار شما را می‌سازیم
            </p>
          </div>

          {/* Stats Section */}
          <div className="mb-20 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group rounded-2xl bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                <stat.icon className="mb-3 h-8 w-8 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Story */}
          <div className="mb-20 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 backdrop-blur-md lg:p-10">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-blue-300 md:text-3xl">
                <Users className="h-8 w-8" />
                داستان ما
              </h2>
              <div className="space-y-4 text-justify leading-8 text-gray-300">
                <p>
                  وایزر از دل یک ایده ساده شکل گرفت: <span className="font-semibold text-white">چرا تکنولوژی پیشرفته باید پیچیده باشد؟</span> ما تیمی از فارغ‌التحصیلان دانشگاه‌های برتر ایران هستیم که با تجربه کار در استارتاپ‌های موفق و شرکت‌های بزرگ، تصمیم گرفتیم چیزی متفاوت بسازیم.
                </p>
                <p>
                  سفر ما با طراحی و توسعه وب‌سایت آغاز شد. در این مسیر، با ده‌ها کسب‌وکار از صنایع مختلف همکاری کردیم و یک چیز را فهمیدیم: <span className="font-semibold text-white">کسب‌وکارها به ابزارهایی نیاز دارند که واقعاً کار کنند، نه فقط زیبا باشند.</span>
                </p>
                <p>
                  امروز با بهره‌گیری از قدرت هوش مصنوعی و یادگیری ماشین، محصولاتی می‌سازیم که نه تنها زیبا هستند، بلکه هوشمند، سریع و تاثیرگذار هم هستند. از دستیارهای هوش مصنوعی گرفته تا سیستم‌های پیشرفته اتوماسیون، ما همیشه یک قدم جلوتر فکر می‌کنیم.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 backdrop-blur-md lg:p-10">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-purple-300 md:text-3xl">
                <Target className="h-8 w-8" />
                ماموریت ما
              </h2>
              <div className="space-y-4 text-justify leading-8 text-gray-300">
                <p>
                  ما باور داریم که <span className="font-semibold text-white">هوش مصنوعی باید در دسترس همه باشد</span>، نه فقط شرکت‌های بزرگ. هدف ما دموکراتیزه کردن AI و تبدیل آن به ابزاری روزمره برای همه کسب‌وکارها است.
                </p>
                <p>
                  ما می‌خواهیم:
                </p>
                <ul className="mr-6 list-disc space-y-2">
                  <li>کسب‌وکارهای ایرانی را با تکنولوژی‌های روز دنیا توانمند کنیم</li>
                  <li>زمان و هزینه‌های عملیاتی را با اتوماسیون هوشمند کاهش دهیم</li>
                  <li>تجربه کاربری استثنایی را در هر پروژه تضمین کنیم</li>
                  <li>دانش فنی خود را با جامعه به اشتراک بگذاریم</li>
                </ul>
                <p className="pt-4 font-semibold text-white">
                  ما نمی‌خواهیم فقط یک شرکت خدمات فنی باشیم. ما می‌خواهیم شریک رشد شما باشیم.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="mb-10 text-center text-3xl font-bold text-white md:text-4xl">
              ارزش‌های ما
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group rounded-2xl bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${value.color} p-3`}>
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Highlights */}
          <div className="mb-20 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 p-8 backdrop-blur-md lg:p-12">
            <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
              تیم ما، قدرت ما
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {teamHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-blue-500/20 p-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  </div>
                  <p className="text-gray-300">{highlight}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-blue-300">
                ما نه فقط یک تیم، بلکه یک خانواده از نوآوران هستیم که هر روز برای بهتر شدن تلاش می‌کنند
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="rounded-2xl bg-gradient-to-l from-blue-600 via-purple-600 to-pink-600 p-8 text-center lg:p-12">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              آماده‌اید تا با ما رشد کنید؟
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              بیایید با هم آینده کسب‌وکار شما را بسازیم. ما اینجا هستیم تا شریک موفقیت شما باشیم.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 font-bold text-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">شروع همکاری</span>
              </button>
              <button 
                onClick={handleCallClick}
                className="group relative overflow-hidden rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-purple-600"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  تماس با ما
                </span>
              </button>
            </div>
   
          </div>

        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default AboutUs;
