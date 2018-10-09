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
        { skip: args.skip, first: args.first, orderBy: args.orderBy },
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
    },
    company: (_, args, context, info) => {
      return context.prisma.query.company(
        {
          where: {
            company: args.company,
          },
        },
        info,
      )
    },
    getAllCompanies: (_, args, context, info) => {
      return context.prisma.query.companies(
        { skip: args.skip, first: args.first, orderBy: args.orderBy },
        info,
      )
    },
    
    getAllStudents: (_, args, context, info) => {
      // console.log("GET ALL STUDENTS")
      return context.prisma.query.students(
        info,
      )
    },
    student: (_, args, context, info) => {
      // console.log("GET ONE STUDENT")
      return context.prisma.query.student(
        {
          where: {
            id: args.id,
          },
        },
        info,
      )
    },

    getAllEvents: (_, args, context, info) => {
      return context.prisma.query.eventses(
        { skip: args.skip, first: args.first, orderBy: args.orderBy },
        info,
      )
    },

    getAllCourses: (_, args, context, info) => {
      return context.prisma.query.courses(
        info,
      )
    },
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