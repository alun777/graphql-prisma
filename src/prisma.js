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
