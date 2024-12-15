import { AreaHTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react'
import ImgSvg from './img-svg'

interface SvgList {
    [key: string]: ForwardRefExoticComponent<
        AreaHTMLAttributes<SVGSVGElement> & RefAttributes<SVGSVGElement>
    >
}

const svgList: SvgList = {
    img: ImgSvg,
    str: ImgSvg
}

export default svgList
