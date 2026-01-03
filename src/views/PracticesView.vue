<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';

const practices = ref([
    {
        id: 1,
        title: 'Práctica de PowerPoint A',
        module: 'POWERPOINT',
        type: 'PDF',
        description: 'Introducción, creación de diapositivas y uso de esquemas.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1g40WOo8Iwb4_4qUGPWpoVf_GJy_W2A6l',
        icon: 'pi pi-desktop',
        color: 'bg-orange-100 text-orange-600',
        difficulty: 'Básico'
    },
    {
        id: 2,
        title: 'Práctica de PowerPoint B',
        module: 'POWERPOINT',
        type: 'PDF',
        description: 'Uso de imágenes, transiciones y animaciones.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1lX6nW49rs1uDh6-cYIXvSajyN2jC_Ga_',
        icon: 'pi pi-desktop',
        color: 'bg-orange-100 text-orange-600',
        difficulty: 'Intermedio'
    },
    {
        id: 3,
        title: 'Práctica de PowerPoint C',
        module: 'POWERPOINT',
        type: 'PDF',
        description: 'Uso de Audio, video, Plantillas en línea y exportación a formato Video.',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1CRTQVgjoZ8VzKiTUn2XdwAfWErl3oZ_l',
        icon: 'pi pi-desktop',
        color: 'bg-orange-100 text-orange-600',
        difficulty: 'Intermedio/Avanzado'
    }
]);

const searchQuery = ref('');

const getDifficultySeverity = (difficulty) => {
    switch (difficulty) {
        case 'Básico': return 'success';
        case 'Intermedio': return 'warn';
        case 'Avanzado': return 'danger';
        default: return 'info';
    }
};

const downloadFile = (url) => {
    if (url !== '#') {
        window.open(url, '_blank');
    } else {
        alert('Este es un archivo de ejemplo. El enlace real se configurará pronto.');
    }
};
</script>

<template>
    <div class="space-y-6 md:space-y-8 max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <header class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="space-y-2 text-center md:text-left">
                <h1 class="text-2xl md:text-3xl font-bold text-slate-900 font-outfit">Sección de Prácticas</h1>
                <p class="text-sm md:text-base text-slate-600">Ejercicios guiados y propuestos para aplicar tus
                    conocimientos.</p>
            </div>
            <div class="relative w-full md:w-auto">
                <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <InputText v-model="searchQuery" placeholder="Buscar práctica..." class="pl-10 w-full md:w-64" />
            </div>
        </header>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card v-for="practice in practices" :key="practice.id"
                class="border border-slate-200 shadow-none hover:shadow-xl transition-all duration-300">
                <template #content>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <Tag :value="practice.module" severity="secondary" />
                            <Tag :value="practice.difficulty" :severity="getDifficultySeverity(practice.difficulty)" />
                        </div>

                        <div class="flex items-start gap-4">
                            <div
                                :class="[practice.color, 'w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0']">
                                <i :class="practice.icon"></i>
                            </div>
                            <div class="space-y-1">
                                <h3 class="font-bold text-slate-800 leading-tight">{{ practice.title }}</h3>
                                <p class="text-xs font-medium text-slate-400 uppercase">{{ practice.type }}</p>
                            </div>
                        </div>

                        <p class="text-sm text-slate-600 line-clamp-3">
                            {{ practice.description }}
                        </p>

                        <div class="pt-4 flex items-center gap-3">
                            <Button label="Descargar Práctica" icon="pi pi-download" class="flex-1"
                                @click="downloadFile(practice.downloadUrl)" />
                            <Button icon="pi pi-eye" severity="secondary" outlined v-tooltip="'Vista previa'" />
                        </div>
                    </div>
                </template>
            </Card>
        </div>

        <!-- Empty State -->
        <div v-if="practices.length === 0"
            class="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <i class="pi pi-folder-open text-5xl text-slate-300 mb-4"></i>
            <h3 class="text-xl font-bold text-slate-800">No hay prácticas disponibles</h3>
            <p class="text-slate-500">Intenta cambiar los términos de búsqueda.</p>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

.font-outfit {
    font-family: 'Outfit', sans-serif;
}
</style>
