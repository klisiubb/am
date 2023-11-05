import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RoutesService {
    constructor(private prisma: PrismaService) {}
    
    async getAllRoutes(){
        const routes = await this.prisma.route.findMany();
        return routes;
    }
    async getRouteById(id: number) {
        const route = await this.prisma.route.findUnique({
            where: {
                id: id,
            },
            include: {
                coordinates: true,
            },
        });

        if (!route) {
            throw new NotFoundException(`Route with ID ${id} not found.`);
        }

        return route;
    }
}
