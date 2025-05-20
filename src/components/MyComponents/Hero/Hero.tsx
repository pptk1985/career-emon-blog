'use client'
import { ThreeDMarquee } from '@/components/ui/3d-marquee'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Img1 from '@/../public/siteimg/siteimg1.png'
import Img2 from '@/../public/siteimg/siteimg2.png'
import Img3 from '@/../public/siteimg/siteimg3.png'
import Img4 from '@/../public/siteimg/siteimg4.png'
import Img5 from '@/../public/siteimg/siteimg5.png'
import Img6 from '@/../public/siteimg/siteimg6.png'
import Img7 from '@/../public/siteimg/siteimg7.png'

export function Hero() {
	const images = [
		Img1.src,
		Img7.src,
		Img2.src,
		Img6.src,
		Img7.src,
		Img4.src,
		Img6.src,
		Img5.src,
		Img7.src,
		Img7.src,
		Img5.src,
		Img6.src,
		Img4.src,
		Img1.src,
		Img6.src,
		Img2.src,
		Img7.src,
		Img1.src,
		Img1.src,
		Img7.src,
		Img2.src,
		Img6.src,
		Img3.src,
		Img4.src,
		Img6.src,
		Img5.src,
		Img7.src,
		Img7.src,
		Img5.src,
		Img6.src,
		Img4.src,
		Img1.src,
		Img6.src,
		Img2.src,
		Img7.src,
		Img1.src,
	]
	return (
		<div className="relative mx-auto my-4 flex w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-xl font-zenmaru">
			<h2 className="relative z-20 mx-auto max-w-4xl text-balance text-center text-4xl font-bold text-teal-700 [text-shadow:_2px_3px_0_rgb(255_255_255_/_100%)] md:text-5xl">
				キャリエモンなら
				<span className="mt-2 block text-3xl md:text-4xl">
					無料でプロにキャリア相談できる！
				</span>
			</h2>
			<p className="relative z-20 mx-auto max-w-2xl bg-white bg-opacity-25 p-2 text-center text-sm font-bold text-neutral-200 text-teal-700 md:text-base">
				キャリエモンはプロのキャリアサポーターから「書類/ES添削」や「就職/転職相談」を無料で好きなだけ受けられるサービスです。就活や転職で悩んでいる人は気軽に使ってみよう！
			</p>

			<div className="relative z-20 mb-4 flex flex-wrap items-center justify-center gap-4">
				<Button
					asChild
					className="my-1 h-9 cursor-pointer rounded-sm bg-amber-300 px-2 py-0.5 text-[10px] font-semibold text-gray-700 no-underline hover:bg-amber-300 hover:opacity-80 sm:px-6 md:text-xs"
				>
					<Link href="https://career-emon.com/">
						キャリエモンを利用してみる
					</Link>
				</Button>
				<Button
					asChild
					className="my-1 h-9 cursor-pointer rounded-sm bg-teal-600 px-2 py-0.5 text-[10px] font-semibold text-white no-underline hover:bg-teal-600 hover:opacity-80 sm:px-6 md:text-xs"
				>
					<Link href="https://career-emon.com/lp/">
						キャリアサポートを申し込む
					</Link>
				</Button>
			</div>

			{/* overlay */}
			<div className="absolute inset-0 z-10 w-full bg-teal-300/60" />
			<ThreeDMarquee
				className="pointer-events-none absolute inset-0 h-full w-full"
				images={images}
			/>
		</div>
	)
}
