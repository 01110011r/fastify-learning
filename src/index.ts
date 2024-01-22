import fastify from "fastify";


const main=():void=>{
    // const server=fastify();
    //
    // server.listen(5000,(err:Error | null, address:string):void=>{
    //     if(err){
    //         console.error(err);
    //         process.exit(1);
    //     };
    //     console.log("server listening at "+ address);
    // });


// Import the framework and instantiate it
    import Fastify from 'fastify'
    const fastify = Fastify({
        logger: true
    })

// Declare a route
    fastify.get('/', async function handler (request, reply) {
        return { hello: 'world' }
    })

// Run the server!
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }

};

main();

