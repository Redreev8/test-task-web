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
