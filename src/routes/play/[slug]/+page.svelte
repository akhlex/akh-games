<script lang="ts">
    import GameEmbed from "$lib/GameEmbed.svelte";
    export let data: {
      game: {
        title: string;
        path: string;
      };
    };
    const { game } = data;
</script>
  
<h2 class="text-2xl font-semibold mb-2">{game.title}</h2>
<GameEmbed path={game.path} title={game.title}/>