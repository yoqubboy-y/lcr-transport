import Image from "next/image"

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="LCR Transport Logo"
      width={33}
      height={33}
      className="h-8 w-8"
    />
  )
}
