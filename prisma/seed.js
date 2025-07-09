// import { PrismaClient } from '@prisma/client';
// import { games } from '../src/data.js';

// const prisma = new PrismaClient();

// function parseReleaseDate(dateStr) {
//   const clean = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1');
//   return new Date(clean);
// }

// async function upsertItems(array, model) {
//   const unique = [...new Set(array)];
//   for (const name of unique) {
//     await prisma[model].upsert({
//       where: { name },
//       update: {},
//       create: { name },
//     });
//   }
// }

// async function main() {
//   // Agrupa todos os gêneros e plataformas
//   const allGenres = games.flatMap(g => g.genres);
//   const allPlatforms = games.flatMap(g => g.platforms);

//   // Cria os gêneros e plataformas sem duplicar
//   await upsertItems(allGenres, 'genre');
//   await upsertItems(allPlatforms, 'platform');

//   for (const game of games) {
//     const createdGame = await prisma.game.create({
//       data: {
//         name: game.name,
//         image: game.image,
//         releaseDate: parseReleaseDate(game.release_date),
//         developer: game.developer,
//         publisher: game.publisher,
//       },
//     });

//     for (const genre of game.genres) {
//       const genreRecord = await prisma.genre.findUnique({ where: { name: genre } });
//       await prisma.gameGenre.create({
//         data: {
//           gameId: createdGame.id,
//           genreId: genreRecord.id,
//         },
//       });
//     }

//     for (const platform of game.platforms) {
//       const platformRecord = await prisma.platform.findUnique({ where: { name: platform } });
//       await prisma.gamePlatform.create({
//         data: {
//           gameId: createdGame.id,
//           platformId: platformRecord.id,
//         },
//       });
//     }
//   }

//   console.log('Seed finalizado com sucesso!');
// }

// main()
//   .catch(err => {
//     console.error('Erro ao popular os jogos:', err);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

import { PrismaClient } from '@prisma/client';
import { games } from '../src/data.js';

const prisma = new PrismaClient();

function parseReleaseDate(dateStr) {
  const clean = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1');
  return new Date(clean);
}

async function upsertItems(array, model) {
  const unique = [...new Set(array)];
  for (const name of unique) {
    await prisma[model].upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
}

async function main() {
  // 🧼 Limpa os dados existentes
  await prisma.gameGenre.deleteMany({});
  await prisma.gamePlatform.deleteMany({});
  await prisma.game.deleteMany({});
  await prisma.genre.deleteMany({});
  await prisma.platform.deleteMany({});

  console.log('Dados antigos removidos.');

  // Agrupa todos os gêneros e plataformas
  const allGenres = games.flatMap((g) => g.genres);
  const allPlatforms = games.flatMap((g) => g.platforms);

  // Cria os gêneros e plataformas
  await upsertItems(allGenres, 'genre');
  await upsertItems(allPlatforms, 'platform');

  for (const game of games) {
    const createdGame = await prisma.game.create({
      data: {
        name: game.name,
        image: game.image,
        releaseDate: parseReleaseDate(game.release_date),
        developer: game.developer,
        publisher: game.publisher,
      },
    });

    for (const genre of game.genres) {
      const genreRecord = await prisma.genre.findUnique({ where: { name: genre } });
      if (genreRecord) {
        await prisma.gameGenre.create({
          data: {
            gameId: createdGame.id,
            genreId: genreRecord.id,
          },
        });
      }
    }

    for (const platform of game.platforms) {
      const platformRecord = await prisma.platform.findUnique({ where: { name: platform } });
      if (platformRecord) {
        await prisma.gamePlatform.create({
          data: {
            gameId: createdGame.id,
            platformId: platformRecord.id,
          },
        });
      }
    }
  }

  console.log('Seed finalizado com sucesso!');
}

main()
  .catch((err) => {
    console.error('Erro ao popular os jogos:', err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


