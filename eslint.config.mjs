import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import { FlatCompat } from '@eslint/eslintrc'
import stylistic from '@stylistic/eslint-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

const config = [
    {
        ignores: ['.next/*'],
    },
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    ...ts.configs.recommended,
    stylistic.configs.customize({
        indent: 4,
    }),
]

export default config
