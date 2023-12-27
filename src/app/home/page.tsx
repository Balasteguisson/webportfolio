export default function Aboutme () {
    let presentacion = `Welcome to my digital space! Armed with both a college and master's degree in biomedical engineering, I am deeply passionate about leveraging technology for innovative solutions. While my roots are in biomedical engineering, my current emphasis is on refining my expertise in web and app design, along with programming. I am on a continuous journey to perfect these skills, driven by a commitment to delivering seamless and user-friendly experiences. Join me as I navigate the convergence of biomedical engineering and digital innovation, working towards creating meaningful and impactful solutions for the future.`

    return (
        <div className="aboutmeContainer">
            <div className="textContainer">
                <p>{presentacion}</p>
            </div>
            <div className="portraitContainer">Retrato</div>
        </div>
    )
}