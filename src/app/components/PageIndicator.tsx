// components/PageIndicator.tsx
interface PageIndicatorProps {
    currentPage: number;
    totalPages: number;
    visible: boolean;
  }

  const PageIndicator = ({ currentPage, totalPages, visible }: PageIndicatorProps) => {
    if (!visible) return null;

    return (
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="font-mono text-xs tracking-[0.2em] uppercase text-paper/70 bg-ink/30 px-4 py-2 rounded-full">
          Frame <span className="text-amber">{String(currentPage + 1).padStart(2, '0')}</span>
          {' '}/{' '}
          {String(totalPages).padStart(2, '0')}
        </div>
      </div>
    );
  };

  export default PageIndicator;
