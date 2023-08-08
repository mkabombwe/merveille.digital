export default function HomeHeader() {
	return (
		<header className='container flex flex-row items-center justify-between py-2 text-black'>
			<a href='/' className='font-[600] font-circularstd-book no-underline text-[2rem]'>
				merveille
			</a>
			<a href='mailto:mkabombwe@gmail.com' className="transition-all border-b-2 border-white border-solid hover:border-b-2 hover:border-black">
				contact
			</a>
		</header>
	)
}
