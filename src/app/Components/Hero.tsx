import Image from "next/image"
const Hero = () => {
    return (
        <section className='bg-noisy'>
            <h1 className='text-8xl font-semibold mt-40 leading-none text-center [letter-spacing:2px]'>Cocktails</h1>
            <Image src='/images/hero-left-leaf.png' alt="leftLeafImg" width={266} height={461}
                className="absolute w-1/3 md:w-fit -bottom-20"
            />
            <Image src='/images/hero-right-leaf.png' alt="leftLeafImg" width={266} height={461}
                className="absolute w-1/3 md:w-fit md:bottom-0 right-0 top-1/2"
            />
        </section>
    )
}

export default Hero
