import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'WeightAI — Healthcare colour system',description:'A considered colour system for healthcare and AI. Compare palettes, preview components, and export design tokens.',other:{'page-type':'software','site-kind':'software'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" data-type="software"><body>{children}</body></html>}
