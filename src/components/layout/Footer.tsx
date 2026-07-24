import Link from "next/link";
import { Mail } from "lucide-react";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-background/50 backdrop-blur-sm mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <Link href="/" className="flex items-center space-x-1 group mb-2">
            <span className="font-bold text-xl tracking-tight text-white">
              Debugger
            </span>
            <span className="font-bold text-xl tracking-tight text-primary">
              DUDE
            </span>
            <span className="font-bold text-xl tracking-tight text-primary opacity-80 group-hover:opacity-100 transition-opacity">
              {`</>`}
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            {siteConfig.description.substring(0, 31)}...
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <Link href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
            <FaYoutube className="w-5 h-5" />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
            <FaGithub className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href={`mailto:${siteConfig.links.email}`} className="text-muted-foreground hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center border-t border-border/20">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
