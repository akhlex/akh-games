<script>
    import GameEmbed from "$lib/GameEmbed.svelte";
    const games = [
        {title: "Pistol Priest", slug: "pistol-priest", thumbnail: "/thumbnails/pistol-priest.png"},
        {title: "Mari", slug: "mari", thumbnail: "/thumbnails/mari.png"},
    ];
</script>

<h1 class="text-3xl font-bold mb-4">Akh Games</h1>
<!-- <div class="bg-red-500 w-20 h-20"></div> -->

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {#each games as game}
      <a href={`/play/${game.slug}`} class="block border rounded shadow hover:shadow-lg transition max-w-[200px] mx-auto">
        <img
          src={game.thumbnail}
          alt={`${game.title} thumbnail`}
          class="w-[200px] h-[150px] object-cover rounded-t"
          loading="lazy"
        />
        <div class="p-2 text-center text-sm font-medium">{game.title}</div>
      </a>
    {/each}
  </div>
  
  