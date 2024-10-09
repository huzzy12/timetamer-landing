'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsClient(true)
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log("Auto-play was prevented:", error))
    }
  }, [])

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  }

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 }
  }

  return (
    <div className="min-h-screen bg-[#1A2A40] text-white">
      {/* Header */}
      <motion.header 
        className="p-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold text-[#FF6B35]">TimeTamer</h1>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="px-4 py-12 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          You Think You're Productive.<br />But Are You Really?
        </motion.h2>
        <motion.p 
          className="text-xl mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Discover your time leeches with TimeTamer
        </motion.p>
        <Link href="https://timetamer.created.app/account/signup?callbackUrl=/">
          <motion.button 
            className="bg-[#FF6B35] text-white font-bold py-3 px-8 rounded-full text-xl hover:bg-opacity-90 transition duration-300"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            Start Taming Time Now
          </motion.button>
        </Link>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section 
        className="px-4 py-8 flex justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="relative bg-white text-[#1A2A40] p-4 rounded-lg max-w-md">
          <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center text-white text-2xl">"</div>
          <p className="text-lg font-bold mb-2">Oh shit that's dope</p>
          <div className="flex items-center">
            <Image
              src="/testimonial-user.jpg"
              alt="Aaron Will"
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <p className="text-sm">Aaron Will</p>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        className="px-4 py-8 max-w-2xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <p className="mb-4">You're constantly busy. Your to-do list never ends. You're always racing against the clock.</p>
        <p className="mb-4">And yet, somehow, you never seem to get ahead. Sound familiar?</p>
        <p className="mb-4">Here's the truth: Being busy isn't the same as being productive.</p>
        <p className="mb-8">You've tried it all:</p>
        <ul className="list-disc list-inside mb-8">
          <li>Time blocking</li>
          <li>To-do list apps</li>
          <li>Pomodoro technique</li>
          <li>Even meditation to "increase focus"</li>
        </ul>
        <p className="mb-4">But nothing sticks. You're still overwhelmed, still behind, still stressed.</p>
        <p className="mb-4">Why? Because you're treating the symptoms, not the cause.</p>
        <p className="mb-8">The real problem isn't that you need to work harder or faster. It's that you don't truly understand where your time is going.</p>
        <h3 className="text-2xl font-bold mb-4">Think about it:</h3>
        <ul className="list-disc list-inside mb-8">
          <li>Do you know exactly how many hours you spent in meetings last week?</li>
          <li>Can you pinpoint how much time you wasted on social media?</li>
          <li>Do you realize how many hours slip away on "quick" tasks that aren't really priorities?</li>
        </ul>
        <p className="mb-4">If you're like most of us, the answer is NO.</p>
        <p className="mb-8">And that's the root cause of your productivity problem.</p>
        <p className="text-2xl font-bold mb-4">You can't optimize what you can't measure.</p>
        <p className="mb-4">All those productivity techniques you've tried? They're built on guesswork.</p>
        <p className="mb-4">You're trying to fix a problem you can't even see.</p>
        <p className="mb-8">It's like trying to lose weight without ever stepping on a scale or tracking what you eat.</p>
        <h3 className="text-4xl font-bold mb-4">Introducing TimeTamer: Your AI-Powered Time Auditor</h3>
        <p className="mb-8">TimeTamer doesn't just help you manage your time. It reveals where your time is actually going.</p>
      </motion.section>

      {/* Video Section */}
      <motion.section 
        className="px-4 py-8 bg-[#1A2A40]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h3 className="text-3xl font-bold mb-8 text-center">See TimeTamer in Action:</h3>
        <div className="max-w-4xl mx-auto bg-[#1A2A40] p-4 rounded-lg">
          {isClient && (
            <video 
              ref={videoRef} 
              controls 
              className="w-full rounded-lg"
              playsInline
              muted
              loop
            >
              <source src="/demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="px-28 py-2 bg-[#1A2A40]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h3 className="text-4xl font-bold mb-8 text-center">Here's how TimeTamer fixes the root cause:</h3>
        <div className="max-w-4xl mx-auto">
          <ol className="list-decimal list-inside space-y-4">
            <li><strong>Visualize Your Week:</strong> Get a clear, hour-by-hour breakdown of your entire week. No more guessing.</li>
            <li><strong>Optimize Your Schedule:</strong> Use AI-generated insights to reallocate your time more effectively.</li>
            <li><strong>Increase Accountability:</strong> Set realistic goals with a 24-hour daily limit and stay accountable.</li>
            <li><strong>Identify Time Sinks:</strong> Discover which activities are ​eating up your precious hours.</li>
            <li><strong>Stay Flexible:</strong> Easily adjust your tasks as life changes, ​keeping you adaptable.</li>
            <li><strong>Track Progress:</strong> See how your time usage improves week over week.</li>
          </ol>
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section 
        className="px-28 py-6 bg-[#1A2A40]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h3 className="text-3xl font-bold mb-8 text-center">The Result? True Productivity Breakthrough</h3>
        <div className="max-w-4xl mx-auto">
          <p className="mb-4">Imagine saving 10 hours every week.</p>
          <p className="mb-8">At just $20/hour, that's $9,600 a year. (And let's be honest, your time is worth way more.)</p>
          <p className="mb-4">But it's not just about the money. It's about:</p>
          <ul className="list-disc list-inside mb-8">
            <li>Finally having time for that side project you've been dreaming about</li>
            <li>Being present with your family without the constant hum of work stress</li>
            <li>Achieving your goals without burning out</li>
          </ul>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="px-4 py-2 text-center bg-[#1A2A40]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h3 className="text-3xl font-bold mb-8">Ready to uncover where your time really goes?</h3>

        <Link href="https://timetamer.created.app/account/signup?callbackUrl=/">
          <motion.button 
            className="bg-[#FF6B35] text-white font-bold py-4 px-8 rounded-full text-xl hover:bg-opacity-90 transition duration-300"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            START FOR FREE!
          </motion.button>
        </Link>
        <p className="mt-8 max-w-2xl mx-auto">
          P.S. TimeTamer is currently FREE. But with feature requests flooding in, a premium version isn't far off. Don't miss your chance to get in on the ground floor and start printing money with your reclaimed time.
        </p>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="px-4 py-8 text-center bg-[#1A2A40]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="mb-4">
          <Image
            src="/founder-image.jpg"
            alt="M. Huzaifa Madni"
            width={100}
            height={100}
            className="rounded-full mx-auto mb-2"
          />
          <p className="font-bold">M. Huzaifa Madni</p>
          <p>Founder @TimeTamer</p>
        </div>
        <p>Contact: huzaifainfluences@gmail.com</p>
      </motion.footer>
    </div>
  )
}