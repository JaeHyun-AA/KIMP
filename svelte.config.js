import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    // TypeScript 옵션을 사용하려면 아래 코드를 추가합니다
    typescript: {
      // tsconfig 파일 경로를 지정합니다 (예: './tsconfig.json')
      // 프로젝트에 해당 파일이 없으면 주석 처리하거나 파일 경로를 수정합니다
      // 설정에 따라 경로가 다를 수 있으므로 실제 파일 경로를 확인하세요
      // tsconfig: './path/to/tsconfig.json',
    },
  }),
};

export default config;
