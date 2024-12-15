import { MouseEvent, TouchEvent, useRef, useState } from 'react'

interface Props {
    classNameWrapp: string
    spead?: number
}
interface toSCrollProps {
    tag: HTMLElement
    wrapp: HTMLElement
    x: number
    y: number
}

const useSlider = ({ classNameWrapp, spead = 4 }: Props) => {
    const [cor, setCor] = useState({ x: 0, y: 0 })
    const [isStart, setIsStart] = useState<boolean>(false)
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const refStart = useRef<{ x: number | null; y: number | null }>({ x: null, y: null })

    const handelStart = ({ clientX, clientY }: MouseEvent) => {
        setIsStart(true)
        refStart.current = { x: clientX, y: clientY }
    }
    const handelEnd = () => {
        setIsStart(false)
        setIsDrag(false)
        refStart.current = { x: null, y: null }
    }
    const handelMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
        if (!isStart) return
        toSCroll({
            wrapp: currentTarget.querySelector('.' + classNameWrapp) as HTMLElement,
            tag: currentTarget as HTMLElement,
            x: refStart.current.x! - clientX,
            y: refStart.current.y! - clientY
        })
    }
    const handelTouchStart = ({ touches }: TouchEvent) => {
        setIsStart(true)
        refStart.current = { x: touches[0].clientX, y: touches[0].clientY }
    }
    const handelTouchEnd = () => {
        setIsStart(false)
        setIsDrag(false)
        refStart.current = { x: null, y: null }
    }
    const handelTouchMove = ({ currentTarget, touches }: TouchEvent) => {
        if (!isStart) return
        toSCroll({
            wrapp: currentTarget.querySelector('.' + classNameWrapp) as HTMLElement,
            tag: currentTarget as HTMLElement,
            x: refStart.current.x! - touches[0].clientX,
            y: refStart.current.y! - touches[0].clientY
        })
    }
    const toSCroll = ({ wrapp, tag, x, y }: toSCrollProps) => {
        if (!wrapp) return
        setCor((prev) => {
            const cX = x > 0 ? Math.min(x / 100, 1.5) : Math.min(x / 100, -1.5)
            const cY = x > 0 ? Math.min(y / 100, 1.5) : Math.min(y / 100, -1.5)
            prev.x += spead * cX
            prev.y += spead * cY

            prev.x = Math.max(Math.min(prev.x, wrapp.offsetWidth - tag.offsetWidth), 0)
            prev.y = Math.max(Math.min(prev.y, wrapp.offsetHeight - tag.offsetHeight), 0)
            return {
                ...prev
            }
        })
    }
    return {
        cor,
        isDrag,
        handelStart,
        handelEnd,
        handelMove,
        handelTouchStart,
        handelTouchEnd,
        handelTouchMove
    }
}

export default useSlider
