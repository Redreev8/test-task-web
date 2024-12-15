# Test website

## Info deploy

-   url wibsite: https://test-task-web-production.up.railway.app/
-   hosting: https://railway.app/

## stack

-   **next js (react)** working with the ssr pages and creating application logic. Backend (server actions) response to form
-   **typescript** component typing (value validations)
-   **classNames** library for working with classes
-   **scss** style html tags
-   **radix form** form validation and work an form

## Stack code style

-   eslint
-   prettier
-   stylelint

## Commands

```bash
npm run dev
npm run build
npm run start
npm run prettier
npm run lint
npm run lint-style
```

### `npm run dev`

First, run the development server Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### `npm run build`

Running next build generates an optimized version of your application for production. HTML, CSS, and JavaScript files are created based on your pages. JavaScript is compiled and browser bundles are minified using the Next.js Compiler to help achieve the best performance and support all modern browsers.

### `npm run start`

To start the Node.js server. This server supports all Next.js features.

### `npm run prettier`

It runs through files and formats them in a uniform style.

### `npm run lint`

Scans files and analyzes them then reports errors to keep code consistent. Also depends on prettier

#### `npm run lint -- --fix`

Linter will fix some errors

### `npm run lint-style`

Scans .scss files and analyzes them, then reports errors to maintain style consistency.

### `npm run lint-styel -- --fix`

Stylelint will fix some errors

## Designer style the website

##### card designer - designer style

All data is stuffed into cards and the gap is 1px. Use flex and grid.

```scss
.container {
    display: flex;
    flex-direction: column;
    gap: $g-tiny;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: $g-tiny;
    margin: 0;
    padding: 0;

    @include tablet {
        grid-template-columns: 1fr 1fr;
    }

    @include mobile {
        grid-template-columns: 1fr;
    }
}
```

### Root scss

```scss
$black: #0c0f0a;
$white: #fff;
$bg: $black;

$g-xl: 64px;
$g-lg: 44px;
$g-bg: 24px;
$g: 16px;
$g-md: 12px;
$g-sm: 8px;
$g-xs: 4px;
$g-tiny: 1px;

$gap-map: (
    xl: 64px,
    lg: 44px,
    bg: 28px,
    g: 16px,
    md: 12px,
    sm: 8px,
    xs: 4px,
    tiny: 4px
);

$border-line: 2px solid $black;
```

### Mixins

##### font-szie

```scss
mixin h1 {
    line-height: 64px;
    font-size: 64px;
    font-weight: 600;
}

@mixin h2 {
    line-height: 42px;
    font-size: 42px;
    font-weight: 600;
}

@mixin h3 {
    line-height: 36px;
    font-size: 32px;
    font-weight: 600;
}

@mixin h4 {
    line-height: 32px;
    font-size: 28px;
    font-weight: 600;
}

@mixin h5 {
    line-height: 28px;
    font-size: 24px;
    font-weight: 600;
}

@mixin h6 {
    line-height: 24px;
    font-size: 20px;
    font-weight: 600;
}

@mixin big-text {
    line-height: 24px;
    font-size: 20px;
}

@mixin text {
    line-height: 20px;
    font-size: 16px;
}
```

##### hide

SEO rules for hiding tag but screen reader sees it. The example on the contacts page h1 uses this mixin

```scss
@mixin hide {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: polygon(0 0, 0 0, 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
}
```

##### media

All page redraw breakpoints

```scss
@mixin tablet {
    @media (width <= 960px) {
        @content;
    }
}

@mixin phablet {
    @media (width <= 720px) {
        @content;
    }
}

@mixin mobile {
    @media (width <= 540px) {
        @content;
    }
}
```

### Border header and footer

Used `box-shadow` instead of `border` to save the gap between the card and the header and footer.
header `box-shadow: 0 1px 0 0 $black;``
footer `box-shadow: 0 -1px 0 0 $black;``

```scss
body {
    ...
    display: flex;
    flex-direction: column;
    gap: $g-tiny;
    min-height: 100vh;
    ...
}
```

### layout

-   font connect
-   metadata
-   connect Header and Footer

