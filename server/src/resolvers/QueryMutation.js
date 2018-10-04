module.exports = {
  Query: {
    nationality: (_, args, context, info) => {
      return context.prisma.query.nationality(
        {
          where: {
            nationality: args.nationality,
          },
        },
        info,
      )
    },
    getAllNationalities: (_, args, context, info) => {
      return context.prisma.query.nationalities(
        info,
      )
    },
    funny: (_, args, context, info) => {
      return context.prisma.query.funny(
        {
          where: {
            item: args.item,
          },
        },
        info,
      )
    },
    getAllFunnies: (_, args, context, info) => {
      return context.prisma.query.funnies(
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

// module.exports = { Nationality }