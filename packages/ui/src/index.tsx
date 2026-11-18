import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from 'react'
export function Brand({ product, logoSrc }: { product: string; logoSrc?: string }) {
 return <span className="sui-brand">{logoSrc ? <img src={logoSrc} alt="String" /> : <span>String</span>}<span className="sui-product">{product}</span></span>
}
export function AppHeader({ brand, children, theme = 'light' }: { brand: ReactNode; children?: ReactNode; theme?: 'light' | 'dark' }) {
 return <header className="sui-header" data-sui-theme={theme}><div className="sui-header-inner">{brand}{children}</div></header>
}
export function AppFooter({ children, theme='light' }: { children: ReactNode; theme?: 'light' | 'dark' }) {
 return <footer className="sui-footer" data-sui-theme={theme}><div className="sui-container">{children}</div></footer>
}
export function Container({className='',...props}:HTMLAttributes<HTMLDivElement>) { return <div {...props} className={`sui-container ${className}`} /> }
export function Card({className='',...props}:HTMLAttributes<HTMLDivElement>) { return <div {...props} className={`sui-card ${className}`} /> }
export function Badge({className='',...props}:HTMLAttributes<HTMLSpanElement>) { return <span {...props} className={`sui-badge ${className}`} /> }
export function Button({className='',type='button',...props}:ButtonHTMLAttributes<HTMLButtonElement>) { return <button {...props} type={type} className={`sui-button ${className}`} /> }
