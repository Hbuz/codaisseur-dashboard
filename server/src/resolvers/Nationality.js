module.exports = {
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

// module.exports = { Nationality }