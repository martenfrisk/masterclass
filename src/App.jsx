import React from 'react'
import './App.css'
import Shonk from './assets/shonk-final.png'
import { GreenCheck } from './assets/icons'

const infobox = (title, para1, para2, para3) => {
	return (
		<div className="bg-gray-800 hover:border-gray-700 border-l-8 border-gray-800 lora w-full mx-16 text-2xl text-white mt-56 pb-10 px-20 shadow-2xl rounded-md my-24">
			<div className="uppercase lato font-light bg-gray-700 text-3xl inline-block py-2 px-4 -ml-10 mb-8">
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
	return <div className="lora text-3xl bg-gray-400 py-2 mb-4">{title}</div>
}

function App() {
	return (
		<div className="container max-w-6xl mx-auto flex flex-col items-center">
			<div className="underline serif text-gray-100 mt-10 text-xl font-light w-full text-center">
				<a href="http://chng.it/xLSSp4DbJS" target="_blank" rel="noopener noreferrer">
					Sign the petition to bring back Hollywood Masterclass
				</a>
			</div>

			<div className="flex flex-row mt-10 md:mt-32 w-full ml-4 mb-40">
				<div className="uppercase w-2/3 md:w-1/2 lato leading-tight z-10 mr-10 md:mr-40 text-3xl md:text-6xl text-yellow-100 text-center">
					<p className="tracking-widest">Hollywood</p>
					<p className="tracking-wider">Masterclass</p>

					<p className="text-2xl md:text-4xl mt-4 md:mt-10 w-full whitespace-no-wrap">
						By<span className="ml-2 md:ml-6 text-4xl md:text-6xl yourgrace normal-case">Shonk Lemons</span>
					</p>
				</div>
				<img
					src={Shonk}
					alt="Shonk Lemons"
					className="mr-2 max-w-4xl w-1/2 md:mr-32 mt-32 md:mt-40 absolute top-0 right-0 md:w-1/2 h-auto z-0"
				/>
			</div>

			{infobox(
				'About Shonk Lemons',
				'A renaissance man in the truest sense of the term -- comedian, producer, actor, executive, humanitarian, and, most recently, father -- there is nothing, it seems, that Lemons cannot do.',
				'Off-screen, Lemons has become prominently involved in international charity projects.'
			)}

			<div className="w-3/4 leading-loose mt-20 -mb-10 text-white text-2xl px-10 lora italic font-normal">
				<div className="border-l-8 border-gray-800 hover:border-gray-700 pl-10">
					<p className="mb-4">
						“Hollywood Masterclass is a beautiful showcase for the prickly comic genius of [Lemons] (...).
					</p>
					<p className="mb-4">
						[Lemons] brings in ringers like Hayes Davenport and Paul Scheer as guest lecturers to further
						confuse and frustrate [inspire his student] with staggeringly unhelpful advice about money and
						head shots and improvisation.”
					</p>
					<p className="not-italic text-xl">- Vulture Magazine</p>
				</div>
			</div>

			{infobox(
				'About the class',
				'Hollywood Masterclass is a daring journey through the human psyche and beyond.',
				'Learn to master auditions, analyze scripts, and find the truth in every role you play.',
				'In this class, you’ll learn Shonk Lemon’s rules of storytelling, dialogue, character development, and what makes a script actually sell.'
			)}

			<div className="w-5/6 flex text-gray-800 justify-center items-center mb-20">
				<div className="w-1/4 text-center bg-gray-300 rounded-lg">
					{sidePricing('Trial')}
					<div className="px-4 text-left flex flex-wrap w-full">
						<div className="w-1/6 text-center">
							<div className="inline-block mt-3 w-6 h-auto">
								<GreenCheck />
							</div>
						</div>
						<div className="mb-2 w-5/6">Listen to a single episode of Hollywood Masterclass.</div>
						<div className="w-1/6 text-center">
							<div className="inline-block mt-px w-6 h-auto">
								<GreenCheck />
							</div>
						</div>
						<p className="mb-2 w-5/6">Free of charge.</p>
					</div>
					<button className="rounded-md bg-blue-400 my-4 px-4 py-2 text-white hover:bg-blue-700">
						Listen here
					</button>
				</div>
				<div className="w-1/3 text-center bg-gray-300 rounded-lg mx-2 h-64">
					{sidePricing('Personal Masterclass')}
				</div>
				<div className="w-1/4 text-center bg-gray-300 rounded-lg h-56">{sidePricing('Premium')}</div>
			</div>
		</div>
	)
}

export default App
