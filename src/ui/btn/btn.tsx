'use client'
import style from './btn.module.scss'
import { forwardRef, ForwardedRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

export interface Props {
    isCard?: boolean
    href?: string
}

export type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>
export type LinkProps = Props & AnchorHTMLAttributes<HTMLAnchorElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ButtonRef(
    { children, ...props },
    ref
) {
    return (
        <button ref={ref} {...props}>
            {children}
        </button>
    )
})
const A = forwardRef<HTMLAnchorElement, LinkProps>(function ARef(
    { children, href, ...props },
    ref
) {
    return (
        <Link href={href!} ref={ref} {...props}>
            {children}
        </Link>
    )
})

const Btn = forwardRef<HTMLButtonElement | HTMLAnchorElement, LinkProps | ButtonProps>(
    function BtnRef({ className, children, href, isCard, ...props }, ref) {
        const cl = classNames(style.btn, className, {
            [style['btn--card']]: isCard
        })
        if (href) {
            return (
                <A
                    {...(props as LinkProps)}
                    href={href}
                    ref={ref as ForwardedRef<HTMLAnchorElement>}
                    className={cl}>
                    {children}
                </A>
            )
        }
        return (
            <Button
                {...(props as ButtonProps)}
                ref={ref as ForwardedRef<HTMLButtonElement>}
                className={cl}>
                {children}
            </Button>
        )
    }
)

export default Btn
