import * as trpcExpress from '@trpc/server/adapters/express';
import * as trpc from "@trpc/server";
// import { z } from "zod";
import transactions from './modules/transactions'

// export function createRouter() {
//     return trpc.router<Context>();
// }

const appRouter = trpc.router<Context>()
    // .query('test',{
    //     input: z.string(),
    //     resolve: (req) => req.input
    // })
    .merge('transactions.',transactions);
    // .query('getUser', {
    //     input: z.string(),
    //     async resolve(req) {
    //         req.input; // string
    //         return { id: req.input, name: 'Bilbo' };
    //     },
    // })
    // .mutation('createUser', {
    //     // validate input with Zod
    //     input: z.object({ name: z.string().min(5) }),
    //     async resolve(req) {
    //         // use your ORM of choice
    //         return {
    //             data: req.input,
    //             newUser: true
    //         };
    //     },
    // });

// export type definition of API
export type AppRouter = typeof appRouter;
// @ts-ignore
export type Context = trpc.inferAsyncReturnType<typeof createContext>;


const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => {
    console.log({req,res})
    return {}
};
const middleWare = trpcExpress.createExpressMiddleware({ router: appRouter, createContext});

export default middleWare;
