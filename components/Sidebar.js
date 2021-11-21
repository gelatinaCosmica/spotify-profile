import Logo from '../public/spotify.svg'
import Image from 'next/image'
import ProfileIcon from '../public/sidebar/profile.svg'
import MicIcon from '../public/sidebar/mic.svg'
import NoteIcon from '../public/sidebar/note.svg'
import RecentIcon from '../public/sidebar/recent.svg'
import PlaylistIcon from '../public/sidebar/playlist.svg'
import GithubIcon from '../public/sidebar/github.svg'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
  return (
    <header className="hidden sticky z-50 md:inline-flex bg-sp-sidebar-color shadow-xl w-24 h-screen flex-col text-white text-xs">
      {/* TOP */}
      <div className="relative h-12 block items-center cursor-pointer my-7">
        <Image
          src={Logo}
          layout="fill"
          objectFit="contain"
          objectPosition="top"
        />
      </div >

      {/* MIDDLE */}
      <div className="text-center flex flex-col flex-grow justify-center">
        <SidebarItem height="15" icon={ProfileIcon} title="Profile" />
        <SidebarItem height="7" icon={MicIcon} title="Top Artists" />
        <SidebarItem height="110" icon={NoteIcon} title="Top Tracks" />
        <SidebarItem height="14" icon={RecentIcon} title="Recent" />
        <SidebarItem height="120" icon={PlaylistIcon} title="Playlists" />
      </div >

      {/* BOTTOM */}
      <div className="relative flex items-center h-6 cursor-pointer my-6">
        < Image
          src={GithubIcon}
          layout="fill"
          objectFit="contain"
          objectPosition="bottom"
        />
      </div >
    </header >
  )
}

export default Sidebar