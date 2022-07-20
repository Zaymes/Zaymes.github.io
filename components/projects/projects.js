import Image from 'next/image';
import Link from 'next/link';
import data from './data.json';
import github from '../../public/github.png'
import openlink from '../../public/link.png'
import folder from '../../public/folder.png'


const Projects = () => {
    return (
        <>
            <div className="grid grid-cols-3 mt-8 gap-4">
                {data.resources.map((resource, index) => {
                    return (
                        <div key={index} className='h-64 w-68 border-2 drop-shadow-lg rounded-lg bg-blue-100  hover:-translate-y-1 hover:scale-101 hover:bg-blue-200 duration-300'>
                            <div className='flex justify-between pt-6 px-4'>
                                <div><Image src={folder} height={24} width={24} alt='folder' /></div>
                                <div>
                                    <Link href={resource.githubLink} passHref><a target="_blank" className='mr-2'><Image src={github} height={20} width={20} alt='github' /></a></Link>
                                    <Link href={resource.link} passHref><a target="_blank"><Image src={openlink} height={20} width={20} alt='link' /></a></Link>
                                </div>
                            </div>
                            <h2 className='text-slate-500 text-base font-bold px-4 mt-4'>{resource.title}</h2>
                            <p className='text-slate-500 text-sm font-normal px-4 mt-2'>{resource.description}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Projects