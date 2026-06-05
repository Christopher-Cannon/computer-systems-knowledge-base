import { onMounted } from 'vue';
import { useStorage } from '@vueuse/core'

const theme = useStorage('theme', () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
});

export function useTheme() {
    onMounted(() => {
        document.documentElement.setAttribute('data-theme', theme.value);
    });

    const toggleTheme = () => {
        theme.value = theme.value === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme.value);
    };

    return {
        theme,
        toggleTheme,
    };
}