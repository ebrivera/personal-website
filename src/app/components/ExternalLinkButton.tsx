"use client"

interface ExternalLinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ExternalLinkButton({ href, children, className = "" }: ExternalLinkButtonProps) {
  return (
    <button
      onClick={() => window.open(href, '_blank')}
      className={className}
    >
      {children}
    </button>
  );
}
