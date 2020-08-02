import Head from 'next/head'
import Shonk from '../components/shonk'
import Lemons from '../components/lemons'

const infobox = (title, para1, para2, para3) => {
	return (
		<div className="w-auto px-4 pb-10 mx-4 mt-10 text-lg text-white bg-gray-900 shadow-2xl lora md:mx-16 md:text-2xl md:px-20">
			<div className="block px-4 py-2 mb-8 font-sans text-2xl font-light text-center bg-gray-700 md:text-2xl md:inline-block md:-ml-10">
				{title}
			</div>
			<div className="leading-loose text-center">
				<p className="mb-10">{para1}</p>
				{para3 ? (
					<React.Fragment>
						<p className="mb-10">{para2}</p>
						<p>{para3}</p>
					</React.Fragment>
				) : (
					<p>{para2}</p>
				)}
			</div>
		</div>
	)
}

const sidePricing = (title) => {
	return <div className="py-3 mb-4 text-3xl bg-gray-400 rounded-tl-lg rounded-tr-lg lora">{title}</div>
}

export default function Home() {
	const [ vis, setVis ] = React.useState(false)
	const [ visTwo, setVisTwo ] = React.useState(false)
	const [ info, setInfo ] = React.useState(false)
	React.useEffect(() => {
		setInfo(true)
		setTimeout(() => {
			setInfo(false)
		}, 4000)
	}, [])
	React.useEffect(() => {
		setTimeout(() => {
			setVis(true)
		}, 2100)
	}, [])
	React.useEffect(() => {
		setTimeout(() => {
			setVisTwo(true)
		}, 100)
	}, [])
	return (
		<React.Fragment>
			<Head>
				<meta charSet="utf-8" />
				<meta name="description" content="Fan website dedicated to Hollywood Masterclass" />
				<title>Hollywood Masterclass with Shonk Lemons</title>
				<script data-goatcounter="https://masterclass.goatcounter.com/count" async src="//gc.zgo.at/count.js" />
			</Head>
			{info && (
				<div className="absolute top-0 left-auto flex justify-center w-full">
					<div className="w-auto p-4 mt-2 text-lg text-center text-white bg-blue-800 rounded-md">
						This is a fan website. It is not affiliated with the creators of Hollywood Masterclass.
					</div>
				</div>
			)}
			<div className="w-full h-auto bg-gray-800">
				<div className="w-full pt-4 text-xl font-light text-center text-gray-100 underline serif">
					<a href="http://chng.it/xLSSp4DbJS" target="_blank" rel="noopener noreferrer">
						Sign the petition to bring back Hollywood Masterclass
					</a>
				</div>

				<div className="flex flex-wrap justify-center w-full mt-10 md:mt-32">
					<div className="z-10 w-full mr-10 overflow-visible text-4xl leading-tight text-center text-yellow-100 uppercase md:mr-32 lato md:text-6xl">
						<p className="w-full tracking-widest mc">Hollywood</p>
						<p className="w-full tracking-wider mc">Masterclass</p>

						<div className="flex items-start w-64 mx-auto mt-4 text-2xl md:text-4xl md:mt-10">
							<span>By</span>
							<div className="inline-block w-48 h-32 ml-4">
								{visTwo && <Shonk />}
								{vis && <Lemons />}
							</div>
						</div>
					</div>
					<img
						src="/shonk.png"
						alt="Shonk Lemons"
						className="z-0 w-2/3 h-auto max-w-2xl ml-20 -mt-16 md:-mt-32 md:ml-84 md:w-1/2"
					/>
				</div>
			</div>

			<div className="container flex flex-col items-center max-w-6xl mx-auto">
				{infobox(
					'About Shonk Lemons',
					'A renaissance man in the truest sense of the term -- comedian, producer, actor, executive, humanitarian -- there is nothing, it seems, that Lemons cannot do.',
					'Off-screen, Lemons has become prominently involved in international charity projects.'
				)}

				<div className="w-full px-10 mx-auto my-24 text-lg italic font-normal leading-loose text-white md:w-3/4 md:text-2xl lora">
					<div className="py-10 pl-10 border-l-8 border-gray-800 hover:border-gray-700">
						<p className="mb-4">
							“Hollywood Masterclass is a beautiful showcase for the prickly comic genius of [Lemons].
						</p>
						<p className="mb-4">
							[Lemons] brings in ringers like Hayes Davenport and Paul Scheer as guest lecturers to
							further&nbsp;
							<span className="line-through">confuse and frustrate</span> [inspire his student] with
							staggeringly <span className="line-through">un</span>helpful advice about money and head
							shots and improvisation.”
						</p>
						<p className="text-base not-italic md:text-xl">- Vulture Magazine</p>
					</div>
				</div>

				{infobox(
					'About the class',
					'Hollywood Masterclass is a daring journey through the human psyche and beyond.',
					'Learn to master auditions, analyze scripts, and find the truth in every role you play.',
					'In this class, you’ll learn Shonk Lemon’s rules of storytelling, dialogue, character development, and what makes a script actually sell.'
				)}

				<div className="w-full px-10 mx-auto my-24 text-lg italic font-normal leading-loose text-white md:w-3/4 md:text-2xl lora">
					<div className="py-10 pl-10 border-l-8 border-gray-800 hover:border-gray-700">
						<p className="mb-4">“People other than me might have learned something.”</p>
						<p className="mb-4">“The intention and obstacle stuff that you brought up. It was helpful.”</p>
						<p className="mb-4">
							“Some of the basics that you brought up in the course are in there, so yeah, that's great.”
						</p>
						<p className="mb-4">
							“You know what? I'll sign up for your next one. I'll pay for this one. Okay.”
						</p>
						<p className="text-base not-italic md:text-xl">- Bang Rodgeman, former student</p>
					</div>
				</div>

				<div className="flex flex-col items-center justify-center w-full mx-auto my-20 text-gray-800 md:flex-row md:w-5/6">
					<div className="w-2/3 text-center bg-gray-300 rounded-lg shadow-lg h-76 md:w-1/3">
						{sidePricing('Trial')}
						<div className="flex flex-wrap items-start justify-center w-full h-56 px-3 text-left">
							<div className="flex w-full">
								<div className="w-1/6 font-sans text-lg font-extrabold text-center text-green-400">
									&#x2713;
								</div>
								<div className="w-5/6 mb-2">Listen to a single episode of Hollywood Masterclass.</div>
							</div>
							<div className="flex w-full">
								<div className="w-1/6 font-sans text-lg font-extrabold text-center text-green-400">
									&#x2713;
								</div>
								<p className="w-5/6 mb-2">Free of charge.</p>
							</div>
							<button className="self-end w-2/3 p-2 mb-4 text-white bg-blue-400 rounded-md hover:bg-blue-700">
								<a
									href="https://www.earwolf.com/episode/hollywood-masterclass-ep1-the-role-of-the-artist/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Listen here
								</a>
							</button>
						</div>
					</div>

					<div className="w-3/4 h-auto mx-6 my-6 text-center bg-gray-300 rounded-lg shadow-lg md:my-0 md:w-2/5">
						<div className="py-3 mb-4 text-3xl bg-gray-400 rounded-tl-lg rounded-tr-lg lora">
							Personal<br />Masterclass
						</div>
						<div className="flex flex-wrap items-start justify-center w-full h-auto pl-4 pr-8 text-left md:py-6">
							<div className="w-1/6 text-center">
								<div className="font-sans text-lg font-extrabold text-green-400">&#x2713;</div>
							</div>
							<p className="w-5/6 mb-6">
								Shonk sends the elevator back down to teach you everything you need to succeed in
								Hollywood.
							</p>
							<div className="w-1/6 text-center">
								<div className="font-sans text-lg font-extrabold text-green-400">&#x2713;</div>
							</div>
							<p className="w-5/6 mb-6">Learn what is art, what is a artist.</p>
							<div className="w-1/6 text-center">
								<div className="font-sans text-lg font-extrabold text-green-400">&#x2713;</div>
							</div>
							<div className="w-5/6 mb-6">
								First one is free, but if you want to take another it will cost double.
							</div>
						</div>
						<div className="self-end w-full px-6 mb-6 italic text-center">
							Contact Shonk's agent for info.
						</div>
					</div>

					<div className="w-2/3 text-center bg-gray-300 rounded-lg shadow-lg h-76 md:w-1/3">
						{sidePricing('Premium')}
						<div className="flex flex-wrap items-start justify-center w-full h-56 px-3 text-left">
							<div className="w-1/6 text-center">
								<div className="font-sans text-lg font-extrabold text-green-400">&#x2713;</div>
							</div>
							<div className="w-5/6 pr-2 mb-2">
								Listen to the first two seasons of Hollywood Masterclass.
							</div>
							<div className="w-1/6 text-center">
								<div className="font-sans text-lg font-extrabold text-green-400">&#x2713;</div>
							</div>
							<p className="w-5/6 pr-2 mb-2">Use the beloved Stitcher App.</p>
							<button className="self-end w-3/4 px-4 py-2 mb-4 text-white bg-blue-400 rounded-md hover:bg-blue-700">
								<a
									href="https://www.stitcherpremium.com/masterclass"
									target="_blank"
									rel="noopener noreferrer"
								>
									Subscribe
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="w-screen h-auto px-10 py-4 text-center text-gray-600 bg-gray-800">
				<p>
					This website is not affiliated with Sean Clements, Ben Rodgers, Midroll, Earwolf or Stitcher. No
					copyright infringement intented.
				</p>
				<p>
					Site created by Marten (<a
						className="border-b-2 border-gray-600 border-dotted"
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/martenfrisk"
					>
						reach me on GitHub
					</a>)
				</p>
			</div>
		</React.Fragment>
	)
}
