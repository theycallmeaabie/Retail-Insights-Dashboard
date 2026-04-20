export default function TopBar({ title }) {
  return (
    <header className="sticky top-0 w-full z-30 flex justify-between items-center px-6 h-16 bg-white/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      <h2 className="text-[24px] font-semibold text-on-surface tracking-tight hidden md:block">
        {title}
      </h2>
      <h2 className="text-lg font-black tracking-tight text-primary md:hidden">
        Retail Insights
      </h2>
      <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-[14px] font-semibold">
        UP
      </div>
    </header>
  )
}
