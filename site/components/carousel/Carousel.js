import Image from 'next/image';
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import data from './data.json';

// useEmblaCarousel.globalOptions = { loop: true }



const Carousel = () => {
    const [viewportRef, embla] = useEmblaCarousel({
        loop: true,
        skipSnaps: false
    });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(true);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", onSelect);
        onSelect();
    }, [embla, onSelect]);

    return (
        // <div className="embla" ref={viewportRef}>
        //     <div className="embla__container mx-auto w-full max-w-3xl relative flex flex-nowrap overflow-hidden ">
        //         {data.resources.map((resource, index) => {
        //             return (
        //                 <div className="embla__slide flex-none" key={index}>
        //                     <Image src={resource.imageUrl} height={460} width={750} />
        //                 </div>
        //             )
        //         })}
        //     </div>
        // </div>
        <div className="embla">
            <div className="embla__viewport  mx-auto overflow-hidden" ref={viewportRef}>
                <div className="embla__container w-full relative flex flex-nowrap ">
                    {data.resources.map((resource, index) => (
                        <div className="embla__slide flex-none" key={index}>
                            <div className="embla__slide__inner">
                                <Image src={resource.imageUrl} height={460} width={700} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
    )
}

export default Carousel