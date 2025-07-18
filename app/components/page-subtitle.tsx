interface PageSubtitleProps {
  children: React.ReactNode
}

export function PageSubtitle({ children }: PageSubtitleProps) {
  return (
    <p className="text-sm text-neutral-400">
      {children}
    </p>
  )
}
