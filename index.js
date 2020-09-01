const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()
const server = require('express')()

server.get('*',(req,res)=>{
    renderer.renderToString(app,(err,html)=>{
        if(err){
            console.err(err)
            return;
        }else{
            console.log(html)
            res.end(`<html><body>${html}</body></html>`)
        }
    })
})
server.listen(8080)
const app = new Vue({
    template: `<h1>hello {{name}}</h1>`,
    data:()=>{
        return {
            name:"huangruiqing"
        }
    }
})

