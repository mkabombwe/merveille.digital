export default function HomeFooter() {
	return (
		<footer className='container flex flex-row items-center justify-between py-2 text-black'>
			<a href='/' className='font-[600] font-circularstd-book no-underline text-[2rem]'>
				merveille
			</a>
			<div className="flex gap-4">
				<a
					href='https://www.linkedin.com/in/merveille-kabombwe-a94301b6/'
					className='transition-all border-b-2 border-white border-solid hover:border-b-2 hover:border-black'
				>
					linkedin
				</a>
				<a
					href='https://github.com/mkabombwe'
					className='transition-all border-b-2 border-white border-solid hover:border-b-2 hover:border-black'
				>
					github
				</a>
			</div>
		</footer>
	)
}
