'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { portfolioData } from '@/lib/constants'
import { fadeUpVariants, slideInLeftVariants, slideInRightVariants, floatVariants } from '@/lib/animations'

const Hero = () => {
  const { hero, personalInfo } = portfolioData

  return (
    <section
      id="home"
      className="min-h-screen  pt-32 pb-20 relative  section-container flex items-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-accent-green/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          className="flex flex-col space-y-6"
          initial="hidden"
          animate="visible"
          variants={slideInLeftVariants}
        >
          {/* Greeting */}
          <motion.p
            className="text-accent-green font-semibold text-lg"
            variants={fadeUpVariants}
            custom={0}
          >
            Welcome to my portfolio
          </motion.p>

          {/* Main Heading */}
          <motion.div variants={fadeUpVariants} custom={1}>
            <h1 className="heading-xl mb-2">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <p className="text-4xl sm:text-5xl font-grotesk font-bold text-text-secondary">
              {hero.title}
            </p>
          </motion.div>

          {/* Badges */}
          <motion.div
            className="flex flex-wrap gap-3"
            variants={fadeUpVariants}
            custom={2}
          >
            <div className="badge">
              <span>✨</span> {hero.experience}
            </div>
            <div className="badge">
              <span>🚀</span> {hero.availability}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-text-secondary text-lg leading-relaxed max-w-lg"
            variants={fadeUpVariants}
            custom={3}
          >
            {hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            variants={fadeUpVariants}
            custom={4}
          >
            {hero.ctaButtons.map((button, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Button
                  href={button.href}
                  variant={button.variant}
                  external={button.href.startsWith('http')}
                >
                  {button.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 pt-8 border-t border-accent-green/20"
            variants={fadeUpVariants}
            custom={5}
          >
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-green transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-green transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.728-2.004 1.431-.103.25-.129.599-.129.948v5.426h-3.555V9h3.555v1.346h.05c.504-.954 1.738-1.954 3.588-1.954 3.117 0 5.515 2.041 5.515 6.441v5.619zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
             <motion.a
               href={portfolioData.social.hackerrank}
                className="w-8 h-8  items-center justify-center bg-dark-700 rounded-lg hover:bg-accent-green/20 transition-colors"
                // whileHover={{ scale: 1.1, y: -4 }}
              >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
             <path fill='#fff' d="M541.9 192C527.4 167 349.5 64 320.5 64C291.5 64 113.6 166.8 99.2 192C84.8 217.2 84.7 422.8 99.2 448C113.7 473.2 291.6 576 320.5 576C349.4 576 527.3 473.1 541.8 448C556.3 422.9 556.3 217 541.8 192zM380.5 478.2C376.5 478.2 339.6 442.4 342.5 439.5C343.4 438.6 348.8 438 360 437.7C360 411.5 360.6 369.1 360.9 351.4C360.9 349.4 360.5 348 360.5 345.6L280.6 345.6C280.6 352.7 280.1 381.8 282 418.5C282.2 423 280.4 424.5 276.3 424.4C266.2 424.4 256 424.3 245.9 424.3C241.8 424.3 240 422.8 240.2 418.2C241.1 384.8 243.2 334.2 240 205.5L240 202.3C230.3 201.9 223.6 201.3 222.7 200.5C219.8 197.6 257.2 161.8 261.2 161.8C265.2 161.8 302.4 197.6 299.5 200.5C298.6 201.4 291.6 202 282.7 202.3L282.7 205.5C280.3 231.3 280.7 285.1 280.1 310.9L360.4 310.9C360.4 306.3 360.8 276.2 359.2 227.3C359.1 223.9 360.2 222.1 363.4 222.1C374.5 222 385.6 222 396.6 222C400.1 222 401.2 223.7 401.1 227.4C397.4 418.7 400.4 405.3 400.4 437.7C409.3 438.1 417.2 438.7 418.1 439.5C421 442.4 384.5 478.2 380.5 478.2L380.5 478.2z"/>
             </svg>
              </motion.a>
          </motion.div>
        </motion.div>

        {/* Right - Image & Floating Elements */}
        <motion.div
          className="relative h-96 lg:h-[500px] hidden lg:block"
          initial="hidden"
          animate="visible"
          variants={slideInRightVariants}
        >
          {/* Floating Tech Icons */}
          {/* react icon */}
          <motion.div
            className="absolute -top-10 -right-10 w-24 h-24 bg-dark-700 rounded-2xl flex items-center justify-center text-3xl border border-accent-green/20 backdrop-blur-md"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5.5, repeat: Infinity }}
          >
            <Image
              src="/images/react.png"
              alt="Tech Icon"
              width={48}
              height={48}
            />
          </motion.div>
          {/* next js icon */}
           <motion.div
            className="absolute bottom-40 right-20 w-24 h-24 bg-dark-700 rounded-2xl flex items-center justify-center text-3xl border border-accent-green/20 backdrop-blur-md"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <Image
              src="/images/Next.js.png"
              alt="Tech Icon"
              width={48}
              height={48}
            />
            
          </motion.div>
          {/* node js icon  */}
           <motion.div
            className="absolute top-20 left-20 w-24 h-24 bg-dark-700 rounded-2xl flex items-center justify-center text-3xl border border-accent-green/20 backdrop-blur-md"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Image
              src="/images/Node.js.png"
              alt="Tech Icon"
              width={48}
              height={48}
            />
          </motion.div>
{/* mongodb icon */}
          <motion.div
            className="absolute -bottom-10 left-10 w-24 h-24 bg-dark-700 rounded-2xl flex items-center justify-center text-3xl border border-accent-green/20 backdrop-blur-md"
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4.5, repeat: Infinity }}
          >
           <Image
              src="/images/MongoDB.png"
              alt="Tech Icon"
              width={48}
              height={48}
            />
          </motion.div>

          {/* Main Image Container */}
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glow Background */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-b from-accent-green/20 to-accent-green/5 blur-2xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Image */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-accent-green/30">
              <Image
                src="/images/vishalGupta.png"
                alt="Vishal Gupta"
                fill
                className="object-cover"
                priority
              />
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 to-transparent" />
            </div>
          </motion.div>

          {/* Animated Blurred Circles */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-accent-green/10 blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
