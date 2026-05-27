<script lang="ts">
  import { markdownStore, filesStore } from '$lib/stores';

  let textareaElement: HTMLTextAreaElement;

  // Clear files when user types in textarea
  function handleInput() {
    if ($markdownStore.trim()) {
      filesStore.set([]);
    }
  }

  // Auto-resize textarea
  function autoResize() {
    if (textareaElement) {
      textareaElement.style.height = 'auto';
      textareaElement.style.height = textareaElement.scrollHeight + 'px';
    }
  }

  $: if ($markdownStore) {
    setTimeout(autoResize, 0);
  }
</script>

<div class="relative">
  <textarea
    bind:this={textareaElement}
    bind:value={$markdownStore}
    on:input={handleInput}
    class="w-full min-h-[200px] p-4 border theme-border rounded-lg theme-bg theme-text placeholder-gray-400 dark:placeholder-gray-500 focus-ring resize-none font-mono text-sm leading-relaxed"
    placeholder="# Dein Markdown hier

Schreibe oder füge deinen Markdown-Inhalt hier ein. Dies überschreibt hochgeladene Dateien.

## Features
- **Fetter Text** und *kursiver Text*
- [Links](https://example.com)
- Listen und Code-Blöcke
- Tabellen und mehr!

Fang an zu tippen und sieh die Magie...."
    aria-label="Markdown content input"
    rows="10"
    spellcheck="false"
  ></textarea>

  <!-- Character Count -->
  {#if $markdownStore}
    <div class="absolute bottom-3 right-3 text-xs theme-text opacity-50">
      {$markdownStore.length} characters
    </div>
  {/if}
</div>

<style>
  textarea {
    transition: height 0.2s ease-out;
  }
</style>