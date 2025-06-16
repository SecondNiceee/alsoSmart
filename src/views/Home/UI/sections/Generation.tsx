import Image from "next/image";

const Generation = () => {
    return (
        <section className='section relative'>
            <div className="absolute left-[0%] z-20 top-[30%] opacity-50 md:opacity-70 lg:opacity-100 bg-[#16cffd] w-[200px] h-[200px] blur-[200px]"></div>
            <div  className="container relative z-30 gap-[20px] p-container flex flex-col">
                <h2 className='h2'>СмартКардио® - забота о здоровье поколений!</h2>
                <p className='mid-title text-black relative z-30'>Устройство, которому доверяют врачи, пациенты и семьи. Сегодня — для себя. Завтра — для тех, кого мы любим.</p>
                <Image width={1000} height={1000} alt="generation" className='max-w-[880px] w-full object-cover h-[300px] sm:h-[400px] md:h-[600px] mx-auto relative z-30'  src={"/images/generation.jpg"}  />

                {/* <div className='relative'>
                    <OrderButton externalLink='https://www.youtube.com/@smart_cardio' className='w-[100%] max-w-[70%] md:max-w-[500px] bg-[#ffffff] py-[11px] md:py-[18px] px-[14px] mx-auto border-solid border-2 scale-hover'  >
                        <span className='button-p'>На YouTube канал</span>
                    </OrderButton>
                </div> */}
            </div>
        </section>
    );
};

export default Generation;