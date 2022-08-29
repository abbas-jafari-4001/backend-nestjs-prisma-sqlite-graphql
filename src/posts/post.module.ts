import { Module } from "@nestjs/common";
import { PostsResolvers } from "./post.resolvers";
import { PostsService } from "./post.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    providers: [PostsResolvers, PostsService],
    imports: [PrismaModule],
})
export class PostsModule {}
