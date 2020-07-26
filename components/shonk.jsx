export default function Shonk() {
	return (
		<div className="w-40 h-auto">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.5 15.8" x="0px" y="0px">
				<defs />
				<path
					className="s2"
					d="M12.2,0.5C12,5.2,11.8,10,10.3,14.4c0.5-1.1,1.1-2.2,1.8-3.1s1.7-1.7,2.9-2c0.2,0,0.4-0.1,0.6,0
	c0.1,0.1,0.2,0.2,0.3,0.3c0.9,1.7,0.9,3.8,0.8,5.7"
				/>

				<path
					className="s1"
					d="M6.2,0.8C4.7-0.2,2.6-0.1,1.1,1c-0.5,0.4-1,0.9-1,1.6c0,0.4,0.2,0.7,0.4,1c1.9,2.9,5.1,4.7,7.9,6.7
	c0.2,0.1,0.4,0.3,0.5,0.5c0.1,0.3,0.1,0.6,0,0.8c-0.4,1-1.6,1.3-2.6,1.5c-1.7,0.3-3.3,0.7-5,1"
				/>

				<path
					className="s3"
					d="M19.1,8.9c-0.3,0.3-0.6,0.7-0.6,1.1c-0.1,0.5,0.1,1,0.3,1.5c0.4,0.7,1.1,1.3,1.9,1.6c0.3,0.1,0.6,0.2,0.9,0.2
	c0.5,0,1-0.3,1.3-0.7c0.4-0.4,0.6-0.8,0.9-1.3c0.2-0.3,0.3-0.5,0.3-0.9c0-0.6-0.5-1.1-1-1.5C22,7.9,20.2,7.7,19.1,8.9z"
				/>
				<path
					className="s4"
					d="M27,8.4c-0.2,2.5-0.7,4.9-1.3,7.3c0.3-1.4,0.9-2.8,1.7-4.1c0.6-1,1.5-1.9,2.7-1.9c0.1,0,0.2,0,0.2,0
	c0.1,0.1,0.1,0.2,0.2,0.3c0.6,1.3,0.8,2.9,0.5,4.3"
				/>
				<path className="s5" d="M37.7,3.2c-0.8,4.1-1.8,8.2-3.1,12.2" />
				<path
					className="s6"
					d="M40.5,9.6c-1,0.3-2,0.7-2.9,1.1c-0.9,0.4-1.8,0.9-2.8,1c1.1,0.6,2.1,1.3,3.2,1.9c0.5,0.3,1.1,0.6,1.5,1.1"
				/>
			</svg>

			<style jsx>{`
        svg {
          transform: rotate(-15deg);
        }

				path,
				line {
					fill: none;
					stroke: white;
					stroke-width: 0.5;
					stroke-linecap: round;
					stroke-linejoin: round;
					stroke-miterlimit: 10;
				}

				.s1 {
					stroke-dasharray: 30;
					animation: 2s write1 0s 1 ease-in;
				}

				.s2 {
					stroke-dasharray: 35;
					animation: 2s write2 0s 1 linear;
				}
				.s3 {
					stroke-dasharray: 20;
					animation: 2s write3 0s 1 linear;
				}

				.s4 {
					stroke-dasharray: 30;
					animation: 2s write4 0s 1 linear;
				}

				.s5 {
					stroke-dasharray: 15;
					animation: 2s write5 0s 1 linear;
				}

				.s6 {
					stroke-dasharray: 15;
					animation: 2s write6 0s 1 linear;
				}

				@keyframes write1 {
					0% {
						stroke-dashoffset: 30;
					}
					10% {
						stroke-dashoffset: 0;
					}
				}

				@keyframes write2 {
					0%,
					10% {
						stroke-dashoffset: 35;
					}
					25% {
						stroke-dashoffset: 0;
					}
				}

				@keyframes write3 {
					0%,
					25% {
						stroke-dashoffset: 20;
					}
					50% {
						stroke-dashoffset: 0;
					}
				}

				@keyframes write4 {
					0%,
					50% {
						stroke-dashoffset: 30;
					}
					65% {
						stroke-dashoffset: 0;
					}
				}

				@keyframes write5 {
					0%,
					65% {
						stroke-dashoffset: 15;
					}
					80% {
						stroke-dashoffset: 0;
					}
				}

				@keyframes write6 {
					0%,
					80% {
						stroke-dashoffset: 15;
					}
					100% {
						stroke-dashoffset: 0;
					}
				}
			`}</style>
		</div>
	)
}
