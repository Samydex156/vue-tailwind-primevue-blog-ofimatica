<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Tag from 'primevue/tag';

const posts = [
    {
        id: 1,
        title: 'Guía Completa de Atajos en Word',
        excerpt: 'Aprende los atajos de teclado más útiles para incrementar tu velocidad al redactar documentos.',
        date: '15 May, 2024',
        category: 'WORD',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop',
        author: 'Prof. Durán'
    },
    {
        id: 2,
        title: 'Cómo crear Tablas Dinámicas en Excel',
        excerpt: 'Una guía paso a paso para resumir grandes cantidades de datos de forma profesional.',
        date: '12 May, 2024',
        category: 'EXCEL',
        image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=800&auto=format&fit=crop',
        author: 'Prof. Durán'
    },
    {
        id: 3,
        title: 'Principios de Diseño en PowerPoint',
        excerpt: 'Evita presentaciones aburridas con estos consejos de diseño y estructura visual.',
        date: '10 May, 2024',
        category: 'POWERPOINT',
        image: 'https://images.unsplash.com/photo-1590098563575-a82d9dcd7696?q=80&w=800&auto=format&fit=crop',
        author: 'Prof. Durán'
    },
    {
        id: 4,
        title: 'Uso de IA para Resumir Textos',
        excerpt: 'Descubre cómo utilizar modelos de lenguaje para optimizar tu tiempo de estudio.',
        date: '08 May, 2024',
        category: 'IA',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
        author: 'Prof. Durán'
    }
];

const categories = ['TODOS', 'WORD', 'EXCEL', 'POWERPOINT', 'PUBLISHER', 'INTERNET', 'IA'];
const selectedCategory = ref('TODOS');

const getCategorySeverity = (cat) => {
    switch (cat) {
        case 'WORD': return 'primary';
        case 'EXCEL': return 'success';
        case 'POWERPOINT': return 'warn';
        case 'IA': return 'help';
        default: return 'info';
    }
};
</script>

<template>
    <div class="space-y-6 md:space-y-8 max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <header class="text-left space-y-3 md:space-y-4">
            <h1 class="text-2xl md:text-3xl font-bold text-slate-900 font-outfit">Guías y Tutoriales</h1>
            <p class="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
                Explora nuestra colección de guías detalladas para convertirte en un experto en herramientas de oficina.
            </p>
        </header>

        <div class="flex gap-2 pb-2 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 flex-nowrap md:flex-wrap">
            <Button v-for="cat in categories" :key="cat" :label="cat"
                :severity="selectedCategory === cat ? 'primary' : 'secondary'" size="small" rounded
                @click="selectedCategory = cat" class="whitespace-nowrap shrink-0" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <article v-for="post in posts" :key="post.id"
                class="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                <div class="relative h-48 overflow-hidden">
                    <img :src="post.image" :alt="post.title"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div class="absolute top-4 left-4">
                        <Tag :value="post.category" :severity="getCategorySeverity(post.category)" />
                    </div>
                </div>
                <div class="p-6 flex flex-col flex-1">
                    <div class="flex items-center gap-2 text-xs text-slate-500 mb-3">
                        <i class="pi pi-calendar"></i>
                        {{ post.date }}
                        <span class="mx-1">•</span>
                        <i class="pi pi-user"></i>
                        {{ post.author }}
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                        {{ post.title }}
                    </h3>
                    <p class="text-slate-600 text-sm mb-6 flex-1">
                        {{ post.excerpt }}
                    </p>
                    <Button label="Leer más" icon="pi pi-arrow-right" iconPos="right" text severity="primary"
                        class="self-start p-0" />
                </div>
            </article>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

.font-outfit {
    font-family: 'Outfit', sans-serif;
}
</style>
