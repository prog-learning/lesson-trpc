import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from './routers/_app';

export const trpc = createReactQueryHooks<AppRouter>();
// => { useQuery: ..., useMutation: ...}
