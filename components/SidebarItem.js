import Image from 'next/image'

const SidebarItem = ({ icon, height, title }) => {
  return (
    <div className="cursor-pointer h-[70px] flex flex-col justify-center space-y-2 hover:border-l-4 hover:bg-sp-black  hover:border-sp-green border-transparent border-l-4 transition duration-300 ease-out">
      <Image src={icon} layout="responsive" objectFit="contain" height={height} />
      <nav className="">{title}</nav>
    </div>
  )
}

export default SidebarItem