```tsx
import type { Metadata } from 'next'
import { Advent_Pro } from 'next/font/google'
import '@/style/global.scss'
import Header from '@/components/header'
import Footer from '@/components/footer'

const yanoneKaffeesatz = Advent_Pro({
    weight: ['500', '600'],
    subsets: ['cyrillic']
})

export const metadata: Metadata = {
    title: 'Some Company',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
    keywords: ['Lorem ipsum', 'Lorem', 'ipsum'],
    openGraph: {
        url: 'https://test-task-web-production.up.railway.app/',
        type: 'website',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1638132035918-90a22beaab3b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                width: 1200,
                height: 630
            }
        ]
    },
    twitter: {
        site: 'https://test-task-web-production.up.railway.app',
        card: 'summary_large_image',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1638132035918-90a22beaab3b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                width: 1200,
                height: 630,
                alt: 'Your alt text'
            }
        ]
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${yanoneKaffeesatz.className}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
```

Metadata for social and seo for page

```tsx
import { Metadata } from 'next'
...
const title = 'home page tacks'
const description = 'home page written in next js, scss, radix form'

export const metadata: Metadata = {
    title: 'Some Company',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum',
    openGraph: {
        title,
        description
    },
    twitter: {
        title,
        description
    }
}
```

## UI elements

### Title

Header Component.
The props `level` are responsible for level
The props `levelTag` are responsible for level style

```tsx
import { forwardRef, HtmlHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import style from './title.module.scss'
import listComponentTitle from './list-title'
export interface TitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
    children: ReactNode
    level?: number
    levelTag?: number
    className?: string
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(function TitleRef(
    { className, level = 2, levelTag = level, children, ...props },
    ref
) {
    const cl = classNames(style.title, className, style[`title--${level}`])

    const Componet = listComponentTitle[levelTag]
    return (
        <Componet ref={ref} className={cl} {...props}>
            {children}
        </Componet>
    )
})

export default Title
```

```tsx
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react'
import { TitleProps } from './title'

interface Levels {
    [key: number]: ForwardRefExoticComponent<
        Omit<TitleProps, 'level'> & RefAttributes<HTMLHeadingElement>
    >
}

const listComponentTitle: Levels = {
    1: forwardRef<HTMLHeadingElement, TitleProps>(function H1Ref({ children, ...props }, ref) {
        return (
            <h1 ref={ref} {...props}>
                {children}
            </h1>
        )
    }),
    2: forwardRef<HTMLHeadingElement, TitleProps>(function H2Ref({ children, ...props }, ref) {
        return (
            <h2 ref={ref} {...props}>
                {children}
            </h2>
        )
    }),
    3: forwardRef<HTMLHeadingElement, TitleProps>(function H3Ref({ children, ...props }, ref) {
        return (
            <h3 ref={ref} {...props}>
                {children}
            </h3>
        )
    }),
    4: forwardRef<HTMLHeadingElement, TitleProps>(function H4Ref({ children, ...props }, ref) {
        return (
            <h4 ref={ref} {...props}>
                {children}
            </h4>
        )
    }),
    5: forwardRef<HTMLHeadingElement, TitleProps>(function H5Ref({ children, ...props }, ref) {
        return (
            <h5 ref={ref} {...props}>
                {children}
            </h5>
        )
    }),
    6: forwardRef<HTMLHeadingElement, TitleProps>(function H6Ref({ children, ...props }, ref) {
        return (
            <h6 ref={ref} {...props}>
                {children}
            </h6>
        )
    })
}

export default listComponentTitle
```

```scss
@import '@/style/root';
@import '@/style/mixin/all';

.title {
    &--1 {
        @include h1;

        @include tablet {
            @include h2;
        }
    }

    &--2 {
        @include h2;
    }

    &--3 {
        @include h3;
    }

    &--4 {
        @include h4;
    }

    &--5 {
        @include h5;
    }

    &--6 {
        @include h6;
    }
}
```

### Button

The prop `href` turns the button into a link
The prop `isCard` create button card

```tsx
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
                    className={cl}
                >
                    {children}
                </A>
            )
        }
        return (
            <Button
                {...(props as ButtonProps)}
                ref={ref as ForwardedRef<HTMLButtonElement>}
                className={cl}
            >
                {children}
            </Button>
        )
    }
)

export default Btn
```

