// seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const routes = [
    {
      name: 'Bielsko-Biała Route 1',
      coordinates: [
        { latitude: 49.8224, longitude: 19.0580, name: 'Old Town Hall', description: 'The Old Town Hall of Bielsko-Biała, located at these coordinates, is a historic building that dates back to the 16th century. It stands as a symbol of the city\'s rich heritage and architectural beauty.' },
        { latitude: 49.8165, longitude: 19.0487, name: 'Bielsko-Biała Museum', description: 'The Bielsko-Biała Museum is a cultural institution dedicated to preserving the history and art of the region. It houses a diverse collection of artifacts, paintings, and exhibits that showcase the city\'s cultural heritage.' },
        { latitude: 49.8212, longitude: 19.0443, name: 'Sulkowski Castle', description: 'Sulkowski Castle, situated at these coordinates, is a magnificent Renaissance-style castle that was built in the 16th century. It is an architectural marvel and an important historical site in Bielsko-Biała.' },
        { latitude: 49.8190, longitude: 19.0374, name: 'St. Nicholas Cathedral', description: 'St. Nicholas Cathedral, located here, is a stunning example of Gothic architecture. This majestic cathedral, dating back to the 15th century, is known for its intricate design, beautiful stained glass windows, and religious significance.' },
        { latitude: 49.8245, longitude: 19.0358, name: 'Market Square', description: 'Market Square is the vibrant heart of Bielsko-Biała. Surrounded by historic buildings, charming cafes, and shops, it is a bustling hub where locals and tourists gather. The square hosts various events and markets, making it a lively place to visit.' },
        { latitude: 49.8203, longitude: 19.0291, name: 'St. Mary\'s Church', description: 'St. Mary\'s Church, located at these coordinates, is an architectural gem that dates back to the 15th century. The church is renowned for its intricate wooden altars, stunning frescoes, and religious significance, making it a must-visit for history and art enthusiasts.' },
        { latitude: 49.8182, longitude: 19.0251, name: 'Babia Góra Mountain', description: 'Babia Góra Mountain, situated in the vicinity, is the highest peak in the Beskid Mountains. It is a popular destination for hiking enthusiasts, offering breathtaking panoramic views of the surrounding landscape. The mountain is also home to diverse flora and fauna, making it a paradise for nature lovers.' },
        { latitude: 49.8108, longitude: 19.0370, name: 'Bielanski Forest Park', description: 'Bielanski Forest Park, located here, is a serene natural oasis in Bielsko-Biała. The park is characterized by lush greenery, walking trails, and peaceful lakes, providing a perfect escape for those seeking tranquility amidst nature. It is a favorite spot for picnics, leisurely strolls, and birdwatching.' }
    ]
    },
    {
      name: 'Bielsko-Biała Route 2',
      coordinates:[
        { latitude: 49.8237, longitude: 19.0432, name: 'Museum of Technology and Textile Industry', description: 'The Museum of Technology and Textile Industry showcases the industrial history of Bielsko-Biała. It exhibits textile machinery, historical artifacts, and textiles, offering insights into the city’s industrial heritage.' },
        { latitude: 49.8221, longitude: 19.0348, name: 'Juliusz Slowacki Theatre', description: 'Juliusz Słowacki Theatre is a renowned architectural gem and a cultural hub in the city. Built in the Neo-Baroque style, it hosts various performances, including plays, operas, and ballets, captivating audiences with its grandeur and artistic excellence.' },
        { latitude: 49.8200, longitude: 19.0333, name: 'Frog House', description: 'The Frog House, a quirky landmark, is adorned with frog sculptures. It represents the city’s sense of humor and creativity. Visitors often stop by to take pictures and enjoy the playful atmosphere of this unique attraction.' },
        { latitude: 49.8186, longitude: 19.0355, name: 'Saint Nicholas Church', description: 'Saint Nicholas Church, a historic religious site, dates back to the 15th century. Its Gothic architecture, intricate decorations, and religious significance make it a must-see for architecture enthusiasts and those interested in local history.' },
        { latitude: 49.8172, longitude: 19.0410, name: 'Castle Hill', description: 'Castle Hill offers panoramic views of Bielsko-Biała and its surroundings. Visitors can enjoy a scenic hike to the top, where the remains of a medieval castle are located. It’s a perfect spot to appreciate the city’s beauty and capture memorable photographs.' },
        { latitude: 49.8155, longitude: 19.0461, name: 'Bielsko-Biała Historical Museum', description: 'The Bielsko-Biała Historical Museum provides in-depth insights into the city’s history and culture. It houses artifacts, documents, and exhibitions that chronicle Bielsko-Biała’s past, making it an essential stop for history enthusiasts.' }
    ]
    },
    {
      name: 'Bielsko-Biała Route 3',
      coordinates:[
        { latitude: 49.8023, longitude: 19.0447, name: 'Wapienica Valley', description: 'Wapienica Valley is a picturesque natural area characterized by lush forests, winding trails, and a serene river. It offers a peaceful escape for nature lovers, providing opportunities for hiking, birdwatching, and enjoying the calming sounds of nature.' },
        { latitude: 49.8097, longitude: 19.0572, name: 'Soszow Ski Resort', description: 'Soszow Ski Resort is a popular destination for winter sports enthusiasts. During the winter months, it offers skiing, snowboarding, and snowshoeing activities. The resort features well-groomed slopes and modern facilities, ensuring an enjoyable experience for visitors.' },
        { latitude: 49.8018, longitude: 19.0746, name: 'Little Beskids Landscape Park', description: 'The Little Beskids Landscape Park is a protected natural area encompassing diverse ecosystems, including forests, meadows, and wetlands. It is home to various wildlife species and plant life, making it an ideal location for eco-tourism and outdoor adventures.' },
        { latitude: 49.8176, longitude: 19.0822, name: 'Stawiany Pond', description: 'Stawiany Pond is a tranquil water body surrounded by scenic landscapes. It is a favorite spot for fishing, picnicking, and relaxation. Visitors can enjoy the serene ambiance and observe local flora and fauna in this natural oasis.' },
        { latitude: 49.8289, longitude: 19.0735, name: 'Klimczok Mountain', description: 'Klimczok Mountain, a prominent peak in the Beskid Śląski range, offers challenging hiking trails and breathtaking views. It is a paradise for outdoor enthusiasts, providing opportunities for hiking, mountaineering, and immersing in the beauty of the surrounding nature.' },
        { latitude: 49.8158, longitude: 19.0906, name: 'Wilkowyja Waterfall', description: 'Wilkowyja Waterfall is a hidden gem nestled in the forested mountains. It is a refreshing sight, especially during the spring and summer months when the waterfall flows gracefully. Visitors can hike to the waterfall and enjoy the natural beauty of this secluded spot.' }
    ]
    },
    {
      name: 'Cieszyn Route',
      coordinates: [
          { latitude: 49.7467, longitude: 18.6340, name: 'Cieszyn Historical Museum', description: 'Cieszyn Historical Museum is a treasure trove of artifacts and exhibits, showcasing the rich history of the region. Visitors can explore archaeological finds, historical documents, and art collections, offering insights into Cieszyn\'s past.' },
          { latitude: 49.7469, longitude: 18.6344, name: 'Cieszyn Castle', description: 'Cieszyn Castle, a medieval fortress perched on a hill, boasts stunning architecture and panoramic views. It served as a residence for noble families and played a significant role in the city\'s history. Visitors can tour the castle grounds and learn about its fascinating heritage.' },
          { latitude: 49.7461, longitude: 18.6349, name: 'St. Mary Church', description: 'St. Mary Church, an architectural masterpiece, showcases Gothic and Baroque elements. Its ornate interior, adorned with frescoes and sculptures, reflects centuries of craftsmanship. The church is a place of worship and a cultural landmark, drawing visitors with its artistic allure.' },
          { latitude: 49.7460, longitude: 18.6357, name: 'Cieszyn City Hall', description: 'Cieszyn City Hall, a symbol of civic pride, is an elegant building with a rich history. It serves as the administrative center of the city and a venue for cultural events. The City Hall\'s facade, adorned with intricate details, captures the essence of Cieszyn\'s architectural heritage.' },
          { latitude: 49.7448, longitude: 18.6368, name: 'Old Market Square', description: 'Old Market Square is the bustling heart of Cieszyn, surrounded by colorful historic buildings and lively cafes. It is a vibrant hub where locals and tourists gather to enjoy outdoor dining, live music, and cultural festivities. The square exudes charm and offers a perfect setting for exploring the city\'s atmosphere.' },
          { latitude: 49.7459, longitude: 18.6375, name: 'Piast Tower', description: 'Piast Tower, a medieval defensive tower, stands as a testament to Cieszyn\'s past. Originally part of the city fortifications, it offers panoramic views of the surrounding area. Visitors can climb to the top and immerse themselves in the tower\'s historical significance and architectural marvel.' },
          { latitude: 49.7465, longitude: 18.6381, name: 'Cieszyn Brewery', description: 'Cieszyn Brewery is a renowned establishment that crafts a variety of beers, each with unique flavors and aromas. Beer enthusiasts can take brewery tours to learn about the brewing process, taste different brews, and appreciate the artistry behind Cieszyn\'s local beers.' },
          { latitude: 49.7462, longitude: 18.6387, name: 'Cieszyn Millennium Bridge', description: 'Cieszyn Millennium Bridge is a modern architectural marvel, connecting two parts of the city across the Olza River. The bridge\'s sleek design and scenic views make it a popular spot for leisurely strolls and photography. It symbolizes the city\'s progress and unity, offering a contemporary contrast to Cieszyn\'s historical charm.' }
      ]
  },
  {
    name: 'Żywiec Route',
    coordinates: [
        { latitude: 49.6861, longitude: 19.1789, name: 'Żywiec Historical Museum', description: 'Żywiec Historical Museum offers a fascinating journey into the region\'s past. It houses exhibits and artifacts showcasing local history, culture, and traditions. Visitors can explore historical documents, photographs, and artifacts, providing valuable insights into Żywiec\'s heritage.' },
        { latitude: 49.6892, longitude: 19.1821, name: 'Żywiec Brewery Museum', description: 'Żywiec Brewery Museum provides a deep dive into the art of brewing. It offers guided tours explaining the beer-making process, from ingredients to bottling. Visitors can learn about Żywiec\'s brewing legacy, taste different brews, and appreciate the craftsmanship behind the renowned Żywiec beers.' },
        { latitude: 49.6867, longitude: 19.1836, name: 'John Paul II Square', description: 'John Paul II Square, named after the beloved Pope, is a central gathering place in Żywiec. The square is surrounded by charming architecture, cafes, and shops. It serves as a hub for community events, cultural festivals, and local celebrations, creating a vibrant atmosphere for residents and visitors alike.' },
        { latitude: 49.6853, longitude: 19.1855, name: 'Żywiec Castle', description: 'Żywiec Castle, an architectural gem, stands proudly overlooking the city. Originally a defensive fortress, it has transformed into a cultural heritage site. Visitors can explore the castle grounds, admire its medieval architecture, and enjoy panoramic views of Żywiec and the surrounding mountains.' },
        { latitude: 49.6868, longitude: 19.1894, name: 'Żywiec Brewery', description: 'Żywiec Brewery is an iconic establishment known for its rich brewing tradition. Established in the 19th century, the brewery produces a wide range of beers appreciated both locally and internationally. Guided tours offer visitors a glimpse into the brewing process, showcasing the expertise and dedication behind Żywiec\'s renowned beers.' },
        { latitude: 49.6862, longitude: 19.1916, name: 'Lake Żywiec', description: 'Lake Żywiec is a serene water body surrounded by picturesque landscapes. It offers opportunities for leisurely boat rides, picnics by the shore, and relaxing walks along the lakeside promenade. The lake provides a tranquil escape, allowing visitors to unwind amidst nature\'s beauty and enjoy breathtaking sunsets.' },
        { latitude: 49.6841, longitude: 19.1955, name: 'Park Zamkowy', description: 'Park Zamkowy, located near Żywiec Castle, is a lush green oasis in the heart of the city. It features manicured gardens, walking paths, and benches, creating a perfect environment for relaxation and outdoor activities. The park\'s peaceful ambiance and scenic beauty make it a popular spot for both locals and tourists.' },
        { latitude: 49.6827, longitude: 19.1969, name: 'Żywiec Papal Hill', description: 'Żywiec Papal Hill is a significant pilgrimage site dedicated to Pope John Paul II. The hilltop shrine offers panoramic views of the city and the surrounding region. Pilgrims and visitors come here to reflect, pray, and admire the serene atmosphere, making it a place of spiritual significance and natural beauty.' },
        { latitude: 49.6815, longitude: 19.1978, name: 'Babiogórski National Park', description: 'Babiogórski National Park, located near Żywiec, is a haven for nature enthusiasts. It is home to diverse flora and fauna, including rare plant species and animals. The park offers hiking trails, allowing visitors to explore the pristine wilderness, enjoy scenic viewpoints, and experience the natural wonders of the region.' }
    ]
},
{
  name: 'Żywiec Route 2',
    coordinates: [
        { latitude: 49.6813, longitude: 19.1917, name: 'Żywiec Rope Park', description: 'Żywiec Rope Park offers thrilling aerial adventures amidst the treetops. Visitors can enjoy various obstacle courses, ziplining, and rope challenges, suitable for all skill levels. It provides an exciting and safe environment for adventure seekers, making it a popular destination for families and adrenaline enthusiasts.' },
        { latitude: 49.6789, longitude: 19.1902, name: 'Żar Mountain', description: 'Żar Mountain is a scenic hiking destination with trails suitable for both beginners and experienced hikers. The summit offers panoramic views of the Beskid Mountains and Lake Żywiec. It is a perfect spot for nature lovers and photographers, providing a rewarding trek through diverse landscapes.' },
        { latitude: 49.6836, longitude: 19.1815, name: 'Żywiec Aqua Park', description: 'Żywiec Aqua Park is a water paradise featuring pools, water slides, and relaxation areas. It offers fun for visitors of all ages, with attractions like wave pools and jacuzzis. Families can enjoy a day of aquatic adventures, making it an ideal destination for cooling off and unwinding during warm days.' },
        { latitude: 49.6897, longitude: 19.1788, name: 'Żywiec Miniature Park', description: 'Żywiec Miniature Park showcases detailed miniature replicas of famous landmarks, castles, and cities from Poland and around the world. It provides an educational and visually engaging experience, allowing visitors to explore intricate miniatures and learn about global architecture and history in a unique way.' },
        { latitude: 49.6942, longitude: 19.1803, name: 'Beskid Museum', description: 'Beskid Museum is dedicated to the cultural heritage of the Beskid region. It houses exhibitions on traditional crafts, folklore, and local traditions. Visitors can discover the customs of the region\'s inhabitants, explore artifacts, and participate in workshops, gaining a deeper understanding of the rich cultural tapestry of Żywiec and its surroundings.' },
        { latitude: 49.6918, longitude: 19.1876, name: 'Żywiec Dam', description: 'Żywiec Dam is a vast reservoir surrounded by lush forests and scenic landscapes. It offers opportunities for sailing, kayaking, and fishing. The dam is a popular spot for outdoor activities and picnics, providing a serene environment to relax and appreciate the beauty of nature.' },
        { latitude: 49.6877, longitude: 19.1899, name: 'Żywiec Beer Garden', description: 'Żywiec Beer Garden is a delightful outdoor venue where visitors can savor local Żywiec beers in a charming setting. Surrounded by greenery, it offers a relaxing atmosphere for enjoying craft beers, local delicacies, and live music. It\'s a perfect place to unwind and socialize, immersing in the vibrant Żywiec culture.' },
        { latitude: 49.6805, longitude: 19.1879, name: 'Żywiec Cinema Museum', description: 'Żywiec Cinema Museum is a unique attraction showcasing the history of cinema. It features vintage film projectors, posters, and memorabilia from the golden age of cinema. Visitors can explore the evolution of filmmaking, watch classic movies, and participate in interactive exhibits, making it a must-visit for film enthusiasts and history buffs.' },
    ]
}
  ];

  for (const route of routes) {
    const createdRoute = await prisma.route.create({
      data: {
        name: route.name,
        coordinates: {
          create: route.coordinates,
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
