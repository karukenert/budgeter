import { z } from "zod";
import { Context } from "../tRPC";
import * as trpc from "@trpc/server";

const mutationObj = z.object({
    id: z.number().positive(),
    sum: z.number().positive(),
    comment: z.string().optional()
})

const db: any[] =  [];

const transactions = trpc.router<Context>()
    .query('list', {
        resolve: () => db,
    })
    .mutation('add', {
        input: mutationObj,
        resolve: async ({ input }) => {
            db.push(input);
            return input;
        },
    })
    .mutation('edit', {
        input: mutationObj,
        resolve: async ({ input }) => {
            db.push(input);
            return input;
        },
    });

export default transactions;
