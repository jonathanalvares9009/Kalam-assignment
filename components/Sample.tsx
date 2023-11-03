import Image from "next/image"

type SampleProps = {
  src: string
  alt: string
}

const Sample = ({src, alt}: SampleProps) => {
  return (
    <figure className="w-full">
        <Image src={src} alt={alt} width={80} height={80} className="w-full rounded-lg" />
    </figure>
  )
}

export default Sample