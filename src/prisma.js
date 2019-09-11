import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466'
});

// prisma.query prisma.mutation prisma.subscription prisma.exists

// prisma.query.users(null, '{ id name post { id title } }').then(data => {
//   console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.mutation
//   .createPost(
//     {
//       data: {
//         title: 'My new GraphQL',
//         body: 'New',
//         published: true,
//         author: {
//           connect: {
//             id: 'ck0dey6d300qd0780gafd8zlj'
//           }
//         }
//       }
//     },
//     '{ id title body published }'
//   )
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// promise
// prisma.mutation
//   .updatePost(
//     {
//       where: {
//         id: ''
//       },
//       data: {
//         body: '',
//         published: true
//       }
//     },
//     '{ id }'
//   )
//   .then(data => {
//     return prisma.query.post(null, '{ id title body published }');
//   })
//   .then(data => {
//     console.log(data);
//   });

// async await

const createPostForUser = async (authorId, data) => {
  const post = await prisma.mutation.createPost(
    {
      data: {
        ...data,
        author: {
          connect: {
            id: authorId
          }
        }
      }
    },
    '{ id }'
  );
  const user = await prisma.query.user(
    {
      where: {
        id: authorId
      }
    },
    '{ id name email posts { id title published } }'
  );
  return user;
};

const updatePostForUser = async (postId, data) => {
  const postExists = await prisma.exists.Post({ id: postId });

  if (!postExists) {
    throw new Error('Post not found');
  }

  const post = await prisma.mutation.updatePost(
    {
      where: {
        id: postId
      },
      data
    },
    '{ author { id name email posts { id title published } } }'
  );

  return post.author;
};
