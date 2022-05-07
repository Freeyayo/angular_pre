import { IResolvers } from "@graphql-tools/utils";
import { Context } from "..";
import {
  Resolvers,
  User,
  Post,
  Comment,
  Like,
  Notification,
} from "@ngsocial/graphql";
import { ApolloError } from "apollo-server-errors";

const resolvers: IResolvers = {
  Query: {
    message: () => "It works",
  },
};

export default resolvers;
