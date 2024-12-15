'use client'
import { AreaHTMLAttributes, Children, forwardRef, ReactNode } from 'react'
import style from './slider.module.scss'
import classNames from 'classnames'
import useSlider from '@/ui/slider/useSlider'

interface SliderProps extends AreaHTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

const Slider = forwardRef<HTMLDivElement, SliderProps>(function SliderRef(
    { children, className, ...props },
    ref
) {
    const {
        cor,
        isDrag,
        handelStart,
        handelEnd,
        handelMove,
        handelTouchStart,
        handelTouchEnd,
        handelTouchMove
    } = useSlider({
        classNameWrapp: style['slider__wrapp']
    })
    const cl = classNames(style['slider'], className, {
        [style['slider--grabbing']]: isDrag
    })
    const clWrapp = classNames(style['slider__wrapp'], {
        [style['slider__wrapp--move']]: isDrag
    })
    return (
        <div
            className={cl}
            ref={ref}
            {...props}
            onMouseDown={handelStart}
            onMouseUp={handelEnd}
            onMouseMove={handelMove}
            onTouchStart={handelTouchStart}
            onTouchEnd={handelTouchEnd}
            onTouchMove={handelTouchMove}>
            <ul className={clWrapp} style={{ transform: `translateX(-${cor.x}px)` }}>
                {Children.map(children, (child, i) => (
                    <li className={style['slider__slide']} key={i}>
                        {child}
                    </li>
                ))}
            </ul>
        </div>
    )
})

export default Slider
