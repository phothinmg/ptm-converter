import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
export default{
    input: 'lib/index.js',
    output: {
		format: 'es',
		dir: 'src',
        sourcemap: true
	},
    plugins: [
        resolve(), 
        commonjs(),
        terser()
    ],
    external:['ptm-frontmatter']
}