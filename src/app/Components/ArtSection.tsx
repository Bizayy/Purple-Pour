import Image from "next/image"
import { featureLists, goodLists } from "../Constants"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect } from "react"

const ArtSection = () => {

    let isMobile = false;
    useEffect(() => {
        window.innerWidth > 768 ? isMobile = false : isMobile = true;
    }, [])

    useGSAP(() => {
        const startValues = isMobile ? 'top 20%' : 'top top';
        const endValues = 'bottom center'

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start: startValues,
                end: endValues,
                scrub: 1.5,
                pin: true,
            }
        })

        maskTimeline
            .to('.will-fade', {
                opacity: 0,
                stagger: 0.03,
                duration: 1,
                ease: 'power1.inOut',
            })
            .to('.features', {
                opacity: 0,
                display: 'none',
                duration: 1,
                ease: 'power1.inOut',
            })
            .to('.masked-img', {
                scale: 1.3,
                maskPosition: 'center',
                maskSize: '400%',
                duration: 1,
                ease: 'power1.inOut'
            })
            .to('.masked-container', {
                opacity: 1,
                duration: 0.6,
                ease: 'power1.inOut'
            })
    }, [])

    return (
        <section className="px-5 min-h-dvh mt-10 radial-gradient" id="art">
            <div className="customContainer h-full pt-28">
                <div className="h-full flex-center flex-col gap-10">
                    <div className="relative">
                        <h1 className="text-[#505050] leading-none bg-clip-text text-8xl text-center md:text-[24vw] will-fade">The ART</h1>

                        <div className="w-full h-[50vh] md:h-[60vh] md:w-8/10 lg:h-[70vh] md:top-0 py-10 rounded-4xl overflow-hidden absolute left-1/2 -translate-x-1/2 top-10">
                            <Image src='/images/under-img.jpg' width={1500} height={1000} alt="underImg"
                                className="object-cover size-full masked-img pointer-events-none"
                            />
                        </div>

                        <h1 className="text-5xl md:text-6xl mt-52 md:mt-48 will-fade text-center">Sip Worthy Perfection</h1>
                    </div>

                    <div className="md:mt-10 w-full flex flex-col gap-10 md:flex-row md:justify-between features">
                        <ul className="w-full space-y-4">
                            {goodLists.map((ftr, index) => (
                                <li key={index} className="flex-center gap-2">
                                    <Image src='/images/check.png' width={16} height={16} alt="checkIconImg" />
                                    <span>
                                        {ftr}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="w-full flex justify-end">
                            <ul className="space-y-4 w-fit">
                                {featureLists.map((ftr, index) => (
                                    <li key={index} className="flex-center gap-2">
                                        <Image src='/images/check.png' width={16} height={16} alt="checkIconImg" />
                                        <span>
                                            {ftr}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="masked-container opacity-0 text-center mt-0 md:-mt-20 lg:-mt-16 xl:-mt-28">
                        <div className="masked-content">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl">Made with Craft Poured with Passion</h1>
                            <p className='mt-3 md:text-lg lg:text-xl'>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ArtSection
