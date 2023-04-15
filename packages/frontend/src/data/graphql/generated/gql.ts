/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query MOVIES {\n  allMovie {\n    _id\n    _type\n    title\n    _createdAt\n    _updatedAt\n    releaseDate\n    externalId\n    poster {\n      _type\n      crop {\n        _key\n        top\n      }\n      asset {\n        _id\n        originalFilename\n        label\n        description\n        altText\n        url\n        size\n        sha1hash\n        metadata {\n          _key\n          blurHash\n        }\n        source {\n          url\n          name\n        }\n      }\n      hotspot {\n        height\n        width\n        x\n        y\n      }\n      crop {\n        _type\n        _key\n      }\n    }\n    slug {\n      _key\n      current\n    }\n  }\n}": types.MoviesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query MOVIES {\n  allMovie {\n    _id\n    _type\n    title\n    _createdAt\n    _updatedAt\n    releaseDate\n    externalId\n    poster {\n      _type\n      crop {\n        _key\n        top\n      }\n      asset {\n        _id\n        originalFilename\n        label\n        description\n        altText\n        url\n        size\n        sha1hash\n        metadata {\n          _key\n          blurHash\n        }\n        source {\n          url\n          name\n        }\n      }\n      hotspot {\n        height\n        width\n        x\n        y\n      }\n      crop {\n        _type\n        _key\n      }\n    }\n    slug {\n      _key\n      current\n    }\n  }\n}"): (typeof documents)["query MOVIES {\n  allMovie {\n    _id\n    _type\n    title\n    _createdAt\n    _updatedAt\n    releaseDate\n    externalId\n    poster {\n      _type\n      crop {\n        _key\n        top\n      }\n      asset {\n        _id\n        originalFilename\n        label\n        description\n        altText\n        url\n        size\n        sha1hash\n        metadata {\n          _key\n          blurHash\n        }\n        source {\n          url\n          name\n        }\n      }\n      hotspot {\n        height\n        width\n        x\n        y\n      }\n      crop {\n        _type\n        _key\n      }\n    }\n    slug {\n      _key\n      current\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;