import fastify from "fastify";


const main=():void=>{
    const server=fastify();

    server.listen(5000,(err:Error | null, address:string):void=>{
        if(err){
            console.error(err);
            process.exit(1);
        };
        console.log("server listening at "+ address);
    });
};

main();