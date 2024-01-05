import TextDisplayer from "@/components/textDisplayer"

export default function AboutMe () {
    let paragraphs = [
      {
        key: 1,
        text: "¡Hola! I'm Guillermo, born in August 2000 in Spain. My journey unfolds against the backdrop of the diverse landscapes of this beautiful country, as I spent my formative years between the picturesque north center and the sun-soaked Mediterranean region."
      },
      {
        key: 2,
        text: "My love affair with technology began early on, and it has only deepened over the years. From the marvels of biomedical engineering to the ever-evolving world of programming and app design, I'm captivated by the possibilities technology brings to our lives."
      },
      {
        key: 3,
        text: 'Away from the digital world, I love the thrill of competition and camaraderie of team sports. I find joy in the strategic and mental approach of sports, but for my free time, I choose lifting, it gives me that feeling of continuous improvement and autonomy.'
      },
      {
        key: 4,
        text: "Academically, I achieved a significant milestone by graduating in Biomedical Engineering at the age of 22. Eager to deepen my knowledge, I pursued a master's degree, completing it at the age of 23. These academic pursuits have not only shaped my professional trajectory but have also fueled my passion for pushing boundaries and embracing challenges."
      },
      {
        key: 5,
        text: "While my journey has been marked by academic achievements and a profound interest in technology, there is an uncharted territory I am eager to explore—entrepreneurship. While my current focus lies in refining my skills in biomedical engineering, web, and app design, the prospect of entrepreneurship beckons me. The idea of creating something from the ground up, navigating the challenges of business, and contributing to the innovation ecosystem resonates with a passion that is still in its infancy. As I continue to grow and evolve, I look forward to nurturing this budding interest, exploring the dynamic world of entrepreneurship, and uncovering the possibilities it holds for my future endeavors."
      },
      {
        key: 6,
        text: "Join me as I blend my technological prowess with a zest for life, striving to make meaningful contributions to both the healthcare and digital landscapes. ¡Vamos! "
      }
    ]
    return (
        <div>
            <TextDisplayer text ={paragraphs}/>
        </div>
    )
}