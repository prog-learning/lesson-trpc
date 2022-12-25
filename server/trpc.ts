import { Context } from './context';
import { initTRPC } from '@trpc/server';

/* Initialize */
const t = initTRPC.context<Context>().create();

export const router = t.router;
export const procedure = t.procedure;
