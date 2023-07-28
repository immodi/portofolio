import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0A192F] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] px-4">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                </div>
            </div>
            <div className="max-w-[600px] px-4">
                <p className="justify-end">
                Hi!, My Name is <span className="font-bold">Ahmed Yasser Bauomy</span> or <span className="font-bold">Ahmed</span> for
                short. But you can call me anything.
                <br></br>
                <br></br>
                I grew up in <a className="underline" href="https://www.google.com/search?q=Bogor">Egypt</a>. I was
                previously working as a Software Engineer (Front-End Web Developer) at <span className="underline">Molla Egypt</span> doing some internal projects But Now I'm a Computer Science Student at <a className="underline" href="https://hti.edu.eg/">HTI University.</a>
                <br></br>
                <br></br>
                I'm really interested in tech related stuff. Right now I'm exploring and learning in web development using C# and Javascript.
                Right now I am focused on learning Javascript Frameworks like React and NodeJS
                I am passionate about building excellent software that improves the lives of those around me.
                I do other things like playing chess or swimming.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About