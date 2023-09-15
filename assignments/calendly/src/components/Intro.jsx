import { DotLottiePlayer } from "@dotlottie/react-player"

const Intro = () => {
	return (
		<div>
			<DotLottiePlayer
				src={"https://assets.ctfassets.net/k0lk9kiuza3o/3lY6i6Oj12rUwIfm5Qc3Jk/a9165b7a6179591eb0d483a788012fc5/W002_CALENDLY_OPTIMIZED_A3.lottie"}
				autoplay
				loop
				className="mb-40"
			>
			</DotLottiePlayer>

			<div className="font-bold text-4xl text-center text-[#0a3559] mb-10">
				<div>
				<h3>Simplified scheduling for more than</h3>
				<h3><span className="text-[#006ce0]">10 million</span> users worldwide</h3>
				</div>
			</div>
			<marquee>
				<div className="flex justify-center items-center gap-16">
					<div className="w-40">
						<img src="https://images.ctfassets.net/k0lk9kiuza3o/56cjEhKMIFlRPdVUSQqMYD/090dc2d29685d4b578025149bcfdad2b/Crocs-Colored-Logo.svg"/>
					</div>
					<div>
						<img src="https://images.ctfassets.net/k0lk9kiuza3o/6PFPRWMRMxRXthyXYcDRiR/6f26aaf48346fb5dfa8318bb4a403e02/Compass__2_.svg"/>
					</div>
					<div>
						<img src="https://images.ctfassets.net/k0lk9kiuza3o/5DR8HfsFIbSQZlUXsBqjWN/8165619a29e1734a0e18d28282109c8a/Twilio.svg"/>
					</div>
					<div>
						<img src="https://images.ctfassets.net/k0lk9kiuza3o/bOnLOncEyDdb8izczJggp/0835570c9693c23131f1e036b0950a80/Dropbox_logo_2017__1_.svg"/>
					</div>
					<div>
						<img src="https://images.ctfassets.net/k0lk9kiuza3o/6NiS4DQmcqEUxKkXJVesAP/d356b290fa1f13a2addae7870312fef2/Vector.svg"/>
					</div>
				</div>
			</marquee>
		</div>
	)
}

export default Intro
