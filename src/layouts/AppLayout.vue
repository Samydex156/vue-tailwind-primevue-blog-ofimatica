<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isSidebarOpen = ref(true);

const items = [
    { label: 'Inicio', icon: 'pi pi-home', route: '/' },
    { label: 'Guías', icon: 'pi pi-book', route: '/blog' },
    { label: 'Descargas', icon: 'pi pi-download', route: '/descargas' },
    { label: 'Prácticas', icon: 'pi pi-pencil', route: '/practicas' },
];

const navigate = (item) => {
    if (item.route) router.push(item.route);
    if (item.url) window.open(item.url, '_blank');
};
</script>

<template>
    <div class="flex h-screen bg-slate-50 overflow-hidden relative">
        <!-- Mobile Sidebar Overlay -->
        <div v-if="isSidebarOpen" @click="isSidebarOpen = false"
            class="lg:hidden fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity"></div>

        <aside :class="[
            'bg-white border-r border-slate-200 transition-all duration-300 flex flex-col fixed inset-y-0 left-0 z-50 lg:static lg:translate-x-0',
            isSidebarOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:w-20 lg:translate-x-0'
        ]">
            <div class="h-16 flex items-center justify-center border-b border-slate-100 shrink-0">
                <i class="pi pi-box text-indigo-600 text-2xl"></i>
                <span v-if="isSidebarOpen || !isSidebarOpen"
                    :class="['ml-2 font-bold text-slate-800 transition-opacity whitespace-nowrap', !isSidebarOpen && 'lg:hidden']">
                    Nueva Tecnología
                </span>
            </div>

            <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
                <button v-for="item in items" :key="item.label"
                    @click="() => { navigate(item); if (window.innerWidth < 1024) isSidebarOpen = false; }"
                    class="w-full flex items-center p-3 rounded-lg hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition-colors group">
                    <i :class="[item.icon, 'text-lg']"></i>
                    <span :class="['ml-3 font-medium transition-opacity', !isSidebarOpen && 'lg:hidden']">{{ item.label
                        }}</span>
                    <i v-if="!isSidebarOpen"
                        class="pi pi-circle-fill text-[4px] absolute right-4 hidden lg:group-hover:block"></i>
                </button>
            </nav>

            <div class="p-4 border-t border-slate-100 shrink-0">
                <div
                    :class="['flex items-center gap-3 p-2 rounded-xl bg-slate-50', !isSidebarOpen && 'lg:justify-center']">
                    <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shrink-0">
                        <i class="pi pi-user text-sm"></i>
                    </div>
                    <div v-if="isSidebarOpen" class="min-w-0">
                        <p class="text-xs font-bold text-slate-900 truncate">Samuel Durán</p>
                        <p class="text-[10px] text-slate-500 truncate text-wrap">Profesor</p>
                    </div>
                </div>
            </div>
        </aside>

        <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
            <header
                class="bg-white h-16 border-b border-slate-200 flex items-center justify-between px-4 md:px-6 shrink-0 z-30">
                <button @click="isSidebarOpen = !isSidebarOpen"
                    class="p-2 -ml-2 text-slate-500 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors">
                    <i :class="[isSidebarOpen ? 'pi pi-align-left' : 'pi pi-bars', 'text-xl']"></i>
                </button>
                <div class="flex items-center gap-4">
                    <div class="hidden sm:flex flex-col items-end">
                        <span class="text-xs font-bold text-slate-900">Ofimatica Pro</span>
                        <span class="text-[10px] text-indigo-600 font-medium">Panel Estudiante</span>
                    </div>
                    <div
                        class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 border border-indigo-100">
                        <i class="pi pi-bell"></i>
                    </div>
                </div>
            </header>

            <main class="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
                <router-view v-slot="{ Component }">
                    <transition name="fade" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </main>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>