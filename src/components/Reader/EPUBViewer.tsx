// src/components/Reader/EPUBViewer.tsx
import React, { useEffect, useRef } from 'react';
import ePub, { Book, Rendition } from 'epubjs';

interface ReaderProps {
  url: string;
  theme: 'light' | 'dark' | 'sepia' | 'e-ink';
  fontSize: number;
  onLocationChange: (loc: string) => void;
}

export const EPUBViewer: React.FC<ReaderProps> = ({ url, theme, fontSize, onLocationChange }) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const renditionRef = useRef<Rendition | null>(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    const book: Book = ePub(url);
    const rendition = book.renderTo(viewerRef.current, {
      width: '100%',
      height: '100%',
      spread: 'none',
    });

    renditionRef.current = rendition;
    rendition.display();

    rendition.on('relocated', (location: any) => {
      onLocationChange(location.start.cfi);
    });

    return () => book.destroy();
  }, [url]);

  useEffect(() => {
    if (!renditionRef.current) return;
    
    // Applying Kurdish Fonts and Styles dynamically inside Reader
    renditionRef.current.themes.default({
      body: {
        'font-family': 'Vazirmatn, sans-serif !important',
        'direction': 'rtl !important',
        'font-size': `${fontSize}px !important`,
        'line-height': '1.8 !important',
        'background-color': theme === 'dark' ? '#020617' : theme === 'sepia' ? '#FBF0D9' : '#FFFFFF',
        'color': theme === 'dark' ? '#F8FAFC' : theme === 'sepia' ? '#4A3B32' : '#0F172A',
      }
    });
  }, [theme, fontSize]);

  return <div ref={viewerRef} className="w-full h-full dir-rtl" />;
};
