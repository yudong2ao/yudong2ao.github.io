import { AnimatePresence, motion } from 'framer-motion'
import { useShouldHeaderMetaShow, useIsMobile } from './hooks'
import { site } from '@/config.json'

export function AnimatedLogo() {
  const isMobile = useIsMobile()
  const shouldHeaderMetaShow = useShouldHeaderMetaShow()

  if (!isMobile) {
    return <Logo />
  }

  return (
    <AnimatePresence>
      {!shouldHeaderMetaShow && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Logo />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Logo() {
  return (
    <a
      className="block transition-transform duration-300 hover:scale-105"
      href="/"
      title={site.title}
    >
      <img
        className="size-[40px] select-none object-contain rounded-2xl"
        src={(site as { logo?: string }).logo || '/brandmark.svg'}
        alt={`${site.title} Brandmark`}
      />
    </a>
  )
}
