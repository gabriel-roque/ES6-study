const passo1 = (ctx, next) => {
    ctx.valor1 = 'md1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
}

const passo3 = ctx => ctx.passo3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const exePasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => exePasso(indice + 1))
    }
    exePasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx);