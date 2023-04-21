import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: 'src', // if we put our index.html file outside of src then we don't need this line
});
