import { initTRPC } from '@trpc/server';

/* Initialize */
const t = initTRPC.create();

export const router = t.router;
export const procedure = t.procedure;
