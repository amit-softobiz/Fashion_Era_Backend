import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class AppResolver{
    @Query(returns => String)
    index():string{
        return "nestjs graphql server...start"
    }
}