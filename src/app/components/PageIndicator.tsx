// components/PageIndicator.tsx
interface PageIndicatorProps {
    currentPage: number;
    totalPages: number;
    visible: boolean;
  }
  
  const PageIndicator = ({ currentPage, totalPages, visible }: PageIndicatorProps) => {
    if (!visible) return null;
    
    return (
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80">
        <div className="bg-black/20 px-4 py-2 rounded-full text-sm">
          Page {currentPage + 1} / {totalPages}
        </div>
      </div>
    );
  };
  
  export default PageIndicator;