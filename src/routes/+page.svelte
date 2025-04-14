<script>
    import GameEmbed from "$lib/GameEmbed.svelte";
    const games = [
        {title: "Pistol Priest", slug: "pistol-priest"},
        {title: "Mari", slug: "mari"},
    ];
</script>

<h1>Akh Games</h1>
<!-- <GameEmbed path="/games/mari/index.html" title="Mari"/> -->
<ul>
    {#each games as game}
    <li>
        <a href={`/play/${game.slug}`}>
            {game.title}
        </a>
    </li>
    {/each}
</ul>