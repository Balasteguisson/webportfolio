import Image from 'next/image'

export default function DataCard(props) {
  return (
    <div className='container'>
      <div id="textDiv">
        <h1 >{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p>{props.text}</p>
      </div>
      <div className='portraitContainer'>
        <Image
          alt={props.image.alt}
          src={props.image.src}
          width={props.image.width}
          height={props.image.height}
        />
      </div>
    </div>
  )
}
