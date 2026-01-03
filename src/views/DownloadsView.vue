<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Tag from 'primevue/tag';

const modules = [
    {
        id: 'word',
        name: 'WORD',
        icon: 'pi pi-file-word',
        color: 'bg-blue-100 text-blue-600',
        description: 'Documentos, formatos, tablas y estilos profesionales.',
        files: [
            { name: 'Práctica de Tablas.docx', size: '156 KB' },
            { name: 'Plantilla de Currículum.docx', size: '240 KB' },
            { name: 'Base Examen Word.docx', size: '1.2 MB' }
        ]
    },
    {
        id: 'excel',
        name: 'EXCEL',
        icon: 'pi pi-file-excel',
        color: 'bg-green-100 text-green-600',
        description: 'Fórmulas, funciones, tablas dinámicas y análisis de datos.',
        files: [
            { name: 'Ejercicio de Funciones.xlsx', size: '45 KB' },
            { name: 'Base de Datos Ventas.xlsx', size: '1.5 MB' },
            { name: 'Presupuesto Familiar.xlsx', size: '88 KB' }
        ]
    },
    {
        id: 'powerpoint',
        name: 'POWERPOINT',
        icon: 'pi pi-desktop',
        color: 'bg-orange-100 text-orange-600',
        description: 'Presentaciones dinámicas, animaciones y transiciones.',
        files: [
            { name: 'Presentación Base.pptx', size: '2.4 MB' },
            { name: 'Recursos Gráficos.zip', size: '5.6 MB' }
        ]
    },
    {
        id: 'publisher',
        name: 'PUBLISHER',
        icon: 'pi pi-palette',
        color: 'bg-teal-100 text-teal-600',
        description: 'Diseño de folletos, tarjetas y material publicitario.',
        files: [
            { name: 'Plantilla de Tríptico.pub', size: '3.1 MB' },
            { name: 'Diseño de Tarjetas.pub', size: '1.8 MB' }
        ]
    },
    {
        id: 'internet',
        name: 'INTERNET',
        icon: 'pi pi-globe',
        color: 'bg-cyan-100 text-cyan-600',
        description: 'Navegación segura, correo electrónico y búsqueda avanzada.',
        files: [
            { name: 'Guía Navegadores.pdf', size: '1.2 MB' },
            { name: 'Manual Outlook.pdf', size: '2.5 MB' }
        ]
    },
    {
        id: 'ia',
        name: 'INTELIGENCIA ARTIFICIAL',
        icon: 'pi pi-sparkles',
        color: 'bg-purple-100 text-purple-600',
        description: 'Herramientas de IA para mejorar la productividad académica.',
        files: [
            { name: 'Prompts básicos.pdf', size: '850 KB' },
            { name: 'Lista Herramientas IA.pdf', size: '1.1 MB' }
        ]
    }
];

const selectedModule = ref(null);

const selectModule = (m) => {
    selectedModule.value = m;
};
</script>

<template>
    <div class="space-y-8 max-w-7xl mx-auto p-4 lg:p-8">
        <header class="text-left space-y-4">
            <h1 class="text-3xl font-bold text-slate-900">Centro de Descargas</h1>
            <p class="text-slate-600 max-w-2xl">
                Accede a todos los archivos base, ejercicios y recursos necesarios para tus clases de ofimática.
                Divididos por módulos para una mejor organización.
            </p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card v-for="mod in modules" :key="mod.id"
                class="overflow-hidden border border-slate-200 shadow-none hover:border-indigo-300 hover:shadow-lg transition-all cursor-pointer group"
                @click="selectModule(mod)">
                <template #content>
                    <div class="flex items-start gap-4">
                        <div
                            :class="[mod.color, 'w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform']">
                            <i :class="mod.icon"></i>
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-lg font-bold text-slate-800">{{ mod.name }}</h3>
                            <p class="text-sm text-slate-500 line-clamp-2">{{ mod.description }}</p>
                            <div class="flex items-center text-xs font-medium text-indigo-600 pt-2">
                                {{ mod.files.length }} Archivos disponibles
                                <i class="pi pi-chevron-right ml-1"></i>
                            </div>
                        </div>
                    </div>
                </template>
            </Card>
        </div>

        <!-- Modal or Detail Section for selected module -->
        <div v-if="selectedModule" class="bg-white border border-slate-200 rounded-2xl p-6 mt-8 animate-fade-in">
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-3">
                    <div
                        :class="[selectedModule.color, 'w-10 h-10 rounded-lg flex items-center justify-center text-xl']">
                        <i :class="selectedModule.icon"></i>
                    </div>
                    <h2 class="text-xl font-bold text-slate-800">Archivos: {{ selectedModule.name }}</h2>
                </div>
                <Button icon="pi pi-times" severity="secondary" text rounded @click="selectedModule = null" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="file in selectedModule.files" :key="file.name"
                    class="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition-colors group">
                    <div class="flex items-center gap-3">
                        <i class="pi pi-file text-slate-400 group-hover:text-indigo-500"></i>
                        <div>
                            <p class="text-sm font-semibold text-slate-700">{{ file.name }}</p>
                            <p class="text-xs text-slate-500">{{ file.size }}</p>
                        </div>
                    </div>
                    <Button icon="pi pi-download" size="small" rounded text severity="primary"
                        v-tooltip="'Descargar'" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
