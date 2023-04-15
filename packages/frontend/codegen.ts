import type { CodegenConfig } from '@graphql-codegen/cli'

// init dotenv
import dotenv from 'dotenv'
dotenv.config()

// get env variables
const { NEXT_PUBLIC_GRAPHQL_ENDPOINT } = process.env

const config: CodegenConfig = {
	schema: NEXT_PUBLIC_GRAPHQL_ENDPOINT,
	generates: {
		'./src/data/graphql/generated/graphql.ts': {
			overwrite: true,
			documents: ['./src/data/graphql/**/*.graphql'],
			plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
		}
	}
}
export default config