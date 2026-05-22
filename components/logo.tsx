import Image from "next/image"

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="LCR Transport Logo"
      width={64}
      height={64}
      className="h-16 w-16"
    />
  )
}
