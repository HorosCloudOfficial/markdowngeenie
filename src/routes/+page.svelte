<script lang="ts">
  import { onMount } from 'svelte';
  import DropZone from '$lib/components/DropZone.svelte';
  import TextArea from '$lib/components/TextArea.svelte';
  import ThemeSelector from '$lib/components/ThemeSelector.svelte';
  import ConvertButton from '$lib/components/ConvertButton.svelte';
  import Toast from '$lib/components/Toast.svelte';
  import { markdownStore, filesStore, themeStore, tocEnabledStore } from '$lib/stores';
  import { convertMarkdownToDocx } from '$lib/utils/converter';
  import type { ToastType } from '$lib/types';

  let toastMessage = '';
  let toastType: ToastType = 'info';
  let showToast = false;
  let isConverting = false;

  function showToastMessage(message: string, type: ToastType = 'info') {
    toastMessage = message;
    toastType = type;
    showToast = true;
    setTimeout(() => {
      showToast = false;
    }, 4000);
  }

  async function handleConvert() {
    if (!$markdownStore.trim()) {
      showToastMessage('Bitte gib zuerst Markdown-Inhalt ein.', 'error');
      return;
    }

    isConverting = true;
    try {
      await convertMarkdownToDocx($markdownStore, $themeStore, $tocEnabledStore);
      showToastMessage('Dokument erfolgreich konvertiert!', 'success');
    } catch (error) {
      console.error('Conversion error:', error);
      showToastMessage('Konvertierung fehlgeschlagen. Bitte versuche es erneut.', 'error');
    } finally {
      isConverting = false;
    }
  }

  onMount(() => {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', $themeStore);
    
    // Listen for theme changes
    themeStore.subscribe((theme) => {
      document.documentElement.setAttribute('data-theme', theme);
    });
  });
</script>

<svelte:head>
  <title>Markdown → Word - Kostenloser Konverter</title>
  <meta name="description" content="Konvertiere Markdown-Dateien sofort in Word-Dokumente. Kostenloses Tool mit Drag-and-Drop und schönen Themes." />
</svelte:head>

<div class="container mx-auto px-4 py-8 max-w-4xl">
  <!-- Header -->
  <header class="text-center mb-8 animate-fade-in">
    <h1 class="text-4xl md:text-5xl font-bold theme-heading mb-4">
      Markdown → Word
    </h1>
    <p class="text-lg theme-text max-w-2xl mx-auto">
      Konvertiere deine Markdown-Dateien sofort in professionell formatierte Word-Dokumente. 
      Keine Anmeldung erforderlich, komplett kostenlos.
    </p>
  </header>

  <!-- Main Card -->
  <div class="theme-bg rounded-xl shadow-lg border theme-border p-6 md:p-8 animate-slide-up">
    <div class="space-y-6">
      <!-- File Upload Section -->
      <section aria-labelledby="upload-heading">
        <h2 id="upload-heading" class="text-xl font-semibold theme-heading mb-4">
          Markdown-Dateien hochladen
        </h2>
        <DropZone />
        
        {#if $filesStore.length > 0}
          <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p class="text-sm theme-text font-medium mb-2">Hochgeladene Dateien:</p>
            <ul class="space-y-1">
              {#each $filesStore as file}
                <li class="text-sm theme-accent flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z"/>
                  </svg>
                  {file.name} ({(file.size / 1024).toFixed(1)} KB)
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </section>

      <!-- Text Input Section -->
      <section aria-labelledby="textarea-heading">
        <h2 id="textarea-heading" class="text-xl font-semibold theme-heading mb-4">
          Oder Markdown einfügen
        </h2>
        <TextArea />
      </section>

      <!-- Options Section -->
      <section aria-labelledby="options-heading">
        <h2 id="options-heading" class="text-xl font-semibold theme-heading mb-4">
          Dokument-Optionen
        </h2>
        
        <div class="space-y-4">
          <ThemeSelector />
          
          <!-- Table of Contents Toggle -->
          <div class="flex items-center">
            <input
              type="checkbox"
              id="toc-enabled"
              bind:checked={$tocEnabledStore}
              class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus-ring dark:bg-gray-700 dark:border-gray-600"
            />
            <label for="toc-enabled" class="ml-2 text-sm theme-text cursor-pointer">
              Inhaltsverzeichnis erstellen
            </label>
          </div>
        </div>
      </section>

      <!-- Convert Button -->
      <ConvertButton 
        on:convert={handleConvert}
        disabled={!$markdownStore.trim() || isConverting}
        loading={isConverting}
      />
    </div>
  </div>

  <!-- Footer -->
  <footer class="text-center mt-12 theme-text">
    <p class="text-sm">
      Entwickelt mit ❤️ von <span class="font-semibold theme-accent">HorosCode</span> · 
      <a href="https://github.com/gambadio/markdowngeenie" class="theme-accent hover:underline">
        Auf GitHub ansehen
      </a>
    </p>
  </footer>
</div>

<!-- Toast Notification -->
{#if showToast}
  <Toast message={toastMessage} type={toastType} />
{/if}