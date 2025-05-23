import React from 'react'
import Link from 'next/link'
import MyImage from '../MyImage'
import { NC_SITE_SETTINGS } from '@/contains/site-settings'

export interface LogoProps {
	className?: string
	imageClassName?: string
}

const Logo: React.FC<LogoProps> = ({ className = '', imageClassName }) => {
	let logoSrc = NC_SITE_SETTINGS.site_info?.site_logo || ''
	let logoLightSrc =
		NC_SITE_SETTINGS.site_info?.site_logo_light || logoSrc || ''

	if (!logoLightSrc && !logoSrc) {
		return null
	}

	return (
		<>
			<div className="leading-[1.2]">
				<Link
					href="https://career-emon.com/blog/"
					className={`ttnc-logo inline-block flex-shrink-0 text-primary-600 ${className}`}
				>
					<MyImage
						className={'block w-36 sm:w-48 dark:hidden ' + imageClassName}
						src={logoSrc || ''}
						alt={'Logo'}
						width={208}
						height={56}
					/>
					<MyImage
						className={'hidden w-14 sm:w-14 dark:block ' + imageClassName}
						src={logoLightSrc || ''}
						alt={'Logo'}
						width={56}
						height={56}
					/>
					<div className="bg-gradient-to-r from-teal-900 to-teal-600 bg-clip-text text-right font-zenmaru font-extrabold text-transparent drop-shadow-sm">
						キャリアブログ
					</div>
				</Link>
			</div>
		</>
	)
}

export default Logo
