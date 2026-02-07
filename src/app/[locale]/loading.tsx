export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background)]">
      <div className="flex flex-col items-center gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt="Emrebaş İnşaat"
          className="w-[160px] md:w-[200px] h-auto animate-pulse"
        />
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
