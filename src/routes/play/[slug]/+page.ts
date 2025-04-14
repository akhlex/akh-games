// src/routes/play/[slug]/+page.ts
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
  const gameMap: Record<string, { title: string; path: string }> = {
    "mari": {
      title: "Mari",
      path: "/games/mari/index.html"
    },
    "pistol-priest": {
      title: "Pistol Priest",
      path: "/games/pistol priest/index.html"
    }
  };

  const game = gameMap[params.slug];

  if (!game) {
    throw error(404, 'Game not found');
  }

  return {
    game
  };
};