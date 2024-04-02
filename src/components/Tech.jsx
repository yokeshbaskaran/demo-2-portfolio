import {RiReactjsLine} from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {DiRedis} from 'react-icons/di'
import {BiLogoPostgresql} from 'react-icons/bi'
import { motion } from 'framer-motion'

const iconVars = (duration) => ({
    initial: { y: -10},
    animate:{
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
})

const Tech = () => {
  return (
    <>
        <div id='skills' className="border-b border-neutral-800 pb-24">
            <motion.h1 
                whileInView={{opacity: 1, y: 0 }} 
                initial={{opacity: 0, y: -100 }} 
                transition={{ duration: 0.5 }}  
                className="my-20 text-center text-4xl">
                Tech Stacks
            </motion.h1>
            <motion.div 
                whileInView={{opacity: 1, x: 0 }} 
                initial={{opacity: 0, x: -100 }} 
                transition={{ duration: 1.5 }}  
                 className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVars(2.5)} 
                initial= 'initial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className=' text-7xl text-cyan-400'/>
                </motion.div>
                <motion.div 
                variants={iconVars(3)} 
                initial= 'initial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className=' text-7xl '/>
                </motion.div>
                <motion.div  
                variants={iconVars(5)} 
                initial= 'initial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className=' text-7xl text-green-500'/>
                </motion.div>
                <motion.div  
                variants={iconVars(2)} 
                initial= 'initial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiRedis className=' text-7xl text-red-700'/>
                </motion.div>
                <motion.div  
                variants={iconVars(3)} 
                initial= 'initial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className=' text-7xl text-green-500'/>
                </motion.div>
                <motion.div  
                variants={iconVars(4)} 
                initial= 'initial'
                animate='animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className=' text-7xl text-sky-400'/>
                </motion.div>
            </motion.div>
        </div>
    </>
  )
}

export default Tech