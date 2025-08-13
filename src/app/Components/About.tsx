import Image from 'next/image'
import { MdOutlineStar, MdOutlineStarHalf } from 'react-icons/md'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create('#about h1', {
            type: 'words'
        })
        const textScrollTrigger = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center',
            }
        })

        const imgsScrollTrigger = gsap.timeline({
            scrollTrigger: {
                trigger: '.top-grid',
                start: 'top 70%',
            }
        })

        textScrollTrigger
            .from(titleSplit.words, {
                opacity: 0,
                duation: 1,
                ease: 'expo.out',
                stagger: 0.05,
                y: 100,
            })
        // .from('.top-grid div, .bottom-grid div', {
        //     opacity: 0,
        //     duation: 2,
        //     ease: 'power1.inOut',
        //     stagger: 0.04,
        // }, '-=0.5') //this -=0.5 means that this from animation happens 0.5s before the previous animation ends.

        imgsScrollTrigger
            .from('.top-grid div, .bottom-grid div', {
                opacity: 0,
                duation: 2,
                ease: 'power1.inOut',
                stagger: 0.04,
            },)
    }, [])

    return (
        <section id='about' className='min-h-screen p-16 px-5'>
            <div className='customContainer'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
                    <div className='flex flex-col items-start gap-5 md:col-span-8'>
                        <span className='bg-white text-black px-5 py-2 text-sm md:text-base rounded-full'>Best Cocktails</span>
                        <h1 className='text-5xl md:text-6xl max-w-lg'>Where every detail matters—from muddle to garnish</h1>
                    </div>
                    <div className='w-full mt-5 flex flex-col items-start gap-5 md:col-span-4'>
                        <p className='md:text-lg'>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.</p>
                        <div className='w-full flex-center'>
                            {/* Ratings Div */}
                            <div className='w-full flex-center flex-col gap-3'>
                                <div className='w-full flex-center items-start gap-1'>
                                    {
                                        [... new Array(4)].fill(1).map((_, index) => (
                                            <span key={index}><MdOutlineStar size={20} /></span>
                                        ))
                                    }
                                    <span><MdOutlineStarHalf size={20} /></span>
                                </div>
                                <div className='w-full flex flex-col gap-2 items-start'>
                                    <h2 className='w-full font-semibold'>
                                        <span className='text-xl md:text-5xl text-[#e7d393]'>4.5 </span>
                                        <span className='text-lg md:text-3xl'>
                                            / 5
                                        </span>
                                    </h2>
                                    <span className='text-white/90'>12000+ Customers</span>
                                </div>
                            </div>
                            <div className='w-full border-l border-l-emerald-300 p-3'>
                                <div className='rounded-full p-2 bg-gradient-to-b from-black/20 to-black/50'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Grid */}
                <div className='top-grid grid grid-cols-1 xl:grid-cols-12 gap-5 mt-5 lg:mt-10'>
                    <div className='relative h-64 rounded-3xl md:col-span-3 overflow-hidden'>
                        <div className='bg-noisy'>
                            <Image className='object-cover size-full opacity-60' width={330} height={285} src='/images/abt1.png' alt='abtImg1' />
                        </div>
                    </div>

                    <div className='relative h-64 rounded-3xl md:col-span-6 overflow-hidden'>
                        <div className='bg-noisy'>
                            <Image className='object-cover size-full opacity-60' width={580} height={285} src='/images/abt2.png' alt='abtImg2' />
                        </div>
                    </div>

                    <div className='relative h-64 rounded-3xl md:col-span-3 overflow-hidden'>
                        <div className='bg-noisy'>
                            <Image className='object-cover size-full opacity-60' width={860} height={860} src='/images/abt5.png' alt='abtImg5' />
                        </div>
                    </div>
                </div>

                {/* Bottom Grid */}
                <div className='bottom-grid grid grid-cols-1 md:grid-cols-12 gap-5 mt-5'>

                    <div className='relative h-64 rounded-3xl md:col-span-8 overflow-hidden'>
                        <div className='bg-noisy'>
                            <Image className='object-cover size-full opacity-60' width={780} height={285} src='/images/abt3.png' alt='abtImg3' />
                        </div>
                    </div>

                    <div className='relative h-64 rounded-3xl md:col-span-4 overflow-hidden'>
                        <div className='bg-noisy'>
                            <Image className='object-cover size-full opacity-60' width={480} height={285} src='/images/abt4.png' alt='abtImg4' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About

