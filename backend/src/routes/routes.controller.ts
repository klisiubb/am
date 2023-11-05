import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {
    constructor( private routesService:RoutesService){}
    @Get()
    async getAllRoutes(){
        return await this.routesService.getAllRoutes();
    }
    @Get(':id')
    async getRouteById(@Param('id',ParseIntPipe) id: number) {
  return await this.routesService.getRouteById(id);
}
}