```scss
@import '@/style/root';
@import '@/style/mixin/all';

.btn {
    text-decoration: none;
    font-family: inherit;

    @include text;

    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $black;
    background-image: linear-gradient($white 50%, $white 50%);
    background-position: left top;
    background-repeat: no-repeat;
    background-size: 100% 0%;
    padding: $g-sm $g;
    border: none;
    transition:
        background-size 0.6s 0s,
        opacity 0.6s 0s,
        color 0.6s 0s;
    cursor: pointer;

    &:active {
        opacity: 0.6;
    }

    &:disabled {
        opacity: 0.3;
        cursor: default;
    }

    &:not(:disabled):hover {
        color: $black;
        background-size: 100% 100%;
    }

    &--card {
        @include big-text;

        text-align: center;
        padding: $g-bg;

        &:not(:disabled):hover {
            color: $black;
        }
    }
}
```

### Card

Component card
The prop `isText` the content is arranged in a column where the first element is at the top and the other is at the bottom.
The prop `isTitle` becomes full width and the title is centered

```tsx
import { AreaHTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'

import style from './card.module.scss'

export interface CardProps extends AreaHTMLAttributes<HTMLDivElement> {
    isText?: boolean
    isTitle?: boolean
}

const Card = forwardRef<HTMLParagraphElement, CardProps>(function TextRef(
    { className, children, isText, isTitle },
    ref
) {
    const cl = classNames(style.box, className, {
        [style['box--text']]: isText,
        [style['box--title']]: isTitle
    })
    return (
        <div ref={ref} className={cl}>
            {children}
        </div>
    )
})

export default Card
```

```scss
@import '@/style/root';
@import '@/style/mixin/all';

.box {
    background-color: $white;
    width: 100%;
    padding: $g-bg;
    box-sizing: border-box;

    &--text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: $g;
    }

    &--title {
        text-align: center;
        width: 100%;
    }
}
```

## Components

### Animate form

After receiving a response from the backend, the first animation of closing the form is launched. The form card displays an event when the animation is complete, indicating that the animation for the card to appear has started message.

```tsx
const [isSubmit, setIsSubmit] = useState<boolean>(false)
    const [isFuncs, setIsFuncs] = useState<boolean>(false)
    const handelTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return

    setIsFuncs(true)
}
return (
	...
	    <div
            onTransitionEnd={handelTransitionEnd}
	        className={classNames([style['form']], {
                [style['form-hiden']]: isSubmit,
                [style['form-none']]: isFuncs
            })}>
	        <Card>
                <FormContact setIsSubmit={setIsSubmit} />
            </Card>
        </div>
        div className={classNames([style['funcs']], { [style['funcs-view']]: isFuncs })}>
            <Submission />
        </div>
    ...
)
```

### Custom field wrap

```tsx
const FieldCustom: FC<FieldProps> = ({ children, className, name, label, messages }) => {
    return (
        <Field className={classNames(className, style['field'])} name={name}>
            <Label className={style['label']}>{label!}</Label>
            <Control asChild>{children}</Control>
            {messages.map((el, i) => (
                <Message key={i} match={el.match}>
                    {el.children}
                </Message>
            ))}
        </Field>
    )
}
```

```tsx
interface FieldProps {
    name: string
    label: ReactNode
    className?: string
    children: ReactNode
    messages: {
        children: ReactNode
        match: FormMessageProps['match']
    }[]
}
```

```scss
.field {
    display: flex;
    flex-direction: column;
    gap: $g-xs;
}

.controler {
    height: 100%;
}

.label {
    transition: opacity 0.6s 0s;

    &:has(+ *:disabled) {
        opacity: 0.3;
    }
}
```

Label checked field is disabled.

```
&:has(+ *:disabled) {
    opacity: .3;
}
```

### Form

If the data is valid the isLoading to true button and the fields are disabled.
After IsSubmit is true and the code is executed ##### 1 Animate form

```tsx
const [isLoding, setIsLoding] = useState<boolean>(false)
const handlerSubmit = async (e: FormEvent<Form>) => {
    e.preventDefault()
    const target = e.currentTarget.elements
    setIsLoding(true)

    const res = await consoleAction({
        name: target.name.value,
        email: target.email.value,
        messange: target.message.textContent!
    })

    setIsSubmit(res)
}
return (
    <Root className={style['form']} onSubmit={handlerSubmit}>
        <FormContactsField isDisebled={isLoding} />
        <Submit className={style['btn']} asChild>
            <Btn disabled={isLoding}>Post question</Btn>
        </Submit>
    </Root>
)
```

A request with an action returns true and sends a message to the console

```ts
'use server'
interface Body {
    name: string
    email: string
    messange: string
}

const consoleAction = async (body: Body) => {
    console.log(`Thank you for your interest, ${body.name}`)

    return true
}

export default consoleAction
```
