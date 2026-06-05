import { ref, onMounted } from 'vue';

export function useTheme() {
    const isDarkMode = ref(false);

    onMounted(() => {
        const savedTheme = sanitiseTheme(localStorage.getItem('theme'));

        if (savedTheme) {
            isDarkMode.value = savedTheme === 'dark';
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            isDarkMode.value = prefersDark;
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        }
        applyTheme(isDarkMode.value);
    });

    const toggleTheme = () => {
        isDarkMode.value = !isDarkMode.value;
        applyTheme(isDarkMode.value);
        localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
    };

    const sanitiseTheme = (theme) => {
        return ['light', 'dark'].includes(theme) ? theme : 'light';
    }

    const applyTheme = (isDark) => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }

    return {
        isDarkMode,
        toggleTheme,
    };
}