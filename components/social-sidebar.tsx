import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function SocialSidebar() {
  return (
    <div className="social-sidebar hidden md:block">
      <Link href="#" className="bg-[#3b5998] hover:bg-[#3b5998]/80">
        <Facebook size={20} />
      </Link>
      <Link href="#" className="bg-[#E1306C] hover:bg-[#E1306C]/80">
        <Instagram size={20} />
      </Link>
      <Link href="#" className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/80">
        <Twitter size={20} />
      </Link>
      <Link href="#" className="bg-[#0077B5] hover:bg-[#0077B5]/80">
        <Linkedin size={20} />
      </Link>
    </div>
  )
}
