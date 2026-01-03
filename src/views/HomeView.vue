<script setup>
import { useRouter } from 'vue-router';
import Button from 'primevue/button';
import Card from 'primevue/card';

const router = useRouter();

const categories = [
    {
        icon: 'pi pi-file-word',
        title: 'Word',
        desc: 'Domina la redacción y formato de documentos profesionales.',
        route: '/blog',
        color: 'text-blue-600',
        bg: 'bg-blue-50'
    },
    {
        icon: 'pi pi-file-excel',
        title: 'Excel',
        desc: 'Aprende a gestionar datos y crear fórmulas avanzadas.',
        route: '/blog',
        color: 'text-green-600',
        bg: 'bg-green-50'
    },
    {
        icon: 'pi pi-desktop',
        title: 'PowerPoint',
        desc: 'Crea presentaciones impactantes y profesionales.',
        route: '/blog',
        color: 'text-orange-600',
        bg: 'bg-orange-50'
    },
    {
        icon: 'pi pi-sparkles',
        title: 'IA',
        desc: 'Potencia tu productividad con Inteligencia Artificial.',
        route: '/blog',
        color: 'text-purple-600',
        bg: 'bg-purple-50'
    }
];
</script>

<template>
    <div class="space-y-16 pb-12">
        <!-- Hero Section -->
        <section class="relative h-[500px] flex items-center justify-center overflow-hidden rounded-3xl mx-4 mt-4">
            <img src="/FondoOfi.png"
                alt="Ofmática Hero" class="absolute inset-0 w-full h-full object-cover">
            <div class="absolute inset-0 bg-linear-to-r from-blue-900/80 to-indigo-800/40"></div>

            <div class="relative z-10 text-center text-white px-4 max-w-3xl animate-fade-up">
                <span
                    class="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase bg-indigo-500/30 backdrop-blur-md border border-white/20 rounded-full">
                    Plataforma de Estudiantes
                </span>
                <h1 class="text-4xl md:text-6xl font-extrabold mb-6 font-outfit leading-tight">
                    Domina la Ofimática <br />
                    <span class="text-indigo-300">Nivel Profesional</span>
                </h1>
                <p class="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
                    Tu portal completo de recursos, guías paso a paso y archivos de práctica para convertirte en un
                    experto.
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <Button label="Explorar Guías" icon="pi pi-book" size="large" @click="router.push('/blog')" />
                    <Button label="Descargar Material" icon="pi pi-download" severity="secondary" outlined size="large"
                        @click="router.push('/descargas')" class="text-white! border-white/40! hover:bg-white/10!" />
                </div>
            </div>
        </section>

        <!-- Modules Section -->
        <section class="max-w-7xl mx-auto px-6 space-y-10">
            <div class="text-center space-y-4">
                <h2 class="text-3xl font-bold text-slate-900 font-outfit">¿Qué quieres aprender hoy?</h2>
                <p class="text-slate-500 max-w-2xl mx-auto">Selecciona un área de estudio y accede a guías
                    especializadas y material descargable.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="item in categories" :key="item.title"
                    class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    @click="router.push(item.route)">
                    <div
                        :class="[item.bg, item.color, 'w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform']">
                        <i :class="item.icon"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 mb-3">{{ item.title }}</h3>
                    <p class="text-slate-500 text-sm leading-relaxed mb-6">{{ item.desc }}</p>
                    <div
                        class="flex items-center text-xs font-bold uppercase tracking-wider text-indigo-600 group-hover:gap-2 transition-all">
                        Ver Guías <i class="pi pi-arrow-right ml-1"></i>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTAs / Features -->
        <section class="max-w-7xl mx-auto px-6">
            <div
                class="bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
                <div class="relative z-10 space-y-6 md:w-1/2">
                    <div
                        class="inline-flex items-center gap-2 text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        <span class="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span> Nuevo Módulo
                    </div>
                    <h2 class="text-3xl md:text-4xl font-bold text-white font-outfit">Inteligencia Artificial Aplicada
                    </h2>
                    <p class="text-slate-400 text-lg leading-relaxed">
                        No te quedes atrás. Aprende a utilizar ChatGPT, Copilot y otras herramientas de IA para hacer
                        tus trabajos en minutos, no en horas.
                    </p>
                    <Button label="Ir a IA" icon="pi pi-sparkles" severity="help" size="large"
                        @click="router.push('/blog')" />
                </div>
                <div class="md:w-1/2 relative flex justify-center">
                    <div class="w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl absolute -top-10 -right-10"></div>
                    <div class="w-48 h-48 bg-purple-500/20 rounded-full blur-3xl absolute -bottom-10 -left-10"></div>
                    <i class="pi pi-sparkles text-[180px] text-indigo-500/20 rotate-12"></i>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;800&display=swap');

.font-outfit {
    font-family: 'Outfit', sans-serif;
}

.animate-fade-up {
    animation: fadeUp 0.8s ease-out forwards;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>