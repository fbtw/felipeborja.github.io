import Image from 'next/image';
import profile_circle from './profile_circle.png';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Logo = () => {
	return (
		<Link href="/" passHref>
			<motion.a
				className="group relative transition whitespace-nowrap hover:transition duration-300 text-2xl font-bold flex gap-4 items-center"
				animate={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -10 }}
			>
				<Image
					src={profile_circle}
					width={48}
					height={48}
					quality={100}
					alt="Vectorised image of Felipe Borja"
					className="w-12 h-12"
				/>
				<span className="transition duration-300 opacity-100 group-hover:opacity-0">
					Felipe Borja
				</span>
				<span className="absolute transition duration-300 left-16 opacity-0 group-hover:opacity-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-start to-blue-stop dark:from-purple-start dark:to-purple-stop">
					Felipe Borja
				</span>
			</motion.a>
		</Link>
	);
};

export { Logo };
