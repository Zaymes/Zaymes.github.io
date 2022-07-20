import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import linkedIn from '../public/linkedin.png'
import github from '../public/github.png'
import twitter from '../public/twitter.png'
import hand from '../public/hand.png'
import james from '../public/james.jpeg'
import Carousel from '../components/carousel/Carousell'
import Projects from '../components/projects/projects'
import arrow from '../public/arrow-right.svg'
import Logo from '../public/logo.png'
import mail from '../public/mail.png'
import Head from 'next/head'

// border-orange-900 border-2

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Head>
        <title>James Shrestha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./computer.png" />
      </Head>
      <div className='container mx-auto flex justify-between max-w-5xl mt-4'>
        <Link href='/'>
          <a className='hover:shadow-none text-lg text-neutral-700 flex'><Image src={Logo} height={24} width={24} style={{ marginTop: '4px' }} alt='laptopman'></Image> <p className='baseline ml-1 font-bold'>James Shrestha</p>   </a>
        </Link>
        <div className='flex'>
          <Link href='./cv-james.pdf' passHref>
            <a className='hover:shadow-none text-sm text-neutral-700 hover:text-blue-500 font-bold' target='_blank' download> Download CV</a>
          </Link>
          <Link href='/'>
            <a className='hover:shadow-none text-sm text-neutral-700 ml-4 hover:text-blue-500 font-bold'>Blogs</a>
          </Link>
        </div>
      </div>
      <div className='h-full'>
        <div className='container mx-auto flex justify-center mt-32 mb-10 max-w-5xl space-x-14 '>
          <div className=' rounded-full w-96 h-96 border-orange-900 border-orange-900 drop-shadow-xl bg-about-bg bg-blue-700 contrast-90 brightness-90' id='home'>
            {/* <Image src={james} height={350} width={360} alt='james image' className='mx-auto rounded-full ' /> */}
          </div>
          <div className='mt-28'>
            <h1 className=' text-3xl text-slate-600 font-semibold align-top'>Hello World! <Image src={hand} height={30} width={30} alt='hand' className='align-baseline' /></h1>
            <h3 className='text-3xl text-slate-600 font-semibold'>I am James Shrestha</h3>
            <h2 className='text-red-400 mt-1'>Software Developer | Open Data Advocate</h2>
            <div className='flex mt-1'>
              <Link href='https://www.linkedin.com/in/james-shrestha-25549a189'><a target="_blank" className='pr-1'><Image src={linkedIn} height={20} width={20} alt='linkedin' /></a></Link>
              <Link href='https://github.com/Zaymes'><a target="_blank" className='pr-1'><Image src={github} height={20} width={20} alt='github' /></a></Link>
              <Link href='https://twitter.com/Jaymes_Stha'><a target="_blank"><Image src={twitter} height={20} width={20} alt='twitter' /></a></Link>
            </div>
            <div className='text-slate-600 mt-2 flex'>
              <p className='text-base'>Get In touch</p>
              <Link href='mailto:zaymesshrestha@gmail.com.com' passHref><a target='_blank' className='ml-1 flex' ><Image src={mail} height={20} width={20} alt='linkedin'></Image> <p className='underline decoration-2 decoration-sky-700 '>zaymesshrestha@gmail.com</p></a></Link>
            </div>
          </div>
        </div>
        <div className='fixed flex-none right-20 bottom-20 text-blue-400 text-sm font-normal'>
          <div className='mb-0.2' ><Link href='#home'>/home</Link></div>
          <div className='mb-0.2'><Link href='#about'>/about</Link></div>
          <div className='mb-0.2'><Link href='#experience'>/experience</Link></div>
          <div><Link href='#projects'>/projects</Link></div>
          <div className='flex mt-6'>
            <Link href='https://www.linkedin.com/in/james-shrestha-25549a189'><a target="_blank" className='pr-1'><Image src={linkedIn} height={20} width={20} alt='linkedin' /></a></Link>
            <Link href='https://github.com/Zaymes'><a target="_blank" className='pr-1'><Image src={github} height={20} width={20} alt='github' /></a></Link>
            <Link href='https://twitter.com/Jaymes_Stha'><a target="_blank"><Image src={twitter} height={20} width={20} alt='twitter' /></a></Link>
          </div>
        </div>
        {/* <EmblaCarousel></EmblaCarousel> */}
        {/* <div className='bg-neutral-200 mt-20 absolute w-full h-48'>
          <div className='max-w-4xl mx-auto mt-20'>
            <h1 className='text-2xl text-indigo-400 font-normal '>"Let's work to make the workd a better place than it already is it already "</h1>
          </div>
        </div> */}
        <div className='max-w-4xl mx-auto mt-26 h-full'>
          <h2 className='max-w-fit  mx-auto pt-10 text-2xl font-bold text-slate-500 mb-5' id='about' > About Me</h2>
          <div className='border-slate-100 drop-shadow-lg border-2 border-slate-100 rounded-lg h-full pb-12 mx-auto w-11/12 bg-no-repeat bg-contain'>
            <p className='px-20 pt-12 text-base font-normal text-slate-500'>I am a software engineer specialized in building data management plaforms. Beside development I like to play with data and advocate for open data and technology as I believe knowledge should create power for many not the few. Here are some technologies I am working with.</p>
            <div className='px-20 w-9/12 mt-4 grid grid-cols-2'>
              <p className='flex text-slate-700 font-thin text-sm pt-0.25'> <Image src={arrow} height={20} width={20} alt='arrow' />Javascrpit ES6+</p>
              <p className='flex text-slate-700 font-thin text-sm pt-0.25'> <Image src={arrow} height={20} width={20} alt='arrow' /> Python</p>
              <p className='flex text-slate-700 font-thin text-sm pt-0.25'> <Image src={arrow} height={20} width={20} alt='arrow' /> React.js</p>
              <p className='flex text-slate-700 font-thin text-sm pt-0.25'> <Image src={arrow} height={20} width={20} alt='arrow' /> Next.js</p>
              <p className='flex text-slate-700 font-thin text-sm pt-0.25'> <Image src={arrow} height={20} width={20} alt='arrow' /> Django</p>
              <p className='flex text-slate-700 font-thin text-sm pt-0.25'> <Image src={arrow} height={20} width={20} alt='arrow' /> HTML & CSS</p>
            </div>
          </div>
        </div>
        <div className='max-w-4xl mx-auto h-full mb-10'>
          <div className='mx-auto w-11/12'>
            <h2 className='max-w-fit mx-auto pt-10 text-2xl font-bold text-slate-500 mb-6 ' id='experience' > Experiences</h2>
            <div className='mb-4'>
              <h2 className='text-lg font-semibold text-slate-500 mb-1' >Engagements</h2>
              <p className='text-base font-normal text-slate-600'>Chief Operating Officer - Open Knowledge Nepal</p>
              <p className='text-base font-normal text-slate-500'>2021 - Present</p>
            </div>
            <div className='mb-4'>
              <h2 className='text-lg font-semibold text-slate-500 mb-1'>Works</h2>
              <p className='text-base font-normal text-slate-600'>Frontend Developer - Open Knowledge Nepal</p>
              <p className='text-base font-normal text-slate-500 mb-1'>2021 - Present</p>
              <p className='text-base font-normal text-slate-600'>Data Analyst - Open Knowledge Nepal</p>
              <p className='text-base font-normal text-slate-500'>2021 - 2022</p>
            </div>
            <div className='mb-4'>
              <h2 className='text-lg font-semibold text-slate-500 mb-1'>Talks and Presentations</h2>
              <p className='text-base font-normal text-slate-600'>Open Data and Why Does It Matter - Undergraduate Colleges</p>
              <p className='text-base font-normal text-slate-500'>Pre-events for OSM Hackfest 2022</p>
            </div>
          </div>
        </div>
        <div className='max-w-4xl mx-auto h-500 mb-10 h-100 '>
          <h2 className='max-w-fit mx-auto pt-10 text-2xl font-bold text-slate-500 mb-10 ' id='projects'> Projects</h2>
          <Carousel />
          <Projects />
        </div>

      </div>
      <div className='container max-w-4xl mx-auto'>
        <p className='container max-w-fit mx-auto mt-40 mb-10 text-base font-normal text-slate-400'>Copyright © 2022 James Shrestha</p>
      </div>
    </div>
  )
}
