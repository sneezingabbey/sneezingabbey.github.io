import Link from "next/link";
import { FaTwitter, FaGithub, FaSteam } from "react-icons/fa";
import Image from "next/image";

// Assign AniList icon URL to a variable
const aniListIconUrl = "https://anilist.co/img/icons/icon.svg";

export default function SocialsPage() {
  return (
    <div className="space-x-8 mt-10 flex items-center">
      {/* GitHub Icon Link */}
      <Link
        href="https://github.com/sneezingabbey"
        aria-label="Abbey's GitHub Profile"
        target="_blank"
        className="text-gray-300 hover:text-white"
      >
        <FaGithub size={64} alt="GitHub Icon" rel="noopener noreferrer" />
      </Link>

      {/* Twitter Icon Link */}
      <a
        href="https://twitter.com/sneezingabbey"
        aria-label="Abbey's Twitter Profile"
        target="_blank"
        className="text-gray-300 hover:text-white"
        rel="noopener noreferrer"
      >
        <FaTwitter size={64} alt="Twitter Icon" />
      </a>

      {/* Steam Icon Link */}
      <a
        href="https://steamcommunity.com/profiles/76561198825851137/"
        aria-label="Abbey's Steam Profile"
        target="_blank"
        className="text-gray-300 hover:text-white"
        rel="noopener noreferrer"
      >
        <FaSteam size={64} alt="Steam Icon" />
      </a>

      {/* AniList Icon Link */}
      <a
        href="https://anilist.co/user/abbeyq/"
        aria-label="Abbey's AniList Profile"
        target="_blank"
        className="text-gray-300 hover:text-white"
        rel="noopener noreferrer"
      >
        <Image
          src={aniListIconUrl}
          alt="AniList Icon"
          className="w-16 h-16 grayscale hover:grayscale-0"
          width={100}
          height={100}
        />
      </a>
    </div>
  );
}

