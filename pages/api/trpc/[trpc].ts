import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '../../../server/routers/_app';
import { createContext } from '../../../server/context';

/* Nextjs のAPI RoutesをtRPCに委任するための設定 */
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
