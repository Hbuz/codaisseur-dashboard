// import * as Koa from 'koa'
const Koa = require('koa')
// import { ApolloServer, gql } from 'apollo-server-koa'
const { ApolloServer, gql } = require('apollo-server-koa')
const { importSchema } = require('graphql-import')

// import { resolvers } from './resolvers'
// const { resolvers } = require('./resolvers')

// import { Prisma } from 'prisma-binding'
const { Prisma } = require('prisma-binding')
const path = require('path')


const resolvers = {
  Query: {
    nationality: (_, args, context, info) => {
      return context.prisma.query.nationality(
        info,
      )
    },
    getAllNationalities: (_, args, context, info) => {
      return context.prisma.query.nationalities(
        info,
      )
    }
  },
  Mutation: {
    addNationality: (_, args, context, info) => {
      return context.prisma.mutation.createNationality(
        {
          data: {
            nationality: args.nationality,
            count: args.count
          },
        },
        info,
      )
    },
  }
}



const typeDefs = importSchema(path.resolve('src/schema.graphql'))


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'http://localhost:4466',
    }),
  }),
})


const app = new Koa();
server.applyMiddleware({ app });


app
  .listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
  );
