import { router, procedure } from '../trpc';
import { prisma } from '../prisma';
import { z } from 'zod';

export const postRouter = router({
  /* Get Posts */
  list: procedure.query(async () => {
    const posts = await prisma.post.findMany();

    return posts;
  }),

  /* Create Post */
  create: procedure
    .input(
      z.object({
        name: z.string(),
        content: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const post = await prisma.post.create({
        data: {
          name: input.name,
          content: input.content,
        },
      });

      return post;
    }),

  /* Delete Post */
  delete: procedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      const post = await prisma.post.delete({
        where: {
          id: input.id,
        },
      });

      return post;
    }),
});
