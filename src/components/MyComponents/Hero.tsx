'use client'

import Image from 'next/image'
import Img from '@/../public/icon_nikoniko.png'
import { Suspense, useState } from 'react'
import { motion } from 'framer-motion'

function Firstview_() {
	return (
		<>
			<div className="bg-grid-teal-300 bg-teal-50 font-zenmaru">
				<div className="grid grid-cols-1 grid-rows-[auto_auto] md:grid-cols-3 md:grid-rows-1">
					<div className="col-span-3 md:col-span-2">
						<motion.h1
							initial={{
								opacity: 0,
								y: 20,
							}}
							animate={{
								opacity: 1,
								y: [20, -5, 0],
							}}
							transition={{
								duration: 1.5,
								ease: [0.4, 0.0, 0.2, 1],
							}}
							className="mx-auto mb-3 max-w-xl px-4 text-center text-teal-700 drop-shadow-sm md:mb-5 dark:text-white"
						>
							<motion.div
								initial={{
									opacity: 0,
									y: 20,
								}}
								animate={{
									opacity: 1,
									y: [20, -5, 0],
								}}
								transition={{
									duration: 2.5,
									ease: [0.4, 0.0, 0.2, 1],
								}}
								className="mx-auto mb-1 max-w-sm bg-white p-1 text-center text-base leading-relaxed text-teal-700 drop-shadow-sm md:mb-2 md:leading-snug dark:text-white"
							>
								<span className="text-base font-bold drop-shadow-sm md:text-lg">
									Career Blog
								</span>
							</motion.div>
							<div className="text-3xl font-bold [text-shadow:_2px_3px_0_rgb(255_255_255_/_100%)] md:text-4xl">
								<div className="mb-0 text-3xl font-bold md:mb-1 md:text-4xl">
									「キャリエモン」
								</div>
								<div className="text-lg font-bold md:text-2xl">
									無料でプロにキャリア相談できる！
								</div>
							</div>
						</motion.h1>
						<motion.div
							initial={{
								opacity: 0,
								y: 20,
							}}
							animate={{
								opacity: 1,
								y: [20, -5, 0],
							}}
							transition={{
								duration: 3,
								ease: [0.4, 0.0, 0.2, 1],
							}}
							className="mx-auto mb-3 max-w-lg px-4 text-center text-[10px] leading-relaxed text-teal-700 drop-shadow-sm sm:text-xs md:mb-5 md:text-sm dark:text-white"
						>
							<span className="font-bold drop-shadow-sm">
								キャリエモンはプロのキャリアサポーターから「書類/ES添削」や「就職/転職相談」を無料で好きなだけ受けられるサービスです。就活や転職で悩んでいる人は気軽に使ってみよう！
							</span>
						</motion.div>
					</div>

					{/* 右側 */}
					<div className="flex items-center justify-center">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: { delay: 0.8, duration: 0.6, ease: 'easeIn' },
							}}
							className="relative -top-4 md:top-0"
						>
							{/* サークル */}
							<motion.svg
								className="h-[120px] w-[120px] overflow-visible md:h-[200px] md:w-[200px] xl:h-[230px] xl:w-[230px]"
								fill="transparent"
								viewBox="-12 -40 516 516"
								xmlns="http://www.w3.org/2000/svg"
							>
								<motion.circle
									cx="253"
									cy="253"
									r="245"
									stroke="#5eead4"
									strokeWidth="20"
									strokeLinecap="round"
									strokeLinejoin="round"
									initial={{ strokeDasharray: '24 10 0 0' }}
									animate={{
										strokeDasharray: [
											'15 120 25 25',
											'16 25 92 72',
											'4 250 22 22',
										],
										rotate: [120, 360],
									}}
									transition={{
										duration: 20,
										repeat: Infinity,
										repeatType: 'reverse',
									}}
								/>
							</motion.svg>
							{/* 画像 */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { delay: 1.2, duration: 0.4, ease: 'easeInOut' },
								}}
								className="absolute left-1/2 top-1/2 w-[86%] -translate-x-1/2 -translate-y-1/2 transform"
							>
								<div className="relative">
									<Image
										src={Img}
										priority
										quality={100}
										width={400}
										height={120}
										alt=""
										className="object-contain opacity-90 drop-shadow"
									/>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	)
}

export default function Firstview() {
	return (
		<Suspense>
			<Firstview_ />
		</Suspense>
	)
}
