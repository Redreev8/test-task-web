import React, { AreaHTMLAttributes, forwardRef } from 'react'

const ImgSvg = forwardRef<SVGSVGElement, AreaHTMLAttributes<SVGSVGElement>>(
    function ImgSvgRef(props, ref) {
        return (
            <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                ref={ref}
                xmlns="http://www.w3.org/2000/svg"
                {...props}>
                <path
                    d="M1 25V1H25V20.3333M1 25H25V20.3333M1 25L8.33333 17L11.6667 20.3333L18.3333 13.6667L25 20.3333M5.65424 7.95L8.32091 5.33519L10.9876 7.95L8.32091 10.5648L5.65424 7.95Z"
                    stroke="inhiret"
                />
            </svg>
        )
    }
)

export default ImgSvg
