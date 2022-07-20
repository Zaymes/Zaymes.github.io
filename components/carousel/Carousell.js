
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'

// Data
import data from './data.json';
import twitter from '../../public/twitter.png'
import github from '../../public/github-w.png'
import openlink from '../../public/link-w.png'
import Link from 'next/link'

const Carousel = () => {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);
    const carouselLength = data.resources.length;

    //hardcodded for now
    //////////////////////////////////////////////////////////////////
    const [array, setArray] = useState([0, 1, 2])
    // const createCarousel = (array) => {
    //     array.index = 0
    //     current = function () {
    //         setArray(array.index % array.len)
    //         console.log('harey', array[array.index])
    //         return array[array.index];
    //     };
    //     array.next = function () {
    //         this.index++;
    //         return this.current();
    //     };
    //     array.previous = function () {
    //         this.index += array.len - 1;
    //         return this.current();
    //     };
    //     array.reset = function () {
    //         this.index = 0;
    //         return array[0];
    //     };

    // }
    // createCarousel(array)
    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);
    useEffect(() => {
        setTimeout(() => {
            console.log('hello')
        }, 2000);
    })

    return (
        <div className="carousel  mx-auto w-10/12">
            <div className="relative overflow-hidden">
                <div className="flex justify-between absolute top left w-full h-full">
                    <button
                        onClick={movePrev}
                        className="text-white w-10 h-full text-center opacity-40 hover:opacity-80 disabled:opacity-25  z-10 p-0 mx-10 transition-all ease-in-out duration-300"
                        disabled={isDisabled('prev')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-20 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Prev</span>
                    </button>
                    <button
                        onClick={moveNext}
                        className="text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25  z-10 p-0 mx-10 transition-all ease-in-out duration-300"
                        disabled={isDisabled('next')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-20 -ml-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
                <div
                    ref={carousel}
                    className="carousel-container w-full relative flex flex-nowrap md:overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 rounded-lg"
                >
                    {data.resources.map((resource, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-none text-center relative h-full snap-start  "
                            >
                                <a
                                    href={resource.link}
                                    // className="h-full w-full aspect-square basis-full block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                                    className='h-full w-full  m-0 p-0'
                                // style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                                // style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                                >
                                    {/* <img
                                        src={resource.imageUrl || ''}
                                        alt={resource.title}
                                        className="w-full  hidden"
                                    /> */}
                                    <Image src={resource.imageUrl} height={460} width={750} alt='image' />
                                </a>
                                <div
                                    // href={resource.link}
                                    className="h-full w-full aspect-square  absolute top-0 left-0 transition-opacity duration-300 opacity-80 hover:opacity-80 bg-blue-700/75 z-10 "
                                // className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
                                >
                                    <h3 className="text-white font-bold text-3xl pt-40 mb-2 px-3 mx-auto ">
                                        {resource.title}
                                        {/* IDMS - Tulsipur */}
                                    </h3>
                                    <h3 className='text-white font-semibold text-sm mb-2 w-96 mx-auto'>
                                        {resource.description}
                                    </h3>
                                    <div className='flex mx-auto max-w-max mt-2'>
                                        <Link href=''><a className='mr-2'><Image src={github} height={30} width={30} alt='github' className='hover:opacity-60' /></a></Link>
                                        <Link href={resource.link} passHref><a target="_blank" ><Image src={openlink} height={30} width={30} alt='openlink' className='hover:opacity-60' /></a></Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
