// seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const routes = [
    {
      description: 'Bielsko-Biała Route',
      coordinates: [
        { latitude: 49.8224, longitude: 19.0580, description: 'Old Town Hall' },
        { latitude: 49.8165, longitude: 19.0487, description: 'Bielsko-Biała Museum' },
        { latitude: 49.8212, longitude: 19.0443, description: 'Sulkowski Castle' },
        { latitude: 49.8190, longitude: 19.0374, description: 'St. Nicholas Cathedral' },
        { latitude: 49.8245, longitude: 19.0358, description: 'Market Square' },
        { latitude: 49.8203, longitude: 19.0291, description: 'St. Mary\'s Church' },
        { latitude: 49.8182, longitude: 19.0251, description: 'Babia Góra Mountain' },
        { latitude: 49.8108, longitude: 19.0370, description: 'Bielanski Forest Park' },
      ],
    },
    {
      description: 'Cieszyn Route',
      coordinates: [
        { latitude: 49.7467, longitude: 18.6340, description: 'Cieszyn Historical Museum' },
        { latitude: 49.7469, longitude: 18.6344, description: 'Cieszyn Castle' },
        { latitude: 49.7461, longitude: 18.6349, description: 'St. Mary Church' },
        { latitude: 49.7460, longitude: 18.6357, description: 'Cieszyn City Hall' },
        { latitude: 49.7448, longitude: 18.6368, description: 'Old Market Square' },
        { latitude: 49.7459, longitude: 18.6375, description: 'Piast Tower' },
        { latitude: 49.7465, longitude: 18.6381, description: 'Cieszyn Brewery' },
        { latitude: 49.7462, longitude: 18.6387, description: 'Cieszyn Millennium Bridge' },
      ],
    },
    {
      description: 'Żywiec Route',
      coordinates: [
        { latitude: 49.6861, longitude: 19.1789, description: 'Żywiec Historical Museum' },
        { latitude: 49.6892, longitude: 19.1821, description: 'Żywiec Brewery Museum' },
        { latitude: 49.6867, longitude: 19.1836, description: 'John Paul II Square' },
        { latitude: 49.6853, longitude: 19.1855, description: 'Żywiec Castle' },
        { latitude: 49.6868, longitude: 19.1894, description: 'Żywiec Brewery' },
        { latitude: 49.6862, longitude: 19.1916, description: 'Lake Żywiec' },
        { latitude: 49.6841, longitude: 19.1955, description: 'Park Zamkowy' },
        { latitude: 49.6827, longitude: 19.1969, description: 'Żywiec Papal Hill' },
        { latitude: 49.6815, longitude: 19.1978, description: 'Babiogórski National Park' },
      ],
    },
  ];

  for (const route of routes) {
    const createdRoute = await prisma.route.create({
      data: {
        description: route.description,
        coordinates: {
          create: route.coordinates, // Use 'create' instead of 'createMany'
        },
      },
    });

    console.log(`Route created with ID: ${createdRoute.id}`);
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
