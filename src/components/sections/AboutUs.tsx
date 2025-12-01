import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg9.jpg" 
          alt="Background"
          fill
          className=""
          priority
        />
        <div className="absolute inset-0 "></div>
      </div>

    
      <div className="relative z-10 flex min-h-screen items-center justify-start">
        <div className="mx-8 my-12 w-full max-w-2xl rounded-xl  p-8 shadow-2xl backdrop-blur-sm  lg:mx-16">
          <h1 className="mb-6 border-b-4 border-b-blue-300 pb-4 text-3xl font-bold text-blue-300 md:text-4xl">
            درباره ما
          </h1>
          
          <div className="space-y-4 text-justify leading-8">
            <p className="text-gray-300">
            ما در وایزر یک تیم جوان، خلاق و عاشق تکنولوژی هستیم که با هدف ساده‌تر و هوشمندتر کردن زندگی دیجیتال شکل گرفتیم. مسیر ما از طراحی و توسعه وب‌سایت آغاز شد؛ جایی که تجربه همکاری با کسب‌وکارهای مختلف به ما آموخت ساختن ابزارهای دقیق، سریع و کاربردی چقدر می‌تواند روی رشد واقعی افراد و شرکت‌ها اثر بگذارد.
            </p>
            
            <p className="text-gray-300">
            امروز با استفاده از همین تجربه و تکیه بر جدیدترین دستاوردهای هوش مصنوعی، محصولی را توسعه داده‌ایم که باور داریم آینده تعاملات آنلاین را متحول می‌کند: دستیار هوش مصنوعی وایزر.
            </p>
            
            <p className="text-gray-300">
             ماموریت ما این است که هوش مصنوعی را از یک تکنولوژی پیچیده و دور، به ابزاری ساده، عملی و همیشه در دسترس تبدیل کنیم؛ ابزاری که بتواند به کسب‌وکارها، تیم‌ها و حتی افراد در انجام کارها، تولید محتوا، تصمیم‌گیری و افزایش بهره‌وری کمک کند.
            </p>
            
            <p className="text-gray-300">
             ما در وایزر به کیفیت، سادگی، سرعت و نوآوری پایبندیم و تلاش می‌کنیم محصولاتی بسازیم که واقعاً به کار بیایند، نه فقط جذاب به نظر برسند.
اگر شما هم به دنیای هوش مصنوعی علاقه‌مندید و دنبال راه‌حل‌هایی واقعی برای رشد هستید، خوش آمدید! وایزر اینجاست تا همراهتان باشد.
            </p>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;