import { XIcon } from "./icons/x-icon"
import { InstagramIcon } from "./icons/instagram-icon"
import { GithubIcon } from "./icons/github-icon"
import { LinkedInIcon } from "./icons/linkedin-icon"
import { SocialIcon } from "./social-icon"
import { DiscordIcon } from "./icons/discord-icon"

export function Footer() {
  return (
    <footer className="w-full py-12">
      <div className="flex justify-center space-x-6">
        <SocialIcon
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          icon={<GithubIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (formerly Twitter)"
          icon={<XIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          icon={<InstagramIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          icon={<LinkedInIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="discord"
          icon={<DiscordIcon className="w-6 h-6" />}
        />
      </div>
    </footer>
  )
}
