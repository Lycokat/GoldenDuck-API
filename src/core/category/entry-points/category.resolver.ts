import { GqlAuthGuard } from '@/guard/gql.guard'
import { UseGuards } from '@nestjs/common'
import { Query, Resolver } from '@nestjs/graphql'
import { CategoryDTO } from '../domain/category.dto'
import { type Category } from '../domain/category.entity'
import { ReadCategoryService } from '../domain/service/read-category.service'

@Resolver()
export class CategoryResolver {
  constructor (
    private readonly readCategoryService: ReadCategoryService
    // private readonly writeCategoryService: WriteCategoryService
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [CategoryDTO])
  async findAll (): Promise<Category[]> {
    return await this.readCategoryService.findAll()
  }

  // @Public()
  // @Query(_returns => CategoryDTO, { name: 'category' })
  // async findOne (@Args('id') id: number): Promise<Category> {
  //   const category = await this.readCategoryService.findOne({ id })

  //   if (category === null) {
  //     throw new NotFoundException('Category not found')
  //   }

  //   return category
  // }
}
