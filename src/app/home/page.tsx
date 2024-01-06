import Image from 'next/image';
import '@/styles/intro.css'


export default function Aboutme () {
    let presentacion = `Welcome to my digital space! Armed with both a college and master's degree in biomedical engineering, I am deeply passionate about leveraging technology for innovative solutions. While my roots are in biomedical engineering, my current emphasis is on refining my expertise in web and app design, along with programming. I am on a continuous journey to perfect these skills, driven by a commitment to delivering seamless and user-friendly experiences. Join me as I navigate the convergence of biomedical engineering and digital innovation, working towards creating meaningful and impactful solutions for the future.`

    return (
        <div className="aboutmeContainer">
            <div className="textContainer">
                <h1>Hi, I'm Guillermo Balastegui</h1>
                <h2>Biomedical Engineer</h2>
                <p>{presentacion}</p>
            </div>
            <div className="portraitContainer">
                <Image
                    src="/portrait3.png"
                    alt="Guillermo's portrait."
                    width={500}
                    height={500}
                />
            </div>
        </div>
    )
}