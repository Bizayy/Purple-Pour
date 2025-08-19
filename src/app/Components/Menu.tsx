import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useState } from "react"
import { allCocktails } from "../Constants"

const Menu = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    // const contentRef = useRef<HTMLDivElement>(null);

    const handleClick = (type: string) => {

        const outX = type === 'next' ? '100%' : '-100%';
        const inX = type === 'next' ? '-100%' : '100%';

        gsap.to('.cocktailImgDiv', {
            opacity: 0,
            x: outX,
            duration: 0.6,
            ease: 'power1.inOut',
            onComplete: () => {

                handleTab(currentIndex + 1);

                gsap.set('.cocktailImgDiv', {
                    opacity: 0,
                    x: inX,
                })

                gsap.to('.cocktailImgDiv', {
                    x: 0,
                    opacity: 1,
                    ease: 'power1.inOut',
                    duration: 0.6,
                })

            }
        })

    }

    useGSAP(() => {

        // gsap.from('.cocktailImgDiv', {
        //     opacity: 0,
        //     x: -150,
        //     ease: 'power1.inOut',
        //     durtion: 1,
        // })

        gsap.from('.info h1', {
            opacity: 0,
            x: -60,
            ease: 'power1.inOut',
            duration: 0.7,
        })

        gsap.from('.details', {
            opacity: 0,
            y: 60,
            ease: 'power1.inOut',
            duration: 0.7,
        })

    }, [currentIndex])

    const allCocktailsLength = allCocktails.length;

    const handleTab = (index: number) => {
        setCurrentIndex((index + allCocktailsLength) % allCocktailsLength);
    }

    const previousCocktail = currentIndex == 0 ? allCocktails[allCocktailsLength - 1] : allCocktails[currentIndex - 1];

    let currentCocktail = allCocktails[currentIndex];
    if (currentIndex >= 0 && currentIndex < allCocktailsLength) currentCocktail = allCocktails[currentIndex]

    const nextCocktail = currentIndex == allCocktailsLength - 1 ? allCocktails[0] : allCocktails[currentIndex + 1];

    return (
        <section className="relative radial-gradient" id='menu' aria-labelledby="menu-heading" >
            <Image src='/images/slider-left-leaf.png' width={275} height={304} alt="left-leaf" id="m-left-leaf"
                className="absolute left-0 w-1/3 md:w-fit object-contain bottom-0" />
            <Image src='/images/slider-right-leaf.png' width={275} height={304} alt="right-leaf" id="m-right-leaf"
                className="absolute right-0 w-1/3 md:w-fit object-contain top-0" />

            <div className="relative py-16 overflow-hidden ">

                <h1 id="menu-heading" className="invisible">Cocktails Menu</h1>

                <div className="w-full bg-black/40 py-4" aria-label="cocktails-menu-section">
                    {/*
                    <nav className="flex items-end flex-wrap justify-between py-2 text-lg md:text-2xl w-full md:w-[80vw] lg:w-[63vw] mx-auto"
                    aria-label="cocktails-navigation">
                    */}
                    <nav className="grid grid-cols-2 gap-6 md:grid-cols-4 text-lg px-5 md:text-xl xl:text-2xl w-full lg:w-[80vw] mx-auto" aria-label="cocktails-navigation">
                        {allCocktails.map((cocktail, index) => {

                            const isSelected = index === currentIndex;

                            return (
                                <button key={cocktail.id}
                                    className={`font-(family-name:--font-modernNegra) border-b px-5
                                    ${isSelected ? "text-white border-b-white" : "text-white/60 border-b-white/60"} hover:border-b-[#e7d393]
                                    hover:text-[#e7d393] cursor-pointer transition-colors`} onClick={() => handleTab(index)}>
                                    {cocktail.name}
                                </button>
                            )
                        })}
                    </nav>
                </div>

                <div className="px-5 h-auto">
                    <div className="customContainer mt-20 relative">
                        <div className="flex items-center lg:items-start justify-between">
                            {/*
                            <button className="flex flex-col items-start text-left cursor-pointer hover:text-[#e7d393]"
                                onClick={() => handleTab(currentIndex - 1)}>
                            */}
                            <button className="flex flex-col items-start text-left cursor-pointer hover:text-[#e7d393]"
                                onClick={() => handleClick('prev')}>
                                <h1 className="text-3xl">{previousCocktail.name}</h1>
                                <Image src='/images/right-arrow.png' width={38} height={38} alt='left-arrow' />
                            </button>

                            <div className="h-[58vh] md:h-[80vh] cocktailImgDiv">
                                <Image src={currentCocktail.image} alt="currentCocktailImg"
                                    width={currentCocktail.imageWidth}
                                    height={currentCocktail.imageHeight}
                                    className="object-contain" />
                            </div>

                            {/*
                                <button className="" onClick={() => setCurrentIndex((currentIndex + 1) % allCocktailsLength)}>
                            */}

                            {/*
                            <button className="flex flex-col items-end text-right cursor-pointer hover:text-[#e7d393]"
                                onClick={() => setCurrentIndex((currentIndex + 1) % allCocktailsLength)}>
                            */}
                            <button className="flex flex-col items-end text-right cursor-pointer hover:text-[#e7d393]"
                                onClick={() => handleClick('next')}>
                                <h1 className="text-3xl">{nextCocktail.name}</h1>
                                <Image src='/images/left-arrow.png' width={38} height={38} alt='right-arrow' />
                            </button>
                        </div>

                        <div className="recipe w-full mt-20 flex flex-col md:flex-row items-start justify-between gap-5 lg:absolute lg:bottom-0">
                            <div className="w-full md:w-1/3 info">
                                <h2>Recipe for:</h2>
                                <h1 className="text-[#e7d393] text-3xl md:text-5xl mt-2">{currentCocktail.name}</h1>
                            </div>

                            <div className="w-full md:w-2/3 lg:w-1/3 details">
                                <h1 className="text-4xl md:text-6xl">{currentCocktail.title}</h1>
                                <p className="mt-2">{currentCocktail.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Menu
