import type { CodegenConfig } from '@graphql-codegen/cli'

// init dotenv
import dotenv from 'dotenv'
dotenv.config()

// get env variables
const { NEXT_PUBLIC_GRAPHQL_ENDPOINT } = process.env

const config: CodegenConfig = {
	schema: NEXT_PUBLIC_GRAPHQL_ENDPOINT,
	documents: ['src/data/graphql/**/*.graphql'],
	generates: {
		'./src/data/graphql/generated/': {
			plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
			preset: 'client',
		}
	}
}
export default config