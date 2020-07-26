export default function Lemons() {
	return (
		<div className="w-40 h-auto">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.5 15.8" x="0px" y="0px">
				<defs />

				<path
					className="s1"
					d="M2.5,0C2.2,0.9,2,1.9,1.7,2.8C1.6,3.4,1.4,4,1.3,4.7C1.2,5.3,1.2,6,1,6.6C0.9,7.2,0.6,7.7,0.2,8.2
	C2.2,8.1,4.1,8.2,6,8.7"
				/>
				<path
					className="s2"
					d="M8.5,5.5c0.4,0.1,0.8,0.1,1.2,0c0.4-0.1,0.8-0.2,0.8-0.6c0-0.3-0.3-0.5-0.6-0.5C9.5,4.4,9.2,4.5,9,4.7
	c-0.1,0-0.1,0.1-0.2,0.1C8.8,4.9,8.7,5.1,8.7,5.2c0,0.5,0,1.1,0.1,1.6c0.1,0.5,0.4,1,0.9,1.3c0.7,0.5,1.6,0.3,2.4,0"
				/>
				<path
					className="s3"
					d="M13.7,7.9c-0.1-0.7-0.2-1.4-0.3-2.1c0-0.4-0.1-0.7,0-1.1s0.5-0.6,0.8-0.6C14.8,4.6,15,5.2,15,5.8
	s-0.1,1.2-0.2,1.8c0-0.7,0.1-1.3,0.1-2c0-0.4,0.1-0.9,0.4-1.1c0.2-0.1,0.5-0.1,0.7-0.1c0.5,0,1,0,1.6,0c0.1,0,0.1,0,0.2,0
	c0.1,0,0.1,0.1,0.1,0.2c0.3,0.9,0.6,1.9,0.6,2.9"
				/>
				<path
					className="s4"
					d="M20.5,4.8C20.2,5,20.1,5.2,20,5.5c-0.2,0.4-0.2,0.8-0.2,1.2c0,0.3,0.2,0.6,0.5,0.8c0.1,0,0.2,0.1,0.3,0.1
	c0.2,0,0.5,0,0.6-0.1c0.1-0.1,0.1-0.1,0.2-0.2C21.7,6.8,21.9,6.4,22,6c0.1-0.3,0.2-1.1-0.1-1.4C21.5,4.3,20.8,4.5,20.5,4.8z"
				/>
				<path
					className="s5"
					d="M23.4,4.8C23.2,6,23,7.1,22.7,8.3c0.1-0.4,0.3-0.8,0.4-1.2c0.2-0.6,0.4-1.2,0.9-1.6c0.5-0.5,1.3-0.7,2-0.6
	c0,0,0.1,0,0.1,0c0.1,0,0.1,0.1,0.1,0.2c0.3,1,0.3,2.1,0.3,3.1"
				/>
				<path
					className="s6"
					d="M29.9,4.8c-0.5,0.1-1-0.2-1.4,0.1c-0.2,0.2-0.3,0.5-0.3,0.8c0,0.2,0,0.3,0.1,0.5c0.1,0.1,0.2,0.2,0.4,0.3
	c0.6,0.3,1.2,0.6,1.8,0.7c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0,0.2,0,0.3c0,0.1-0.1,0.2-0.1,0.4c0,0,0,0.1-0.1,0.1c0,0-0.1,0-0.1,0
	c-0.9,0-1.8-0.1-2.6-0.2"
				/>
			</svg>

			<style jsx>{`
				svg {
					transform: rotate(-15deg);
					animation-fill-mode: forwards;
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
					stroke-dasharray: 13;
					animation: 2s write2 0s 1 linear;
				}
				.s3 {
					stroke-dasharray: 20;
					animation: 2s write3 0s 1 linear;
				}

				.s4 {
					stroke-dasharray: 9;
					animation: 2s write4 0s 1 linear;
				}

				.s5 {
					stroke-dasharray: 13;
					animation: 2s write5 0s 1 linear;
				}

				.s6 {
					stroke-dasharray: 10;
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
						stroke-dashoffset: 13;
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
						stroke-dashoffset: 9;
					}
					65% {
						stroke-dashoffset: 0;
					}
				}

				@keyframes write5 {
					0%,
					65% {
						stroke-dashoffset: 13;
					}
					80% {
						stroke-dashoffset: 0;
					}
				}

				@keyframes write6 {
					0%,
					80% {
						stroke-dashoffset: 10;
					}
					100% {
						stroke-dashoffset: 0;
					}
				}
			`}</style>
		</div>
	)
}
