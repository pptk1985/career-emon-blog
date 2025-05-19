import Image from 'next/image'
import Img from '@/../public/icon_nikoniko.png'

const Hero = () => {
	return (
		<div className="bg-teal-200 py-6">
			<div className="grid grid-cols-2 items-center justify-center">
				<div className="mx-auto">ヒーローセクション</div>
				<Image
					src={Img}
					alt="キャリエモンブログ"
					width={200}
					height={200}
					className="mx-auto"
				/>
			</div>
		</div>
	)
}

export default Hero
