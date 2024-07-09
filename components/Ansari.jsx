import React from 'react'

const Ansari = () => {
  return (
    <div>
    <div className="text-white bg-black  flex flex-col items-center gap-8 py-4 px-10">
      <h1 className='text-center font-bold text-4xl md:text-5xl bg-gradient-to-b from-purple-400  to-black text-transparent bg-clip-text'>
          Ansari Agency

      </h1>
      <div className="font-bold text-xl text-center">
        We are creative digital agency
      </div>
      <div className="text-center">
        At our digital agency, we blend creativity and expertise to craft
        bespoke digital solutions tailored to your needs. With a passion for
        innovation, we&apos;re dedicated to delivering exceptional experiences
        that captivate audiences and drive results. From web design and
        development to digital marketing and branding, our talented team is
        committed to exceeding expectations and helping your business thrive
        in the digital landscape. Collaborate with us and let&apos;s bring your
        vision to life with creativity, precision, and ingenuity.
      </div>
      <div>
        <button className="text-white border-2 border-purple-500 bg-gradient-to-tl from-purple-500 to-black hover:from-black hover:to-black transition ease-in-out duration-300 rounded-xl px-4 py-2 hover:text-purple-500">
          Let&apos;s Talk
        </button>
      </div>
    </div>
  </div>
  )
}

export default Ansari