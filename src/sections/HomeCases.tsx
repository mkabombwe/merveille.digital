// ----------------------------------------------------------------------

const cases = [
	{
		name: 'Frederik Hector',
		img: '/images/fh.png',
		href: 'https://www.frederikhector.com'
	},
	{
		name: 'Jabbie Jewels Sweden',
		img: '/images/jjs.png',
		href: 'https://www.jabbiejewelssweden.com'
	},
	{
		name: 'Lars Møller',
		img: '/images/lm.png',
		href: 'https://www.lars-moller.dk'
	},
	{
		name: 'Scandin-Africa',
		img: '/images/sa.png',
		href: 'https://www.scandin-africa.com'
	},
	{
		name: 'Café Baco',
		img: '/images/baco.png',
		href: 'https://www.cafebaco.dk'
	},
	{
		name: 'Bergur Nielsen',
		img: '/images/bgn.png',
		href: 'http://bergurnielsen.com'
	}
]

// ----------------------------------------------------------------------
type CaseProps = {
	name: string
	img: string
	href: string
}
function Case({ name, img, href }: CaseProps) {
	return (
		<a href={href}>
			<div
				className='no-underline bg-center bg-no-repeat bg-cover'
				style={{ backgroundImage: `url(${img})` }}
			>
				<div className='w-full h-full bg-[rgb(0,0,0,0.75)] transition-all hover:opacity-0'>
					<div className='min-h-[400px] text-white flex items-center justify-center font-circularstd-book uppercase text-center text-xl'>
						{name}
					</div>
				</div>
			</div>
		</a>
	)
}
// ----------------------------------------------------------------------

export default function HomeCases() {
	return (
		<div className='bg-[#F5F5F5] py-20'>
			<div className='container'>
				<h3 className='mb-4 text-3xl font-[400]'>Previous projetcs</h3>
				<div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
					{cases.map((c, index) => (
						<Case key={index} {...c} />
					))}
				</div>
			</div>
		</div>
	)
}
