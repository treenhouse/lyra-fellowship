
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Base
 * 
 */
export type Base = $Result.DefaultSelection<Prisma.$BasePayload>
/**
 * Model BaseMember
 * 
 */
export type BaseMember = $Result.DefaultSelection<Prisma.$BaseMemberPayload>
/**
 * Model Table
 * 
 */
export type Table = $Result.DefaultSelection<Prisma.$TablePayload>
/**
 * Model Field
 * 
 */
export type Field = $Result.DefaultSelection<Prisma.$FieldPayload>
/**
 * Model Record
 * 
 */
export type Record = $Result.DefaultSelection<Prisma.$RecordPayload>
/**
 * Model CellValue
 * 
 */
export type CellValue = $Result.DefaultSelection<Prisma.$CellValuePayload>
/**
 * Model View
 * 
 */
export type View = $Result.DefaultSelection<Prisma.$ViewPayload>
/**
 * Model ViewFilter
 * 
 */
export type ViewFilter = $Result.DefaultSelection<Prisma.$ViewFilterPayload>
/**
 * Model ViewFilterGroup
 * 
 */
export type ViewFilterGroup = $Result.DefaultSelection<Prisma.$ViewFilterGroupPayload>
/**
 * Model ViewSort
 * 
 */
export type ViewSort = $Result.DefaultSelection<Prisma.$ViewSortPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FieldType: {
  text: 'text',
  number: 'number'
};

export type FieldType = (typeof FieldType)[keyof typeof FieldType]


export const SortDirection: {
  asc: 'asc',
  desc: 'desc'
};

export type SortDirection = (typeof SortDirection)[keyof typeof SortDirection]

}

export type FieldType = $Enums.FieldType

export const FieldType: typeof $Enums.FieldType

export type SortDirection = $Enums.SortDirection

export const SortDirection: typeof $Enums.SortDirection

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.base`: Exposes CRUD operations for the **Base** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bases
    * const bases = await prisma.base.findMany()
    * ```
    */
  get base(): Prisma.BaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.baseMember`: Exposes CRUD operations for the **BaseMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BaseMembers
    * const baseMembers = await prisma.baseMember.findMany()
    * ```
    */
  get baseMember(): Prisma.BaseMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.table`: Exposes CRUD operations for the **Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.TableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.field`: Exposes CRUD operations for the **Field** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fields
    * const fields = await prisma.field.findMany()
    * ```
    */
  get field(): Prisma.FieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.record`: Exposes CRUD operations for the **Record** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Records
    * const records = await prisma.record.findMany()
    * ```
    */
  get record(): Prisma.RecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cellValue`: Exposes CRUD operations for the **CellValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CellValues
    * const cellValues = await prisma.cellValue.findMany()
    * ```
    */
  get cellValue(): Prisma.CellValueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.view`: Exposes CRUD operations for the **View** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.view.findMany()
    * ```
    */
  get view(): Prisma.ViewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viewFilter`: Exposes CRUD operations for the **ViewFilter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViewFilters
    * const viewFilters = await prisma.viewFilter.findMany()
    * ```
    */
  get viewFilter(): Prisma.ViewFilterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viewFilterGroup`: Exposes CRUD operations for the **ViewFilterGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViewFilterGroups
    * const viewFilterGroups = await prisma.viewFilterGroup.findMany()
    * ```
    */
  get viewFilterGroup(): Prisma.ViewFilterGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viewSort`: Exposes CRUD operations for the **ViewSort** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViewSorts
    * const viewSorts = await prisma.viewSort.findMany()
    * ```
    */
  get viewSort(): Prisma.ViewSortDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Base: 'Base',
    BaseMember: 'BaseMember',
    Table: 'Table',
    Field: 'Field',
    Record: 'Record',
    CellValue: 'CellValue',
    View: 'View',
    ViewFilter: 'ViewFilter',
    ViewFilterGroup: 'ViewFilterGroup',
    ViewSort: 'ViewSort'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "user" | "verificationToken" | "base" | "baseMember" | "table" | "field" | "record" | "cellValue" | "view" | "viewFilter" | "viewFilterGroup" | "viewSort"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Base: {
        payload: Prisma.$BasePayload<ExtArgs>
        fields: Prisma.BaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          findFirst: {
            args: Prisma.BaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          findMany: {
            args: Prisma.BaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>[]
          }
          create: {
            args: Prisma.BaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          createMany: {
            args: Prisma.BaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>[]
          }
          delete: {
            args: Prisma.BaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          update: {
            args: Prisma.BaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          deleteMany: {
            args: Prisma.BaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>[]
          }
          upsert: {
            args: Prisma.BaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          aggregate: {
            args: Prisma.BaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBase>
          }
          groupBy: {
            args: Prisma.BaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<BaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.BaseCountArgs<ExtArgs>
            result: $Utils.Optional<BaseCountAggregateOutputType> | number
          }
        }
      }
      BaseMember: {
        payload: Prisma.$BaseMemberPayload<ExtArgs>
        fields: Prisma.BaseMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BaseMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BaseMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseMemberPayload>
          }
          findFirst: {
            args: Prisma.BaseMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BaseMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseMemberPayload>
          }
          findMany: {
            args: Prisma.BaseMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseMemberPayload>[]
          }
          create: {
            args: Prisma.BaseMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseMemberPayload>
          }
          createMany: {
            args: Prisma.BaseMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BaseMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseMemberPayload>[]
          }
          delete: {
            args: Prisma.BaseMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseMemberPayload>
          }
          update: {
            args: Prisma.BaseMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseMemberPayload>
          }
          deleteMany: {
            args: Prisma.BaseMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BaseMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BaseMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseMemberPayload>[]
          }
          upsert: {
            args: Prisma.BaseMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseMemberPayload>
          }
          aggregate: {
            args: Prisma.BaseMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBaseMember>
          }
          groupBy: {
            args: Prisma.BaseMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<BaseMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.BaseMemberCountArgs<ExtArgs>
            result: $Utils.Optional<BaseMemberCountAggregateOutputType> | number
          }
        }
      }
      Table: {
        payload: Prisma.$TablePayload<ExtArgs>
        fields: Prisma.TableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findFirst: {
            args: Prisma.TableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findMany: {
            args: Prisma.TableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          create: {
            args: Prisma.TableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          createMany: {
            args: Prisma.TableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          delete: {
            args: Prisma.TableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          update: {
            args: Prisma.TableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          deleteMany: {
            args: Prisma.TableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          upsert: {
            args: Prisma.TableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          aggregate: {
            args: Prisma.TableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable>
          }
          groupBy: {
            args: Prisma.TableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableCountArgs<ExtArgs>
            result: $Utils.Optional<TableCountAggregateOutputType> | number
          }
        }
      }
      Field: {
        payload: Prisma.$FieldPayload<ExtArgs>
        fields: Prisma.FieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          findFirst: {
            args: Prisma.FieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          findMany: {
            args: Prisma.FieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>[]
          }
          create: {
            args: Prisma.FieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          createMany: {
            args: Prisma.FieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>[]
          }
          delete: {
            args: Prisma.FieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          update: {
            args: Prisma.FieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          deleteMany: {
            args: Prisma.FieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>[]
          }
          upsert: {
            args: Prisma.FieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          aggregate: {
            args: Prisma.FieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateField>
          }
          groupBy: {
            args: Prisma.FieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<FieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.FieldCountArgs<ExtArgs>
            result: $Utils.Optional<FieldCountAggregateOutputType> | number
          }
        }
      }
      Record: {
        payload: Prisma.$RecordPayload<ExtArgs>
        fields: Prisma.RecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          findFirst: {
            args: Prisma.RecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          findMany: {
            args: Prisma.RecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[]
          }
          create: {
            args: Prisma.RecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          createMany: {
            args: Prisma.RecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[]
          }
          delete: {
            args: Prisma.RecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          update: {
            args: Prisma.RecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          deleteMany: {
            args: Prisma.RecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[]
          }
          upsert: {
            args: Prisma.RecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          aggregate: {
            args: Prisma.RecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecord>
          }
          groupBy: {
            args: Prisma.RecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecordCountArgs<ExtArgs>
            result: $Utils.Optional<RecordCountAggregateOutputType> | number
          }
        }
      }
      CellValue: {
        payload: Prisma.$CellValuePayload<ExtArgs>
        fields: Prisma.CellValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CellValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CellValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellValuePayload>
          }
          findFirst: {
            args: Prisma.CellValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CellValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellValuePayload>
          }
          findMany: {
            args: Prisma.CellValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellValuePayload>[]
          }
          create: {
            args: Prisma.CellValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellValuePayload>
          }
          createMany: {
            args: Prisma.CellValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CellValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellValuePayload>[]
          }
          delete: {
            args: Prisma.CellValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellValuePayload>
          }
          update: {
            args: Prisma.CellValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellValuePayload>
          }
          deleteMany: {
            args: Prisma.CellValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CellValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CellValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellValuePayload>[]
          }
          upsert: {
            args: Prisma.CellValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellValuePayload>
          }
          aggregate: {
            args: Prisma.CellValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCellValue>
          }
          groupBy: {
            args: Prisma.CellValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<CellValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.CellValueCountArgs<ExtArgs>
            result: $Utils.Optional<CellValueCountAggregateOutputType> | number
          }
        }
      }
      View: {
        payload: Prisma.$ViewPayload<ExtArgs>
        fields: Prisma.ViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          findFirst: {
            args: Prisma.ViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          findMany: {
            args: Prisma.ViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>[]
          }
          create: {
            args: Prisma.ViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          createMany: {
            args: Prisma.ViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>[]
          }
          delete: {
            args: Prisma.ViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          update: {
            args: Prisma.ViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          deleteMany: {
            args: Prisma.ViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>[]
          }
          upsert: {
            args: Prisma.ViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          aggregate: {
            args: Prisma.ViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateView>
          }
          groupBy: {
            args: Prisma.ViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewCountArgs<ExtArgs>
            result: $Utils.Optional<ViewCountAggregateOutputType> | number
          }
        }
      }
      ViewFilter: {
        payload: Prisma.$ViewFilterPayload<ExtArgs>
        fields: Prisma.ViewFilterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewFilterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewFilterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>
          }
          findFirst: {
            args: Prisma.ViewFilterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewFilterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>
          }
          findMany: {
            args: Prisma.ViewFilterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>[]
          }
          create: {
            args: Prisma.ViewFilterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>
          }
          createMany: {
            args: Prisma.ViewFilterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewFilterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>[]
          }
          delete: {
            args: Prisma.ViewFilterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>
          }
          update: {
            args: Prisma.ViewFilterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>
          }
          deleteMany: {
            args: Prisma.ViewFilterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewFilterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewFilterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>[]
          }
          upsert: {
            args: Prisma.ViewFilterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>
          }
          aggregate: {
            args: Prisma.ViewFilterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViewFilter>
          }
          groupBy: {
            args: Prisma.ViewFilterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewFilterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewFilterCountArgs<ExtArgs>
            result: $Utils.Optional<ViewFilterCountAggregateOutputType> | number
          }
        }
      }
      ViewFilterGroup: {
        payload: Prisma.$ViewFilterGroupPayload<ExtArgs>
        fields: Prisma.ViewFilterGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewFilterGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewFilterGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterGroupPayload>
          }
          findFirst: {
            args: Prisma.ViewFilterGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewFilterGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterGroupPayload>
          }
          findMany: {
            args: Prisma.ViewFilterGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterGroupPayload>[]
          }
          create: {
            args: Prisma.ViewFilterGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterGroupPayload>
          }
          createMany: {
            args: Prisma.ViewFilterGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewFilterGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterGroupPayload>[]
          }
          delete: {
            args: Prisma.ViewFilterGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterGroupPayload>
          }
          update: {
            args: Prisma.ViewFilterGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterGroupPayload>
          }
          deleteMany: {
            args: Prisma.ViewFilterGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewFilterGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewFilterGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterGroupPayload>[]
          }
          upsert: {
            args: Prisma.ViewFilterGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterGroupPayload>
          }
          aggregate: {
            args: Prisma.ViewFilterGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViewFilterGroup>
          }
          groupBy: {
            args: Prisma.ViewFilterGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewFilterGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewFilterGroupCountArgs<ExtArgs>
            result: $Utils.Optional<ViewFilterGroupCountAggregateOutputType> | number
          }
        }
      }
      ViewSort: {
        payload: Prisma.$ViewSortPayload<ExtArgs>
        fields: Prisma.ViewSortFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewSortFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewSortFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>
          }
          findFirst: {
            args: Prisma.ViewSortFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewSortFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>
          }
          findMany: {
            args: Prisma.ViewSortFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>[]
          }
          create: {
            args: Prisma.ViewSortCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>
          }
          createMany: {
            args: Prisma.ViewSortCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewSortCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>[]
          }
          delete: {
            args: Prisma.ViewSortDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>
          }
          update: {
            args: Prisma.ViewSortUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>
          }
          deleteMany: {
            args: Prisma.ViewSortDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewSortUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewSortUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>[]
          }
          upsert: {
            args: Prisma.ViewSortUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>
          }
          aggregate: {
            args: Prisma.ViewSortAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViewSort>
          }
          groupBy: {
            args: Prisma.ViewSortGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewSortGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewSortCountArgs<ExtArgs>
            result: $Utils.Optional<ViewSortCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    base?: BaseOmit
    baseMember?: BaseMemberOmit
    table?: TableOmit
    field?: FieldOmit
    record?: RecordOmit
    cellValue?: CellValueOmit
    view?: ViewOmit
    viewFilter?: ViewFilterOmit
    viewFilterGroup?: ViewFilterGroupOmit
    viewSort?: ViewSortOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    memberships: number
    recordsCreated: number
    tables: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    recordsCreated?: boolean | UserCountOutputTypeCountRecordsCreatedArgs
    tables?: boolean | UserCountOutputTypeCountTablesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecordsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
  }


  /**
   * Count Type BaseCountOutputType
   */

  export type BaseCountOutputType = {
    tables: number
    members: number
  }

  export type BaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tables?: boolean | BaseCountOutputTypeCountTablesArgs
    members?: boolean | BaseCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseCountOutputType
     */
    select?: BaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeCountTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
  }

  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseMemberWhereInput
  }


  /**
   * Count Type TableCountOutputType
   */

  export type TableCountOutputType = {
    fields: number
    records: number
    views: number
  }

  export type TableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | TableCountOutputTypeCountFieldsArgs
    records?: boolean | TableCountOutputTypeCountRecordsArgs
    views?: boolean | TableCountOutputTypeCountViewsArgs
  }

  // Custom InputTypes
  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableCountOutputType
     */
    select?: TableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldWhereInput
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordWhereInput
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewWhereInput
  }


  /**
   * Count Type FieldCountOutputType
   */

  export type FieldCountOutputType = {
    cells: number
    viewFilters: number
    viewSorts: number
  }

  export type FieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cells?: boolean | FieldCountOutputTypeCountCellsArgs
    viewFilters?: boolean | FieldCountOutputTypeCountViewFiltersArgs
    viewSorts?: boolean | FieldCountOutputTypeCountViewSortsArgs
  }

  // Custom InputTypes
  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCountOutputType
     */
    select?: FieldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeCountCellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CellValueWhereInput
  }

  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeCountViewFiltersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewFilterWhereInput
  }

  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeCountViewSortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewSortWhereInput
  }


  /**
   * Count Type RecordCountOutputType
   */

  export type RecordCountOutputType = {
    cells: number
  }

  export type RecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cells?: boolean | RecordCountOutputTypeCountCellsArgs
  }

  // Custom InputTypes
  /**
   * RecordCountOutputType without action
   */
  export type RecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordCountOutputType
     */
    select?: RecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecordCountOutputType without action
   */
  export type RecordCountOutputTypeCountCellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CellValueWhereInput
  }


  /**
   * Count Type ViewCountOutputType
   */

  export type ViewCountOutputType = {
    filters: number
    filterGroups: number
    sorts: number
  }

  export type ViewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filters?: boolean | ViewCountOutputTypeCountFiltersArgs
    filterGroups?: boolean | ViewCountOutputTypeCountFilterGroupsArgs
    sorts?: boolean | ViewCountOutputTypeCountSortsArgs
  }

  // Custom InputTypes
  /**
   * ViewCountOutputType without action
   */
  export type ViewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewCountOutputType
     */
    select?: ViewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ViewCountOutputType without action
   */
  export type ViewCountOutputTypeCountFiltersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewFilterWhereInput
  }

  /**
   * ViewCountOutputType without action
   */
  export type ViewCountOutputTypeCountFilterGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewFilterGroupWhereInput
  }

  /**
   * ViewCountOutputType without action
   */
  export type ViewCountOutputTypeCountSortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewSortWhereInput
  }


  /**
   * Count Type ViewFilterGroupCountOutputType
   */

  export type ViewFilterGroupCountOutputType = {
    filters: number
  }

  export type ViewFilterGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filters?: boolean | ViewFilterGroupCountOutputTypeCountFiltersArgs
  }

  // Custom InputTypes
  /**
   * ViewFilterGroupCountOutputType without action
   */
  export type ViewFilterGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilterGroupCountOutputType
     */
    select?: ViewFilterGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ViewFilterGroupCountOutputType without action
   */
  export type ViewFilterGroupCountOutputTypeCountFiltersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewFilterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    recordsCreated?: boolean | User$recordsCreatedArgs<ExtArgs>
    tables?: boolean | User$tablesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    recordsCreated?: boolean | User$recordsCreatedArgs<ExtArgs>
    tables?: boolean | User$tablesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      memberships: Prisma.$BaseMemberPayload<ExtArgs>[]
      recordsCreated: Prisma.$RecordPayload<ExtArgs>[]
      tables: Prisma.$TablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recordsCreated<T extends User$recordsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$recordsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tables<T extends User$tablesArgs<ExtArgs> = {}>(args?: Subset<T, User$tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseMember
     */
    select?: BaseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseMember
     */
    omit?: BaseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseMemberInclude<ExtArgs> | null
    where?: BaseMemberWhereInput
    orderBy?: BaseMemberOrderByWithRelationInput | BaseMemberOrderByWithRelationInput[]
    cursor?: BaseMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BaseMemberScalarFieldEnum | BaseMemberScalarFieldEnum[]
  }

  /**
   * User.recordsCreated
   */
  export type User$recordsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    where?: RecordWhereInput
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    cursor?: RecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * User.tables
   */
  export type User$tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    cursor?: TableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Base
   */

  export type AggregateBase = {
    _count: BaseCountAggregateOutputType | null
    _min: BaseMinAggregateOutputType | null
    _max: BaseMaxAggregateOutputType | null
  }

  export type BaseMinAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type BaseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type BaseCountAggregateOutputType = {
    id: number
    name: number
    ownerId: number
    createdAt: number
    _all: number
  }


  export type BaseMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
  }

  export type BaseMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
  }

  export type BaseCountAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    createdAt?: true
    _all?: true
  }

  export type BaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Base to aggregate.
     */
    where?: BaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bases to fetch.
     */
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bases
    **/
    _count?: true | BaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BaseMaxAggregateInputType
  }

  export type GetBaseAggregateType<T extends BaseAggregateArgs> = {
        [P in keyof T & keyof AggregateBase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBase[P]>
      : GetScalarType<T[P], AggregateBase[P]>
  }




  export type BaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseWhereInput
    orderBy?: BaseOrderByWithAggregationInput | BaseOrderByWithAggregationInput[]
    by: BaseScalarFieldEnum[] | BaseScalarFieldEnum
    having?: BaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BaseCountAggregateInputType | true
    _min?: BaseMinAggregateInputType
    _max?: BaseMaxAggregateInputType
  }

  export type BaseGroupByOutputType = {
    id: string
    name: string
    ownerId: string | null
    createdAt: Date
    _count: BaseCountAggregateOutputType | null
    _min: BaseMinAggregateOutputType | null
    _max: BaseMaxAggregateOutputType | null
  }

  type GetBaseGroupByPayload<T extends BaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BaseGroupByOutputType[P]>
            : GetScalarType<T[P], BaseGroupByOutputType[P]>
        }
      >
    >


  export type BaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
    tables?: boolean | Base$tablesArgs<ExtArgs>
    members?: boolean | Base$membersArgs<ExtArgs>
    _count?: boolean | BaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["base"]>

  export type BaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["base"]>

  export type BaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["base"]>

  export type BaseSelectScalar = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
    createdAt?: boolean
  }

  export type BaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerId" | "createdAt", ExtArgs["result"]["base"]>
  export type BaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tables?: boolean | Base$tablesArgs<ExtArgs>
    members?: boolean | Base$membersArgs<ExtArgs>
    _count?: boolean | BaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Base"
    objects: {
      tables: Prisma.$TablePayload<ExtArgs>[]
      members: Prisma.$BaseMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ownerId: string | null
      createdAt: Date
    }, ExtArgs["result"]["base"]>
    composites: {}
  }

  type BaseGetPayload<S extends boolean | null | undefined | BaseDefaultArgs> = $Result.GetResult<Prisma.$BasePayload, S>

  type BaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BaseCountAggregateInputType | true
    }

  export interface BaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Base'], meta: { name: 'Base' } }
    /**
     * Find zero or one Base that matches the filter.
     * @param {BaseFindUniqueArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BaseFindUniqueArgs>(args: SelectSubset<T, BaseFindUniqueArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Base that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BaseFindUniqueOrThrowArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BaseFindUniqueOrThrowArgs>(args: SelectSubset<T, BaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Base that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseFindFirstArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BaseFindFirstArgs>(args?: SelectSubset<T, BaseFindFirstArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Base that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseFindFirstOrThrowArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BaseFindFirstOrThrowArgs>(args?: SelectSubset<T, BaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bases
     * const bases = await prisma.base.findMany()
     * 
     * // Get first 10 Bases
     * const bases = await prisma.base.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const baseWithIdOnly = await prisma.base.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BaseFindManyArgs>(args?: SelectSubset<T, BaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Base.
     * @param {BaseCreateArgs} args - Arguments to create a Base.
     * @example
     * // Create one Base
     * const Base = await prisma.base.create({
     *   data: {
     *     // ... data to create a Base
     *   }
     * })
     * 
     */
    create<T extends BaseCreateArgs>(args: SelectSubset<T, BaseCreateArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bases.
     * @param {BaseCreateManyArgs} args - Arguments to create many Bases.
     * @example
     * // Create many Bases
     * const base = await prisma.base.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BaseCreateManyArgs>(args?: SelectSubset<T, BaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bases and returns the data saved in the database.
     * @param {BaseCreateManyAndReturnArgs} args - Arguments to create many Bases.
     * @example
     * // Create many Bases
     * const base = await prisma.base.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bases and only return the `id`
     * const baseWithIdOnly = await prisma.base.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BaseCreateManyAndReturnArgs>(args?: SelectSubset<T, BaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Base.
     * @param {BaseDeleteArgs} args - Arguments to delete one Base.
     * @example
     * // Delete one Base
     * const Base = await prisma.base.delete({
     *   where: {
     *     // ... filter to delete one Base
     *   }
     * })
     * 
     */
    delete<T extends BaseDeleteArgs>(args: SelectSubset<T, BaseDeleteArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Base.
     * @param {BaseUpdateArgs} args - Arguments to update one Base.
     * @example
     * // Update one Base
     * const base = await prisma.base.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BaseUpdateArgs>(args: SelectSubset<T, BaseUpdateArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bases.
     * @param {BaseDeleteManyArgs} args - Arguments to filter Bases to delete.
     * @example
     * // Delete a few Bases
     * const { count } = await prisma.base.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BaseDeleteManyArgs>(args?: SelectSubset<T, BaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bases
     * const base = await prisma.base.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BaseUpdateManyArgs>(args: SelectSubset<T, BaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bases and returns the data updated in the database.
     * @param {BaseUpdateManyAndReturnArgs} args - Arguments to update many Bases.
     * @example
     * // Update many Bases
     * const base = await prisma.base.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bases and only return the `id`
     * const baseWithIdOnly = await prisma.base.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BaseUpdateManyAndReturnArgs>(args: SelectSubset<T, BaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Base.
     * @param {BaseUpsertArgs} args - Arguments to update or create a Base.
     * @example
     * // Update or create a Base
     * const base = await prisma.base.upsert({
     *   create: {
     *     // ... data to create a Base
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Base we want to update
     *   }
     * })
     */
    upsert<T extends BaseUpsertArgs>(args: SelectSubset<T, BaseUpsertArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseCountArgs} args - Arguments to filter Bases to count.
     * @example
     * // Count the number of Bases
     * const count = await prisma.base.count({
     *   where: {
     *     // ... the filter for the Bases we want to count
     *   }
     * })
    **/
    count<T extends BaseCountArgs>(
      args?: Subset<T, BaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Base.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BaseAggregateArgs>(args: Subset<T, BaseAggregateArgs>): Prisma.PrismaPromise<GetBaseAggregateType<T>>

    /**
     * Group by Base.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BaseGroupByArgs['orderBy'] }
        : { orderBy?: BaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Base model
   */
  readonly fields: BaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Base.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tables<T extends Base$tablesArgs<ExtArgs> = {}>(args?: Subset<T, Base$tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Base$membersArgs<ExtArgs> = {}>(args?: Subset<T, Base$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Base model
   */
  interface BaseFieldRefs {
    readonly id: FieldRef<"Base", 'String'>
    readonly name: FieldRef<"Base", 'String'>
    readonly ownerId: FieldRef<"Base", 'String'>
    readonly createdAt: FieldRef<"Base", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Base findUnique
   */
  export type BaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Base to fetch.
     */
    where: BaseWhereUniqueInput
  }

  /**
   * Base findUniqueOrThrow
   */
  export type BaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Base to fetch.
     */
    where: BaseWhereUniqueInput
  }

  /**
   * Base findFirst
   */
  export type BaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Base to fetch.
     */
    where?: BaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bases to fetch.
     */
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bases.
     */
    cursor?: BaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bases.
     */
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base findFirstOrThrow
   */
  export type BaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Base to fetch.
     */
    where?: BaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bases to fetch.
     */
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bases.
     */
    cursor?: BaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bases.
     */
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base findMany
   */
  export type BaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Bases to fetch.
     */
    where?: BaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bases to fetch.
     */
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bases.
     */
    cursor?: BaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bases.
     */
    skip?: number
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base create
   */
  export type BaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Base.
     */
    data: XOR<BaseCreateInput, BaseUncheckedCreateInput>
  }

  /**
   * Base createMany
   */
  export type BaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bases.
     */
    data: BaseCreateManyInput | BaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Base createManyAndReturn
   */
  export type BaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * The data used to create many Bases.
     */
    data: BaseCreateManyInput | BaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Base update
   */
  export type BaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Base.
     */
    data: XOR<BaseUpdateInput, BaseUncheckedUpdateInput>
    /**
     * Choose, which Base to update.
     */
    where: BaseWhereUniqueInput
  }

  /**
   * Base updateMany
   */
  export type BaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bases.
     */
    data: XOR<BaseUpdateManyMutationInput, BaseUncheckedUpdateManyInput>
    /**
     * Filter which Bases to update
     */
    where?: BaseWhereInput
    /**
     * Limit how many Bases to update.
     */
    limit?: number
  }

  /**
   * Base updateManyAndReturn
   */
  export type BaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * The data used to update Bases.
     */
    data: XOR<BaseUpdateManyMutationInput, BaseUncheckedUpdateManyInput>
    /**
     * Filter which Bases to update
     */
    where?: BaseWhereInput
    /**
     * Limit how many Bases to update.
     */
    limit?: number
  }

  /**
   * Base upsert
   */
  export type BaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Base to update in case it exists.
     */
    where: BaseWhereUniqueInput
    /**
     * In case the Base found by the `where` argument doesn't exist, create a new Base with this data.
     */
    create: XOR<BaseCreateInput, BaseUncheckedCreateInput>
    /**
     * In case the Base was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BaseUpdateInput, BaseUncheckedUpdateInput>
  }

  /**
   * Base delete
   */
  export type BaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter which Base to delete.
     */
    where: BaseWhereUniqueInput
  }

  /**
   * Base deleteMany
   */
  export type BaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bases to delete
     */
    where?: BaseWhereInput
    /**
     * Limit how many Bases to delete.
     */
    limit?: number
  }

  /**
   * Base.tables
   */
  export type Base$tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    cursor?: TableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Base.members
   */
  export type Base$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseMember
     */
    select?: BaseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseMember
     */
    omit?: BaseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseMemberInclude<ExtArgs> | null
    where?: BaseMemberWhereInput
    orderBy?: BaseMemberOrderByWithRelationInput | BaseMemberOrderByWithRelationInput[]
    cursor?: BaseMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BaseMemberScalarFieldEnum | BaseMemberScalarFieldEnum[]
  }

  /**
   * Base without action
   */
  export type BaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
  }


  /**
   * Model BaseMember
   */

  export type AggregateBaseMember = {
    _count: BaseMemberCountAggregateOutputType | null
    _min: BaseMemberMinAggregateOutputType | null
    _max: BaseMemberMaxAggregateOutputType | null
  }

  export type BaseMemberMinAggregateOutputType = {
    baseId: string | null
    userId: string | null
  }

  export type BaseMemberMaxAggregateOutputType = {
    baseId: string | null
    userId: string | null
  }

  export type BaseMemberCountAggregateOutputType = {
    baseId: number
    userId: number
    _all: number
  }


  export type BaseMemberMinAggregateInputType = {
    baseId?: true
    userId?: true
  }

  export type BaseMemberMaxAggregateInputType = {
    baseId?: true
    userId?: true
  }

  export type BaseMemberCountAggregateInputType = {
    baseId?: true
    userId?: true
    _all?: true
  }

  export type BaseMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BaseMember to aggregate.
     */
    where?: BaseMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseMembers to fetch.
     */
    orderBy?: BaseMemberOrderByWithRelationInput | BaseMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BaseMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BaseMembers
    **/
    _count?: true | BaseMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BaseMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BaseMemberMaxAggregateInputType
  }

  export type GetBaseMemberAggregateType<T extends BaseMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateBaseMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBaseMember[P]>
      : GetScalarType<T[P], AggregateBaseMember[P]>
  }




  export type BaseMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseMemberWhereInput
    orderBy?: BaseMemberOrderByWithAggregationInput | BaseMemberOrderByWithAggregationInput[]
    by: BaseMemberScalarFieldEnum[] | BaseMemberScalarFieldEnum
    having?: BaseMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BaseMemberCountAggregateInputType | true
    _min?: BaseMemberMinAggregateInputType
    _max?: BaseMemberMaxAggregateInputType
  }

  export type BaseMemberGroupByOutputType = {
    baseId: string
    userId: string
    _count: BaseMemberCountAggregateOutputType | null
    _min: BaseMemberMinAggregateOutputType | null
    _max: BaseMemberMaxAggregateOutputType | null
  }

  type GetBaseMemberGroupByPayload<T extends BaseMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BaseMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BaseMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BaseMemberGroupByOutputType[P]>
            : GetScalarType<T[P], BaseMemberGroupByOutputType[P]>
        }
      >
    >


  export type BaseMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    baseId?: boolean
    userId?: boolean
    base?: boolean | BaseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["baseMember"]>

  export type BaseMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    baseId?: boolean
    userId?: boolean
    base?: boolean | BaseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["baseMember"]>

  export type BaseMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    baseId?: boolean
    userId?: boolean
    base?: boolean | BaseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["baseMember"]>

  export type BaseMemberSelectScalar = {
    baseId?: boolean
    userId?: boolean
  }

  export type BaseMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"baseId" | "userId", ExtArgs["result"]["baseMember"]>
  export type BaseMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | BaseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BaseMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | BaseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BaseMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | BaseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BaseMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BaseMember"
    objects: {
      base: Prisma.$BasePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      baseId: string
      userId: string
    }, ExtArgs["result"]["baseMember"]>
    composites: {}
  }

  type BaseMemberGetPayload<S extends boolean | null | undefined | BaseMemberDefaultArgs> = $Result.GetResult<Prisma.$BaseMemberPayload, S>

  type BaseMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BaseMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BaseMemberCountAggregateInputType | true
    }

  export interface BaseMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BaseMember'], meta: { name: 'BaseMember' } }
    /**
     * Find zero or one BaseMember that matches the filter.
     * @param {BaseMemberFindUniqueArgs} args - Arguments to find a BaseMember
     * @example
     * // Get one BaseMember
     * const baseMember = await prisma.baseMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BaseMemberFindUniqueArgs>(args: SelectSubset<T, BaseMemberFindUniqueArgs<ExtArgs>>): Prisma__BaseMemberClient<$Result.GetResult<Prisma.$BaseMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BaseMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BaseMemberFindUniqueOrThrowArgs} args - Arguments to find a BaseMember
     * @example
     * // Get one BaseMember
     * const baseMember = await prisma.baseMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BaseMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, BaseMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BaseMemberClient<$Result.GetResult<Prisma.$BaseMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BaseMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseMemberFindFirstArgs} args - Arguments to find a BaseMember
     * @example
     * // Get one BaseMember
     * const baseMember = await prisma.baseMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BaseMemberFindFirstArgs>(args?: SelectSubset<T, BaseMemberFindFirstArgs<ExtArgs>>): Prisma__BaseMemberClient<$Result.GetResult<Prisma.$BaseMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BaseMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseMemberFindFirstOrThrowArgs} args - Arguments to find a BaseMember
     * @example
     * // Get one BaseMember
     * const baseMember = await prisma.baseMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BaseMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, BaseMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__BaseMemberClient<$Result.GetResult<Prisma.$BaseMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BaseMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BaseMembers
     * const baseMembers = await prisma.baseMember.findMany()
     * 
     * // Get first 10 BaseMembers
     * const baseMembers = await prisma.baseMember.findMany({ take: 10 })
     * 
     * // Only select the `baseId`
     * const baseMemberWithBaseIdOnly = await prisma.baseMember.findMany({ select: { baseId: true } })
     * 
     */
    findMany<T extends BaseMemberFindManyArgs>(args?: SelectSubset<T, BaseMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BaseMember.
     * @param {BaseMemberCreateArgs} args - Arguments to create a BaseMember.
     * @example
     * // Create one BaseMember
     * const BaseMember = await prisma.baseMember.create({
     *   data: {
     *     // ... data to create a BaseMember
     *   }
     * })
     * 
     */
    create<T extends BaseMemberCreateArgs>(args: SelectSubset<T, BaseMemberCreateArgs<ExtArgs>>): Prisma__BaseMemberClient<$Result.GetResult<Prisma.$BaseMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BaseMembers.
     * @param {BaseMemberCreateManyArgs} args - Arguments to create many BaseMembers.
     * @example
     * // Create many BaseMembers
     * const baseMember = await prisma.baseMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BaseMemberCreateManyArgs>(args?: SelectSubset<T, BaseMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BaseMembers and returns the data saved in the database.
     * @param {BaseMemberCreateManyAndReturnArgs} args - Arguments to create many BaseMembers.
     * @example
     * // Create many BaseMembers
     * const baseMember = await prisma.baseMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BaseMembers and only return the `baseId`
     * const baseMemberWithBaseIdOnly = await prisma.baseMember.createManyAndReturn({
     *   select: { baseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BaseMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, BaseMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BaseMember.
     * @param {BaseMemberDeleteArgs} args - Arguments to delete one BaseMember.
     * @example
     * // Delete one BaseMember
     * const BaseMember = await prisma.baseMember.delete({
     *   where: {
     *     // ... filter to delete one BaseMember
     *   }
     * })
     * 
     */
    delete<T extends BaseMemberDeleteArgs>(args: SelectSubset<T, BaseMemberDeleteArgs<ExtArgs>>): Prisma__BaseMemberClient<$Result.GetResult<Prisma.$BaseMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BaseMember.
     * @param {BaseMemberUpdateArgs} args - Arguments to update one BaseMember.
     * @example
     * // Update one BaseMember
     * const baseMember = await prisma.baseMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BaseMemberUpdateArgs>(args: SelectSubset<T, BaseMemberUpdateArgs<ExtArgs>>): Prisma__BaseMemberClient<$Result.GetResult<Prisma.$BaseMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BaseMembers.
     * @param {BaseMemberDeleteManyArgs} args - Arguments to filter BaseMembers to delete.
     * @example
     * // Delete a few BaseMembers
     * const { count } = await prisma.baseMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BaseMemberDeleteManyArgs>(args?: SelectSubset<T, BaseMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BaseMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BaseMembers
     * const baseMember = await prisma.baseMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BaseMemberUpdateManyArgs>(args: SelectSubset<T, BaseMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BaseMembers and returns the data updated in the database.
     * @param {BaseMemberUpdateManyAndReturnArgs} args - Arguments to update many BaseMembers.
     * @example
     * // Update many BaseMembers
     * const baseMember = await prisma.baseMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BaseMembers and only return the `baseId`
     * const baseMemberWithBaseIdOnly = await prisma.baseMember.updateManyAndReturn({
     *   select: { baseId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BaseMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, BaseMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BaseMember.
     * @param {BaseMemberUpsertArgs} args - Arguments to update or create a BaseMember.
     * @example
     * // Update or create a BaseMember
     * const baseMember = await prisma.baseMember.upsert({
     *   create: {
     *     // ... data to create a BaseMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BaseMember we want to update
     *   }
     * })
     */
    upsert<T extends BaseMemberUpsertArgs>(args: SelectSubset<T, BaseMemberUpsertArgs<ExtArgs>>): Prisma__BaseMemberClient<$Result.GetResult<Prisma.$BaseMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BaseMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseMemberCountArgs} args - Arguments to filter BaseMembers to count.
     * @example
     * // Count the number of BaseMembers
     * const count = await prisma.baseMember.count({
     *   where: {
     *     // ... the filter for the BaseMembers we want to count
     *   }
     * })
    **/
    count<T extends BaseMemberCountArgs>(
      args?: Subset<T, BaseMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BaseMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BaseMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BaseMemberAggregateArgs>(args: Subset<T, BaseMemberAggregateArgs>): Prisma.PrismaPromise<GetBaseMemberAggregateType<T>>

    /**
     * Group by BaseMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BaseMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BaseMemberGroupByArgs['orderBy'] }
        : { orderBy?: BaseMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BaseMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaseMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BaseMember model
   */
  readonly fields: BaseMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BaseMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BaseMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    base<T extends BaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseDefaultArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BaseMember model
   */
  interface BaseMemberFieldRefs {
    readonly baseId: FieldRef<"BaseMember", 'String'>
    readonly userId: FieldRef<"BaseMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BaseMember findUnique
   */
  export type BaseMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseMember
     */
    select?: BaseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseMember
     */
    omit?: BaseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseMemberInclude<ExtArgs> | null
    /**
     * Filter, which BaseMember to fetch.
     */
    where: BaseMemberWhereUniqueInput
  }

  /**
   * BaseMember findUniqueOrThrow
   */
  export type BaseMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseMember
     */
    select?: BaseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseMember
     */
    omit?: BaseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseMemberInclude<ExtArgs> | null
    /**
     * Filter, which BaseMember to fetch.
     */
    where: BaseMemberWhereUniqueInput
  }

  /**
   * BaseMember findFirst
   */
  export type BaseMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseMember
     */
    select?: BaseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseMember
     */
    omit?: BaseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseMemberInclude<ExtArgs> | null
    /**
     * Filter, which BaseMember to fetch.
     */
    where?: BaseMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseMembers to fetch.
     */
    orderBy?: BaseMemberOrderByWithRelationInput | BaseMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BaseMembers.
     */
    cursor?: BaseMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BaseMembers.
     */
    distinct?: BaseMemberScalarFieldEnum | BaseMemberScalarFieldEnum[]
  }

  /**
   * BaseMember findFirstOrThrow
   */
  export type BaseMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseMember
     */
    select?: BaseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseMember
     */
    omit?: BaseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseMemberInclude<ExtArgs> | null
    /**
     * Filter, which BaseMember to fetch.
     */
    where?: BaseMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseMembers to fetch.
     */
    orderBy?: BaseMemberOrderByWithRelationInput | BaseMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BaseMembers.
     */
    cursor?: BaseMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BaseMembers.
     */
    distinct?: BaseMemberScalarFieldEnum | BaseMemberScalarFieldEnum[]
  }

  /**
   * BaseMember findMany
   */
  export type BaseMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseMember
     */
    select?: BaseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseMember
     */
    omit?: BaseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseMemberInclude<ExtArgs> | null
    /**
     * Filter, which BaseMembers to fetch.
     */
    where?: BaseMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseMembers to fetch.
     */
    orderBy?: BaseMemberOrderByWithRelationInput | BaseMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BaseMembers.
     */
    cursor?: BaseMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseMembers.
     */
    skip?: number
    distinct?: BaseMemberScalarFieldEnum | BaseMemberScalarFieldEnum[]
  }

  /**
   * BaseMember create
   */
  export type BaseMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseMember
     */
    select?: BaseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseMember
     */
    omit?: BaseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a BaseMember.
     */
    data: XOR<BaseMemberCreateInput, BaseMemberUncheckedCreateInput>
  }

  /**
   * BaseMember createMany
   */
  export type BaseMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BaseMembers.
     */
    data: BaseMemberCreateManyInput | BaseMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BaseMember createManyAndReturn
   */
  export type BaseMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseMember
     */
    select?: BaseMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BaseMember
     */
    omit?: BaseMemberOmit<ExtArgs> | null
    /**
     * The data used to create many BaseMembers.
     */
    data: BaseMemberCreateManyInput | BaseMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BaseMember update
   */
  export type BaseMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseMember
     */
    select?: BaseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseMember
     */
    omit?: BaseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a BaseMember.
     */
    data: XOR<BaseMemberUpdateInput, BaseMemberUncheckedUpdateInput>
    /**
     * Choose, which BaseMember to update.
     */
    where: BaseMemberWhereUniqueInput
  }

  /**
   * BaseMember updateMany
   */
  export type BaseMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BaseMembers.
     */
    data: XOR<BaseMemberUpdateManyMutationInput, BaseMemberUncheckedUpdateManyInput>
    /**
     * Filter which BaseMembers to update
     */
    where?: BaseMemberWhereInput
    /**
     * Limit how many BaseMembers to update.
     */
    limit?: number
  }

  /**
   * BaseMember updateManyAndReturn
   */
  export type BaseMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseMember
     */
    select?: BaseMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BaseMember
     */
    omit?: BaseMemberOmit<ExtArgs> | null
    /**
     * The data used to update BaseMembers.
     */
    data: XOR<BaseMemberUpdateManyMutationInput, BaseMemberUncheckedUpdateManyInput>
    /**
     * Filter which BaseMembers to update
     */
    where?: BaseMemberWhereInput
    /**
     * Limit how many BaseMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BaseMember upsert
   */
  export type BaseMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseMember
     */
    select?: BaseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseMember
     */
    omit?: BaseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the BaseMember to update in case it exists.
     */
    where: BaseMemberWhereUniqueInput
    /**
     * In case the BaseMember found by the `where` argument doesn't exist, create a new BaseMember with this data.
     */
    create: XOR<BaseMemberCreateInput, BaseMemberUncheckedCreateInput>
    /**
     * In case the BaseMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BaseMemberUpdateInput, BaseMemberUncheckedUpdateInput>
  }

  /**
   * BaseMember delete
   */
  export type BaseMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseMember
     */
    select?: BaseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseMember
     */
    omit?: BaseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseMemberInclude<ExtArgs> | null
    /**
     * Filter which BaseMember to delete.
     */
    where: BaseMemberWhereUniqueInput
  }

  /**
   * BaseMember deleteMany
   */
  export type BaseMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BaseMembers to delete
     */
    where?: BaseMemberWhereInput
    /**
     * Limit how many BaseMembers to delete.
     */
    limit?: number
  }

  /**
   * BaseMember without action
   */
  export type BaseMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseMember
     */
    select?: BaseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseMember
     */
    omit?: BaseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseMemberInclude<ExtArgs> | null
  }


  /**
   * Model Table
   */

  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  export type TableMinAggregateOutputType = {
    id: string | null
    baseId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type TableMaxAggregateOutputType = {
    id: string | null
    baseId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type TableCountAggregateOutputType = {
    id: number
    baseId: number
    name: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type TableMinAggregateInputType = {
    id?: true
    baseId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type TableMaxAggregateInputType = {
    id?: true
    baseId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type TableCountAggregateInputType = {
    id?: true
    baseId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table to aggregate.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tables
    **/
    _count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
        [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }




  export type TableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
    orderBy?: TableOrderByWithAggregationInput | TableOrderByWithAggregationInput[]
    by: TableScalarFieldEnum[] | TableScalarFieldEnum
    having?: TableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableCountAggregateInputType | true
    _min?: TableMinAggregateInputType
    _max?: TableMaxAggregateInputType
  }

  export type TableGroupByOutputType = {
    id: string
    baseId: string
    name: string
    createdAt: Date
    updatedAt: Date
    createdById: string | null
    _count: TableCountAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  type GetTableGroupByPayload<T extends TableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableGroupByOutputType[P]>
            : GetScalarType<T[P], TableGroupByOutputType[P]>
        }
      >
    >


  export type TableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    base?: boolean | BaseDefaultArgs<ExtArgs>
    creator?: boolean | Table$creatorArgs<ExtArgs>
    fields?: boolean | Table$fieldsArgs<ExtArgs>
    records?: boolean | Table$recordsArgs<ExtArgs>
    views?: boolean | Table$viewsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    base?: boolean | BaseDefaultArgs<ExtArgs>
    creator?: boolean | Table$creatorArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    base?: boolean | BaseDefaultArgs<ExtArgs>
    creator?: boolean | Table$creatorArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectScalar = {
    id?: boolean
    baseId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type TableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "baseId" | "name" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["table"]>
  export type TableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | BaseDefaultArgs<ExtArgs>
    creator?: boolean | Table$creatorArgs<ExtArgs>
    fields?: boolean | Table$fieldsArgs<ExtArgs>
    records?: boolean | Table$recordsArgs<ExtArgs>
    views?: boolean | Table$viewsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | BaseDefaultArgs<ExtArgs>
    creator?: boolean | Table$creatorArgs<ExtArgs>
  }
  export type TableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | BaseDefaultArgs<ExtArgs>
    creator?: boolean | Table$creatorArgs<ExtArgs>
  }

  export type $TablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Table"
    objects: {
      base: Prisma.$BasePayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs> | null
      fields: Prisma.$FieldPayload<ExtArgs>[]
      records: Prisma.$RecordPayload<ExtArgs>[]
      views: Prisma.$ViewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      baseId: string
      name: string
      createdAt: Date
      updatedAt: Date
      createdById: string | null
    }, ExtArgs["result"]["table"]>
    composites: {}
  }

  type TableGetPayload<S extends boolean | null | undefined | TableDefaultArgs> = $Result.GetResult<Prisma.$TablePayload, S>

  type TableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableCountAggregateInputType | true
    }

  export interface TableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table'], meta: { name: 'Table' } }
    /**
     * Find zero or one Table that matches the filter.
     * @param {TableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableFindUniqueArgs>(args: SelectSubset<T, TableFindUniqueArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableFindUniqueOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableFindUniqueOrThrowArgs>(args: SelectSubset<T, TableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableFindFirstArgs>(args?: SelectSubset<T, TableFindFirstArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableFindFirstOrThrowArgs>(args?: SelectSubset<T, TableFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableFindManyArgs>(args?: SelectSubset<T, TableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Table.
     * @param {TableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
     */
    create<T extends TableCreateArgs>(args: SelectSubset<T, TableCreateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tables.
     * @param {TableCreateManyArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableCreateManyArgs>(args?: SelectSubset<T, TableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tables and returns the data saved in the database.
     * @param {TableCreateManyAndReturnArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableCreateManyAndReturnArgs>(args?: SelectSubset<T, TableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Table.
     * @param {TableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
     */
    delete<T extends TableDeleteArgs>(args: SelectSubset<T, TableDeleteArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Table.
     * @param {TableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableUpdateArgs>(args: SelectSubset<T, TableUpdateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tables.
     * @param {TableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableDeleteManyArgs>(args?: SelectSubset<T, TableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableUpdateManyArgs>(args: SelectSubset<T, TableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables and returns the data updated in the database.
     * @param {TableUpdateManyAndReturnArgs} args - Arguments to update many Tables.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TableUpdateManyAndReturnArgs>(args: SelectSubset<T, TableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Table.
     * @param {TableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
     */
    upsert<T extends TableUpsertArgs>(args: SelectSubset<T, TableUpsertArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends TableCountArgs>(
      args?: Subset<T, TableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableGroupByArgs['orderBy'] }
        : { orderBy?: TableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Table model
   */
  readonly fields: TableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    base<T extends BaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseDefaultArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends Table$creatorArgs<ExtArgs> = {}>(args?: Subset<T, Table$creatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    fields<T extends Table$fieldsArgs<ExtArgs> = {}>(args?: Subset<T, Table$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    records<T extends Table$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Table$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends Table$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Table$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Table model
   */
  interface TableFieldRefs {
    readonly id: FieldRef<"Table", 'String'>
    readonly baseId: FieldRef<"Table", 'String'>
    readonly name: FieldRef<"Table", 'String'>
    readonly createdAt: FieldRef<"Table", 'DateTime'>
    readonly updatedAt: FieldRef<"Table", 'DateTime'>
    readonly createdById: FieldRef<"Table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Table findUnique
   */
  export type TableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findUniqueOrThrow
   */
  export type TableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findFirst
   */
  export type TableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findFirstOrThrow
   */
  export type TableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findMany
   */
  export type TableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table create
   */
  export type TableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to create a Table.
     */
    data: XOR<TableCreateInput, TableUncheckedCreateInput>
  }

  /**
   * Table createMany
   */
  export type TableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Table createManyAndReturn
   */
  export type TableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table update
   */
  export type TableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to update a Table.
     */
    data: XOR<TableUpdateInput, TableUncheckedUpdateInput>
    /**
     * Choose, which Table to update.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table updateMany
   */
  export type TableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
  }

  /**
   * Table updateManyAndReturn
   */
  export type TableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table upsert
   */
  export type TableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The filter to search for the Table to update in case it exists.
     */
    where: TableWhereUniqueInput
    /**
     * In case the Table found by the `where` argument doesn't exist, create a new Table with this data.
     */
    create: XOR<TableCreateInput, TableUncheckedCreateInput>
    /**
     * In case the Table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableUpdateInput, TableUncheckedUpdateInput>
  }

  /**
   * Table delete
   */
  export type TableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter which Table to delete.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table deleteMany
   */
  export type TableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tables to delete
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to delete.
     */
    limit?: number
  }

  /**
   * Table.creator
   */
  export type Table$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Table.fields
   */
  export type Table$fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    where?: FieldWhereInput
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    cursor?: FieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * Table.records
   */
  export type Table$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    where?: RecordWhereInput
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    cursor?: RecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Table.views
   */
  export type Table$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    where?: ViewWhereInput
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    cursor?: ViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * Table without action
   */
  export type TableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
  }


  /**
   * Model Field
   */

  export type AggregateField = {
    _count: FieldCountAggregateOutputType | null
    _avg: FieldAvgAggregateOutputType | null
    _sum: FieldSumAggregateOutputType | null
    _min: FieldMinAggregateOutputType | null
    _max: FieldMaxAggregateOutputType | null
  }

  export type FieldAvgAggregateOutputType = {
    position: number | null
  }

  export type FieldSumAggregateOutputType = {
    position: number | null
  }

  export type FieldMinAggregateOutputType = {
    id: string | null
    tableId: string | null
    name: string | null
    type: $Enums.FieldType | null
    position: number | null
  }

  export type FieldMaxAggregateOutputType = {
    id: string | null
    tableId: string | null
    name: string | null
    type: $Enums.FieldType | null
    position: number | null
  }

  export type FieldCountAggregateOutputType = {
    id: number
    tableId: number
    name: number
    type: number
    position: number
    _all: number
  }


  export type FieldAvgAggregateInputType = {
    position?: true
  }

  export type FieldSumAggregateInputType = {
    position?: true
  }

  export type FieldMinAggregateInputType = {
    id?: true
    tableId?: true
    name?: true
    type?: true
    position?: true
  }

  export type FieldMaxAggregateInputType = {
    id?: true
    tableId?: true
    name?: true
    type?: true
    position?: true
  }

  export type FieldCountAggregateInputType = {
    id?: true
    tableId?: true
    name?: true
    type?: true
    position?: true
    _all?: true
  }

  export type FieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Field to aggregate.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fields
    **/
    _count?: true | FieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FieldMaxAggregateInputType
  }

  export type GetFieldAggregateType<T extends FieldAggregateArgs> = {
        [P in keyof T & keyof AggregateField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateField[P]>
      : GetScalarType<T[P], AggregateField[P]>
  }




  export type FieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldWhereInput
    orderBy?: FieldOrderByWithAggregationInput | FieldOrderByWithAggregationInput[]
    by: FieldScalarFieldEnum[] | FieldScalarFieldEnum
    having?: FieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FieldCountAggregateInputType | true
    _avg?: FieldAvgAggregateInputType
    _sum?: FieldSumAggregateInputType
    _min?: FieldMinAggregateInputType
    _max?: FieldMaxAggregateInputType
  }

  export type FieldGroupByOutputType = {
    id: string
    tableId: string
    name: string
    type: $Enums.FieldType
    position: number | null
    _count: FieldCountAggregateOutputType | null
    _avg: FieldAvgAggregateOutputType | null
    _sum: FieldSumAggregateOutputType | null
    _min: FieldMinAggregateOutputType | null
    _max: FieldMaxAggregateOutputType | null
  }

  type GetFieldGroupByPayload<T extends FieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FieldGroupByOutputType[P]>
            : GetScalarType<T[P], FieldGroupByOutputType[P]>
        }
      >
    >


  export type FieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    name?: boolean
    type?: boolean
    position?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
    cells?: boolean | Field$cellsArgs<ExtArgs>
    viewFilters?: boolean | Field$viewFiltersArgs<ExtArgs>
    viewSorts?: boolean | Field$viewSortsArgs<ExtArgs>
    _count?: boolean | FieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["field"]>

  export type FieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    name?: boolean
    type?: boolean
    position?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["field"]>

  export type FieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    name?: boolean
    type?: boolean
    position?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["field"]>

  export type FieldSelectScalar = {
    id?: boolean
    tableId?: boolean
    name?: boolean
    type?: boolean
    position?: boolean
  }

  export type FieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tableId" | "name" | "type" | "position", ExtArgs["result"]["field"]>
  export type FieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
    cells?: boolean | Field$cellsArgs<ExtArgs>
    viewFilters?: boolean | Field$viewFiltersArgs<ExtArgs>
    viewSorts?: boolean | Field$viewSortsArgs<ExtArgs>
    _count?: boolean | FieldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }
  export type FieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }

  export type $FieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Field"
    objects: {
      table: Prisma.$TablePayload<ExtArgs>
      cells: Prisma.$CellValuePayload<ExtArgs>[]
      viewFilters: Prisma.$ViewFilterPayload<ExtArgs>[]
      viewSorts: Prisma.$ViewSortPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tableId: string
      name: string
      type: $Enums.FieldType
      position: number | null
    }, ExtArgs["result"]["field"]>
    composites: {}
  }

  type FieldGetPayload<S extends boolean | null | undefined | FieldDefaultArgs> = $Result.GetResult<Prisma.$FieldPayload, S>

  type FieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FieldCountAggregateInputType | true
    }

  export interface FieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Field'], meta: { name: 'Field' } }
    /**
     * Find zero or one Field that matches the filter.
     * @param {FieldFindUniqueArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FieldFindUniqueArgs>(args: SelectSubset<T, FieldFindUniqueArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Field that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FieldFindUniqueOrThrowArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FieldFindUniqueOrThrowArgs>(args: SelectSubset<T, FieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Field that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldFindFirstArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FieldFindFirstArgs>(args?: SelectSubset<T, FieldFindFirstArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Field that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldFindFirstOrThrowArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FieldFindFirstOrThrowArgs>(args?: SelectSubset<T, FieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fields
     * const fields = await prisma.field.findMany()
     * 
     * // Get first 10 Fields
     * const fields = await prisma.field.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fieldWithIdOnly = await prisma.field.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FieldFindManyArgs>(args?: SelectSubset<T, FieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Field.
     * @param {FieldCreateArgs} args - Arguments to create a Field.
     * @example
     * // Create one Field
     * const Field = await prisma.field.create({
     *   data: {
     *     // ... data to create a Field
     *   }
     * })
     * 
     */
    create<T extends FieldCreateArgs>(args: SelectSubset<T, FieldCreateArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fields.
     * @param {FieldCreateManyArgs} args - Arguments to create many Fields.
     * @example
     * // Create many Fields
     * const field = await prisma.field.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FieldCreateManyArgs>(args?: SelectSubset<T, FieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fields and returns the data saved in the database.
     * @param {FieldCreateManyAndReturnArgs} args - Arguments to create many Fields.
     * @example
     * // Create many Fields
     * const field = await prisma.field.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fields and only return the `id`
     * const fieldWithIdOnly = await prisma.field.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FieldCreateManyAndReturnArgs>(args?: SelectSubset<T, FieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Field.
     * @param {FieldDeleteArgs} args - Arguments to delete one Field.
     * @example
     * // Delete one Field
     * const Field = await prisma.field.delete({
     *   where: {
     *     // ... filter to delete one Field
     *   }
     * })
     * 
     */
    delete<T extends FieldDeleteArgs>(args: SelectSubset<T, FieldDeleteArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Field.
     * @param {FieldUpdateArgs} args - Arguments to update one Field.
     * @example
     * // Update one Field
     * const field = await prisma.field.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FieldUpdateArgs>(args: SelectSubset<T, FieldUpdateArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fields.
     * @param {FieldDeleteManyArgs} args - Arguments to filter Fields to delete.
     * @example
     * // Delete a few Fields
     * const { count } = await prisma.field.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FieldDeleteManyArgs>(args?: SelectSubset<T, FieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fields
     * const field = await prisma.field.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FieldUpdateManyArgs>(args: SelectSubset<T, FieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fields and returns the data updated in the database.
     * @param {FieldUpdateManyAndReturnArgs} args - Arguments to update many Fields.
     * @example
     * // Update many Fields
     * const field = await prisma.field.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fields and only return the `id`
     * const fieldWithIdOnly = await prisma.field.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FieldUpdateManyAndReturnArgs>(args: SelectSubset<T, FieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Field.
     * @param {FieldUpsertArgs} args - Arguments to update or create a Field.
     * @example
     * // Update or create a Field
     * const field = await prisma.field.upsert({
     *   create: {
     *     // ... data to create a Field
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Field we want to update
     *   }
     * })
     */
    upsert<T extends FieldUpsertArgs>(args: SelectSubset<T, FieldUpsertArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldCountArgs} args - Arguments to filter Fields to count.
     * @example
     * // Count the number of Fields
     * const count = await prisma.field.count({
     *   where: {
     *     // ... the filter for the Fields we want to count
     *   }
     * })
    **/
    count<T extends FieldCountArgs>(
      args?: Subset<T, FieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FieldAggregateArgs>(args: Subset<T, FieldAggregateArgs>): Prisma.PrismaPromise<GetFieldAggregateType<T>>

    /**
     * Group by Field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FieldGroupByArgs['orderBy'] }
        : { orderBy?: FieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Field model
   */
  readonly fields: FieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Field.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cells<T extends Field$cellsArgs<ExtArgs> = {}>(args?: Subset<T, Field$cellsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewFilters<T extends Field$viewFiltersArgs<ExtArgs> = {}>(args?: Subset<T, Field$viewFiltersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewSorts<T extends Field$viewSortsArgs<ExtArgs> = {}>(args?: Subset<T, Field$viewSortsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Field model
   */
  interface FieldFieldRefs {
    readonly id: FieldRef<"Field", 'String'>
    readonly tableId: FieldRef<"Field", 'String'>
    readonly name: FieldRef<"Field", 'String'>
    readonly type: FieldRef<"Field", 'FieldType'>
    readonly position: FieldRef<"Field", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Field findUnique
   */
  export type FieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where: FieldWhereUniqueInput
  }

  /**
   * Field findUniqueOrThrow
   */
  export type FieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where: FieldWhereUniqueInput
  }

  /**
   * Field findFirst
   */
  export type FieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fields.
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fields.
     */
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * Field findFirstOrThrow
   */
  export type FieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fields.
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fields.
     */
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * Field findMany
   */
  export type FieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Fields to fetch.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fields.
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * Field create
   */
  export type FieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * The data needed to create a Field.
     */
    data: XOR<FieldCreateInput, FieldUncheckedCreateInput>
  }

  /**
   * Field createMany
   */
  export type FieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fields.
     */
    data: FieldCreateManyInput | FieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Field createManyAndReturn
   */
  export type FieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * The data used to create many Fields.
     */
    data: FieldCreateManyInput | FieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Field update
   */
  export type FieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * The data needed to update a Field.
     */
    data: XOR<FieldUpdateInput, FieldUncheckedUpdateInput>
    /**
     * Choose, which Field to update.
     */
    where: FieldWhereUniqueInput
  }

  /**
   * Field updateMany
   */
  export type FieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fields.
     */
    data: XOR<FieldUpdateManyMutationInput, FieldUncheckedUpdateManyInput>
    /**
     * Filter which Fields to update
     */
    where?: FieldWhereInput
    /**
     * Limit how many Fields to update.
     */
    limit?: number
  }

  /**
   * Field updateManyAndReturn
   */
  export type FieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * The data used to update Fields.
     */
    data: XOR<FieldUpdateManyMutationInput, FieldUncheckedUpdateManyInput>
    /**
     * Filter which Fields to update
     */
    where?: FieldWhereInput
    /**
     * Limit how many Fields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Field upsert
   */
  export type FieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * The filter to search for the Field to update in case it exists.
     */
    where: FieldWhereUniqueInput
    /**
     * In case the Field found by the `where` argument doesn't exist, create a new Field with this data.
     */
    create: XOR<FieldCreateInput, FieldUncheckedCreateInput>
    /**
     * In case the Field was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FieldUpdateInput, FieldUncheckedUpdateInput>
  }

  /**
   * Field delete
   */
  export type FieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter which Field to delete.
     */
    where: FieldWhereUniqueInput
  }

  /**
   * Field deleteMany
   */
  export type FieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fields to delete
     */
    where?: FieldWhereInput
    /**
     * Limit how many Fields to delete.
     */
    limit?: number
  }

  /**
   * Field.cells
   */
  export type Field$cellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellValue
     */
    select?: CellValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellValue
     */
    omit?: CellValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellValueInclude<ExtArgs> | null
    where?: CellValueWhereInput
    orderBy?: CellValueOrderByWithRelationInput | CellValueOrderByWithRelationInput[]
    cursor?: CellValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CellValueScalarFieldEnum | CellValueScalarFieldEnum[]
  }

  /**
   * Field.viewFilters
   */
  export type Field$viewFiltersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    where?: ViewFilterWhereInput
    orderBy?: ViewFilterOrderByWithRelationInput | ViewFilterOrderByWithRelationInput[]
    cursor?: ViewFilterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewFilterScalarFieldEnum | ViewFilterScalarFieldEnum[]
  }

  /**
   * Field.viewSorts
   */
  export type Field$viewSortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    where?: ViewSortWhereInput
    orderBy?: ViewSortOrderByWithRelationInput | ViewSortOrderByWithRelationInput[]
    cursor?: ViewSortWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewSortScalarFieldEnum | ViewSortScalarFieldEnum[]
  }

  /**
   * Field without action
   */
  export type FieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
  }


  /**
   * Model Record
   */

  export type AggregateRecord = {
    _count: RecordCountAggregateOutputType | null
    _avg: RecordAvgAggregateOutputType | null
    _sum: RecordSumAggregateOutputType | null
    _min: RecordMinAggregateOutputType | null
    _max: RecordMaxAggregateOutputType | null
  }

  export type RecordAvgAggregateOutputType = {
    position: number | null
    sortValueNumber: number | null
  }

  export type RecordSumAggregateOutputType = {
    position: number | null
    sortValueNumber: number | null
  }

  export type RecordMinAggregateOutputType = {
    id: string | null
    tableId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    position: number | null
    userId: string | null
    sortValueText: string | null
    sortValueNumber: number | null
  }

  export type RecordMaxAggregateOutputType = {
    id: string | null
    tableId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    position: number | null
    userId: string | null
    sortValueText: string | null
    sortValueNumber: number | null
  }

  export type RecordCountAggregateOutputType = {
    id: number
    tableId: number
    createdAt: number
    updatedAt: number
    position: number
    userId: number
    sortValueText: number
    sortValueNumber: number
    _all: number
  }


  export type RecordAvgAggregateInputType = {
    position?: true
    sortValueNumber?: true
  }

  export type RecordSumAggregateInputType = {
    position?: true
    sortValueNumber?: true
  }

  export type RecordMinAggregateInputType = {
    id?: true
    tableId?: true
    createdAt?: true
    updatedAt?: true
    position?: true
    userId?: true
    sortValueText?: true
    sortValueNumber?: true
  }

  export type RecordMaxAggregateInputType = {
    id?: true
    tableId?: true
    createdAt?: true
    updatedAt?: true
    position?: true
    userId?: true
    sortValueText?: true
    sortValueNumber?: true
  }

  export type RecordCountAggregateInputType = {
    id?: true
    tableId?: true
    createdAt?: true
    updatedAt?: true
    position?: true
    userId?: true
    sortValueText?: true
    sortValueNumber?: true
    _all?: true
  }

  export type RecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Record to aggregate.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Records
    **/
    _count?: true | RecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordMaxAggregateInputType
  }

  export type GetRecordAggregateType<T extends RecordAggregateArgs> = {
        [P in keyof T & keyof AggregateRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecord[P]>
      : GetScalarType<T[P], AggregateRecord[P]>
  }




  export type RecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordWhereInput
    orderBy?: RecordOrderByWithAggregationInput | RecordOrderByWithAggregationInput[]
    by: RecordScalarFieldEnum[] | RecordScalarFieldEnum
    having?: RecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordCountAggregateInputType | true
    _avg?: RecordAvgAggregateInputType
    _sum?: RecordSumAggregateInputType
    _min?: RecordMinAggregateInputType
    _max?: RecordMaxAggregateInputType
  }

  export type RecordGroupByOutputType = {
    id: string
    tableId: string
    createdAt: Date
    updatedAt: Date
    position: number | null
    userId: string | null
    sortValueText: string | null
    sortValueNumber: number | null
    _count: RecordCountAggregateOutputType | null
    _avg: RecordAvgAggregateOutputType | null
    _sum: RecordSumAggregateOutputType | null
    _min: RecordMinAggregateOutputType | null
    _max: RecordMaxAggregateOutputType | null
  }

  type GetRecordGroupByPayload<T extends RecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordGroupByOutputType[P]>
            : GetScalarType<T[P], RecordGroupByOutputType[P]>
        }
      >
    >


  export type RecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    position?: boolean
    userId?: boolean
    sortValueText?: boolean
    sortValueNumber?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
    cells?: boolean | Record$cellsArgs<ExtArgs>
    user?: boolean | Record$userArgs<ExtArgs>
    _count?: boolean | RecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>

  export type RecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    position?: boolean
    userId?: boolean
    sortValueText?: boolean
    sortValueNumber?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
    user?: boolean | Record$userArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>

  export type RecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    position?: boolean
    userId?: boolean
    sortValueText?: boolean
    sortValueNumber?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
    user?: boolean | Record$userArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>

  export type RecordSelectScalar = {
    id?: boolean
    tableId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    position?: boolean
    userId?: boolean
    sortValueText?: boolean
    sortValueNumber?: boolean
  }

  export type RecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tableId" | "createdAt" | "updatedAt" | "position" | "userId" | "sortValueText" | "sortValueNumber", ExtArgs["result"]["record"]>
  export type RecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
    cells?: boolean | Record$cellsArgs<ExtArgs>
    user?: boolean | Record$userArgs<ExtArgs>
    _count?: boolean | RecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
    user?: boolean | Record$userArgs<ExtArgs>
  }
  export type RecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
    user?: boolean | Record$userArgs<ExtArgs>
  }

  export type $RecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Record"
    objects: {
      table: Prisma.$TablePayload<ExtArgs>
      cells: Prisma.$CellValuePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tableId: string
      createdAt: Date
      updatedAt: Date
      position: number | null
      userId: string | null
      sortValueText: string | null
      sortValueNumber: number | null
    }, ExtArgs["result"]["record"]>
    composites: {}
  }

  type RecordGetPayload<S extends boolean | null | undefined | RecordDefaultArgs> = $Result.GetResult<Prisma.$RecordPayload, S>

  type RecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecordCountAggregateInputType | true
    }

  export interface RecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Record'], meta: { name: 'Record' } }
    /**
     * Find zero or one Record that matches the filter.
     * @param {RecordFindUniqueArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecordFindUniqueArgs>(args: SelectSubset<T, RecordFindUniqueArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Record that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecordFindUniqueOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecordFindUniqueOrThrowArgs>(args: SelectSubset<T, RecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Record that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecordFindFirstArgs>(args?: SelectSubset<T, RecordFindFirstArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Record that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecordFindFirstOrThrowArgs>(args?: SelectSubset<T, RecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Records
     * const records = await prisma.record.findMany()
     * 
     * // Get first 10 Records
     * const records = await prisma.record.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordWithIdOnly = await prisma.record.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecordFindManyArgs>(args?: SelectSubset<T, RecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Record.
     * @param {RecordCreateArgs} args - Arguments to create a Record.
     * @example
     * // Create one Record
     * const Record = await prisma.record.create({
     *   data: {
     *     // ... data to create a Record
     *   }
     * })
     * 
     */
    create<T extends RecordCreateArgs>(args: SelectSubset<T, RecordCreateArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Records.
     * @param {RecordCreateManyArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const record = await prisma.record.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecordCreateManyArgs>(args?: SelectSubset<T, RecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Records and returns the data saved in the database.
     * @param {RecordCreateManyAndReturnArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const record = await prisma.record.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Records and only return the `id`
     * const recordWithIdOnly = await prisma.record.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecordCreateManyAndReturnArgs>(args?: SelectSubset<T, RecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Record.
     * @param {RecordDeleteArgs} args - Arguments to delete one Record.
     * @example
     * // Delete one Record
     * const Record = await prisma.record.delete({
     *   where: {
     *     // ... filter to delete one Record
     *   }
     * })
     * 
     */
    delete<T extends RecordDeleteArgs>(args: SelectSubset<T, RecordDeleteArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Record.
     * @param {RecordUpdateArgs} args - Arguments to update one Record.
     * @example
     * // Update one Record
     * const record = await prisma.record.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecordUpdateArgs>(args: SelectSubset<T, RecordUpdateArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Records.
     * @param {RecordDeleteManyArgs} args - Arguments to filter Records to delete.
     * @example
     * // Delete a few Records
     * const { count } = await prisma.record.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecordDeleteManyArgs>(args?: SelectSubset<T, RecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Records
     * const record = await prisma.record.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecordUpdateManyArgs>(args: SelectSubset<T, RecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records and returns the data updated in the database.
     * @param {RecordUpdateManyAndReturnArgs} args - Arguments to update many Records.
     * @example
     * // Update many Records
     * const record = await prisma.record.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Records and only return the `id`
     * const recordWithIdOnly = await prisma.record.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecordUpdateManyAndReturnArgs>(args: SelectSubset<T, RecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Record.
     * @param {RecordUpsertArgs} args - Arguments to update or create a Record.
     * @example
     * // Update or create a Record
     * const record = await prisma.record.upsert({
     *   create: {
     *     // ... data to create a Record
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Record we want to update
     *   }
     * })
     */
    upsert<T extends RecordUpsertArgs>(args: SelectSubset<T, RecordUpsertArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordCountArgs} args - Arguments to filter Records to count.
     * @example
     * // Count the number of Records
     * const count = await prisma.record.count({
     *   where: {
     *     // ... the filter for the Records we want to count
     *   }
     * })
    **/
    count<T extends RecordCountArgs>(
      args?: Subset<T, RecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecordAggregateArgs>(args: Subset<T, RecordAggregateArgs>): Prisma.PrismaPromise<GetRecordAggregateType<T>>

    /**
     * Group by Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordGroupByArgs['orderBy'] }
        : { orderBy?: RecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Record model
   */
  readonly fields: RecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Record.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cells<T extends Record$cellsArgs<ExtArgs> = {}>(args?: Subset<T, Record$cellsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Record$userArgs<ExtArgs> = {}>(args?: Subset<T, Record$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Record model
   */
  interface RecordFieldRefs {
    readonly id: FieldRef<"Record", 'String'>
    readonly tableId: FieldRef<"Record", 'String'>
    readonly createdAt: FieldRef<"Record", 'DateTime'>
    readonly updatedAt: FieldRef<"Record", 'DateTime'>
    readonly position: FieldRef<"Record", 'Int'>
    readonly userId: FieldRef<"Record", 'String'>
    readonly sortValueText: FieldRef<"Record", 'String'>
    readonly sortValueNumber: FieldRef<"Record", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Record findUnique
   */
  export type RecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record findUniqueOrThrow
   */
  export type RecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record findFirst
   */
  export type RecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record findFirstOrThrow
   */
  export type RecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record findMany
   */
  export type RecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record create
   */
  export type RecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The data needed to create a Record.
     */
    data: XOR<RecordCreateInput, RecordUncheckedCreateInput>
  }

  /**
   * Record createMany
   */
  export type RecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Records.
     */
    data: RecordCreateManyInput | RecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Record createManyAndReturn
   */
  export type RecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * The data used to create many Records.
     */
    data: RecordCreateManyInput | RecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Record update
   */
  export type RecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The data needed to update a Record.
     */
    data: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>
    /**
     * Choose, which Record to update.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record updateMany
   */
  export type RecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Records.
     */
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to update.
     */
    limit?: number
  }

  /**
   * Record updateManyAndReturn
   */
  export type RecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * The data used to update Records.
     */
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Record upsert
   */
  export type RecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The filter to search for the Record to update in case it exists.
     */
    where: RecordWhereUniqueInput
    /**
     * In case the Record found by the `where` argument doesn't exist, create a new Record with this data.
     */
    create: XOR<RecordCreateInput, RecordUncheckedCreateInput>
    /**
     * In case the Record was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>
  }

  /**
   * Record delete
   */
  export type RecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter which Record to delete.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record deleteMany
   */
  export type RecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Records to delete
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to delete.
     */
    limit?: number
  }

  /**
   * Record.cells
   */
  export type Record$cellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellValue
     */
    select?: CellValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellValue
     */
    omit?: CellValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellValueInclude<ExtArgs> | null
    where?: CellValueWhereInput
    orderBy?: CellValueOrderByWithRelationInput | CellValueOrderByWithRelationInput[]
    cursor?: CellValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CellValueScalarFieldEnum | CellValueScalarFieldEnum[]
  }

  /**
   * Record.user
   */
  export type Record$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Record without action
   */
  export type RecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
  }


  /**
   * Model CellValue
   */

  export type AggregateCellValue = {
    _count: CellValueCountAggregateOutputType | null
    _avg: CellValueAvgAggregateOutputType | null
    _sum: CellValueSumAggregateOutputType | null
    _min: CellValueMinAggregateOutputType | null
    _max: CellValueMaxAggregateOutputType | null
  }

  export type CellValueAvgAggregateOutputType = {
    valueNumber: number | null
  }

  export type CellValueSumAggregateOutputType = {
    valueNumber: number | null
  }

  export type CellValueMinAggregateOutputType = {
    recordId: string | null
    fieldId: string | null
    valueText: string | null
    valueNumber: number | null
  }

  export type CellValueMaxAggregateOutputType = {
    recordId: string | null
    fieldId: string | null
    valueText: string | null
    valueNumber: number | null
  }

  export type CellValueCountAggregateOutputType = {
    recordId: number
    fieldId: number
    valueText: number
    valueNumber: number
    _all: number
  }


  export type CellValueAvgAggregateInputType = {
    valueNumber?: true
  }

  export type CellValueSumAggregateInputType = {
    valueNumber?: true
  }

  export type CellValueMinAggregateInputType = {
    recordId?: true
    fieldId?: true
    valueText?: true
    valueNumber?: true
  }

  export type CellValueMaxAggregateInputType = {
    recordId?: true
    fieldId?: true
    valueText?: true
    valueNumber?: true
  }

  export type CellValueCountAggregateInputType = {
    recordId?: true
    fieldId?: true
    valueText?: true
    valueNumber?: true
    _all?: true
  }

  export type CellValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CellValue to aggregate.
     */
    where?: CellValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CellValues to fetch.
     */
    orderBy?: CellValueOrderByWithRelationInput | CellValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CellValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CellValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CellValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CellValues
    **/
    _count?: true | CellValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CellValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CellValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CellValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CellValueMaxAggregateInputType
  }

  export type GetCellValueAggregateType<T extends CellValueAggregateArgs> = {
        [P in keyof T & keyof AggregateCellValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCellValue[P]>
      : GetScalarType<T[P], AggregateCellValue[P]>
  }




  export type CellValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CellValueWhereInput
    orderBy?: CellValueOrderByWithAggregationInput | CellValueOrderByWithAggregationInput[]
    by: CellValueScalarFieldEnum[] | CellValueScalarFieldEnum
    having?: CellValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CellValueCountAggregateInputType | true
    _avg?: CellValueAvgAggregateInputType
    _sum?: CellValueSumAggregateInputType
    _min?: CellValueMinAggregateInputType
    _max?: CellValueMaxAggregateInputType
  }

  export type CellValueGroupByOutputType = {
    recordId: string
    fieldId: string
    valueText: string | null
    valueNumber: number | null
    _count: CellValueCountAggregateOutputType | null
    _avg: CellValueAvgAggregateOutputType | null
    _sum: CellValueSumAggregateOutputType | null
    _min: CellValueMinAggregateOutputType | null
    _max: CellValueMaxAggregateOutputType | null
  }

  type GetCellValueGroupByPayload<T extends CellValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CellValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CellValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CellValueGroupByOutputType[P]>
            : GetScalarType<T[P], CellValueGroupByOutputType[P]>
        }
      >
    >


  export type CellValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recordId?: boolean
    fieldId?: boolean
    valueText?: boolean
    valueNumber?: boolean
    record?: boolean | RecordDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cellValue"]>

  export type CellValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recordId?: boolean
    fieldId?: boolean
    valueText?: boolean
    valueNumber?: boolean
    record?: boolean | RecordDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cellValue"]>

  export type CellValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recordId?: boolean
    fieldId?: boolean
    valueText?: boolean
    valueNumber?: boolean
    record?: boolean | RecordDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cellValue"]>

  export type CellValueSelectScalar = {
    recordId?: boolean
    fieldId?: boolean
    valueText?: boolean
    valueNumber?: boolean
  }

  export type CellValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"recordId" | "fieldId" | "valueText" | "valueNumber", ExtArgs["result"]["cellValue"]>
  export type CellValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    record?: boolean | RecordDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }
  export type CellValueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    record?: boolean | RecordDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }
  export type CellValueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    record?: boolean | RecordDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }

  export type $CellValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CellValue"
    objects: {
      record: Prisma.$RecordPayload<ExtArgs>
      field: Prisma.$FieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      recordId: string
      fieldId: string
      valueText: string | null
      valueNumber: number | null
    }, ExtArgs["result"]["cellValue"]>
    composites: {}
  }

  type CellValueGetPayload<S extends boolean | null | undefined | CellValueDefaultArgs> = $Result.GetResult<Prisma.$CellValuePayload, S>

  type CellValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CellValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CellValueCountAggregateInputType | true
    }

  export interface CellValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CellValue'], meta: { name: 'CellValue' } }
    /**
     * Find zero or one CellValue that matches the filter.
     * @param {CellValueFindUniqueArgs} args - Arguments to find a CellValue
     * @example
     * // Get one CellValue
     * const cellValue = await prisma.cellValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CellValueFindUniqueArgs>(args: SelectSubset<T, CellValueFindUniqueArgs<ExtArgs>>): Prisma__CellValueClient<$Result.GetResult<Prisma.$CellValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CellValue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CellValueFindUniqueOrThrowArgs} args - Arguments to find a CellValue
     * @example
     * // Get one CellValue
     * const cellValue = await prisma.cellValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CellValueFindUniqueOrThrowArgs>(args: SelectSubset<T, CellValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CellValueClient<$Result.GetResult<Prisma.$CellValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CellValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellValueFindFirstArgs} args - Arguments to find a CellValue
     * @example
     * // Get one CellValue
     * const cellValue = await prisma.cellValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CellValueFindFirstArgs>(args?: SelectSubset<T, CellValueFindFirstArgs<ExtArgs>>): Prisma__CellValueClient<$Result.GetResult<Prisma.$CellValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CellValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellValueFindFirstOrThrowArgs} args - Arguments to find a CellValue
     * @example
     * // Get one CellValue
     * const cellValue = await prisma.cellValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CellValueFindFirstOrThrowArgs>(args?: SelectSubset<T, CellValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__CellValueClient<$Result.GetResult<Prisma.$CellValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CellValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CellValues
     * const cellValues = await prisma.cellValue.findMany()
     * 
     * // Get first 10 CellValues
     * const cellValues = await prisma.cellValue.findMany({ take: 10 })
     * 
     * // Only select the `recordId`
     * const cellValueWithRecordIdOnly = await prisma.cellValue.findMany({ select: { recordId: true } })
     * 
     */
    findMany<T extends CellValueFindManyArgs>(args?: SelectSubset<T, CellValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CellValue.
     * @param {CellValueCreateArgs} args - Arguments to create a CellValue.
     * @example
     * // Create one CellValue
     * const CellValue = await prisma.cellValue.create({
     *   data: {
     *     // ... data to create a CellValue
     *   }
     * })
     * 
     */
    create<T extends CellValueCreateArgs>(args: SelectSubset<T, CellValueCreateArgs<ExtArgs>>): Prisma__CellValueClient<$Result.GetResult<Prisma.$CellValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CellValues.
     * @param {CellValueCreateManyArgs} args - Arguments to create many CellValues.
     * @example
     * // Create many CellValues
     * const cellValue = await prisma.cellValue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CellValueCreateManyArgs>(args?: SelectSubset<T, CellValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CellValues and returns the data saved in the database.
     * @param {CellValueCreateManyAndReturnArgs} args - Arguments to create many CellValues.
     * @example
     * // Create many CellValues
     * const cellValue = await prisma.cellValue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CellValues and only return the `recordId`
     * const cellValueWithRecordIdOnly = await prisma.cellValue.createManyAndReturn({
     *   select: { recordId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CellValueCreateManyAndReturnArgs>(args?: SelectSubset<T, CellValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CellValue.
     * @param {CellValueDeleteArgs} args - Arguments to delete one CellValue.
     * @example
     * // Delete one CellValue
     * const CellValue = await prisma.cellValue.delete({
     *   where: {
     *     // ... filter to delete one CellValue
     *   }
     * })
     * 
     */
    delete<T extends CellValueDeleteArgs>(args: SelectSubset<T, CellValueDeleteArgs<ExtArgs>>): Prisma__CellValueClient<$Result.GetResult<Prisma.$CellValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CellValue.
     * @param {CellValueUpdateArgs} args - Arguments to update one CellValue.
     * @example
     * // Update one CellValue
     * const cellValue = await prisma.cellValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CellValueUpdateArgs>(args: SelectSubset<T, CellValueUpdateArgs<ExtArgs>>): Prisma__CellValueClient<$Result.GetResult<Prisma.$CellValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CellValues.
     * @param {CellValueDeleteManyArgs} args - Arguments to filter CellValues to delete.
     * @example
     * // Delete a few CellValues
     * const { count } = await prisma.cellValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CellValueDeleteManyArgs>(args?: SelectSubset<T, CellValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CellValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CellValues
     * const cellValue = await prisma.cellValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CellValueUpdateManyArgs>(args: SelectSubset<T, CellValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CellValues and returns the data updated in the database.
     * @param {CellValueUpdateManyAndReturnArgs} args - Arguments to update many CellValues.
     * @example
     * // Update many CellValues
     * const cellValue = await prisma.cellValue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CellValues and only return the `recordId`
     * const cellValueWithRecordIdOnly = await prisma.cellValue.updateManyAndReturn({
     *   select: { recordId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CellValueUpdateManyAndReturnArgs>(args: SelectSubset<T, CellValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CellValue.
     * @param {CellValueUpsertArgs} args - Arguments to update or create a CellValue.
     * @example
     * // Update or create a CellValue
     * const cellValue = await prisma.cellValue.upsert({
     *   create: {
     *     // ... data to create a CellValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CellValue we want to update
     *   }
     * })
     */
    upsert<T extends CellValueUpsertArgs>(args: SelectSubset<T, CellValueUpsertArgs<ExtArgs>>): Prisma__CellValueClient<$Result.GetResult<Prisma.$CellValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CellValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellValueCountArgs} args - Arguments to filter CellValues to count.
     * @example
     * // Count the number of CellValues
     * const count = await prisma.cellValue.count({
     *   where: {
     *     // ... the filter for the CellValues we want to count
     *   }
     * })
    **/
    count<T extends CellValueCountArgs>(
      args?: Subset<T, CellValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CellValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CellValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CellValueAggregateArgs>(args: Subset<T, CellValueAggregateArgs>): Prisma.PrismaPromise<GetCellValueAggregateType<T>>

    /**
     * Group by CellValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellValueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CellValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CellValueGroupByArgs['orderBy'] }
        : { orderBy?: CellValueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CellValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCellValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CellValue model
   */
  readonly fields: CellValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CellValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CellValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    record<T extends RecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecordDefaultArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    field<T extends FieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FieldDefaultArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CellValue model
   */
  interface CellValueFieldRefs {
    readonly recordId: FieldRef<"CellValue", 'String'>
    readonly fieldId: FieldRef<"CellValue", 'String'>
    readonly valueText: FieldRef<"CellValue", 'String'>
    readonly valueNumber: FieldRef<"CellValue", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CellValue findUnique
   */
  export type CellValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellValue
     */
    select?: CellValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellValue
     */
    omit?: CellValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellValueInclude<ExtArgs> | null
    /**
     * Filter, which CellValue to fetch.
     */
    where: CellValueWhereUniqueInput
  }

  /**
   * CellValue findUniqueOrThrow
   */
  export type CellValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellValue
     */
    select?: CellValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellValue
     */
    omit?: CellValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellValueInclude<ExtArgs> | null
    /**
     * Filter, which CellValue to fetch.
     */
    where: CellValueWhereUniqueInput
  }

  /**
   * CellValue findFirst
   */
  export type CellValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellValue
     */
    select?: CellValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellValue
     */
    omit?: CellValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellValueInclude<ExtArgs> | null
    /**
     * Filter, which CellValue to fetch.
     */
    where?: CellValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CellValues to fetch.
     */
    orderBy?: CellValueOrderByWithRelationInput | CellValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CellValues.
     */
    cursor?: CellValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CellValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CellValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CellValues.
     */
    distinct?: CellValueScalarFieldEnum | CellValueScalarFieldEnum[]
  }

  /**
   * CellValue findFirstOrThrow
   */
  export type CellValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellValue
     */
    select?: CellValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellValue
     */
    omit?: CellValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellValueInclude<ExtArgs> | null
    /**
     * Filter, which CellValue to fetch.
     */
    where?: CellValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CellValues to fetch.
     */
    orderBy?: CellValueOrderByWithRelationInput | CellValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CellValues.
     */
    cursor?: CellValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CellValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CellValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CellValues.
     */
    distinct?: CellValueScalarFieldEnum | CellValueScalarFieldEnum[]
  }

  /**
   * CellValue findMany
   */
  export type CellValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellValue
     */
    select?: CellValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellValue
     */
    omit?: CellValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellValueInclude<ExtArgs> | null
    /**
     * Filter, which CellValues to fetch.
     */
    where?: CellValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CellValues to fetch.
     */
    orderBy?: CellValueOrderByWithRelationInput | CellValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CellValues.
     */
    cursor?: CellValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CellValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CellValues.
     */
    skip?: number
    distinct?: CellValueScalarFieldEnum | CellValueScalarFieldEnum[]
  }

  /**
   * CellValue create
   */
  export type CellValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellValue
     */
    select?: CellValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellValue
     */
    omit?: CellValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellValueInclude<ExtArgs> | null
    /**
     * The data needed to create a CellValue.
     */
    data: XOR<CellValueCreateInput, CellValueUncheckedCreateInput>
  }

  /**
   * CellValue createMany
   */
  export type CellValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CellValues.
     */
    data: CellValueCreateManyInput | CellValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CellValue createManyAndReturn
   */
  export type CellValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellValue
     */
    select?: CellValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CellValue
     */
    omit?: CellValueOmit<ExtArgs> | null
    /**
     * The data used to create many CellValues.
     */
    data: CellValueCreateManyInput | CellValueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellValueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CellValue update
   */
  export type CellValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellValue
     */
    select?: CellValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellValue
     */
    omit?: CellValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellValueInclude<ExtArgs> | null
    /**
     * The data needed to update a CellValue.
     */
    data: XOR<CellValueUpdateInput, CellValueUncheckedUpdateInput>
    /**
     * Choose, which CellValue to update.
     */
    where: CellValueWhereUniqueInput
  }

  /**
   * CellValue updateMany
   */
  export type CellValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CellValues.
     */
    data: XOR<CellValueUpdateManyMutationInput, CellValueUncheckedUpdateManyInput>
    /**
     * Filter which CellValues to update
     */
    where?: CellValueWhereInput
    /**
     * Limit how many CellValues to update.
     */
    limit?: number
  }

  /**
   * CellValue updateManyAndReturn
   */
  export type CellValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellValue
     */
    select?: CellValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CellValue
     */
    omit?: CellValueOmit<ExtArgs> | null
    /**
     * The data used to update CellValues.
     */
    data: XOR<CellValueUpdateManyMutationInput, CellValueUncheckedUpdateManyInput>
    /**
     * Filter which CellValues to update
     */
    where?: CellValueWhereInput
    /**
     * Limit how many CellValues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellValueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CellValue upsert
   */
  export type CellValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellValue
     */
    select?: CellValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellValue
     */
    omit?: CellValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellValueInclude<ExtArgs> | null
    /**
     * The filter to search for the CellValue to update in case it exists.
     */
    where: CellValueWhereUniqueInput
    /**
     * In case the CellValue found by the `where` argument doesn't exist, create a new CellValue with this data.
     */
    create: XOR<CellValueCreateInput, CellValueUncheckedCreateInput>
    /**
     * In case the CellValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CellValueUpdateInput, CellValueUncheckedUpdateInput>
  }

  /**
   * CellValue delete
   */
  export type CellValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellValue
     */
    select?: CellValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellValue
     */
    omit?: CellValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellValueInclude<ExtArgs> | null
    /**
     * Filter which CellValue to delete.
     */
    where: CellValueWhereUniqueInput
  }

  /**
   * CellValue deleteMany
   */
  export type CellValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CellValues to delete
     */
    where?: CellValueWhereInput
    /**
     * Limit how many CellValues to delete.
     */
    limit?: number
  }

  /**
   * CellValue without action
   */
  export type CellValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CellValue
     */
    select?: CellValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CellValue
     */
    omit?: CellValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellValueInclude<ExtArgs> | null
  }


  /**
   * Model View
   */

  export type AggregateView = {
    _count: ViewCountAggregateOutputType | null
    _avg: ViewAvgAggregateOutputType | null
    _sum: ViewSumAggregateOutputType | null
    _min: ViewMinAggregateOutputType | null
    _max: ViewMaxAggregateOutputType | null
  }

  export type ViewAvgAggregateOutputType = {
    position: number | null
  }

  export type ViewSumAggregateOutputType = {
    position: number | null
  }

  export type ViewMinAggregateOutputType = {
    id: string | null
    tableId: string | null
    name: string | null
    position: number | null
    createdAt: Date | null
    filterConjunction: string | null
  }

  export type ViewMaxAggregateOutputType = {
    id: string | null
    tableId: string | null
    name: string | null
    position: number | null
    createdAt: Date | null
    filterConjunction: string | null
  }

  export type ViewCountAggregateOutputType = {
    id: number
    tableId: number
    name: number
    position: number
    createdAt: number
    filterConjunction: number
    _all: number
  }


  export type ViewAvgAggregateInputType = {
    position?: true
  }

  export type ViewSumAggregateInputType = {
    position?: true
  }

  export type ViewMinAggregateInputType = {
    id?: true
    tableId?: true
    name?: true
    position?: true
    createdAt?: true
    filterConjunction?: true
  }

  export type ViewMaxAggregateInputType = {
    id?: true
    tableId?: true
    name?: true
    position?: true
    createdAt?: true
    filterConjunction?: true
  }

  export type ViewCountAggregateInputType = {
    id?: true
    tableId?: true
    name?: true
    position?: true
    createdAt?: true
    filterConjunction?: true
    _all?: true
  }

  export type ViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which View to aggregate.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Views
    **/
    _count?: true | ViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewMaxAggregateInputType
  }

  export type GetViewAggregateType<T extends ViewAggregateArgs> = {
        [P in keyof T & keyof AggregateView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateView[P]>
      : GetScalarType<T[P], AggregateView[P]>
  }




  export type ViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewWhereInput
    orderBy?: ViewOrderByWithAggregationInput | ViewOrderByWithAggregationInput[]
    by: ViewScalarFieldEnum[] | ViewScalarFieldEnum
    having?: ViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewCountAggregateInputType | true
    _avg?: ViewAvgAggregateInputType
    _sum?: ViewSumAggregateInputType
    _min?: ViewMinAggregateInputType
    _max?: ViewMaxAggregateInputType
  }

  export type ViewGroupByOutputType = {
    id: string
    tableId: string
    name: string
    position: number | null
    createdAt: Date
    filterConjunction: string
    _count: ViewCountAggregateOutputType | null
    _avg: ViewAvgAggregateOutputType | null
    _sum: ViewSumAggregateOutputType | null
    _min: ViewMinAggregateOutputType | null
    _max: ViewMaxAggregateOutputType | null
  }

  type GetViewGroupByPayload<T extends ViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewGroupByOutputType[P]>
            : GetScalarType<T[P], ViewGroupByOutputType[P]>
        }
      >
    >


  export type ViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    name?: boolean
    position?: boolean
    createdAt?: boolean
    filterConjunction?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
    filters?: boolean | View$filtersArgs<ExtArgs>
    filterGroups?: boolean | View$filterGroupsArgs<ExtArgs>
    sorts?: boolean | View$sortsArgs<ExtArgs>
    _count?: boolean | ViewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["view"]>

  export type ViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    name?: boolean
    position?: boolean
    createdAt?: boolean
    filterConjunction?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["view"]>

  export type ViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    name?: boolean
    position?: boolean
    createdAt?: boolean
    filterConjunction?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["view"]>

  export type ViewSelectScalar = {
    id?: boolean
    tableId?: boolean
    name?: boolean
    position?: boolean
    createdAt?: boolean
    filterConjunction?: boolean
  }

  export type ViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tableId" | "name" | "position" | "createdAt" | "filterConjunction", ExtArgs["result"]["view"]>
  export type ViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
    filters?: boolean | View$filtersArgs<ExtArgs>
    filterGroups?: boolean | View$filterGroupsArgs<ExtArgs>
    sorts?: boolean | View$sortsArgs<ExtArgs>
    _count?: boolean | ViewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }
  export type ViewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }

  export type $ViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "View"
    objects: {
      table: Prisma.$TablePayload<ExtArgs>
      filters: Prisma.$ViewFilterPayload<ExtArgs>[]
      filterGroups: Prisma.$ViewFilterGroupPayload<ExtArgs>[]
      sorts: Prisma.$ViewSortPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tableId: string
      name: string
      position: number | null
      createdAt: Date
      filterConjunction: string
    }, ExtArgs["result"]["view"]>
    composites: {}
  }

  type ViewGetPayload<S extends boolean | null | undefined | ViewDefaultArgs> = $Result.GetResult<Prisma.$ViewPayload, S>

  type ViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewCountAggregateInputType | true
    }

  export interface ViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['View'], meta: { name: 'View' } }
    /**
     * Find zero or one View that matches the filter.
     * @param {ViewFindUniqueArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewFindUniqueArgs>(args: SelectSubset<T, ViewFindUniqueArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one View that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewFindUniqueOrThrowArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first View that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindFirstArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewFindFirstArgs>(args?: SelectSubset<T, ViewFindFirstArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first View that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindFirstOrThrowArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.view.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.view.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewWithIdOnly = await prisma.view.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewFindManyArgs>(args?: SelectSubset<T, ViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a View.
     * @param {ViewCreateArgs} args - Arguments to create a View.
     * @example
     * // Create one View
     * const View = await prisma.view.create({
     *   data: {
     *     // ... data to create a View
     *   }
     * })
     * 
     */
    create<T extends ViewCreateArgs>(args: SelectSubset<T, ViewCreateArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Views.
     * @param {ViewCreateManyArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const view = await prisma.view.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewCreateManyArgs>(args?: SelectSubset<T, ViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Views and returns the data saved in the database.
     * @param {ViewCreateManyAndReturnArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const view = await prisma.view.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Views and only return the `id`
     * const viewWithIdOnly = await prisma.view.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a View.
     * @param {ViewDeleteArgs} args - Arguments to delete one View.
     * @example
     * // Delete one View
     * const View = await prisma.view.delete({
     *   where: {
     *     // ... filter to delete one View
     *   }
     * })
     * 
     */
    delete<T extends ViewDeleteArgs>(args: SelectSubset<T, ViewDeleteArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one View.
     * @param {ViewUpdateArgs} args - Arguments to update one View.
     * @example
     * // Update one View
     * const view = await prisma.view.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewUpdateArgs>(args: SelectSubset<T, ViewUpdateArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Views.
     * @param {ViewDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.view.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewDeleteManyArgs>(args?: SelectSubset<T, ViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const view = await prisma.view.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewUpdateManyArgs>(args: SelectSubset<T, ViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views and returns the data updated in the database.
     * @param {ViewUpdateManyAndReturnArgs} args - Arguments to update many Views.
     * @example
     * // Update many Views
     * const view = await prisma.view.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Views and only return the `id`
     * const viewWithIdOnly = await prisma.view.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ViewUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one View.
     * @param {ViewUpsertArgs} args - Arguments to update or create a View.
     * @example
     * // Update or create a View
     * const view = await prisma.view.upsert({
     *   create: {
     *     // ... data to create a View
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the View we want to update
     *   }
     * })
     */
    upsert<T extends ViewUpsertArgs>(args: SelectSubset<T, ViewUpsertArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.view.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends ViewCountArgs>(
      args?: Subset<T, ViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewAggregateArgs>(args: Subset<T, ViewAggregateArgs>): Prisma.PrismaPromise<GetViewAggregateType<T>>

    /**
     * Group by View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewGroupByArgs['orderBy'] }
        : { orderBy?: ViewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the View model
   */
  readonly fields: ViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for View.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    filters<T extends View$filtersArgs<ExtArgs> = {}>(args?: Subset<T, View$filtersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    filterGroups<T extends View$filterGroupsArgs<ExtArgs> = {}>(args?: Subset<T, View$filterGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewFilterGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sorts<T extends View$sortsArgs<ExtArgs> = {}>(args?: Subset<T, View$sortsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the View model
   */
  interface ViewFieldRefs {
    readonly id: FieldRef<"View", 'String'>
    readonly tableId: FieldRef<"View", 'String'>
    readonly name: FieldRef<"View", 'String'>
    readonly position: FieldRef<"View", 'Int'>
    readonly createdAt: FieldRef<"View", 'DateTime'>
    readonly filterConjunction: FieldRef<"View", 'String'>
  }
    

  // Custom InputTypes
  /**
   * View findUnique
   */
  export type ViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View findUniqueOrThrow
   */
  export type ViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View findFirst
   */
  export type ViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View findFirstOrThrow
   */
  export type ViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View findMany
   */
  export type ViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View create
   */
  export type ViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The data needed to create a View.
     */
    data: XOR<ViewCreateInput, ViewUncheckedCreateInput>
  }

  /**
   * View createMany
   */
  export type ViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Views.
     */
    data: ViewCreateManyInput | ViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * View createManyAndReturn
   */
  export type ViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * The data used to create many Views.
     */
    data: ViewCreateManyInput | ViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * View update
   */
  export type ViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The data needed to update a View.
     */
    data: XOR<ViewUpdateInput, ViewUncheckedUpdateInput>
    /**
     * Choose, which View to update.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View updateMany
   */
  export type ViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Views.
     */
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
  }

  /**
   * View updateManyAndReturn
   */
  export type ViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * The data used to update Views.
     */
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * View upsert
   */
  export type ViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The filter to search for the View to update in case it exists.
     */
    where: ViewWhereUniqueInput
    /**
     * In case the View found by the `where` argument doesn't exist, create a new View with this data.
     */
    create: XOR<ViewCreateInput, ViewUncheckedCreateInput>
    /**
     * In case the View was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewUpdateInput, ViewUncheckedUpdateInput>
  }

  /**
   * View delete
   */
  export type ViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter which View to delete.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View deleteMany
   */
  export type ViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Views to delete
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to delete.
     */
    limit?: number
  }

  /**
   * View.filters
   */
  export type View$filtersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    where?: ViewFilterWhereInput
    orderBy?: ViewFilterOrderByWithRelationInput | ViewFilterOrderByWithRelationInput[]
    cursor?: ViewFilterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewFilterScalarFieldEnum | ViewFilterScalarFieldEnum[]
  }

  /**
   * View.filterGroups
   */
  export type View$filterGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilterGroup
     */
    select?: ViewFilterGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilterGroup
     */
    omit?: ViewFilterGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterGroupInclude<ExtArgs> | null
    where?: ViewFilterGroupWhereInput
    orderBy?: ViewFilterGroupOrderByWithRelationInput | ViewFilterGroupOrderByWithRelationInput[]
    cursor?: ViewFilterGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewFilterGroupScalarFieldEnum | ViewFilterGroupScalarFieldEnum[]
  }

  /**
   * View.sorts
   */
  export type View$sortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    where?: ViewSortWhereInput
    orderBy?: ViewSortOrderByWithRelationInput | ViewSortOrderByWithRelationInput[]
    cursor?: ViewSortWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewSortScalarFieldEnum | ViewSortScalarFieldEnum[]
  }

  /**
   * View without action
   */
  export type ViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
  }


  /**
   * Model ViewFilter
   */

  export type AggregateViewFilter = {
    _count: ViewFilterCountAggregateOutputType | null
    _avg: ViewFilterAvgAggregateOutputType | null
    _sum: ViewFilterSumAggregateOutputType | null
    _min: ViewFilterMinAggregateOutputType | null
    _max: ViewFilterMaxAggregateOutputType | null
  }

  export type ViewFilterAvgAggregateOutputType = {
    position: number | null
  }

  export type ViewFilterSumAggregateOutputType = {
    position: number | null
  }

  export type ViewFilterMinAggregateOutputType = {
    id: string | null
    viewId: string | null
    groupId: string | null
    fieldId: string | null
    operator: string | null
    position: number | null
  }

  export type ViewFilterMaxAggregateOutputType = {
    id: string | null
    viewId: string | null
    groupId: string | null
    fieldId: string | null
    operator: string | null
    position: number | null
  }

  export type ViewFilterCountAggregateOutputType = {
    id: number
    viewId: number
    groupId: number
    fieldId: number
    operator: number
    value: number
    position: number
    _all: number
  }


  export type ViewFilterAvgAggregateInputType = {
    position?: true
  }

  export type ViewFilterSumAggregateInputType = {
    position?: true
  }

  export type ViewFilterMinAggregateInputType = {
    id?: true
    viewId?: true
    groupId?: true
    fieldId?: true
    operator?: true
    position?: true
  }

  export type ViewFilterMaxAggregateInputType = {
    id?: true
    viewId?: true
    groupId?: true
    fieldId?: true
    operator?: true
    position?: true
  }

  export type ViewFilterCountAggregateInputType = {
    id?: true
    viewId?: true
    groupId?: true
    fieldId?: true
    operator?: true
    value?: true
    position?: true
    _all?: true
  }

  export type ViewFilterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewFilter to aggregate.
     */
    where?: ViewFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewFilters to fetch.
     */
    orderBy?: ViewFilterOrderByWithRelationInput | ViewFilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewFilters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViewFilters
    **/
    _count?: true | ViewFilterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewFilterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewFilterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewFilterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewFilterMaxAggregateInputType
  }

  export type GetViewFilterAggregateType<T extends ViewFilterAggregateArgs> = {
        [P in keyof T & keyof AggregateViewFilter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewFilter[P]>
      : GetScalarType<T[P], AggregateViewFilter[P]>
  }




  export type ViewFilterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewFilterWhereInput
    orderBy?: ViewFilterOrderByWithAggregationInput | ViewFilterOrderByWithAggregationInput[]
    by: ViewFilterScalarFieldEnum[] | ViewFilterScalarFieldEnum
    having?: ViewFilterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewFilterCountAggregateInputType | true
    _avg?: ViewFilterAvgAggregateInputType
    _sum?: ViewFilterSumAggregateInputType
    _min?: ViewFilterMinAggregateInputType
    _max?: ViewFilterMaxAggregateInputType
  }

  export type ViewFilterGroupByOutputType = {
    id: string
    viewId: string
    groupId: string | null
    fieldId: string | null
    operator: string
    value: JsonValue | null
    position: number | null
    _count: ViewFilterCountAggregateOutputType | null
    _avg: ViewFilterAvgAggregateOutputType | null
    _sum: ViewFilterSumAggregateOutputType | null
    _min: ViewFilterMinAggregateOutputType | null
    _max: ViewFilterMaxAggregateOutputType | null
  }

  type GetViewFilterGroupByPayload<T extends ViewFilterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewFilterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewFilterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewFilterGroupByOutputType[P]>
            : GetScalarType<T[P], ViewFilterGroupByOutputType[P]>
        }
      >
    >


  export type ViewFilterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    groupId?: boolean
    fieldId?: boolean
    operator?: boolean
    value?: boolean
    position?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    group?: boolean | ViewFilter$groupArgs<ExtArgs>
    field?: boolean | ViewFilter$fieldArgs<ExtArgs>
  }, ExtArgs["result"]["viewFilter"]>

  export type ViewFilterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    groupId?: boolean
    fieldId?: boolean
    operator?: boolean
    value?: boolean
    position?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    group?: boolean | ViewFilter$groupArgs<ExtArgs>
    field?: boolean | ViewFilter$fieldArgs<ExtArgs>
  }, ExtArgs["result"]["viewFilter"]>

  export type ViewFilterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    groupId?: boolean
    fieldId?: boolean
    operator?: boolean
    value?: boolean
    position?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    group?: boolean | ViewFilter$groupArgs<ExtArgs>
    field?: boolean | ViewFilter$fieldArgs<ExtArgs>
  }, ExtArgs["result"]["viewFilter"]>

  export type ViewFilterSelectScalar = {
    id?: boolean
    viewId?: boolean
    groupId?: boolean
    fieldId?: boolean
    operator?: boolean
    value?: boolean
    position?: boolean
  }

  export type ViewFilterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "viewId" | "groupId" | "fieldId" | "operator" | "value" | "position", ExtArgs["result"]["viewFilter"]>
  export type ViewFilterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    group?: boolean | ViewFilter$groupArgs<ExtArgs>
    field?: boolean | ViewFilter$fieldArgs<ExtArgs>
  }
  export type ViewFilterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    group?: boolean | ViewFilter$groupArgs<ExtArgs>
    field?: boolean | ViewFilter$fieldArgs<ExtArgs>
  }
  export type ViewFilterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    group?: boolean | ViewFilter$groupArgs<ExtArgs>
    field?: boolean | ViewFilter$fieldArgs<ExtArgs>
  }

  export type $ViewFilterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViewFilter"
    objects: {
      view: Prisma.$ViewPayload<ExtArgs>
      group: Prisma.$ViewFilterGroupPayload<ExtArgs> | null
      field: Prisma.$FieldPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      viewId: string
      groupId: string | null
      fieldId: string | null
      operator: string
      value: Prisma.JsonValue | null
      position: number | null
    }, ExtArgs["result"]["viewFilter"]>
    composites: {}
  }

  type ViewFilterGetPayload<S extends boolean | null | undefined | ViewFilterDefaultArgs> = $Result.GetResult<Prisma.$ViewFilterPayload, S>

  type ViewFilterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewFilterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewFilterCountAggregateInputType | true
    }

  export interface ViewFilterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViewFilter'], meta: { name: 'ViewFilter' } }
    /**
     * Find zero or one ViewFilter that matches the filter.
     * @param {ViewFilterFindUniqueArgs} args - Arguments to find a ViewFilter
     * @example
     * // Get one ViewFilter
     * const viewFilter = await prisma.viewFilter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewFilterFindUniqueArgs>(args: SelectSubset<T, ViewFilterFindUniqueArgs<ExtArgs>>): Prisma__ViewFilterClient<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ViewFilter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewFilterFindUniqueOrThrowArgs} args - Arguments to find a ViewFilter
     * @example
     * // Get one ViewFilter
     * const viewFilter = await prisma.viewFilter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewFilterFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewFilterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewFilterClient<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewFilter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterFindFirstArgs} args - Arguments to find a ViewFilter
     * @example
     * // Get one ViewFilter
     * const viewFilter = await prisma.viewFilter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewFilterFindFirstArgs>(args?: SelectSubset<T, ViewFilterFindFirstArgs<ExtArgs>>): Prisma__ViewFilterClient<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewFilter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterFindFirstOrThrowArgs} args - Arguments to find a ViewFilter
     * @example
     * // Get one ViewFilter
     * const viewFilter = await prisma.viewFilter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewFilterFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewFilterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewFilterClient<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ViewFilters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViewFilters
     * const viewFilters = await prisma.viewFilter.findMany()
     * 
     * // Get first 10 ViewFilters
     * const viewFilters = await prisma.viewFilter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewFilterWithIdOnly = await prisma.viewFilter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewFilterFindManyArgs>(args?: SelectSubset<T, ViewFilterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ViewFilter.
     * @param {ViewFilterCreateArgs} args - Arguments to create a ViewFilter.
     * @example
     * // Create one ViewFilter
     * const ViewFilter = await prisma.viewFilter.create({
     *   data: {
     *     // ... data to create a ViewFilter
     *   }
     * })
     * 
     */
    create<T extends ViewFilterCreateArgs>(args: SelectSubset<T, ViewFilterCreateArgs<ExtArgs>>): Prisma__ViewFilterClient<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ViewFilters.
     * @param {ViewFilterCreateManyArgs} args - Arguments to create many ViewFilters.
     * @example
     * // Create many ViewFilters
     * const viewFilter = await prisma.viewFilter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewFilterCreateManyArgs>(args?: SelectSubset<T, ViewFilterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ViewFilters and returns the data saved in the database.
     * @param {ViewFilterCreateManyAndReturnArgs} args - Arguments to create many ViewFilters.
     * @example
     * // Create many ViewFilters
     * const viewFilter = await prisma.viewFilter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ViewFilters and only return the `id`
     * const viewFilterWithIdOnly = await prisma.viewFilter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewFilterCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewFilterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ViewFilter.
     * @param {ViewFilterDeleteArgs} args - Arguments to delete one ViewFilter.
     * @example
     * // Delete one ViewFilter
     * const ViewFilter = await prisma.viewFilter.delete({
     *   where: {
     *     // ... filter to delete one ViewFilter
     *   }
     * })
     * 
     */
    delete<T extends ViewFilterDeleteArgs>(args: SelectSubset<T, ViewFilterDeleteArgs<ExtArgs>>): Prisma__ViewFilterClient<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ViewFilter.
     * @param {ViewFilterUpdateArgs} args - Arguments to update one ViewFilter.
     * @example
     * // Update one ViewFilter
     * const viewFilter = await prisma.viewFilter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewFilterUpdateArgs>(args: SelectSubset<T, ViewFilterUpdateArgs<ExtArgs>>): Prisma__ViewFilterClient<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ViewFilters.
     * @param {ViewFilterDeleteManyArgs} args - Arguments to filter ViewFilters to delete.
     * @example
     * // Delete a few ViewFilters
     * const { count } = await prisma.viewFilter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewFilterDeleteManyArgs>(args?: SelectSubset<T, ViewFilterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewFilters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViewFilters
     * const viewFilter = await prisma.viewFilter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewFilterUpdateManyArgs>(args: SelectSubset<T, ViewFilterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewFilters and returns the data updated in the database.
     * @param {ViewFilterUpdateManyAndReturnArgs} args - Arguments to update many ViewFilters.
     * @example
     * // Update many ViewFilters
     * const viewFilter = await prisma.viewFilter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ViewFilters and only return the `id`
     * const viewFilterWithIdOnly = await prisma.viewFilter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ViewFilterUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewFilterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ViewFilter.
     * @param {ViewFilterUpsertArgs} args - Arguments to update or create a ViewFilter.
     * @example
     * // Update or create a ViewFilter
     * const viewFilter = await prisma.viewFilter.upsert({
     *   create: {
     *     // ... data to create a ViewFilter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViewFilter we want to update
     *   }
     * })
     */
    upsert<T extends ViewFilterUpsertArgs>(args: SelectSubset<T, ViewFilterUpsertArgs<ExtArgs>>): Prisma__ViewFilterClient<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ViewFilters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterCountArgs} args - Arguments to filter ViewFilters to count.
     * @example
     * // Count the number of ViewFilters
     * const count = await prisma.viewFilter.count({
     *   where: {
     *     // ... the filter for the ViewFilters we want to count
     *   }
     * })
    **/
    count<T extends ViewFilterCountArgs>(
      args?: Subset<T, ViewFilterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewFilterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViewFilter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewFilterAggregateArgs>(args: Subset<T, ViewFilterAggregateArgs>): Prisma.PrismaPromise<GetViewFilterAggregateType<T>>

    /**
     * Group by ViewFilter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewFilterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewFilterGroupByArgs['orderBy'] }
        : { orderBy?: ViewFilterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewFilterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewFilterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViewFilter model
   */
  readonly fields: ViewFilterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViewFilter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewFilterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    view<T extends ViewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViewDefaultArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends ViewFilter$groupArgs<ExtArgs> = {}>(args?: Subset<T, ViewFilter$groupArgs<ExtArgs>>): Prisma__ViewFilterGroupClient<$Result.GetResult<Prisma.$ViewFilterGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    field<T extends ViewFilter$fieldArgs<ExtArgs> = {}>(args?: Subset<T, ViewFilter$fieldArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ViewFilter model
   */
  interface ViewFilterFieldRefs {
    readonly id: FieldRef<"ViewFilter", 'String'>
    readonly viewId: FieldRef<"ViewFilter", 'String'>
    readonly groupId: FieldRef<"ViewFilter", 'String'>
    readonly fieldId: FieldRef<"ViewFilter", 'String'>
    readonly operator: FieldRef<"ViewFilter", 'String'>
    readonly value: FieldRef<"ViewFilter", 'Json'>
    readonly position: FieldRef<"ViewFilter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ViewFilter findUnique
   */
  export type ViewFilterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * Filter, which ViewFilter to fetch.
     */
    where: ViewFilterWhereUniqueInput
  }

  /**
   * ViewFilter findUniqueOrThrow
   */
  export type ViewFilterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * Filter, which ViewFilter to fetch.
     */
    where: ViewFilterWhereUniqueInput
  }

  /**
   * ViewFilter findFirst
   */
  export type ViewFilterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * Filter, which ViewFilter to fetch.
     */
    where?: ViewFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewFilters to fetch.
     */
    orderBy?: ViewFilterOrderByWithRelationInput | ViewFilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewFilters.
     */
    cursor?: ViewFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewFilters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewFilters.
     */
    distinct?: ViewFilterScalarFieldEnum | ViewFilterScalarFieldEnum[]
  }

  /**
   * ViewFilter findFirstOrThrow
   */
  export type ViewFilterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * Filter, which ViewFilter to fetch.
     */
    where?: ViewFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewFilters to fetch.
     */
    orderBy?: ViewFilterOrderByWithRelationInput | ViewFilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewFilters.
     */
    cursor?: ViewFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewFilters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewFilters.
     */
    distinct?: ViewFilterScalarFieldEnum | ViewFilterScalarFieldEnum[]
  }

  /**
   * ViewFilter findMany
   */
  export type ViewFilterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * Filter, which ViewFilters to fetch.
     */
    where?: ViewFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewFilters to fetch.
     */
    orderBy?: ViewFilterOrderByWithRelationInput | ViewFilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViewFilters.
     */
    cursor?: ViewFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewFilters.
     */
    skip?: number
    distinct?: ViewFilterScalarFieldEnum | ViewFilterScalarFieldEnum[]
  }

  /**
   * ViewFilter create
   */
  export type ViewFilterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * The data needed to create a ViewFilter.
     */
    data: XOR<ViewFilterCreateInput, ViewFilterUncheckedCreateInput>
  }

  /**
   * ViewFilter createMany
   */
  export type ViewFilterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViewFilters.
     */
    data: ViewFilterCreateManyInput | ViewFilterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViewFilter createManyAndReturn
   */
  export type ViewFilterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * The data used to create many ViewFilters.
     */
    data: ViewFilterCreateManyInput | ViewFilterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewFilter update
   */
  export type ViewFilterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * The data needed to update a ViewFilter.
     */
    data: XOR<ViewFilterUpdateInput, ViewFilterUncheckedUpdateInput>
    /**
     * Choose, which ViewFilter to update.
     */
    where: ViewFilterWhereUniqueInput
  }

  /**
   * ViewFilter updateMany
   */
  export type ViewFilterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViewFilters.
     */
    data: XOR<ViewFilterUpdateManyMutationInput, ViewFilterUncheckedUpdateManyInput>
    /**
     * Filter which ViewFilters to update
     */
    where?: ViewFilterWhereInput
    /**
     * Limit how many ViewFilters to update.
     */
    limit?: number
  }

  /**
   * ViewFilter updateManyAndReturn
   */
  export type ViewFilterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * The data used to update ViewFilters.
     */
    data: XOR<ViewFilterUpdateManyMutationInput, ViewFilterUncheckedUpdateManyInput>
    /**
     * Filter which ViewFilters to update
     */
    where?: ViewFilterWhereInput
    /**
     * Limit how many ViewFilters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewFilter upsert
   */
  export type ViewFilterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * The filter to search for the ViewFilter to update in case it exists.
     */
    where: ViewFilterWhereUniqueInput
    /**
     * In case the ViewFilter found by the `where` argument doesn't exist, create a new ViewFilter with this data.
     */
    create: XOR<ViewFilterCreateInput, ViewFilterUncheckedCreateInput>
    /**
     * In case the ViewFilter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewFilterUpdateInput, ViewFilterUncheckedUpdateInput>
  }

  /**
   * ViewFilter delete
   */
  export type ViewFilterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * Filter which ViewFilter to delete.
     */
    where: ViewFilterWhereUniqueInput
  }

  /**
   * ViewFilter deleteMany
   */
  export type ViewFilterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewFilters to delete
     */
    where?: ViewFilterWhereInput
    /**
     * Limit how many ViewFilters to delete.
     */
    limit?: number
  }

  /**
   * ViewFilter.group
   */
  export type ViewFilter$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilterGroup
     */
    select?: ViewFilterGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilterGroup
     */
    omit?: ViewFilterGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterGroupInclude<ExtArgs> | null
    where?: ViewFilterGroupWhereInput
  }

  /**
   * ViewFilter.field
   */
  export type ViewFilter$fieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    where?: FieldWhereInput
  }

  /**
   * ViewFilter without action
   */
  export type ViewFilterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
  }


  /**
   * Model ViewFilterGroup
   */

  export type AggregateViewFilterGroup = {
    _count: ViewFilterGroupCountAggregateOutputType | null
    _avg: ViewFilterGroupAvgAggregateOutputType | null
    _sum: ViewFilterGroupSumAggregateOutputType | null
    _min: ViewFilterGroupMinAggregateOutputType | null
    _max: ViewFilterGroupMaxAggregateOutputType | null
  }

  export type ViewFilterGroupAvgAggregateOutputType = {
    position: number | null
  }

  export type ViewFilterGroupSumAggregateOutputType = {
    position: number | null
  }

  export type ViewFilterGroupMinAggregateOutputType = {
    id: string | null
    viewId: string | null
    conjunction: string | null
    connector: string | null
    position: number | null
  }

  export type ViewFilterGroupMaxAggregateOutputType = {
    id: string | null
    viewId: string | null
    conjunction: string | null
    connector: string | null
    position: number | null
  }

  export type ViewFilterGroupCountAggregateOutputType = {
    id: number
    viewId: number
    conjunction: number
    connector: number
    position: number
    _all: number
  }


  export type ViewFilterGroupAvgAggregateInputType = {
    position?: true
  }

  export type ViewFilterGroupSumAggregateInputType = {
    position?: true
  }

  export type ViewFilterGroupMinAggregateInputType = {
    id?: true
    viewId?: true
    conjunction?: true
    connector?: true
    position?: true
  }

  export type ViewFilterGroupMaxAggregateInputType = {
    id?: true
    viewId?: true
    conjunction?: true
    connector?: true
    position?: true
  }

  export type ViewFilterGroupCountAggregateInputType = {
    id?: true
    viewId?: true
    conjunction?: true
    connector?: true
    position?: true
    _all?: true
  }

  export type ViewFilterGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewFilterGroup to aggregate.
     */
    where?: ViewFilterGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewFilterGroups to fetch.
     */
    orderBy?: ViewFilterGroupOrderByWithRelationInput | ViewFilterGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewFilterGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewFilterGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewFilterGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViewFilterGroups
    **/
    _count?: true | ViewFilterGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewFilterGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewFilterGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewFilterGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewFilterGroupMaxAggregateInputType
  }

  export type GetViewFilterGroupAggregateType<T extends ViewFilterGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateViewFilterGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewFilterGroup[P]>
      : GetScalarType<T[P], AggregateViewFilterGroup[P]>
  }




  export type ViewFilterGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewFilterGroupWhereInput
    orderBy?: ViewFilterGroupOrderByWithAggregationInput | ViewFilterGroupOrderByWithAggregationInput[]
    by: ViewFilterGroupScalarFieldEnum[] | ViewFilterGroupScalarFieldEnum
    having?: ViewFilterGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewFilterGroupCountAggregateInputType | true
    _avg?: ViewFilterGroupAvgAggregateInputType
    _sum?: ViewFilterGroupSumAggregateInputType
    _min?: ViewFilterGroupMinAggregateInputType
    _max?: ViewFilterGroupMaxAggregateInputType
  }

  export type ViewFilterGroupGroupByOutputType = {
    id: string
    viewId: string
    conjunction: string
    connector: string
    position: number
    _count: ViewFilterGroupCountAggregateOutputType | null
    _avg: ViewFilterGroupAvgAggregateOutputType | null
    _sum: ViewFilterGroupSumAggregateOutputType | null
    _min: ViewFilterGroupMinAggregateOutputType | null
    _max: ViewFilterGroupMaxAggregateOutputType | null
  }

  type GetViewFilterGroupGroupByPayload<T extends ViewFilterGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewFilterGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewFilterGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewFilterGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ViewFilterGroupGroupByOutputType[P]>
        }
      >
    >


  export type ViewFilterGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    conjunction?: boolean
    connector?: boolean
    position?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    filters?: boolean | ViewFilterGroup$filtersArgs<ExtArgs>
    _count?: boolean | ViewFilterGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewFilterGroup"]>

  export type ViewFilterGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    conjunction?: boolean
    connector?: boolean
    position?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewFilterGroup"]>

  export type ViewFilterGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    conjunction?: boolean
    connector?: boolean
    position?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewFilterGroup"]>

  export type ViewFilterGroupSelectScalar = {
    id?: boolean
    viewId?: boolean
    conjunction?: boolean
    connector?: boolean
    position?: boolean
  }

  export type ViewFilterGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "viewId" | "conjunction" | "connector" | "position", ExtArgs["result"]["viewFilterGroup"]>
  export type ViewFilterGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    filters?: boolean | ViewFilterGroup$filtersArgs<ExtArgs>
    _count?: boolean | ViewFilterGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ViewFilterGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
  }
  export type ViewFilterGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
  }

  export type $ViewFilterGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViewFilterGroup"
    objects: {
      view: Prisma.$ViewPayload<ExtArgs>
      filters: Prisma.$ViewFilterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      viewId: string
      conjunction: string
      connector: string
      position: number
    }, ExtArgs["result"]["viewFilterGroup"]>
    composites: {}
  }

  type ViewFilterGroupGetPayload<S extends boolean | null | undefined | ViewFilterGroupDefaultArgs> = $Result.GetResult<Prisma.$ViewFilterGroupPayload, S>

  type ViewFilterGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewFilterGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewFilterGroupCountAggregateInputType | true
    }

  export interface ViewFilterGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViewFilterGroup'], meta: { name: 'ViewFilterGroup' } }
    /**
     * Find zero or one ViewFilterGroup that matches the filter.
     * @param {ViewFilterGroupFindUniqueArgs} args - Arguments to find a ViewFilterGroup
     * @example
     * // Get one ViewFilterGroup
     * const viewFilterGroup = await prisma.viewFilterGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewFilterGroupFindUniqueArgs>(args: SelectSubset<T, ViewFilterGroupFindUniqueArgs<ExtArgs>>): Prisma__ViewFilterGroupClient<$Result.GetResult<Prisma.$ViewFilterGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ViewFilterGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewFilterGroupFindUniqueOrThrowArgs} args - Arguments to find a ViewFilterGroup
     * @example
     * // Get one ViewFilterGroup
     * const viewFilterGroup = await prisma.viewFilterGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewFilterGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewFilterGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewFilterGroupClient<$Result.GetResult<Prisma.$ViewFilterGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewFilterGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterGroupFindFirstArgs} args - Arguments to find a ViewFilterGroup
     * @example
     * // Get one ViewFilterGroup
     * const viewFilterGroup = await prisma.viewFilterGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewFilterGroupFindFirstArgs>(args?: SelectSubset<T, ViewFilterGroupFindFirstArgs<ExtArgs>>): Prisma__ViewFilterGroupClient<$Result.GetResult<Prisma.$ViewFilterGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewFilterGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterGroupFindFirstOrThrowArgs} args - Arguments to find a ViewFilterGroup
     * @example
     * // Get one ViewFilterGroup
     * const viewFilterGroup = await prisma.viewFilterGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewFilterGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewFilterGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewFilterGroupClient<$Result.GetResult<Prisma.$ViewFilterGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ViewFilterGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViewFilterGroups
     * const viewFilterGroups = await prisma.viewFilterGroup.findMany()
     * 
     * // Get first 10 ViewFilterGroups
     * const viewFilterGroups = await prisma.viewFilterGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewFilterGroupWithIdOnly = await prisma.viewFilterGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewFilterGroupFindManyArgs>(args?: SelectSubset<T, ViewFilterGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewFilterGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ViewFilterGroup.
     * @param {ViewFilterGroupCreateArgs} args - Arguments to create a ViewFilterGroup.
     * @example
     * // Create one ViewFilterGroup
     * const ViewFilterGroup = await prisma.viewFilterGroup.create({
     *   data: {
     *     // ... data to create a ViewFilterGroup
     *   }
     * })
     * 
     */
    create<T extends ViewFilterGroupCreateArgs>(args: SelectSubset<T, ViewFilterGroupCreateArgs<ExtArgs>>): Prisma__ViewFilterGroupClient<$Result.GetResult<Prisma.$ViewFilterGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ViewFilterGroups.
     * @param {ViewFilterGroupCreateManyArgs} args - Arguments to create many ViewFilterGroups.
     * @example
     * // Create many ViewFilterGroups
     * const viewFilterGroup = await prisma.viewFilterGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewFilterGroupCreateManyArgs>(args?: SelectSubset<T, ViewFilterGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ViewFilterGroups and returns the data saved in the database.
     * @param {ViewFilterGroupCreateManyAndReturnArgs} args - Arguments to create many ViewFilterGroups.
     * @example
     * // Create many ViewFilterGroups
     * const viewFilterGroup = await prisma.viewFilterGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ViewFilterGroups and only return the `id`
     * const viewFilterGroupWithIdOnly = await prisma.viewFilterGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewFilterGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewFilterGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewFilterGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ViewFilterGroup.
     * @param {ViewFilterGroupDeleteArgs} args - Arguments to delete one ViewFilterGroup.
     * @example
     * // Delete one ViewFilterGroup
     * const ViewFilterGroup = await prisma.viewFilterGroup.delete({
     *   where: {
     *     // ... filter to delete one ViewFilterGroup
     *   }
     * })
     * 
     */
    delete<T extends ViewFilterGroupDeleteArgs>(args: SelectSubset<T, ViewFilterGroupDeleteArgs<ExtArgs>>): Prisma__ViewFilterGroupClient<$Result.GetResult<Prisma.$ViewFilterGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ViewFilterGroup.
     * @param {ViewFilterGroupUpdateArgs} args - Arguments to update one ViewFilterGroup.
     * @example
     * // Update one ViewFilterGroup
     * const viewFilterGroup = await prisma.viewFilterGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewFilterGroupUpdateArgs>(args: SelectSubset<T, ViewFilterGroupUpdateArgs<ExtArgs>>): Prisma__ViewFilterGroupClient<$Result.GetResult<Prisma.$ViewFilterGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ViewFilterGroups.
     * @param {ViewFilterGroupDeleteManyArgs} args - Arguments to filter ViewFilterGroups to delete.
     * @example
     * // Delete a few ViewFilterGroups
     * const { count } = await prisma.viewFilterGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewFilterGroupDeleteManyArgs>(args?: SelectSubset<T, ViewFilterGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewFilterGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViewFilterGroups
     * const viewFilterGroup = await prisma.viewFilterGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewFilterGroupUpdateManyArgs>(args: SelectSubset<T, ViewFilterGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewFilterGroups and returns the data updated in the database.
     * @param {ViewFilterGroupUpdateManyAndReturnArgs} args - Arguments to update many ViewFilterGroups.
     * @example
     * // Update many ViewFilterGroups
     * const viewFilterGroup = await prisma.viewFilterGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ViewFilterGroups and only return the `id`
     * const viewFilterGroupWithIdOnly = await prisma.viewFilterGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ViewFilterGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewFilterGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewFilterGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ViewFilterGroup.
     * @param {ViewFilterGroupUpsertArgs} args - Arguments to update or create a ViewFilterGroup.
     * @example
     * // Update or create a ViewFilterGroup
     * const viewFilterGroup = await prisma.viewFilterGroup.upsert({
     *   create: {
     *     // ... data to create a ViewFilterGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViewFilterGroup we want to update
     *   }
     * })
     */
    upsert<T extends ViewFilterGroupUpsertArgs>(args: SelectSubset<T, ViewFilterGroupUpsertArgs<ExtArgs>>): Prisma__ViewFilterGroupClient<$Result.GetResult<Prisma.$ViewFilterGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ViewFilterGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterGroupCountArgs} args - Arguments to filter ViewFilterGroups to count.
     * @example
     * // Count the number of ViewFilterGroups
     * const count = await prisma.viewFilterGroup.count({
     *   where: {
     *     // ... the filter for the ViewFilterGroups we want to count
     *   }
     * })
    **/
    count<T extends ViewFilterGroupCountArgs>(
      args?: Subset<T, ViewFilterGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewFilterGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViewFilterGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewFilterGroupAggregateArgs>(args: Subset<T, ViewFilterGroupAggregateArgs>): Prisma.PrismaPromise<GetViewFilterGroupAggregateType<T>>

    /**
     * Group by ViewFilterGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewFilterGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewFilterGroupGroupByArgs['orderBy'] }
        : { orderBy?: ViewFilterGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewFilterGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewFilterGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViewFilterGroup model
   */
  readonly fields: ViewFilterGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViewFilterGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewFilterGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    view<T extends ViewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViewDefaultArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    filters<T extends ViewFilterGroup$filtersArgs<ExtArgs> = {}>(args?: Subset<T, ViewFilterGroup$filtersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ViewFilterGroup model
   */
  interface ViewFilterGroupFieldRefs {
    readonly id: FieldRef<"ViewFilterGroup", 'String'>
    readonly viewId: FieldRef<"ViewFilterGroup", 'String'>
    readonly conjunction: FieldRef<"ViewFilterGroup", 'String'>
    readonly connector: FieldRef<"ViewFilterGroup", 'String'>
    readonly position: FieldRef<"ViewFilterGroup", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ViewFilterGroup findUnique
   */
  export type ViewFilterGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilterGroup
     */
    select?: ViewFilterGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilterGroup
     */
    omit?: ViewFilterGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterGroupInclude<ExtArgs> | null
    /**
     * Filter, which ViewFilterGroup to fetch.
     */
    where: ViewFilterGroupWhereUniqueInput
  }

  /**
   * ViewFilterGroup findUniqueOrThrow
   */
  export type ViewFilterGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilterGroup
     */
    select?: ViewFilterGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilterGroup
     */
    omit?: ViewFilterGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterGroupInclude<ExtArgs> | null
    /**
     * Filter, which ViewFilterGroup to fetch.
     */
    where: ViewFilterGroupWhereUniqueInput
  }

  /**
   * ViewFilterGroup findFirst
   */
  export type ViewFilterGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilterGroup
     */
    select?: ViewFilterGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilterGroup
     */
    omit?: ViewFilterGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterGroupInclude<ExtArgs> | null
    /**
     * Filter, which ViewFilterGroup to fetch.
     */
    where?: ViewFilterGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewFilterGroups to fetch.
     */
    orderBy?: ViewFilterGroupOrderByWithRelationInput | ViewFilterGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewFilterGroups.
     */
    cursor?: ViewFilterGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewFilterGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewFilterGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewFilterGroups.
     */
    distinct?: ViewFilterGroupScalarFieldEnum | ViewFilterGroupScalarFieldEnum[]
  }

  /**
   * ViewFilterGroup findFirstOrThrow
   */
  export type ViewFilterGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilterGroup
     */
    select?: ViewFilterGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilterGroup
     */
    omit?: ViewFilterGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterGroupInclude<ExtArgs> | null
    /**
     * Filter, which ViewFilterGroup to fetch.
     */
    where?: ViewFilterGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewFilterGroups to fetch.
     */
    orderBy?: ViewFilterGroupOrderByWithRelationInput | ViewFilterGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewFilterGroups.
     */
    cursor?: ViewFilterGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewFilterGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewFilterGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewFilterGroups.
     */
    distinct?: ViewFilterGroupScalarFieldEnum | ViewFilterGroupScalarFieldEnum[]
  }

  /**
   * ViewFilterGroup findMany
   */
  export type ViewFilterGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilterGroup
     */
    select?: ViewFilterGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilterGroup
     */
    omit?: ViewFilterGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterGroupInclude<ExtArgs> | null
    /**
     * Filter, which ViewFilterGroups to fetch.
     */
    where?: ViewFilterGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewFilterGroups to fetch.
     */
    orderBy?: ViewFilterGroupOrderByWithRelationInput | ViewFilterGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViewFilterGroups.
     */
    cursor?: ViewFilterGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewFilterGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewFilterGroups.
     */
    skip?: number
    distinct?: ViewFilterGroupScalarFieldEnum | ViewFilterGroupScalarFieldEnum[]
  }

  /**
   * ViewFilterGroup create
   */
  export type ViewFilterGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilterGroup
     */
    select?: ViewFilterGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilterGroup
     */
    omit?: ViewFilterGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a ViewFilterGroup.
     */
    data: XOR<ViewFilterGroupCreateInput, ViewFilterGroupUncheckedCreateInput>
  }

  /**
   * ViewFilterGroup createMany
   */
  export type ViewFilterGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViewFilterGroups.
     */
    data: ViewFilterGroupCreateManyInput | ViewFilterGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViewFilterGroup createManyAndReturn
   */
  export type ViewFilterGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilterGroup
     */
    select?: ViewFilterGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilterGroup
     */
    omit?: ViewFilterGroupOmit<ExtArgs> | null
    /**
     * The data used to create many ViewFilterGroups.
     */
    data: ViewFilterGroupCreateManyInput | ViewFilterGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewFilterGroup update
   */
  export type ViewFilterGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilterGroup
     */
    select?: ViewFilterGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilterGroup
     */
    omit?: ViewFilterGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a ViewFilterGroup.
     */
    data: XOR<ViewFilterGroupUpdateInput, ViewFilterGroupUncheckedUpdateInput>
    /**
     * Choose, which ViewFilterGroup to update.
     */
    where: ViewFilterGroupWhereUniqueInput
  }

  /**
   * ViewFilterGroup updateMany
   */
  export type ViewFilterGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViewFilterGroups.
     */
    data: XOR<ViewFilterGroupUpdateManyMutationInput, ViewFilterGroupUncheckedUpdateManyInput>
    /**
     * Filter which ViewFilterGroups to update
     */
    where?: ViewFilterGroupWhereInput
    /**
     * Limit how many ViewFilterGroups to update.
     */
    limit?: number
  }

  /**
   * ViewFilterGroup updateManyAndReturn
   */
  export type ViewFilterGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilterGroup
     */
    select?: ViewFilterGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilterGroup
     */
    omit?: ViewFilterGroupOmit<ExtArgs> | null
    /**
     * The data used to update ViewFilterGroups.
     */
    data: XOR<ViewFilterGroupUpdateManyMutationInput, ViewFilterGroupUncheckedUpdateManyInput>
    /**
     * Filter which ViewFilterGroups to update
     */
    where?: ViewFilterGroupWhereInput
    /**
     * Limit how many ViewFilterGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewFilterGroup upsert
   */
  export type ViewFilterGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilterGroup
     */
    select?: ViewFilterGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilterGroup
     */
    omit?: ViewFilterGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the ViewFilterGroup to update in case it exists.
     */
    where: ViewFilterGroupWhereUniqueInput
    /**
     * In case the ViewFilterGroup found by the `where` argument doesn't exist, create a new ViewFilterGroup with this data.
     */
    create: XOR<ViewFilterGroupCreateInput, ViewFilterGroupUncheckedCreateInput>
    /**
     * In case the ViewFilterGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewFilterGroupUpdateInput, ViewFilterGroupUncheckedUpdateInput>
  }

  /**
   * ViewFilterGroup delete
   */
  export type ViewFilterGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilterGroup
     */
    select?: ViewFilterGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilterGroup
     */
    omit?: ViewFilterGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterGroupInclude<ExtArgs> | null
    /**
     * Filter which ViewFilterGroup to delete.
     */
    where: ViewFilterGroupWhereUniqueInput
  }

  /**
   * ViewFilterGroup deleteMany
   */
  export type ViewFilterGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewFilterGroups to delete
     */
    where?: ViewFilterGroupWhereInput
    /**
     * Limit how many ViewFilterGroups to delete.
     */
    limit?: number
  }

  /**
   * ViewFilterGroup.filters
   */
  export type ViewFilterGroup$filtersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    where?: ViewFilterWhereInput
    orderBy?: ViewFilterOrderByWithRelationInput | ViewFilterOrderByWithRelationInput[]
    cursor?: ViewFilterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewFilterScalarFieldEnum | ViewFilterScalarFieldEnum[]
  }

  /**
   * ViewFilterGroup without action
   */
  export type ViewFilterGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilterGroup
     */
    select?: ViewFilterGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilterGroup
     */
    omit?: ViewFilterGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterGroupInclude<ExtArgs> | null
  }


  /**
   * Model ViewSort
   */

  export type AggregateViewSort = {
    _count: ViewSortCountAggregateOutputType | null
    _avg: ViewSortAvgAggregateOutputType | null
    _sum: ViewSortSumAggregateOutputType | null
    _min: ViewSortMinAggregateOutputType | null
    _max: ViewSortMaxAggregateOutputType | null
  }

  export type ViewSortAvgAggregateOutputType = {
    order: number | null
  }

  export type ViewSortSumAggregateOutputType = {
    order: number | null
  }

  export type ViewSortMinAggregateOutputType = {
    id: string | null
    viewId: string | null
    fieldId: string | null
    direction: $Enums.SortDirection | null
    order: number | null
  }

  export type ViewSortMaxAggregateOutputType = {
    id: string | null
    viewId: string | null
    fieldId: string | null
    direction: $Enums.SortDirection | null
    order: number | null
  }

  export type ViewSortCountAggregateOutputType = {
    id: number
    viewId: number
    fieldId: number
    direction: number
    order: number
    _all: number
  }


  export type ViewSortAvgAggregateInputType = {
    order?: true
  }

  export type ViewSortSumAggregateInputType = {
    order?: true
  }

  export type ViewSortMinAggregateInputType = {
    id?: true
    viewId?: true
    fieldId?: true
    direction?: true
    order?: true
  }

  export type ViewSortMaxAggregateInputType = {
    id?: true
    viewId?: true
    fieldId?: true
    direction?: true
    order?: true
  }

  export type ViewSortCountAggregateInputType = {
    id?: true
    viewId?: true
    fieldId?: true
    direction?: true
    order?: true
    _all?: true
  }

  export type ViewSortAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewSort to aggregate.
     */
    where?: ViewSortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewSorts to fetch.
     */
    orderBy?: ViewSortOrderByWithRelationInput | ViewSortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewSortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewSorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewSorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViewSorts
    **/
    _count?: true | ViewSortCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewSortAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewSortSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewSortMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewSortMaxAggregateInputType
  }

  export type GetViewSortAggregateType<T extends ViewSortAggregateArgs> = {
        [P in keyof T & keyof AggregateViewSort]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewSort[P]>
      : GetScalarType<T[P], AggregateViewSort[P]>
  }




  export type ViewSortGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewSortWhereInput
    orderBy?: ViewSortOrderByWithAggregationInput | ViewSortOrderByWithAggregationInput[]
    by: ViewSortScalarFieldEnum[] | ViewSortScalarFieldEnum
    having?: ViewSortScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewSortCountAggregateInputType | true
    _avg?: ViewSortAvgAggregateInputType
    _sum?: ViewSortSumAggregateInputType
    _min?: ViewSortMinAggregateInputType
    _max?: ViewSortMaxAggregateInputType
  }

  export type ViewSortGroupByOutputType = {
    id: string
    viewId: string
    fieldId: string
    direction: $Enums.SortDirection
    order: number | null
    _count: ViewSortCountAggregateOutputType | null
    _avg: ViewSortAvgAggregateOutputType | null
    _sum: ViewSortSumAggregateOutputType | null
    _min: ViewSortMinAggregateOutputType | null
    _max: ViewSortMaxAggregateOutputType | null
  }

  type GetViewSortGroupByPayload<T extends ViewSortGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewSortGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewSortGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewSortGroupByOutputType[P]>
            : GetScalarType<T[P], ViewSortGroupByOutputType[P]>
        }
      >
    >


  export type ViewSortSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    fieldId?: boolean
    direction?: boolean
    order?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewSort"]>

  export type ViewSortSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    fieldId?: boolean
    direction?: boolean
    order?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewSort"]>

  export type ViewSortSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    fieldId?: boolean
    direction?: boolean
    order?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewSort"]>

  export type ViewSortSelectScalar = {
    id?: boolean
    viewId?: boolean
    fieldId?: boolean
    direction?: boolean
    order?: boolean
  }

  export type ViewSortOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "viewId" | "fieldId" | "direction" | "order", ExtArgs["result"]["viewSort"]>
  export type ViewSortInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }
  export type ViewSortIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }
  export type ViewSortIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }

  export type $ViewSortPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViewSort"
    objects: {
      view: Prisma.$ViewPayload<ExtArgs>
      field: Prisma.$FieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      viewId: string
      fieldId: string
      direction: $Enums.SortDirection
      order: number | null
    }, ExtArgs["result"]["viewSort"]>
    composites: {}
  }

  type ViewSortGetPayload<S extends boolean | null | undefined | ViewSortDefaultArgs> = $Result.GetResult<Prisma.$ViewSortPayload, S>

  type ViewSortCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewSortFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewSortCountAggregateInputType | true
    }

  export interface ViewSortDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViewSort'], meta: { name: 'ViewSort' } }
    /**
     * Find zero or one ViewSort that matches the filter.
     * @param {ViewSortFindUniqueArgs} args - Arguments to find a ViewSort
     * @example
     * // Get one ViewSort
     * const viewSort = await prisma.viewSort.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewSortFindUniqueArgs>(args: SelectSubset<T, ViewSortFindUniqueArgs<ExtArgs>>): Prisma__ViewSortClient<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ViewSort that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewSortFindUniqueOrThrowArgs} args - Arguments to find a ViewSort
     * @example
     * // Get one ViewSort
     * const viewSort = await prisma.viewSort.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewSortFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewSortFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewSortClient<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewSort that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewSortFindFirstArgs} args - Arguments to find a ViewSort
     * @example
     * // Get one ViewSort
     * const viewSort = await prisma.viewSort.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewSortFindFirstArgs>(args?: SelectSubset<T, ViewSortFindFirstArgs<ExtArgs>>): Prisma__ViewSortClient<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewSort that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewSortFindFirstOrThrowArgs} args - Arguments to find a ViewSort
     * @example
     * // Get one ViewSort
     * const viewSort = await prisma.viewSort.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewSortFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewSortFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewSortClient<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ViewSorts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewSortFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViewSorts
     * const viewSorts = await prisma.viewSort.findMany()
     * 
     * // Get first 10 ViewSorts
     * const viewSorts = await prisma.viewSort.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewSortWithIdOnly = await prisma.viewSort.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewSortFindManyArgs>(args?: SelectSubset<T, ViewSortFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ViewSort.
     * @param {ViewSortCreateArgs} args - Arguments to create a ViewSort.
     * @example
     * // Create one ViewSort
     * const ViewSort = await prisma.viewSort.create({
     *   data: {
     *     // ... data to create a ViewSort
     *   }
     * })
     * 
     */
    create<T extends ViewSortCreateArgs>(args: SelectSubset<T, ViewSortCreateArgs<ExtArgs>>): Prisma__ViewSortClient<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ViewSorts.
     * @param {ViewSortCreateManyArgs} args - Arguments to create many ViewSorts.
     * @example
     * // Create many ViewSorts
     * const viewSort = await prisma.viewSort.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewSortCreateManyArgs>(args?: SelectSubset<T, ViewSortCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ViewSorts and returns the data saved in the database.
     * @param {ViewSortCreateManyAndReturnArgs} args - Arguments to create many ViewSorts.
     * @example
     * // Create many ViewSorts
     * const viewSort = await prisma.viewSort.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ViewSorts and only return the `id`
     * const viewSortWithIdOnly = await prisma.viewSort.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewSortCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewSortCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ViewSort.
     * @param {ViewSortDeleteArgs} args - Arguments to delete one ViewSort.
     * @example
     * // Delete one ViewSort
     * const ViewSort = await prisma.viewSort.delete({
     *   where: {
     *     // ... filter to delete one ViewSort
     *   }
     * })
     * 
     */
    delete<T extends ViewSortDeleteArgs>(args: SelectSubset<T, ViewSortDeleteArgs<ExtArgs>>): Prisma__ViewSortClient<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ViewSort.
     * @param {ViewSortUpdateArgs} args - Arguments to update one ViewSort.
     * @example
     * // Update one ViewSort
     * const viewSort = await prisma.viewSort.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewSortUpdateArgs>(args: SelectSubset<T, ViewSortUpdateArgs<ExtArgs>>): Prisma__ViewSortClient<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ViewSorts.
     * @param {ViewSortDeleteManyArgs} args - Arguments to filter ViewSorts to delete.
     * @example
     * // Delete a few ViewSorts
     * const { count } = await prisma.viewSort.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewSortDeleteManyArgs>(args?: SelectSubset<T, ViewSortDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewSorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewSortUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViewSorts
     * const viewSort = await prisma.viewSort.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewSortUpdateManyArgs>(args: SelectSubset<T, ViewSortUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewSorts and returns the data updated in the database.
     * @param {ViewSortUpdateManyAndReturnArgs} args - Arguments to update many ViewSorts.
     * @example
     * // Update many ViewSorts
     * const viewSort = await prisma.viewSort.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ViewSorts and only return the `id`
     * const viewSortWithIdOnly = await prisma.viewSort.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ViewSortUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewSortUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ViewSort.
     * @param {ViewSortUpsertArgs} args - Arguments to update or create a ViewSort.
     * @example
     * // Update or create a ViewSort
     * const viewSort = await prisma.viewSort.upsert({
     *   create: {
     *     // ... data to create a ViewSort
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViewSort we want to update
     *   }
     * })
     */
    upsert<T extends ViewSortUpsertArgs>(args: SelectSubset<T, ViewSortUpsertArgs<ExtArgs>>): Prisma__ViewSortClient<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ViewSorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewSortCountArgs} args - Arguments to filter ViewSorts to count.
     * @example
     * // Count the number of ViewSorts
     * const count = await prisma.viewSort.count({
     *   where: {
     *     // ... the filter for the ViewSorts we want to count
     *   }
     * })
    **/
    count<T extends ViewSortCountArgs>(
      args?: Subset<T, ViewSortCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewSortCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViewSort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewSortAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewSortAggregateArgs>(args: Subset<T, ViewSortAggregateArgs>): Prisma.PrismaPromise<GetViewSortAggregateType<T>>

    /**
     * Group by ViewSort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewSortGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewSortGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewSortGroupByArgs['orderBy'] }
        : { orderBy?: ViewSortGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewSortGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewSortGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViewSort model
   */
  readonly fields: ViewSortFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViewSort.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewSortClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    view<T extends ViewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViewDefaultArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    field<T extends FieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FieldDefaultArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ViewSort model
   */
  interface ViewSortFieldRefs {
    readonly id: FieldRef<"ViewSort", 'String'>
    readonly viewId: FieldRef<"ViewSort", 'String'>
    readonly fieldId: FieldRef<"ViewSort", 'String'>
    readonly direction: FieldRef<"ViewSort", 'SortDirection'>
    readonly order: FieldRef<"ViewSort", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ViewSort findUnique
   */
  export type ViewSortFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * Filter, which ViewSort to fetch.
     */
    where: ViewSortWhereUniqueInput
  }

  /**
   * ViewSort findUniqueOrThrow
   */
  export type ViewSortFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * Filter, which ViewSort to fetch.
     */
    where: ViewSortWhereUniqueInput
  }

  /**
   * ViewSort findFirst
   */
  export type ViewSortFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * Filter, which ViewSort to fetch.
     */
    where?: ViewSortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewSorts to fetch.
     */
    orderBy?: ViewSortOrderByWithRelationInput | ViewSortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewSorts.
     */
    cursor?: ViewSortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewSorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewSorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewSorts.
     */
    distinct?: ViewSortScalarFieldEnum | ViewSortScalarFieldEnum[]
  }

  /**
   * ViewSort findFirstOrThrow
   */
  export type ViewSortFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * Filter, which ViewSort to fetch.
     */
    where?: ViewSortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewSorts to fetch.
     */
    orderBy?: ViewSortOrderByWithRelationInput | ViewSortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewSorts.
     */
    cursor?: ViewSortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewSorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewSorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewSorts.
     */
    distinct?: ViewSortScalarFieldEnum | ViewSortScalarFieldEnum[]
  }

  /**
   * ViewSort findMany
   */
  export type ViewSortFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * Filter, which ViewSorts to fetch.
     */
    where?: ViewSortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewSorts to fetch.
     */
    orderBy?: ViewSortOrderByWithRelationInput | ViewSortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViewSorts.
     */
    cursor?: ViewSortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewSorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewSorts.
     */
    skip?: number
    distinct?: ViewSortScalarFieldEnum | ViewSortScalarFieldEnum[]
  }

  /**
   * ViewSort create
   */
  export type ViewSortCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * The data needed to create a ViewSort.
     */
    data: XOR<ViewSortCreateInput, ViewSortUncheckedCreateInput>
  }

  /**
   * ViewSort createMany
   */
  export type ViewSortCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViewSorts.
     */
    data: ViewSortCreateManyInput | ViewSortCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViewSort createManyAndReturn
   */
  export type ViewSortCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * The data used to create many ViewSorts.
     */
    data: ViewSortCreateManyInput | ViewSortCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewSort update
   */
  export type ViewSortUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * The data needed to update a ViewSort.
     */
    data: XOR<ViewSortUpdateInput, ViewSortUncheckedUpdateInput>
    /**
     * Choose, which ViewSort to update.
     */
    where: ViewSortWhereUniqueInput
  }

  /**
   * ViewSort updateMany
   */
  export type ViewSortUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViewSorts.
     */
    data: XOR<ViewSortUpdateManyMutationInput, ViewSortUncheckedUpdateManyInput>
    /**
     * Filter which ViewSorts to update
     */
    where?: ViewSortWhereInput
    /**
     * Limit how many ViewSorts to update.
     */
    limit?: number
  }

  /**
   * ViewSort updateManyAndReturn
   */
  export type ViewSortUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * The data used to update ViewSorts.
     */
    data: XOR<ViewSortUpdateManyMutationInput, ViewSortUncheckedUpdateManyInput>
    /**
     * Filter which ViewSorts to update
     */
    where?: ViewSortWhereInput
    /**
     * Limit how many ViewSorts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewSort upsert
   */
  export type ViewSortUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * The filter to search for the ViewSort to update in case it exists.
     */
    where: ViewSortWhereUniqueInput
    /**
     * In case the ViewSort found by the `where` argument doesn't exist, create a new ViewSort with this data.
     */
    create: XOR<ViewSortCreateInput, ViewSortUncheckedCreateInput>
    /**
     * In case the ViewSort was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewSortUpdateInput, ViewSortUncheckedUpdateInput>
  }

  /**
   * ViewSort delete
   */
  export type ViewSortDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * Filter which ViewSort to delete.
     */
    where: ViewSortWhereUniqueInput
  }

  /**
   * ViewSort deleteMany
   */
  export type ViewSortDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewSorts to delete
     */
    where?: ViewSortWhereInput
    /**
     * Limit how many ViewSorts to delete.
     */
    limit?: number
  }

  /**
   * ViewSort without action
   */
  export type ViewSortDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const BaseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId',
    createdAt: 'createdAt'
  };

  export type BaseScalarFieldEnum = (typeof BaseScalarFieldEnum)[keyof typeof BaseScalarFieldEnum]


  export const BaseMemberScalarFieldEnum: {
    baseId: 'baseId',
    userId: 'userId'
  };

  export type BaseMemberScalarFieldEnum = (typeof BaseMemberScalarFieldEnum)[keyof typeof BaseMemberScalarFieldEnum]


  export const TableScalarFieldEnum: {
    id: 'id',
    baseId: 'baseId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const FieldScalarFieldEnum: {
    id: 'id',
    tableId: 'tableId',
    name: 'name',
    type: 'type',
    position: 'position'
  };

  export type FieldScalarFieldEnum = (typeof FieldScalarFieldEnum)[keyof typeof FieldScalarFieldEnum]


  export const RecordScalarFieldEnum: {
    id: 'id',
    tableId: 'tableId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    position: 'position',
    userId: 'userId',
    sortValueText: 'sortValueText',
    sortValueNumber: 'sortValueNumber'
  };

  export type RecordScalarFieldEnum = (typeof RecordScalarFieldEnum)[keyof typeof RecordScalarFieldEnum]


  export const CellValueScalarFieldEnum: {
    recordId: 'recordId',
    fieldId: 'fieldId',
    valueText: 'valueText',
    valueNumber: 'valueNumber'
  };

  export type CellValueScalarFieldEnum = (typeof CellValueScalarFieldEnum)[keyof typeof CellValueScalarFieldEnum]


  export const ViewScalarFieldEnum: {
    id: 'id',
    tableId: 'tableId',
    name: 'name',
    position: 'position',
    createdAt: 'createdAt',
    filterConjunction: 'filterConjunction'
  };

  export type ViewScalarFieldEnum = (typeof ViewScalarFieldEnum)[keyof typeof ViewScalarFieldEnum]


  export const ViewFilterScalarFieldEnum: {
    id: 'id',
    viewId: 'viewId',
    groupId: 'groupId',
    fieldId: 'fieldId',
    operator: 'operator',
    value: 'value',
    position: 'position'
  };

  export type ViewFilterScalarFieldEnum = (typeof ViewFilterScalarFieldEnum)[keyof typeof ViewFilterScalarFieldEnum]


  export const ViewFilterGroupScalarFieldEnum: {
    id: 'id',
    viewId: 'viewId',
    conjunction: 'conjunction',
    connector: 'connector',
    position: 'position'
  };

  export type ViewFilterGroupScalarFieldEnum = (typeof ViewFilterGroupScalarFieldEnum)[keyof typeof ViewFilterGroupScalarFieldEnum]


  export const ViewSortScalarFieldEnum: {
    id: 'id',
    viewId: 'viewId',
    fieldId: 'fieldId',
    direction: 'direction',
    order: 'order'
  };

  export type ViewSortScalarFieldEnum = (typeof ViewSortScalarFieldEnum)[keyof typeof ViewSortScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'FieldType'
   */
  export type EnumFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FieldType'>
    


  /**
   * Reference to a field of type 'FieldType[]'
   */
  export type ListEnumFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FieldType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'SortDirection'
   */
  export type EnumSortDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SortDirection'>
    


  /**
   * Reference to a field of type 'SortDirection[]'
   */
  export type ListEnumSortDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SortDirection[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    memberships?: BaseMemberListRelationFilter
    recordsCreated?: RecordListRelationFilter
    tables?: TableListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    memberships?: BaseMemberOrderByRelationAggregateInput
    recordsCreated?: RecordOrderByRelationAggregateInput
    tables?: TableOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    memberships?: BaseMemberListRelationFilter
    recordsCreated?: RecordListRelationFilter
    tables?: TableListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type BaseWhereInput = {
    AND?: BaseWhereInput | BaseWhereInput[]
    OR?: BaseWhereInput[]
    NOT?: BaseWhereInput | BaseWhereInput[]
    id?: StringFilter<"Base"> | string
    name?: StringFilter<"Base"> | string
    ownerId?: StringNullableFilter<"Base"> | string | null
    createdAt?: DateTimeFilter<"Base"> | Date | string
    tables?: TableListRelationFilter
    members?: BaseMemberListRelationFilter
  }

  export type BaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tables?: TableOrderByRelationAggregateInput
    members?: BaseMemberOrderByRelationAggregateInput
  }

  export type BaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BaseWhereInput | BaseWhereInput[]
    OR?: BaseWhereInput[]
    NOT?: BaseWhereInput | BaseWhereInput[]
    name?: StringFilter<"Base"> | string
    ownerId?: StringNullableFilter<"Base"> | string | null
    createdAt?: DateTimeFilter<"Base"> | Date | string
    tables?: TableListRelationFilter
    members?: BaseMemberListRelationFilter
  }, "id">

  export type BaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BaseCountOrderByAggregateInput
    _max?: BaseMaxOrderByAggregateInput
    _min?: BaseMinOrderByAggregateInput
  }

  export type BaseScalarWhereWithAggregatesInput = {
    AND?: BaseScalarWhereWithAggregatesInput | BaseScalarWhereWithAggregatesInput[]
    OR?: BaseScalarWhereWithAggregatesInput[]
    NOT?: BaseScalarWhereWithAggregatesInput | BaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Base"> | string
    name?: StringWithAggregatesFilter<"Base"> | string
    ownerId?: StringNullableWithAggregatesFilter<"Base"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Base"> | Date | string
  }

  export type BaseMemberWhereInput = {
    AND?: BaseMemberWhereInput | BaseMemberWhereInput[]
    OR?: BaseMemberWhereInput[]
    NOT?: BaseMemberWhereInput | BaseMemberWhereInput[]
    baseId?: StringFilter<"BaseMember"> | string
    userId?: StringFilter<"BaseMember"> | string
    base?: XOR<BaseScalarRelationFilter, BaseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BaseMemberOrderByWithRelationInput = {
    baseId?: SortOrder
    userId?: SortOrder
    base?: BaseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BaseMemberWhereUniqueInput = Prisma.AtLeast<{
    baseId_userId?: BaseMemberBaseIdUserIdCompoundUniqueInput
    AND?: BaseMemberWhereInput | BaseMemberWhereInput[]
    OR?: BaseMemberWhereInput[]
    NOT?: BaseMemberWhereInput | BaseMemberWhereInput[]
    baseId?: StringFilter<"BaseMember"> | string
    userId?: StringFilter<"BaseMember"> | string
    base?: XOR<BaseScalarRelationFilter, BaseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "baseId_userId">

  export type BaseMemberOrderByWithAggregationInput = {
    baseId?: SortOrder
    userId?: SortOrder
    _count?: BaseMemberCountOrderByAggregateInput
    _max?: BaseMemberMaxOrderByAggregateInput
    _min?: BaseMemberMinOrderByAggregateInput
  }

  export type BaseMemberScalarWhereWithAggregatesInput = {
    AND?: BaseMemberScalarWhereWithAggregatesInput | BaseMemberScalarWhereWithAggregatesInput[]
    OR?: BaseMemberScalarWhereWithAggregatesInput[]
    NOT?: BaseMemberScalarWhereWithAggregatesInput | BaseMemberScalarWhereWithAggregatesInput[]
    baseId?: StringWithAggregatesFilter<"BaseMember"> | string
    userId?: StringWithAggregatesFilter<"BaseMember"> | string
  }

  export type TableWhereInput = {
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    id?: StringFilter<"Table"> | string
    baseId?: StringFilter<"Table"> | string
    name?: StringFilter<"Table"> | string
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    createdById?: StringNullableFilter<"Table"> | string | null
    base?: XOR<BaseScalarRelationFilter, BaseWhereInput>
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    fields?: FieldListRelationFilter
    records?: RecordListRelationFilter
    views?: ViewListRelationFilter
  }

  export type TableOrderByWithRelationInput = {
    id?: SortOrder
    baseId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    base?: BaseOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    fields?: FieldOrderByRelationAggregateInput
    records?: RecordOrderByRelationAggregateInput
    views?: ViewOrderByRelationAggregateInput
  }

  export type TableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    baseId?: StringFilter<"Table"> | string
    name?: StringFilter<"Table"> | string
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    createdById?: StringNullableFilter<"Table"> | string | null
    base?: XOR<BaseScalarRelationFilter, BaseWhereInput>
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    fields?: FieldListRelationFilter
    records?: RecordListRelationFilter
    views?: ViewListRelationFilter
  }, "id">

  export type TableOrderByWithAggregationInput = {
    id?: SortOrder
    baseId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    _count?: TableCountOrderByAggregateInput
    _max?: TableMaxOrderByAggregateInput
    _min?: TableMinOrderByAggregateInput
  }

  export type TableScalarWhereWithAggregatesInput = {
    AND?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    OR?: TableScalarWhereWithAggregatesInput[]
    NOT?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Table"> | string
    baseId?: StringWithAggregatesFilter<"Table"> | string
    name?: StringWithAggregatesFilter<"Table"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
    createdById?: StringNullableWithAggregatesFilter<"Table"> | string | null
  }

  export type FieldWhereInput = {
    AND?: FieldWhereInput | FieldWhereInput[]
    OR?: FieldWhereInput[]
    NOT?: FieldWhereInput | FieldWhereInput[]
    id?: StringFilter<"Field"> | string
    tableId?: StringFilter<"Field"> | string
    name?: StringFilter<"Field"> | string
    type?: EnumFieldTypeFilter<"Field"> | $Enums.FieldType
    position?: IntNullableFilter<"Field"> | number | null
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    cells?: CellValueListRelationFilter
    viewFilters?: ViewFilterListRelationFilter
    viewSorts?: ViewSortListRelationFilter
  }

  export type FieldOrderByWithRelationInput = {
    id?: SortOrder
    tableId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    position?: SortOrderInput | SortOrder
    table?: TableOrderByWithRelationInput
    cells?: CellValueOrderByRelationAggregateInput
    viewFilters?: ViewFilterOrderByRelationAggregateInput
    viewSorts?: ViewSortOrderByRelationAggregateInput
  }

  export type FieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tableId_name?: FieldTableIdNameCompoundUniqueInput
    AND?: FieldWhereInput | FieldWhereInput[]
    OR?: FieldWhereInput[]
    NOT?: FieldWhereInput | FieldWhereInput[]
    tableId?: StringFilter<"Field"> | string
    name?: StringFilter<"Field"> | string
    type?: EnumFieldTypeFilter<"Field"> | $Enums.FieldType
    position?: IntNullableFilter<"Field"> | number | null
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    cells?: CellValueListRelationFilter
    viewFilters?: ViewFilterListRelationFilter
    viewSorts?: ViewSortListRelationFilter
  }, "id" | "tableId_name">

  export type FieldOrderByWithAggregationInput = {
    id?: SortOrder
    tableId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    position?: SortOrderInput | SortOrder
    _count?: FieldCountOrderByAggregateInput
    _avg?: FieldAvgOrderByAggregateInput
    _max?: FieldMaxOrderByAggregateInput
    _min?: FieldMinOrderByAggregateInput
    _sum?: FieldSumOrderByAggregateInput
  }

  export type FieldScalarWhereWithAggregatesInput = {
    AND?: FieldScalarWhereWithAggregatesInput | FieldScalarWhereWithAggregatesInput[]
    OR?: FieldScalarWhereWithAggregatesInput[]
    NOT?: FieldScalarWhereWithAggregatesInput | FieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Field"> | string
    tableId?: StringWithAggregatesFilter<"Field"> | string
    name?: StringWithAggregatesFilter<"Field"> | string
    type?: EnumFieldTypeWithAggregatesFilter<"Field"> | $Enums.FieldType
    position?: IntNullableWithAggregatesFilter<"Field"> | number | null
  }

  export type RecordWhereInput = {
    AND?: RecordWhereInput | RecordWhereInput[]
    OR?: RecordWhereInput[]
    NOT?: RecordWhereInput | RecordWhereInput[]
    id?: StringFilter<"Record"> | string
    tableId?: StringFilter<"Record"> | string
    createdAt?: DateTimeFilter<"Record"> | Date | string
    updatedAt?: DateTimeFilter<"Record"> | Date | string
    position?: IntNullableFilter<"Record"> | number | null
    userId?: StringNullableFilter<"Record"> | string | null
    sortValueText?: StringNullableFilter<"Record"> | string | null
    sortValueNumber?: FloatNullableFilter<"Record"> | number | null
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    cells?: CellValueListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type RecordOrderByWithRelationInput = {
    id?: SortOrder
    tableId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    position?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    sortValueText?: SortOrderInput | SortOrder
    sortValueNumber?: SortOrderInput | SortOrder
    table?: TableOrderByWithRelationInput
    cells?: CellValueOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type RecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecordWhereInput | RecordWhereInput[]
    OR?: RecordWhereInput[]
    NOT?: RecordWhereInput | RecordWhereInput[]
    tableId?: StringFilter<"Record"> | string
    createdAt?: DateTimeFilter<"Record"> | Date | string
    updatedAt?: DateTimeFilter<"Record"> | Date | string
    position?: IntNullableFilter<"Record"> | number | null
    userId?: StringNullableFilter<"Record"> | string | null
    sortValueText?: StringNullableFilter<"Record"> | string | null
    sortValueNumber?: FloatNullableFilter<"Record"> | number | null
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    cells?: CellValueListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type RecordOrderByWithAggregationInput = {
    id?: SortOrder
    tableId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    position?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    sortValueText?: SortOrderInput | SortOrder
    sortValueNumber?: SortOrderInput | SortOrder
    _count?: RecordCountOrderByAggregateInput
    _avg?: RecordAvgOrderByAggregateInput
    _max?: RecordMaxOrderByAggregateInput
    _min?: RecordMinOrderByAggregateInput
    _sum?: RecordSumOrderByAggregateInput
  }

  export type RecordScalarWhereWithAggregatesInput = {
    AND?: RecordScalarWhereWithAggregatesInput | RecordScalarWhereWithAggregatesInput[]
    OR?: RecordScalarWhereWithAggregatesInput[]
    NOT?: RecordScalarWhereWithAggregatesInput | RecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Record"> | string
    tableId?: StringWithAggregatesFilter<"Record"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Record"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Record"> | Date | string
    position?: IntNullableWithAggregatesFilter<"Record"> | number | null
    userId?: StringNullableWithAggregatesFilter<"Record"> | string | null
    sortValueText?: StringNullableWithAggregatesFilter<"Record"> | string | null
    sortValueNumber?: FloatNullableWithAggregatesFilter<"Record"> | number | null
  }

  export type CellValueWhereInput = {
    AND?: CellValueWhereInput | CellValueWhereInput[]
    OR?: CellValueWhereInput[]
    NOT?: CellValueWhereInput | CellValueWhereInput[]
    recordId?: StringFilter<"CellValue"> | string
    fieldId?: StringFilter<"CellValue"> | string
    valueText?: StringNullableFilter<"CellValue"> | string | null
    valueNumber?: FloatNullableFilter<"CellValue"> | number | null
    record?: XOR<RecordScalarRelationFilter, RecordWhereInput>
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
  }

  export type CellValueOrderByWithRelationInput = {
    recordId?: SortOrder
    fieldId?: SortOrder
    valueText?: SortOrderInput | SortOrder
    valueNumber?: SortOrderInput | SortOrder
    record?: RecordOrderByWithRelationInput
    field?: FieldOrderByWithRelationInput
  }

  export type CellValueWhereUniqueInput = Prisma.AtLeast<{
    recordId_fieldId?: CellValueRecordIdFieldIdCompoundUniqueInput
    AND?: CellValueWhereInput | CellValueWhereInput[]
    OR?: CellValueWhereInput[]
    NOT?: CellValueWhereInput | CellValueWhereInput[]
    recordId?: StringFilter<"CellValue"> | string
    fieldId?: StringFilter<"CellValue"> | string
    valueText?: StringNullableFilter<"CellValue"> | string | null
    valueNumber?: FloatNullableFilter<"CellValue"> | number | null
    record?: XOR<RecordScalarRelationFilter, RecordWhereInput>
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
  }, "recordId_fieldId">

  export type CellValueOrderByWithAggregationInput = {
    recordId?: SortOrder
    fieldId?: SortOrder
    valueText?: SortOrderInput | SortOrder
    valueNumber?: SortOrderInput | SortOrder
    _count?: CellValueCountOrderByAggregateInput
    _avg?: CellValueAvgOrderByAggregateInput
    _max?: CellValueMaxOrderByAggregateInput
    _min?: CellValueMinOrderByAggregateInput
    _sum?: CellValueSumOrderByAggregateInput
  }

  export type CellValueScalarWhereWithAggregatesInput = {
    AND?: CellValueScalarWhereWithAggregatesInput | CellValueScalarWhereWithAggregatesInput[]
    OR?: CellValueScalarWhereWithAggregatesInput[]
    NOT?: CellValueScalarWhereWithAggregatesInput | CellValueScalarWhereWithAggregatesInput[]
    recordId?: StringWithAggregatesFilter<"CellValue"> | string
    fieldId?: StringWithAggregatesFilter<"CellValue"> | string
    valueText?: StringNullableWithAggregatesFilter<"CellValue"> | string | null
    valueNumber?: FloatNullableWithAggregatesFilter<"CellValue"> | number | null
  }

  export type ViewWhereInput = {
    AND?: ViewWhereInput | ViewWhereInput[]
    OR?: ViewWhereInput[]
    NOT?: ViewWhereInput | ViewWhereInput[]
    id?: StringFilter<"View"> | string
    tableId?: StringFilter<"View"> | string
    name?: StringFilter<"View"> | string
    position?: IntNullableFilter<"View"> | number | null
    createdAt?: DateTimeFilter<"View"> | Date | string
    filterConjunction?: StringFilter<"View"> | string
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    filters?: ViewFilterListRelationFilter
    filterGroups?: ViewFilterGroupListRelationFilter
    sorts?: ViewSortListRelationFilter
  }

  export type ViewOrderByWithRelationInput = {
    id?: SortOrder
    tableId?: SortOrder
    name?: SortOrder
    position?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    filterConjunction?: SortOrder
    table?: TableOrderByWithRelationInput
    filters?: ViewFilterOrderByRelationAggregateInput
    filterGroups?: ViewFilterGroupOrderByRelationAggregateInput
    sorts?: ViewSortOrderByRelationAggregateInput
  }

  export type ViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViewWhereInput | ViewWhereInput[]
    OR?: ViewWhereInput[]
    NOT?: ViewWhereInput | ViewWhereInput[]
    tableId?: StringFilter<"View"> | string
    name?: StringFilter<"View"> | string
    position?: IntNullableFilter<"View"> | number | null
    createdAt?: DateTimeFilter<"View"> | Date | string
    filterConjunction?: StringFilter<"View"> | string
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    filters?: ViewFilterListRelationFilter
    filterGroups?: ViewFilterGroupListRelationFilter
    sorts?: ViewSortListRelationFilter
  }, "id">

  export type ViewOrderByWithAggregationInput = {
    id?: SortOrder
    tableId?: SortOrder
    name?: SortOrder
    position?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    filterConjunction?: SortOrder
    _count?: ViewCountOrderByAggregateInput
    _avg?: ViewAvgOrderByAggregateInput
    _max?: ViewMaxOrderByAggregateInput
    _min?: ViewMinOrderByAggregateInput
    _sum?: ViewSumOrderByAggregateInput
  }

  export type ViewScalarWhereWithAggregatesInput = {
    AND?: ViewScalarWhereWithAggregatesInput | ViewScalarWhereWithAggregatesInput[]
    OR?: ViewScalarWhereWithAggregatesInput[]
    NOT?: ViewScalarWhereWithAggregatesInput | ViewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"View"> | string
    tableId?: StringWithAggregatesFilter<"View"> | string
    name?: StringWithAggregatesFilter<"View"> | string
    position?: IntNullableWithAggregatesFilter<"View"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"View"> | Date | string
    filterConjunction?: StringWithAggregatesFilter<"View"> | string
  }

  export type ViewFilterWhereInput = {
    AND?: ViewFilterWhereInput | ViewFilterWhereInput[]
    OR?: ViewFilterWhereInput[]
    NOT?: ViewFilterWhereInput | ViewFilterWhereInput[]
    id?: StringFilter<"ViewFilter"> | string
    viewId?: StringFilter<"ViewFilter"> | string
    groupId?: StringNullableFilter<"ViewFilter"> | string | null
    fieldId?: StringNullableFilter<"ViewFilter"> | string | null
    operator?: StringFilter<"ViewFilter"> | string
    value?: JsonNullableFilter<"ViewFilter">
    position?: IntNullableFilter<"ViewFilter"> | number | null
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
    group?: XOR<ViewFilterGroupNullableScalarRelationFilter, ViewFilterGroupWhereInput> | null
    field?: XOR<FieldNullableScalarRelationFilter, FieldWhereInput> | null
  }

  export type ViewFilterOrderByWithRelationInput = {
    id?: SortOrder
    viewId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    fieldId?: SortOrderInput | SortOrder
    operator?: SortOrder
    value?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    view?: ViewOrderByWithRelationInput
    group?: ViewFilterGroupOrderByWithRelationInput
    field?: FieldOrderByWithRelationInput
  }

  export type ViewFilterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViewFilterWhereInput | ViewFilterWhereInput[]
    OR?: ViewFilterWhereInput[]
    NOT?: ViewFilterWhereInput | ViewFilterWhereInput[]
    viewId?: StringFilter<"ViewFilter"> | string
    groupId?: StringNullableFilter<"ViewFilter"> | string | null
    fieldId?: StringNullableFilter<"ViewFilter"> | string | null
    operator?: StringFilter<"ViewFilter"> | string
    value?: JsonNullableFilter<"ViewFilter">
    position?: IntNullableFilter<"ViewFilter"> | number | null
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
    group?: XOR<ViewFilterGroupNullableScalarRelationFilter, ViewFilterGroupWhereInput> | null
    field?: XOR<FieldNullableScalarRelationFilter, FieldWhereInput> | null
  }, "id">

  export type ViewFilterOrderByWithAggregationInput = {
    id?: SortOrder
    viewId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    fieldId?: SortOrderInput | SortOrder
    operator?: SortOrder
    value?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    _count?: ViewFilterCountOrderByAggregateInput
    _avg?: ViewFilterAvgOrderByAggregateInput
    _max?: ViewFilterMaxOrderByAggregateInput
    _min?: ViewFilterMinOrderByAggregateInput
    _sum?: ViewFilterSumOrderByAggregateInput
  }

  export type ViewFilterScalarWhereWithAggregatesInput = {
    AND?: ViewFilterScalarWhereWithAggregatesInput | ViewFilterScalarWhereWithAggregatesInput[]
    OR?: ViewFilterScalarWhereWithAggregatesInput[]
    NOT?: ViewFilterScalarWhereWithAggregatesInput | ViewFilterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ViewFilter"> | string
    viewId?: StringWithAggregatesFilter<"ViewFilter"> | string
    groupId?: StringNullableWithAggregatesFilter<"ViewFilter"> | string | null
    fieldId?: StringNullableWithAggregatesFilter<"ViewFilter"> | string | null
    operator?: StringWithAggregatesFilter<"ViewFilter"> | string
    value?: JsonNullableWithAggregatesFilter<"ViewFilter">
    position?: IntNullableWithAggregatesFilter<"ViewFilter"> | number | null
  }

  export type ViewFilterGroupWhereInput = {
    AND?: ViewFilterGroupWhereInput | ViewFilterGroupWhereInput[]
    OR?: ViewFilterGroupWhereInput[]
    NOT?: ViewFilterGroupWhereInput | ViewFilterGroupWhereInput[]
    id?: StringFilter<"ViewFilterGroup"> | string
    viewId?: StringFilter<"ViewFilterGroup"> | string
    conjunction?: StringFilter<"ViewFilterGroup"> | string
    connector?: StringFilter<"ViewFilterGroup"> | string
    position?: IntFilter<"ViewFilterGroup"> | number
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
    filters?: ViewFilterListRelationFilter
  }

  export type ViewFilterGroupOrderByWithRelationInput = {
    id?: SortOrder
    viewId?: SortOrder
    conjunction?: SortOrder
    connector?: SortOrder
    position?: SortOrder
    view?: ViewOrderByWithRelationInput
    filters?: ViewFilterOrderByRelationAggregateInput
  }

  export type ViewFilterGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViewFilterGroupWhereInput | ViewFilterGroupWhereInput[]
    OR?: ViewFilterGroupWhereInput[]
    NOT?: ViewFilterGroupWhereInput | ViewFilterGroupWhereInput[]
    viewId?: StringFilter<"ViewFilterGroup"> | string
    conjunction?: StringFilter<"ViewFilterGroup"> | string
    connector?: StringFilter<"ViewFilterGroup"> | string
    position?: IntFilter<"ViewFilterGroup"> | number
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
    filters?: ViewFilterListRelationFilter
  }, "id">

  export type ViewFilterGroupOrderByWithAggregationInput = {
    id?: SortOrder
    viewId?: SortOrder
    conjunction?: SortOrder
    connector?: SortOrder
    position?: SortOrder
    _count?: ViewFilterGroupCountOrderByAggregateInput
    _avg?: ViewFilterGroupAvgOrderByAggregateInput
    _max?: ViewFilterGroupMaxOrderByAggregateInput
    _min?: ViewFilterGroupMinOrderByAggregateInput
    _sum?: ViewFilterGroupSumOrderByAggregateInput
  }

  export type ViewFilterGroupScalarWhereWithAggregatesInput = {
    AND?: ViewFilterGroupScalarWhereWithAggregatesInput | ViewFilterGroupScalarWhereWithAggregatesInput[]
    OR?: ViewFilterGroupScalarWhereWithAggregatesInput[]
    NOT?: ViewFilterGroupScalarWhereWithAggregatesInput | ViewFilterGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ViewFilterGroup"> | string
    viewId?: StringWithAggregatesFilter<"ViewFilterGroup"> | string
    conjunction?: StringWithAggregatesFilter<"ViewFilterGroup"> | string
    connector?: StringWithAggregatesFilter<"ViewFilterGroup"> | string
    position?: IntWithAggregatesFilter<"ViewFilterGroup"> | number
  }

  export type ViewSortWhereInput = {
    AND?: ViewSortWhereInput | ViewSortWhereInput[]
    OR?: ViewSortWhereInput[]
    NOT?: ViewSortWhereInput | ViewSortWhereInput[]
    id?: StringFilter<"ViewSort"> | string
    viewId?: StringFilter<"ViewSort"> | string
    fieldId?: StringFilter<"ViewSort"> | string
    direction?: EnumSortDirectionFilter<"ViewSort"> | $Enums.SortDirection
    order?: IntNullableFilter<"ViewSort"> | number | null
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
  }

  export type ViewSortOrderByWithRelationInput = {
    id?: SortOrder
    viewId?: SortOrder
    fieldId?: SortOrder
    direction?: SortOrder
    order?: SortOrderInput | SortOrder
    view?: ViewOrderByWithRelationInput
    field?: FieldOrderByWithRelationInput
  }

  export type ViewSortWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViewSortWhereInput | ViewSortWhereInput[]
    OR?: ViewSortWhereInput[]
    NOT?: ViewSortWhereInput | ViewSortWhereInput[]
    viewId?: StringFilter<"ViewSort"> | string
    fieldId?: StringFilter<"ViewSort"> | string
    direction?: EnumSortDirectionFilter<"ViewSort"> | $Enums.SortDirection
    order?: IntNullableFilter<"ViewSort"> | number | null
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
  }, "id">

  export type ViewSortOrderByWithAggregationInput = {
    id?: SortOrder
    viewId?: SortOrder
    fieldId?: SortOrder
    direction?: SortOrder
    order?: SortOrderInput | SortOrder
    _count?: ViewSortCountOrderByAggregateInput
    _avg?: ViewSortAvgOrderByAggregateInput
    _max?: ViewSortMaxOrderByAggregateInput
    _min?: ViewSortMinOrderByAggregateInput
    _sum?: ViewSortSumOrderByAggregateInput
  }

  export type ViewSortScalarWhereWithAggregatesInput = {
    AND?: ViewSortScalarWhereWithAggregatesInput | ViewSortScalarWhereWithAggregatesInput[]
    OR?: ViewSortScalarWhereWithAggregatesInput[]
    NOT?: ViewSortScalarWhereWithAggregatesInput | ViewSortScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ViewSort"> | string
    viewId?: StringWithAggregatesFilter<"ViewSort"> | string
    fieldId?: StringWithAggregatesFilter<"ViewSort"> | string
    direction?: EnumSortDirectionWithAggregatesFilter<"ViewSort"> | $Enums.SortDirection
    order?: IntNullableWithAggregatesFilter<"ViewSort"> | number | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    memberships?: BaseMemberCreateNestedManyWithoutUserInput
    recordsCreated?: RecordCreateNestedManyWithoutUserInput
    tables?: TableCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memberships?: BaseMemberUncheckedCreateNestedManyWithoutUserInput
    recordsCreated?: RecordUncheckedCreateNestedManyWithoutUserInput
    tables?: TableUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memberships?: BaseMemberUpdateManyWithoutUserNestedInput
    recordsCreated?: RecordUpdateManyWithoutUserNestedInput
    tables?: TableUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memberships?: BaseMemberUncheckedUpdateManyWithoutUserNestedInput
    recordsCreated?: RecordUncheckedUpdateManyWithoutUserNestedInput
    tables?: TableUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BaseCreateInput = {
    id?: string
    name: string
    ownerId?: string | null
    createdAt?: Date | string
    tables?: TableCreateNestedManyWithoutBaseInput
    members?: BaseMemberCreateNestedManyWithoutBaseInput
  }

  export type BaseUncheckedCreateInput = {
    id?: string
    name: string
    ownerId?: string | null
    createdAt?: Date | string
    tables?: TableUncheckedCreateNestedManyWithoutBaseInput
    members?: BaseMemberUncheckedCreateNestedManyWithoutBaseInput
  }

  export type BaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: TableUpdateManyWithoutBaseNestedInput
    members?: BaseMemberUpdateManyWithoutBaseNestedInput
  }

  export type BaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: TableUncheckedUpdateManyWithoutBaseNestedInput
    members?: BaseMemberUncheckedUpdateManyWithoutBaseNestedInput
  }

  export type BaseCreateManyInput = {
    id?: string
    name: string
    ownerId?: string | null
    createdAt?: Date | string
  }

  export type BaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BaseMemberCreateInput = {
    base: BaseCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type BaseMemberUncheckedCreateInput = {
    baseId: string
    userId: string
  }

  export type BaseMemberUpdateInput = {
    base?: BaseUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type BaseMemberUncheckedUpdateInput = {
    baseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BaseMemberCreateManyInput = {
    baseId: string
    userId: string
  }

  export type BaseMemberUpdateManyMutationInput = {

  }

  export type BaseMemberUncheckedUpdateManyInput = {
    baseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TableCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    base: BaseCreateNestedOneWithoutTablesInput
    creator?: UserCreateNestedOneWithoutTablesInput
    fields?: FieldCreateNestedManyWithoutTableInput
    records?: RecordCreateNestedManyWithoutTableInput
    views?: ViewCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateInput = {
    id?: string
    baseId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    fields?: FieldUncheckedCreateNestedManyWithoutTableInput
    records?: RecordUncheckedCreateNestedManyWithoutTableInput
    views?: ViewUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BaseUpdateOneRequiredWithoutTablesNestedInput
    creator?: UserUpdateOneWithoutTablesNestedInput
    fields?: FieldUpdateManyWithoutTableNestedInput
    records?: RecordUpdateManyWithoutTableNestedInput
    views?: ViewUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: FieldUncheckedUpdateManyWithoutTableNestedInput
    records?: RecordUncheckedUpdateManyWithoutTableNestedInput
    views?: ViewUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableCreateManyInput = {
    id?: string
    baseId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
  }

  export type TableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FieldCreateInput = {
    id?: string
    name: string
    type: $Enums.FieldType
    position?: number | null
    table: TableCreateNestedOneWithoutFieldsInput
    cells?: CellValueCreateNestedManyWithoutFieldInput
    viewFilters?: ViewFilterCreateNestedManyWithoutFieldInput
    viewSorts?: ViewSortCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateInput = {
    id?: string
    tableId: string
    name: string
    type: $Enums.FieldType
    position?: number | null
    cells?: CellValueUncheckedCreateNestedManyWithoutFieldInput
    viewFilters?: ViewFilterUncheckedCreateNestedManyWithoutFieldInput
    viewSorts?: ViewSortUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    position?: NullableIntFieldUpdateOperationsInput | number | null
    table?: TableUpdateOneRequiredWithoutFieldsNestedInput
    cells?: CellValueUpdateManyWithoutFieldNestedInput
    viewFilters?: ViewFilterUpdateManyWithoutFieldNestedInput
    viewSorts?: ViewSortUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    position?: NullableIntFieldUpdateOperationsInput | number | null
    cells?: CellValueUncheckedUpdateManyWithoutFieldNestedInput
    viewFilters?: ViewFilterUncheckedUpdateManyWithoutFieldNestedInput
    viewSorts?: ViewSortUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type FieldCreateManyInput = {
    id?: string
    tableId: string
    name: string
    type: $Enums.FieldType
    position?: number | null
  }

  export type FieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RecordCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number | null
    sortValueText?: string | null
    sortValueNumber?: number | null
    table: TableCreateNestedOneWithoutRecordsInput
    cells?: CellValueCreateNestedManyWithoutRecordInput
    user?: UserCreateNestedOneWithoutRecordsCreatedInput
  }

  export type RecordUncheckedCreateInput = {
    id?: string
    tableId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number | null
    userId?: string | null
    sortValueText?: string | null
    sortValueNumber?: number | null
    cells?: CellValueUncheckedCreateNestedManyWithoutRecordInput
  }

  export type RecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sortValueText?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    table?: TableUpdateOneRequiredWithoutRecordsNestedInput
    cells?: CellValueUpdateManyWithoutRecordNestedInput
    user?: UserUpdateOneWithoutRecordsCreatedNestedInput
  }

  export type RecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueText?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    cells?: CellValueUncheckedUpdateManyWithoutRecordNestedInput
  }

  export type RecordCreateManyInput = {
    id?: string
    tableId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number | null
    userId?: string | null
    sortValueText?: string | null
    sortValueNumber?: number | null
  }

  export type RecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sortValueText?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueText?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CellValueCreateInput = {
    valueText?: string | null
    valueNumber?: number | null
    record: RecordCreateNestedOneWithoutCellsInput
    field: FieldCreateNestedOneWithoutCellsInput
  }

  export type CellValueUncheckedCreateInput = {
    recordId: string
    fieldId: string
    valueText?: string | null
    valueNumber?: number | null
  }

  export type CellValueUpdateInput = {
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    record?: RecordUpdateOneRequiredWithoutCellsNestedInput
    field?: FieldUpdateOneRequiredWithoutCellsNestedInput
  }

  export type CellValueUncheckedUpdateInput = {
    recordId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CellValueCreateManyInput = {
    recordId: string
    fieldId: string
    valueText?: string | null
    valueNumber?: number | null
  }

  export type CellValueUpdateManyMutationInput = {
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CellValueUncheckedUpdateManyInput = {
    recordId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ViewCreateInput = {
    id?: string
    name: string
    position?: number | null
    createdAt?: Date | string
    filterConjunction?: string
    table: TableCreateNestedOneWithoutViewsInput
    filters?: ViewFilterCreateNestedManyWithoutViewInput
    filterGroups?: ViewFilterGroupCreateNestedManyWithoutViewInput
    sorts?: ViewSortCreateNestedManyWithoutViewInput
  }

  export type ViewUncheckedCreateInput = {
    id?: string
    tableId: string
    name: string
    position?: number | null
    createdAt?: Date | string
    filterConjunction?: string
    filters?: ViewFilterUncheckedCreateNestedManyWithoutViewInput
    filterGroups?: ViewFilterGroupUncheckedCreateNestedManyWithoutViewInput
    sorts?: ViewSortUncheckedCreateNestedManyWithoutViewInput
  }

  export type ViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filterConjunction?: StringFieldUpdateOperationsInput | string
    table?: TableUpdateOneRequiredWithoutViewsNestedInput
    filters?: ViewFilterUpdateManyWithoutViewNestedInput
    filterGroups?: ViewFilterGroupUpdateManyWithoutViewNestedInput
    sorts?: ViewSortUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filterConjunction?: StringFieldUpdateOperationsInput | string
    filters?: ViewFilterUncheckedUpdateManyWithoutViewNestedInput
    filterGroups?: ViewFilterGroupUncheckedUpdateManyWithoutViewNestedInput
    sorts?: ViewSortUncheckedUpdateManyWithoutViewNestedInput
  }

  export type ViewCreateManyInput = {
    id?: string
    tableId: string
    name: string
    position?: number | null
    createdAt?: Date | string
    filterConjunction?: string
  }

  export type ViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filterConjunction?: StringFieldUpdateOperationsInput | string
  }

  export type ViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filterConjunction?: StringFieldUpdateOperationsInput | string
  }

  export type ViewFilterCreateInput = {
    id?: string
    operator?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: number | null
    view: ViewCreateNestedOneWithoutFiltersInput
    group?: ViewFilterGroupCreateNestedOneWithoutFiltersInput
    field?: FieldCreateNestedOneWithoutViewFiltersInput
  }

  export type ViewFilterUncheckedCreateInput = {
    id?: string
    viewId: string
    groupId?: string | null
    fieldId?: string | null
    operator?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: number | null
  }

  export type ViewFilterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operator?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: NullableIntFieldUpdateOperationsInput | number | null
    view?: ViewUpdateOneRequiredWithoutFiltersNestedInput
    group?: ViewFilterGroupUpdateOneWithoutFiltersNestedInput
    field?: FieldUpdateOneWithoutViewFiltersNestedInput
  }

  export type ViewFilterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    fieldId?: NullableStringFieldUpdateOperationsInput | string | null
    operator?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewFilterCreateManyInput = {
    id?: string
    viewId: string
    groupId?: string | null
    fieldId?: string | null
    operator?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: number | null
  }

  export type ViewFilterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    operator?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewFilterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    fieldId?: NullableStringFieldUpdateOperationsInput | string | null
    operator?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewFilterGroupCreateInput = {
    id?: string
    conjunction?: string
    connector?: string
    position?: number
    view: ViewCreateNestedOneWithoutFilterGroupsInput
    filters?: ViewFilterCreateNestedManyWithoutGroupInput
  }

  export type ViewFilterGroupUncheckedCreateInput = {
    id?: string
    viewId: string
    conjunction?: string
    connector?: string
    position?: number
    filters?: ViewFilterUncheckedCreateNestedManyWithoutGroupInput
  }

  export type ViewFilterGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conjunction?: StringFieldUpdateOperationsInput | string
    connector?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    view?: ViewUpdateOneRequiredWithoutFilterGroupsNestedInput
    filters?: ViewFilterUpdateManyWithoutGroupNestedInput
  }

  export type ViewFilterGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewId?: StringFieldUpdateOperationsInput | string
    conjunction?: StringFieldUpdateOperationsInput | string
    connector?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    filters?: ViewFilterUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type ViewFilterGroupCreateManyInput = {
    id?: string
    viewId: string
    conjunction?: string
    connector?: string
    position?: number
  }

  export type ViewFilterGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    conjunction?: StringFieldUpdateOperationsInput | string
    connector?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewFilterGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewId?: StringFieldUpdateOperationsInput | string
    conjunction?: StringFieldUpdateOperationsInput | string
    connector?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewSortCreateInput = {
    id?: string
    direction: $Enums.SortDirection
    order?: number | null
    view: ViewCreateNestedOneWithoutSortsInput
    field: FieldCreateNestedOneWithoutViewSortsInput
  }

  export type ViewSortUncheckedCreateInput = {
    id?: string
    viewId: string
    fieldId: string
    direction: $Enums.SortDirection
    order?: number | null
  }

  export type ViewSortUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: NullableIntFieldUpdateOperationsInput | number | null
    view?: ViewUpdateOneRequiredWithoutSortsNestedInput
    field?: FieldUpdateOneRequiredWithoutViewSortsNestedInput
  }

  export type ViewSortUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewSortCreateManyInput = {
    id?: string
    viewId: string
    fieldId: string
    direction: $Enums.SortDirection
    order?: number | null
  }

  export type ViewSortUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewSortUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewId?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type BaseMemberListRelationFilter = {
    every?: BaseMemberWhereInput
    some?: BaseMemberWhereInput
    none?: BaseMemberWhereInput
  }

  export type RecordListRelationFilter = {
    every?: RecordWhereInput
    some?: RecordWhereInput
    none?: RecordWhereInput
  }

  export type TableListRelationFilter = {
    every?: TableWhereInput
    some?: TableWhereInput
    none?: TableWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BaseMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type BaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type BaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type BaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type BaseScalarRelationFilter = {
    is?: BaseWhereInput
    isNot?: BaseWhereInput
  }

  export type BaseMemberBaseIdUserIdCompoundUniqueInput = {
    baseId: string
    userId: string
  }

  export type BaseMemberCountOrderByAggregateInput = {
    baseId?: SortOrder
    userId?: SortOrder
  }

  export type BaseMemberMaxOrderByAggregateInput = {
    baseId?: SortOrder
    userId?: SortOrder
  }

  export type BaseMemberMinOrderByAggregateInput = {
    baseId?: SortOrder
    userId?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type FieldListRelationFilter = {
    every?: FieldWhereInput
    some?: FieldWhereInput
    none?: FieldWhereInput
  }

  export type ViewListRelationFilter = {
    every?: ViewWhereInput
    some?: ViewWhereInput
    none?: ViewWhereInput
  }

  export type FieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TableCountOrderByAggregateInput = {
    id?: SortOrder
    baseId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type TableMaxOrderByAggregateInput = {
    id?: SortOrder
    baseId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type TableMinOrderByAggregateInput = {
    id?: SortOrder
    baseId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type EnumFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeFilter<$PrismaModel> | $Enums.FieldType
  }

  export type TableScalarRelationFilter = {
    is?: TableWhereInput
    isNot?: TableWhereInput
  }

  export type CellValueListRelationFilter = {
    every?: CellValueWhereInput
    some?: CellValueWhereInput
    none?: CellValueWhereInput
  }

  export type ViewFilterListRelationFilter = {
    every?: ViewFilterWhereInput
    some?: ViewFilterWhereInput
    none?: ViewFilterWhereInput
  }

  export type ViewSortListRelationFilter = {
    every?: ViewSortWhereInput
    some?: ViewSortWhereInput
    none?: ViewSortWhereInput
  }

  export type CellValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewFilterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewSortOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FieldTableIdNameCompoundUniqueInput = {
    tableId: string
    name: string
  }

  export type FieldCountOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    position?: SortOrder
  }

  export type FieldAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type FieldMaxOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    position?: SortOrder
  }

  export type FieldMinOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    position?: SortOrder
  }

  export type FieldSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type EnumFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.FieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumFieldTypeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RecordCountOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    position?: SortOrder
    userId?: SortOrder
    sortValueText?: SortOrder
    sortValueNumber?: SortOrder
  }

  export type RecordAvgOrderByAggregateInput = {
    position?: SortOrder
    sortValueNumber?: SortOrder
  }

  export type RecordMaxOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    position?: SortOrder
    userId?: SortOrder
    sortValueText?: SortOrder
    sortValueNumber?: SortOrder
  }

  export type RecordMinOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    position?: SortOrder
    userId?: SortOrder
    sortValueText?: SortOrder
    sortValueNumber?: SortOrder
  }

  export type RecordSumOrderByAggregateInput = {
    position?: SortOrder
    sortValueNumber?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type RecordScalarRelationFilter = {
    is?: RecordWhereInput
    isNot?: RecordWhereInput
  }

  export type FieldScalarRelationFilter = {
    is?: FieldWhereInput
    isNot?: FieldWhereInput
  }

  export type CellValueRecordIdFieldIdCompoundUniqueInput = {
    recordId: string
    fieldId: string
  }

  export type CellValueCountOrderByAggregateInput = {
    recordId?: SortOrder
    fieldId?: SortOrder
    valueText?: SortOrder
    valueNumber?: SortOrder
  }

  export type CellValueAvgOrderByAggregateInput = {
    valueNumber?: SortOrder
  }

  export type CellValueMaxOrderByAggregateInput = {
    recordId?: SortOrder
    fieldId?: SortOrder
    valueText?: SortOrder
    valueNumber?: SortOrder
  }

  export type CellValueMinOrderByAggregateInput = {
    recordId?: SortOrder
    fieldId?: SortOrder
    valueText?: SortOrder
    valueNumber?: SortOrder
  }

  export type CellValueSumOrderByAggregateInput = {
    valueNumber?: SortOrder
  }

  export type ViewFilterGroupListRelationFilter = {
    every?: ViewFilterGroupWhereInput
    some?: ViewFilterGroupWhereInput
    none?: ViewFilterGroupWhereInput
  }

  export type ViewFilterGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewCountOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    filterConjunction?: SortOrder
  }

  export type ViewAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ViewMaxOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    filterConjunction?: SortOrder
  }

  export type ViewMinOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    filterConjunction?: SortOrder
  }

  export type ViewSumOrderByAggregateInput = {
    position?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ViewScalarRelationFilter = {
    is?: ViewWhereInput
    isNot?: ViewWhereInput
  }

  export type ViewFilterGroupNullableScalarRelationFilter = {
    is?: ViewFilterGroupWhereInput | null
    isNot?: ViewFilterGroupWhereInput | null
  }

  export type FieldNullableScalarRelationFilter = {
    is?: FieldWhereInput | null
    isNot?: FieldWhereInput | null
  }

  export type ViewFilterCountOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    groupId?: SortOrder
    fieldId?: SortOrder
    operator?: SortOrder
    value?: SortOrder
    position?: SortOrder
  }

  export type ViewFilterAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ViewFilterMaxOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    groupId?: SortOrder
    fieldId?: SortOrder
    operator?: SortOrder
    position?: SortOrder
  }

  export type ViewFilterMinOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    groupId?: SortOrder
    fieldId?: SortOrder
    operator?: SortOrder
    position?: SortOrder
  }

  export type ViewFilterSumOrderByAggregateInput = {
    position?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ViewFilterGroupCountOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    conjunction?: SortOrder
    connector?: SortOrder
    position?: SortOrder
  }

  export type ViewFilterGroupAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ViewFilterGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    conjunction?: SortOrder
    connector?: SortOrder
    position?: SortOrder
  }

  export type ViewFilterGroupMinOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    conjunction?: SortOrder
    connector?: SortOrder
    position?: SortOrder
  }

  export type ViewFilterGroupSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumSortDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.SortDirection | EnumSortDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.SortDirection[] | ListEnumSortDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SortDirection[] | ListEnumSortDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumSortDirectionFilter<$PrismaModel> | $Enums.SortDirection
  }

  export type ViewSortCountOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    fieldId?: SortOrder
    direction?: SortOrder
    order?: SortOrder
  }

  export type ViewSortAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ViewSortMaxOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    fieldId?: SortOrder
    direction?: SortOrder
    order?: SortOrder
  }

  export type ViewSortMinOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    fieldId?: SortOrder
    direction?: SortOrder
    order?: SortOrder
  }

  export type ViewSortSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumSortDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SortDirection | EnumSortDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.SortDirection[] | ListEnumSortDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SortDirection[] | ListEnumSortDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumSortDirectionWithAggregatesFilter<$PrismaModel> | $Enums.SortDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSortDirectionFilter<$PrismaModel>
    _max?: NestedEnumSortDirectionFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type BaseMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<BaseMemberCreateWithoutUserInput, BaseMemberUncheckedCreateWithoutUserInput> | BaseMemberCreateWithoutUserInput[] | BaseMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BaseMemberCreateOrConnectWithoutUserInput | BaseMemberCreateOrConnectWithoutUserInput[]
    createMany?: BaseMemberCreateManyUserInputEnvelope
    connect?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
  }

  export type RecordCreateNestedManyWithoutUserInput = {
    create?: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput> | RecordCreateWithoutUserInput[] | RecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutUserInput | RecordCreateOrConnectWithoutUserInput[]
    createMany?: RecordCreateManyUserInputEnvelope
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type TableCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TableCreateWithoutCreatorInput, TableUncheckedCreateWithoutCreatorInput> | TableCreateWithoutCreatorInput[] | TableUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TableCreateOrConnectWithoutCreatorInput | TableCreateOrConnectWithoutCreatorInput[]
    createMany?: TableCreateManyCreatorInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type BaseMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BaseMemberCreateWithoutUserInput, BaseMemberUncheckedCreateWithoutUserInput> | BaseMemberCreateWithoutUserInput[] | BaseMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BaseMemberCreateOrConnectWithoutUserInput | BaseMemberCreateOrConnectWithoutUserInput[]
    createMany?: BaseMemberCreateManyUserInputEnvelope
    connect?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
  }

  export type RecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput> | RecordCreateWithoutUserInput[] | RecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutUserInput | RecordCreateOrConnectWithoutUserInput[]
    createMany?: RecordCreateManyUserInputEnvelope
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type TableUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TableCreateWithoutCreatorInput, TableUncheckedCreateWithoutCreatorInput> | TableCreateWithoutCreatorInput[] | TableUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TableCreateOrConnectWithoutCreatorInput | TableCreateOrConnectWithoutCreatorInput[]
    createMany?: TableCreateManyCreatorInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type BaseMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<BaseMemberCreateWithoutUserInput, BaseMemberUncheckedCreateWithoutUserInput> | BaseMemberCreateWithoutUserInput[] | BaseMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BaseMemberCreateOrConnectWithoutUserInput | BaseMemberCreateOrConnectWithoutUserInput[]
    upsert?: BaseMemberUpsertWithWhereUniqueWithoutUserInput | BaseMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BaseMemberCreateManyUserInputEnvelope
    set?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
    disconnect?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
    delete?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
    connect?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
    update?: BaseMemberUpdateWithWhereUniqueWithoutUserInput | BaseMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BaseMemberUpdateManyWithWhereWithoutUserInput | BaseMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BaseMemberScalarWhereInput | BaseMemberScalarWhereInput[]
  }

  export type RecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput> | RecordCreateWithoutUserInput[] | RecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutUserInput | RecordCreateOrConnectWithoutUserInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutUserInput | RecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecordCreateManyUserInputEnvelope
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutUserInput | RecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutUserInput | RecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type TableUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TableCreateWithoutCreatorInput, TableUncheckedCreateWithoutCreatorInput> | TableCreateWithoutCreatorInput[] | TableUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TableCreateOrConnectWithoutCreatorInput | TableCreateOrConnectWithoutCreatorInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutCreatorInput | TableUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TableCreateManyCreatorInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutCreatorInput | TableUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TableUpdateManyWithWhereWithoutCreatorInput | TableUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type BaseMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BaseMemberCreateWithoutUserInput, BaseMemberUncheckedCreateWithoutUserInput> | BaseMemberCreateWithoutUserInput[] | BaseMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BaseMemberCreateOrConnectWithoutUserInput | BaseMemberCreateOrConnectWithoutUserInput[]
    upsert?: BaseMemberUpsertWithWhereUniqueWithoutUserInput | BaseMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BaseMemberCreateManyUserInputEnvelope
    set?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
    disconnect?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
    delete?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
    connect?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
    update?: BaseMemberUpdateWithWhereUniqueWithoutUserInput | BaseMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BaseMemberUpdateManyWithWhereWithoutUserInput | BaseMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BaseMemberScalarWhereInput | BaseMemberScalarWhereInput[]
  }

  export type RecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput> | RecordCreateWithoutUserInput[] | RecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutUserInput | RecordCreateOrConnectWithoutUserInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutUserInput | RecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecordCreateManyUserInputEnvelope
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutUserInput | RecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutUserInput | RecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type TableUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TableCreateWithoutCreatorInput, TableUncheckedCreateWithoutCreatorInput> | TableCreateWithoutCreatorInput[] | TableUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TableCreateOrConnectWithoutCreatorInput | TableCreateOrConnectWithoutCreatorInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutCreatorInput | TableUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TableCreateManyCreatorInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutCreatorInput | TableUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TableUpdateManyWithWhereWithoutCreatorInput | TableUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type TableCreateNestedManyWithoutBaseInput = {
    create?: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput> | TableCreateWithoutBaseInput[] | TableUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: TableCreateOrConnectWithoutBaseInput | TableCreateOrConnectWithoutBaseInput[]
    createMany?: TableCreateManyBaseInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type BaseMemberCreateNestedManyWithoutBaseInput = {
    create?: XOR<BaseMemberCreateWithoutBaseInput, BaseMemberUncheckedCreateWithoutBaseInput> | BaseMemberCreateWithoutBaseInput[] | BaseMemberUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: BaseMemberCreateOrConnectWithoutBaseInput | BaseMemberCreateOrConnectWithoutBaseInput[]
    createMany?: BaseMemberCreateManyBaseInputEnvelope
    connect?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
  }

  export type TableUncheckedCreateNestedManyWithoutBaseInput = {
    create?: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput> | TableCreateWithoutBaseInput[] | TableUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: TableCreateOrConnectWithoutBaseInput | TableCreateOrConnectWithoutBaseInput[]
    createMany?: TableCreateManyBaseInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type BaseMemberUncheckedCreateNestedManyWithoutBaseInput = {
    create?: XOR<BaseMemberCreateWithoutBaseInput, BaseMemberUncheckedCreateWithoutBaseInput> | BaseMemberCreateWithoutBaseInput[] | BaseMemberUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: BaseMemberCreateOrConnectWithoutBaseInput | BaseMemberCreateOrConnectWithoutBaseInput[]
    createMany?: BaseMemberCreateManyBaseInputEnvelope
    connect?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
  }

  export type TableUpdateManyWithoutBaseNestedInput = {
    create?: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput> | TableCreateWithoutBaseInput[] | TableUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: TableCreateOrConnectWithoutBaseInput | TableCreateOrConnectWithoutBaseInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutBaseInput | TableUpsertWithWhereUniqueWithoutBaseInput[]
    createMany?: TableCreateManyBaseInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutBaseInput | TableUpdateWithWhereUniqueWithoutBaseInput[]
    updateMany?: TableUpdateManyWithWhereWithoutBaseInput | TableUpdateManyWithWhereWithoutBaseInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type BaseMemberUpdateManyWithoutBaseNestedInput = {
    create?: XOR<BaseMemberCreateWithoutBaseInput, BaseMemberUncheckedCreateWithoutBaseInput> | BaseMemberCreateWithoutBaseInput[] | BaseMemberUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: BaseMemberCreateOrConnectWithoutBaseInput | BaseMemberCreateOrConnectWithoutBaseInput[]
    upsert?: BaseMemberUpsertWithWhereUniqueWithoutBaseInput | BaseMemberUpsertWithWhereUniqueWithoutBaseInput[]
    createMany?: BaseMemberCreateManyBaseInputEnvelope
    set?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
    disconnect?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
    delete?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
    connect?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
    update?: BaseMemberUpdateWithWhereUniqueWithoutBaseInput | BaseMemberUpdateWithWhereUniqueWithoutBaseInput[]
    updateMany?: BaseMemberUpdateManyWithWhereWithoutBaseInput | BaseMemberUpdateManyWithWhereWithoutBaseInput[]
    deleteMany?: BaseMemberScalarWhereInput | BaseMemberScalarWhereInput[]
  }

  export type TableUncheckedUpdateManyWithoutBaseNestedInput = {
    create?: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput> | TableCreateWithoutBaseInput[] | TableUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: TableCreateOrConnectWithoutBaseInput | TableCreateOrConnectWithoutBaseInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutBaseInput | TableUpsertWithWhereUniqueWithoutBaseInput[]
    createMany?: TableCreateManyBaseInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutBaseInput | TableUpdateWithWhereUniqueWithoutBaseInput[]
    updateMany?: TableUpdateManyWithWhereWithoutBaseInput | TableUpdateManyWithWhereWithoutBaseInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type BaseMemberUncheckedUpdateManyWithoutBaseNestedInput = {
    create?: XOR<BaseMemberCreateWithoutBaseInput, BaseMemberUncheckedCreateWithoutBaseInput> | BaseMemberCreateWithoutBaseInput[] | BaseMemberUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: BaseMemberCreateOrConnectWithoutBaseInput | BaseMemberCreateOrConnectWithoutBaseInput[]
    upsert?: BaseMemberUpsertWithWhereUniqueWithoutBaseInput | BaseMemberUpsertWithWhereUniqueWithoutBaseInput[]
    createMany?: BaseMemberCreateManyBaseInputEnvelope
    set?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
    disconnect?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
    delete?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
    connect?: BaseMemberWhereUniqueInput | BaseMemberWhereUniqueInput[]
    update?: BaseMemberUpdateWithWhereUniqueWithoutBaseInput | BaseMemberUpdateWithWhereUniqueWithoutBaseInput[]
    updateMany?: BaseMemberUpdateManyWithWhereWithoutBaseInput | BaseMemberUpdateManyWithWhereWithoutBaseInput[]
    deleteMany?: BaseMemberScalarWhereInput | BaseMemberScalarWhereInput[]
  }

  export type BaseCreateNestedOneWithoutMembersInput = {
    create?: XOR<BaseCreateWithoutMembersInput, BaseUncheckedCreateWithoutMembersInput>
    connectOrCreate?: BaseCreateOrConnectWithoutMembersInput
    connect?: BaseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type BaseUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<BaseCreateWithoutMembersInput, BaseUncheckedCreateWithoutMembersInput>
    connectOrCreate?: BaseCreateOrConnectWithoutMembersInput
    upsert?: BaseUpsertWithoutMembersInput
    connect?: BaseWhereUniqueInput
    update?: XOR<XOR<BaseUpdateToOneWithWhereWithoutMembersInput, BaseUpdateWithoutMembersInput>, BaseUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type BaseCreateNestedOneWithoutTablesInput = {
    create?: XOR<BaseCreateWithoutTablesInput, BaseUncheckedCreateWithoutTablesInput>
    connectOrCreate?: BaseCreateOrConnectWithoutTablesInput
    connect?: BaseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTablesInput = {
    create?: XOR<UserCreateWithoutTablesInput, UserUncheckedCreateWithoutTablesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTablesInput
    connect?: UserWhereUniqueInput
  }

  export type FieldCreateNestedManyWithoutTableInput = {
    create?: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput> | FieldCreateWithoutTableInput[] | FieldUncheckedCreateWithoutTableInput[]
    connectOrCreate?: FieldCreateOrConnectWithoutTableInput | FieldCreateOrConnectWithoutTableInput[]
    createMany?: FieldCreateManyTableInputEnvelope
    connect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
  }

  export type RecordCreateNestedManyWithoutTableInput = {
    create?: XOR<RecordCreateWithoutTableInput, RecordUncheckedCreateWithoutTableInput> | RecordCreateWithoutTableInput[] | RecordUncheckedCreateWithoutTableInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutTableInput | RecordCreateOrConnectWithoutTableInput[]
    createMany?: RecordCreateManyTableInputEnvelope
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type ViewCreateNestedManyWithoutTableInput = {
    create?: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput> | ViewCreateWithoutTableInput[] | ViewUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutTableInput | ViewCreateOrConnectWithoutTableInput[]
    createMany?: ViewCreateManyTableInputEnvelope
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
  }

  export type FieldUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput> | FieldCreateWithoutTableInput[] | FieldUncheckedCreateWithoutTableInput[]
    connectOrCreate?: FieldCreateOrConnectWithoutTableInput | FieldCreateOrConnectWithoutTableInput[]
    createMany?: FieldCreateManyTableInputEnvelope
    connect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
  }

  export type RecordUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<RecordCreateWithoutTableInput, RecordUncheckedCreateWithoutTableInput> | RecordCreateWithoutTableInput[] | RecordUncheckedCreateWithoutTableInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutTableInput | RecordCreateOrConnectWithoutTableInput[]
    createMany?: RecordCreateManyTableInputEnvelope
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type ViewUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput> | ViewCreateWithoutTableInput[] | ViewUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutTableInput | ViewCreateOrConnectWithoutTableInput[]
    createMany?: ViewCreateManyTableInputEnvelope
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
  }

  export type BaseUpdateOneRequiredWithoutTablesNestedInput = {
    create?: XOR<BaseCreateWithoutTablesInput, BaseUncheckedCreateWithoutTablesInput>
    connectOrCreate?: BaseCreateOrConnectWithoutTablesInput
    upsert?: BaseUpsertWithoutTablesInput
    connect?: BaseWhereUniqueInput
    update?: XOR<XOR<BaseUpdateToOneWithWhereWithoutTablesInput, BaseUpdateWithoutTablesInput>, BaseUncheckedUpdateWithoutTablesInput>
  }

  export type UserUpdateOneWithoutTablesNestedInput = {
    create?: XOR<UserCreateWithoutTablesInput, UserUncheckedCreateWithoutTablesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTablesInput
    upsert?: UserUpsertWithoutTablesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTablesInput, UserUpdateWithoutTablesInput>, UserUncheckedUpdateWithoutTablesInput>
  }

  export type FieldUpdateManyWithoutTableNestedInput = {
    create?: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput> | FieldCreateWithoutTableInput[] | FieldUncheckedCreateWithoutTableInput[]
    connectOrCreate?: FieldCreateOrConnectWithoutTableInput | FieldCreateOrConnectWithoutTableInput[]
    upsert?: FieldUpsertWithWhereUniqueWithoutTableInput | FieldUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: FieldCreateManyTableInputEnvelope
    set?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    disconnect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    delete?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    connect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    update?: FieldUpdateWithWhereUniqueWithoutTableInput | FieldUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: FieldUpdateManyWithWhereWithoutTableInput | FieldUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: FieldScalarWhereInput | FieldScalarWhereInput[]
  }

  export type RecordUpdateManyWithoutTableNestedInput = {
    create?: XOR<RecordCreateWithoutTableInput, RecordUncheckedCreateWithoutTableInput> | RecordCreateWithoutTableInput[] | RecordUncheckedCreateWithoutTableInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutTableInput | RecordCreateOrConnectWithoutTableInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutTableInput | RecordUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: RecordCreateManyTableInputEnvelope
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutTableInput | RecordUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutTableInput | RecordUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type ViewUpdateManyWithoutTableNestedInput = {
    create?: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput> | ViewCreateWithoutTableInput[] | ViewUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutTableInput | ViewCreateOrConnectWithoutTableInput[]
    upsert?: ViewUpsertWithWhereUniqueWithoutTableInput | ViewUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: ViewCreateManyTableInputEnvelope
    set?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    disconnect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    delete?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    update?: ViewUpdateWithWhereUniqueWithoutTableInput | ViewUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: ViewUpdateManyWithWhereWithoutTableInput | ViewUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: ViewScalarWhereInput | ViewScalarWhereInput[]
  }

  export type FieldUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput> | FieldCreateWithoutTableInput[] | FieldUncheckedCreateWithoutTableInput[]
    connectOrCreate?: FieldCreateOrConnectWithoutTableInput | FieldCreateOrConnectWithoutTableInput[]
    upsert?: FieldUpsertWithWhereUniqueWithoutTableInput | FieldUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: FieldCreateManyTableInputEnvelope
    set?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    disconnect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    delete?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    connect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    update?: FieldUpdateWithWhereUniqueWithoutTableInput | FieldUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: FieldUpdateManyWithWhereWithoutTableInput | FieldUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: FieldScalarWhereInput | FieldScalarWhereInput[]
  }

  export type RecordUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<RecordCreateWithoutTableInput, RecordUncheckedCreateWithoutTableInput> | RecordCreateWithoutTableInput[] | RecordUncheckedCreateWithoutTableInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutTableInput | RecordCreateOrConnectWithoutTableInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutTableInput | RecordUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: RecordCreateManyTableInputEnvelope
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutTableInput | RecordUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutTableInput | RecordUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type ViewUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput> | ViewCreateWithoutTableInput[] | ViewUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutTableInput | ViewCreateOrConnectWithoutTableInput[]
    upsert?: ViewUpsertWithWhereUniqueWithoutTableInput | ViewUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: ViewCreateManyTableInputEnvelope
    set?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    disconnect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    delete?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    update?: ViewUpdateWithWhereUniqueWithoutTableInput | ViewUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: ViewUpdateManyWithWhereWithoutTableInput | ViewUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: ViewScalarWhereInput | ViewScalarWhereInput[]
  }

  export type TableCreateNestedOneWithoutFieldsInput = {
    create?: XOR<TableCreateWithoutFieldsInput, TableUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: TableCreateOrConnectWithoutFieldsInput
    connect?: TableWhereUniqueInput
  }

  export type CellValueCreateNestedManyWithoutFieldInput = {
    create?: XOR<CellValueCreateWithoutFieldInput, CellValueUncheckedCreateWithoutFieldInput> | CellValueCreateWithoutFieldInput[] | CellValueUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CellValueCreateOrConnectWithoutFieldInput | CellValueCreateOrConnectWithoutFieldInput[]
    createMany?: CellValueCreateManyFieldInputEnvelope
    connect?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
  }

  export type ViewFilterCreateNestedManyWithoutFieldInput = {
    create?: XOR<ViewFilterCreateWithoutFieldInput, ViewFilterUncheckedCreateWithoutFieldInput> | ViewFilterCreateWithoutFieldInput[] | ViewFilterUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutFieldInput | ViewFilterCreateOrConnectWithoutFieldInput[]
    createMany?: ViewFilterCreateManyFieldInputEnvelope
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
  }

  export type ViewSortCreateNestedManyWithoutFieldInput = {
    create?: XOR<ViewSortCreateWithoutFieldInput, ViewSortUncheckedCreateWithoutFieldInput> | ViewSortCreateWithoutFieldInput[] | ViewSortUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: ViewSortCreateOrConnectWithoutFieldInput | ViewSortCreateOrConnectWithoutFieldInput[]
    createMany?: ViewSortCreateManyFieldInputEnvelope
    connect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
  }

  export type CellValueUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<CellValueCreateWithoutFieldInput, CellValueUncheckedCreateWithoutFieldInput> | CellValueCreateWithoutFieldInput[] | CellValueUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CellValueCreateOrConnectWithoutFieldInput | CellValueCreateOrConnectWithoutFieldInput[]
    createMany?: CellValueCreateManyFieldInputEnvelope
    connect?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
  }

  export type ViewFilterUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<ViewFilterCreateWithoutFieldInput, ViewFilterUncheckedCreateWithoutFieldInput> | ViewFilterCreateWithoutFieldInput[] | ViewFilterUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutFieldInput | ViewFilterCreateOrConnectWithoutFieldInput[]
    createMany?: ViewFilterCreateManyFieldInputEnvelope
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
  }

  export type ViewSortUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<ViewSortCreateWithoutFieldInput, ViewSortUncheckedCreateWithoutFieldInput> | ViewSortCreateWithoutFieldInput[] | ViewSortUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: ViewSortCreateOrConnectWithoutFieldInput | ViewSortCreateOrConnectWithoutFieldInput[]
    createMany?: ViewSortCreateManyFieldInputEnvelope
    connect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
  }

  export type EnumFieldTypeFieldUpdateOperationsInput = {
    set?: $Enums.FieldType
  }

  export type TableUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: XOR<TableCreateWithoutFieldsInput, TableUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: TableCreateOrConnectWithoutFieldsInput
    upsert?: TableUpsertWithoutFieldsInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutFieldsInput, TableUpdateWithoutFieldsInput>, TableUncheckedUpdateWithoutFieldsInput>
  }

  export type CellValueUpdateManyWithoutFieldNestedInput = {
    create?: XOR<CellValueCreateWithoutFieldInput, CellValueUncheckedCreateWithoutFieldInput> | CellValueCreateWithoutFieldInput[] | CellValueUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CellValueCreateOrConnectWithoutFieldInput | CellValueCreateOrConnectWithoutFieldInput[]
    upsert?: CellValueUpsertWithWhereUniqueWithoutFieldInput | CellValueUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: CellValueCreateManyFieldInputEnvelope
    set?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
    disconnect?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
    delete?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
    connect?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
    update?: CellValueUpdateWithWhereUniqueWithoutFieldInput | CellValueUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: CellValueUpdateManyWithWhereWithoutFieldInput | CellValueUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: CellValueScalarWhereInput | CellValueScalarWhereInput[]
  }

  export type ViewFilterUpdateManyWithoutFieldNestedInput = {
    create?: XOR<ViewFilterCreateWithoutFieldInput, ViewFilterUncheckedCreateWithoutFieldInput> | ViewFilterCreateWithoutFieldInput[] | ViewFilterUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutFieldInput | ViewFilterCreateOrConnectWithoutFieldInput[]
    upsert?: ViewFilterUpsertWithWhereUniqueWithoutFieldInput | ViewFilterUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: ViewFilterCreateManyFieldInputEnvelope
    set?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    disconnect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    delete?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    update?: ViewFilterUpdateWithWhereUniqueWithoutFieldInput | ViewFilterUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: ViewFilterUpdateManyWithWhereWithoutFieldInput | ViewFilterUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: ViewFilterScalarWhereInput | ViewFilterScalarWhereInput[]
  }

  export type ViewSortUpdateManyWithoutFieldNestedInput = {
    create?: XOR<ViewSortCreateWithoutFieldInput, ViewSortUncheckedCreateWithoutFieldInput> | ViewSortCreateWithoutFieldInput[] | ViewSortUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: ViewSortCreateOrConnectWithoutFieldInput | ViewSortCreateOrConnectWithoutFieldInput[]
    upsert?: ViewSortUpsertWithWhereUniqueWithoutFieldInput | ViewSortUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: ViewSortCreateManyFieldInputEnvelope
    set?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    disconnect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    delete?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    connect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    update?: ViewSortUpdateWithWhereUniqueWithoutFieldInput | ViewSortUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: ViewSortUpdateManyWithWhereWithoutFieldInput | ViewSortUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: ViewSortScalarWhereInput | ViewSortScalarWhereInput[]
  }

  export type CellValueUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<CellValueCreateWithoutFieldInput, CellValueUncheckedCreateWithoutFieldInput> | CellValueCreateWithoutFieldInput[] | CellValueUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CellValueCreateOrConnectWithoutFieldInput | CellValueCreateOrConnectWithoutFieldInput[]
    upsert?: CellValueUpsertWithWhereUniqueWithoutFieldInput | CellValueUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: CellValueCreateManyFieldInputEnvelope
    set?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
    disconnect?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
    delete?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
    connect?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
    update?: CellValueUpdateWithWhereUniqueWithoutFieldInput | CellValueUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: CellValueUpdateManyWithWhereWithoutFieldInput | CellValueUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: CellValueScalarWhereInput | CellValueScalarWhereInput[]
  }

  export type ViewFilterUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<ViewFilterCreateWithoutFieldInput, ViewFilterUncheckedCreateWithoutFieldInput> | ViewFilterCreateWithoutFieldInput[] | ViewFilterUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutFieldInput | ViewFilterCreateOrConnectWithoutFieldInput[]
    upsert?: ViewFilterUpsertWithWhereUniqueWithoutFieldInput | ViewFilterUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: ViewFilterCreateManyFieldInputEnvelope
    set?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    disconnect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    delete?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    update?: ViewFilterUpdateWithWhereUniqueWithoutFieldInput | ViewFilterUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: ViewFilterUpdateManyWithWhereWithoutFieldInput | ViewFilterUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: ViewFilterScalarWhereInput | ViewFilterScalarWhereInput[]
  }

  export type ViewSortUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<ViewSortCreateWithoutFieldInput, ViewSortUncheckedCreateWithoutFieldInput> | ViewSortCreateWithoutFieldInput[] | ViewSortUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: ViewSortCreateOrConnectWithoutFieldInput | ViewSortCreateOrConnectWithoutFieldInput[]
    upsert?: ViewSortUpsertWithWhereUniqueWithoutFieldInput | ViewSortUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: ViewSortCreateManyFieldInputEnvelope
    set?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    disconnect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    delete?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    connect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    update?: ViewSortUpdateWithWhereUniqueWithoutFieldInput | ViewSortUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: ViewSortUpdateManyWithWhereWithoutFieldInput | ViewSortUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: ViewSortScalarWhereInput | ViewSortScalarWhereInput[]
  }

  export type TableCreateNestedOneWithoutRecordsInput = {
    create?: XOR<TableCreateWithoutRecordsInput, TableUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: TableCreateOrConnectWithoutRecordsInput
    connect?: TableWhereUniqueInput
  }

  export type CellValueCreateNestedManyWithoutRecordInput = {
    create?: XOR<CellValueCreateWithoutRecordInput, CellValueUncheckedCreateWithoutRecordInput> | CellValueCreateWithoutRecordInput[] | CellValueUncheckedCreateWithoutRecordInput[]
    connectOrCreate?: CellValueCreateOrConnectWithoutRecordInput | CellValueCreateOrConnectWithoutRecordInput[]
    createMany?: CellValueCreateManyRecordInputEnvelope
    connect?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutRecordsCreatedInput = {
    create?: XOR<UserCreateWithoutRecordsCreatedInput, UserUncheckedCreateWithoutRecordsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type CellValueUncheckedCreateNestedManyWithoutRecordInput = {
    create?: XOR<CellValueCreateWithoutRecordInput, CellValueUncheckedCreateWithoutRecordInput> | CellValueCreateWithoutRecordInput[] | CellValueUncheckedCreateWithoutRecordInput[]
    connectOrCreate?: CellValueCreateOrConnectWithoutRecordInput | CellValueCreateOrConnectWithoutRecordInput[]
    createMany?: CellValueCreateManyRecordInputEnvelope
    connect?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TableUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<TableCreateWithoutRecordsInput, TableUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: TableCreateOrConnectWithoutRecordsInput
    upsert?: TableUpsertWithoutRecordsInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutRecordsInput, TableUpdateWithoutRecordsInput>, TableUncheckedUpdateWithoutRecordsInput>
  }

  export type CellValueUpdateManyWithoutRecordNestedInput = {
    create?: XOR<CellValueCreateWithoutRecordInput, CellValueUncheckedCreateWithoutRecordInput> | CellValueCreateWithoutRecordInput[] | CellValueUncheckedCreateWithoutRecordInput[]
    connectOrCreate?: CellValueCreateOrConnectWithoutRecordInput | CellValueCreateOrConnectWithoutRecordInput[]
    upsert?: CellValueUpsertWithWhereUniqueWithoutRecordInput | CellValueUpsertWithWhereUniqueWithoutRecordInput[]
    createMany?: CellValueCreateManyRecordInputEnvelope
    set?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
    disconnect?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
    delete?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
    connect?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
    update?: CellValueUpdateWithWhereUniqueWithoutRecordInput | CellValueUpdateWithWhereUniqueWithoutRecordInput[]
    updateMany?: CellValueUpdateManyWithWhereWithoutRecordInput | CellValueUpdateManyWithWhereWithoutRecordInput[]
    deleteMany?: CellValueScalarWhereInput | CellValueScalarWhereInput[]
  }

  export type UserUpdateOneWithoutRecordsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutRecordsCreatedInput, UserUncheckedCreateWithoutRecordsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsCreatedInput
    upsert?: UserUpsertWithoutRecordsCreatedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecordsCreatedInput, UserUpdateWithoutRecordsCreatedInput>, UserUncheckedUpdateWithoutRecordsCreatedInput>
  }

  export type CellValueUncheckedUpdateManyWithoutRecordNestedInput = {
    create?: XOR<CellValueCreateWithoutRecordInput, CellValueUncheckedCreateWithoutRecordInput> | CellValueCreateWithoutRecordInput[] | CellValueUncheckedCreateWithoutRecordInput[]
    connectOrCreate?: CellValueCreateOrConnectWithoutRecordInput | CellValueCreateOrConnectWithoutRecordInput[]
    upsert?: CellValueUpsertWithWhereUniqueWithoutRecordInput | CellValueUpsertWithWhereUniqueWithoutRecordInput[]
    createMany?: CellValueCreateManyRecordInputEnvelope
    set?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
    disconnect?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
    delete?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
    connect?: CellValueWhereUniqueInput | CellValueWhereUniqueInput[]
    update?: CellValueUpdateWithWhereUniqueWithoutRecordInput | CellValueUpdateWithWhereUniqueWithoutRecordInput[]
    updateMany?: CellValueUpdateManyWithWhereWithoutRecordInput | CellValueUpdateManyWithWhereWithoutRecordInput[]
    deleteMany?: CellValueScalarWhereInput | CellValueScalarWhereInput[]
  }

  export type RecordCreateNestedOneWithoutCellsInput = {
    create?: XOR<RecordCreateWithoutCellsInput, RecordUncheckedCreateWithoutCellsInput>
    connectOrCreate?: RecordCreateOrConnectWithoutCellsInput
    connect?: RecordWhereUniqueInput
  }

  export type FieldCreateNestedOneWithoutCellsInput = {
    create?: XOR<FieldCreateWithoutCellsInput, FieldUncheckedCreateWithoutCellsInput>
    connectOrCreate?: FieldCreateOrConnectWithoutCellsInput
    connect?: FieldWhereUniqueInput
  }

  export type RecordUpdateOneRequiredWithoutCellsNestedInput = {
    create?: XOR<RecordCreateWithoutCellsInput, RecordUncheckedCreateWithoutCellsInput>
    connectOrCreate?: RecordCreateOrConnectWithoutCellsInput
    upsert?: RecordUpsertWithoutCellsInput
    connect?: RecordWhereUniqueInput
    update?: XOR<XOR<RecordUpdateToOneWithWhereWithoutCellsInput, RecordUpdateWithoutCellsInput>, RecordUncheckedUpdateWithoutCellsInput>
  }

  export type FieldUpdateOneRequiredWithoutCellsNestedInput = {
    create?: XOR<FieldCreateWithoutCellsInput, FieldUncheckedCreateWithoutCellsInput>
    connectOrCreate?: FieldCreateOrConnectWithoutCellsInput
    upsert?: FieldUpsertWithoutCellsInput
    connect?: FieldWhereUniqueInput
    update?: XOR<XOR<FieldUpdateToOneWithWhereWithoutCellsInput, FieldUpdateWithoutCellsInput>, FieldUncheckedUpdateWithoutCellsInput>
  }

  export type TableCreateNestedOneWithoutViewsInput = {
    create?: XOR<TableCreateWithoutViewsInput, TableUncheckedCreateWithoutViewsInput>
    connectOrCreate?: TableCreateOrConnectWithoutViewsInput
    connect?: TableWhereUniqueInput
  }

  export type ViewFilterCreateNestedManyWithoutViewInput = {
    create?: XOR<ViewFilterCreateWithoutViewInput, ViewFilterUncheckedCreateWithoutViewInput> | ViewFilterCreateWithoutViewInput[] | ViewFilterUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutViewInput | ViewFilterCreateOrConnectWithoutViewInput[]
    createMany?: ViewFilterCreateManyViewInputEnvelope
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
  }

  export type ViewFilterGroupCreateNestedManyWithoutViewInput = {
    create?: XOR<ViewFilterGroupCreateWithoutViewInput, ViewFilterGroupUncheckedCreateWithoutViewInput> | ViewFilterGroupCreateWithoutViewInput[] | ViewFilterGroupUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewFilterGroupCreateOrConnectWithoutViewInput | ViewFilterGroupCreateOrConnectWithoutViewInput[]
    createMany?: ViewFilterGroupCreateManyViewInputEnvelope
    connect?: ViewFilterGroupWhereUniqueInput | ViewFilterGroupWhereUniqueInput[]
  }

  export type ViewSortCreateNestedManyWithoutViewInput = {
    create?: XOR<ViewSortCreateWithoutViewInput, ViewSortUncheckedCreateWithoutViewInput> | ViewSortCreateWithoutViewInput[] | ViewSortUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewSortCreateOrConnectWithoutViewInput | ViewSortCreateOrConnectWithoutViewInput[]
    createMany?: ViewSortCreateManyViewInputEnvelope
    connect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
  }

  export type ViewFilterUncheckedCreateNestedManyWithoutViewInput = {
    create?: XOR<ViewFilterCreateWithoutViewInput, ViewFilterUncheckedCreateWithoutViewInput> | ViewFilterCreateWithoutViewInput[] | ViewFilterUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutViewInput | ViewFilterCreateOrConnectWithoutViewInput[]
    createMany?: ViewFilterCreateManyViewInputEnvelope
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
  }

  export type ViewFilterGroupUncheckedCreateNestedManyWithoutViewInput = {
    create?: XOR<ViewFilterGroupCreateWithoutViewInput, ViewFilterGroupUncheckedCreateWithoutViewInput> | ViewFilterGroupCreateWithoutViewInput[] | ViewFilterGroupUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewFilterGroupCreateOrConnectWithoutViewInput | ViewFilterGroupCreateOrConnectWithoutViewInput[]
    createMany?: ViewFilterGroupCreateManyViewInputEnvelope
    connect?: ViewFilterGroupWhereUniqueInput | ViewFilterGroupWhereUniqueInput[]
  }

  export type ViewSortUncheckedCreateNestedManyWithoutViewInput = {
    create?: XOR<ViewSortCreateWithoutViewInput, ViewSortUncheckedCreateWithoutViewInput> | ViewSortCreateWithoutViewInput[] | ViewSortUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewSortCreateOrConnectWithoutViewInput | ViewSortCreateOrConnectWithoutViewInput[]
    createMany?: ViewSortCreateManyViewInputEnvelope
    connect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
  }

  export type TableUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<TableCreateWithoutViewsInput, TableUncheckedCreateWithoutViewsInput>
    connectOrCreate?: TableCreateOrConnectWithoutViewsInput
    upsert?: TableUpsertWithoutViewsInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutViewsInput, TableUpdateWithoutViewsInput>, TableUncheckedUpdateWithoutViewsInput>
  }

  export type ViewFilterUpdateManyWithoutViewNestedInput = {
    create?: XOR<ViewFilterCreateWithoutViewInput, ViewFilterUncheckedCreateWithoutViewInput> | ViewFilterCreateWithoutViewInput[] | ViewFilterUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutViewInput | ViewFilterCreateOrConnectWithoutViewInput[]
    upsert?: ViewFilterUpsertWithWhereUniqueWithoutViewInput | ViewFilterUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: ViewFilterCreateManyViewInputEnvelope
    set?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    disconnect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    delete?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    update?: ViewFilterUpdateWithWhereUniqueWithoutViewInput | ViewFilterUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: ViewFilterUpdateManyWithWhereWithoutViewInput | ViewFilterUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: ViewFilterScalarWhereInput | ViewFilterScalarWhereInput[]
  }

  export type ViewFilterGroupUpdateManyWithoutViewNestedInput = {
    create?: XOR<ViewFilterGroupCreateWithoutViewInput, ViewFilterGroupUncheckedCreateWithoutViewInput> | ViewFilterGroupCreateWithoutViewInput[] | ViewFilterGroupUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewFilterGroupCreateOrConnectWithoutViewInput | ViewFilterGroupCreateOrConnectWithoutViewInput[]
    upsert?: ViewFilterGroupUpsertWithWhereUniqueWithoutViewInput | ViewFilterGroupUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: ViewFilterGroupCreateManyViewInputEnvelope
    set?: ViewFilterGroupWhereUniqueInput | ViewFilterGroupWhereUniqueInput[]
    disconnect?: ViewFilterGroupWhereUniqueInput | ViewFilterGroupWhereUniqueInput[]
    delete?: ViewFilterGroupWhereUniqueInput | ViewFilterGroupWhereUniqueInput[]
    connect?: ViewFilterGroupWhereUniqueInput | ViewFilterGroupWhereUniqueInput[]
    update?: ViewFilterGroupUpdateWithWhereUniqueWithoutViewInput | ViewFilterGroupUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: ViewFilterGroupUpdateManyWithWhereWithoutViewInput | ViewFilterGroupUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: ViewFilterGroupScalarWhereInput | ViewFilterGroupScalarWhereInput[]
  }

  export type ViewSortUpdateManyWithoutViewNestedInput = {
    create?: XOR<ViewSortCreateWithoutViewInput, ViewSortUncheckedCreateWithoutViewInput> | ViewSortCreateWithoutViewInput[] | ViewSortUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewSortCreateOrConnectWithoutViewInput | ViewSortCreateOrConnectWithoutViewInput[]
    upsert?: ViewSortUpsertWithWhereUniqueWithoutViewInput | ViewSortUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: ViewSortCreateManyViewInputEnvelope
    set?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    disconnect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    delete?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    connect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    update?: ViewSortUpdateWithWhereUniqueWithoutViewInput | ViewSortUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: ViewSortUpdateManyWithWhereWithoutViewInput | ViewSortUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: ViewSortScalarWhereInput | ViewSortScalarWhereInput[]
  }

  export type ViewFilterUncheckedUpdateManyWithoutViewNestedInput = {
    create?: XOR<ViewFilterCreateWithoutViewInput, ViewFilterUncheckedCreateWithoutViewInput> | ViewFilterCreateWithoutViewInput[] | ViewFilterUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutViewInput | ViewFilterCreateOrConnectWithoutViewInput[]
    upsert?: ViewFilterUpsertWithWhereUniqueWithoutViewInput | ViewFilterUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: ViewFilterCreateManyViewInputEnvelope
    set?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    disconnect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    delete?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    update?: ViewFilterUpdateWithWhereUniqueWithoutViewInput | ViewFilterUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: ViewFilterUpdateManyWithWhereWithoutViewInput | ViewFilterUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: ViewFilterScalarWhereInput | ViewFilterScalarWhereInput[]
  }

  export type ViewFilterGroupUncheckedUpdateManyWithoutViewNestedInput = {
    create?: XOR<ViewFilterGroupCreateWithoutViewInput, ViewFilterGroupUncheckedCreateWithoutViewInput> | ViewFilterGroupCreateWithoutViewInput[] | ViewFilterGroupUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewFilterGroupCreateOrConnectWithoutViewInput | ViewFilterGroupCreateOrConnectWithoutViewInput[]
    upsert?: ViewFilterGroupUpsertWithWhereUniqueWithoutViewInput | ViewFilterGroupUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: ViewFilterGroupCreateManyViewInputEnvelope
    set?: ViewFilterGroupWhereUniqueInput | ViewFilterGroupWhereUniqueInput[]
    disconnect?: ViewFilterGroupWhereUniqueInput | ViewFilterGroupWhereUniqueInput[]
    delete?: ViewFilterGroupWhereUniqueInput | ViewFilterGroupWhereUniqueInput[]
    connect?: ViewFilterGroupWhereUniqueInput | ViewFilterGroupWhereUniqueInput[]
    update?: ViewFilterGroupUpdateWithWhereUniqueWithoutViewInput | ViewFilterGroupUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: ViewFilterGroupUpdateManyWithWhereWithoutViewInput | ViewFilterGroupUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: ViewFilterGroupScalarWhereInput | ViewFilterGroupScalarWhereInput[]
  }

  export type ViewSortUncheckedUpdateManyWithoutViewNestedInput = {
    create?: XOR<ViewSortCreateWithoutViewInput, ViewSortUncheckedCreateWithoutViewInput> | ViewSortCreateWithoutViewInput[] | ViewSortUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewSortCreateOrConnectWithoutViewInput | ViewSortCreateOrConnectWithoutViewInput[]
    upsert?: ViewSortUpsertWithWhereUniqueWithoutViewInput | ViewSortUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: ViewSortCreateManyViewInputEnvelope
    set?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    disconnect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    delete?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    connect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    update?: ViewSortUpdateWithWhereUniqueWithoutViewInput | ViewSortUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: ViewSortUpdateManyWithWhereWithoutViewInput | ViewSortUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: ViewSortScalarWhereInput | ViewSortScalarWhereInput[]
  }

  export type ViewCreateNestedOneWithoutFiltersInput = {
    create?: XOR<ViewCreateWithoutFiltersInput, ViewUncheckedCreateWithoutFiltersInput>
    connectOrCreate?: ViewCreateOrConnectWithoutFiltersInput
    connect?: ViewWhereUniqueInput
  }

  export type ViewFilterGroupCreateNestedOneWithoutFiltersInput = {
    create?: XOR<ViewFilterGroupCreateWithoutFiltersInput, ViewFilterGroupUncheckedCreateWithoutFiltersInput>
    connectOrCreate?: ViewFilterGroupCreateOrConnectWithoutFiltersInput
    connect?: ViewFilterGroupWhereUniqueInput
  }

  export type FieldCreateNestedOneWithoutViewFiltersInput = {
    create?: XOR<FieldCreateWithoutViewFiltersInput, FieldUncheckedCreateWithoutViewFiltersInput>
    connectOrCreate?: FieldCreateOrConnectWithoutViewFiltersInput
    connect?: FieldWhereUniqueInput
  }

  export type ViewUpdateOneRequiredWithoutFiltersNestedInput = {
    create?: XOR<ViewCreateWithoutFiltersInput, ViewUncheckedCreateWithoutFiltersInput>
    connectOrCreate?: ViewCreateOrConnectWithoutFiltersInput
    upsert?: ViewUpsertWithoutFiltersInput
    connect?: ViewWhereUniqueInput
    update?: XOR<XOR<ViewUpdateToOneWithWhereWithoutFiltersInput, ViewUpdateWithoutFiltersInput>, ViewUncheckedUpdateWithoutFiltersInput>
  }

  export type ViewFilterGroupUpdateOneWithoutFiltersNestedInput = {
    create?: XOR<ViewFilterGroupCreateWithoutFiltersInput, ViewFilterGroupUncheckedCreateWithoutFiltersInput>
    connectOrCreate?: ViewFilterGroupCreateOrConnectWithoutFiltersInput
    upsert?: ViewFilterGroupUpsertWithoutFiltersInput
    disconnect?: ViewFilterGroupWhereInput | boolean
    delete?: ViewFilterGroupWhereInput | boolean
    connect?: ViewFilterGroupWhereUniqueInput
    update?: XOR<XOR<ViewFilterGroupUpdateToOneWithWhereWithoutFiltersInput, ViewFilterGroupUpdateWithoutFiltersInput>, ViewFilterGroupUncheckedUpdateWithoutFiltersInput>
  }

  export type FieldUpdateOneWithoutViewFiltersNestedInput = {
    create?: XOR<FieldCreateWithoutViewFiltersInput, FieldUncheckedCreateWithoutViewFiltersInput>
    connectOrCreate?: FieldCreateOrConnectWithoutViewFiltersInput
    upsert?: FieldUpsertWithoutViewFiltersInput
    disconnect?: FieldWhereInput | boolean
    delete?: FieldWhereInput | boolean
    connect?: FieldWhereUniqueInput
    update?: XOR<XOR<FieldUpdateToOneWithWhereWithoutViewFiltersInput, FieldUpdateWithoutViewFiltersInput>, FieldUncheckedUpdateWithoutViewFiltersInput>
  }

  export type ViewCreateNestedOneWithoutFilterGroupsInput = {
    create?: XOR<ViewCreateWithoutFilterGroupsInput, ViewUncheckedCreateWithoutFilterGroupsInput>
    connectOrCreate?: ViewCreateOrConnectWithoutFilterGroupsInput
    connect?: ViewWhereUniqueInput
  }

  export type ViewFilterCreateNestedManyWithoutGroupInput = {
    create?: XOR<ViewFilterCreateWithoutGroupInput, ViewFilterUncheckedCreateWithoutGroupInput> | ViewFilterCreateWithoutGroupInput[] | ViewFilterUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutGroupInput | ViewFilterCreateOrConnectWithoutGroupInput[]
    createMany?: ViewFilterCreateManyGroupInputEnvelope
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
  }

  export type ViewFilterUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<ViewFilterCreateWithoutGroupInput, ViewFilterUncheckedCreateWithoutGroupInput> | ViewFilterCreateWithoutGroupInput[] | ViewFilterUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutGroupInput | ViewFilterCreateOrConnectWithoutGroupInput[]
    createMany?: ViewFilterCreateManyGroupInputEnvelope
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ViewUpdateOneRequiredWithoutFilterGroupsNestedInput = {
    create?: XOR<ViewCreateWithoutFilterGroupsInput, ViewUncheckedCreateWithoutFilterGroupsInput>
    connectOrCreate?: ViewCreateOrConnectWithoutFilterGroupsInput
    upsert?: ViewUpsertWithoutFilterGroupsInput
    connect?: ViewWhereUniqueInput
    update?: XOR<XOR<ViewUpdateToOneWithWhereWithoutFilterGroupsInput, ViewUpdateWithoutFilterGroupsInput>, ViewUncheckedUpdateWithoutFilterGroupsInput>
  }

  export type ViewFilterUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ViewFilterCreateWithoutGroupInput, ViewFilterUncheckedCreateWithoutGroupInput> | ViewFilterCreateWithoutGroupInput[] | ViewFilterUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutGroupInput | ViewFilterCreateOrConnectWithoutGroupInput[]
    upsert?: ViewFilterUpsertWithWhereUniqueWithoutGroupInput | ViewFilterUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ViewFilterCreateManyGroupInputEnvelope
    set?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    disconnect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    delete?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    update?: ViewFilterUpdateWithWhereUniqueWithoutGroupInput | ViewFilterUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ViewFilterUpdateManyWithWhereWithoutGroupInput | ViewFilterUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ViewFilterScalarWhereInput | ViewFilterScalarWhereInput[]
  }

  export type ViewFilterUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ViewFilterCreateWithoutGroupInput, ViewFilterUncheckedCreateWithoutGroupInput> | ViewFilterCreateWithoutGroupInput[] | ViewFilterUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutGroupInput | ViewFilterCreateOrConnectWithoutGroupInput[]
    upsert?: ViewFilterUpsertWithWhereUniqueWithoutGroupInput | ViewFilterUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ViewFilterCreateManyGroupInputEnvelope
    set?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    disconnect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    delete?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    update?: ViewFilterUpdateWithWhereUniqueWithoutGroupInput | ViewFilterUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ViewFilterUpdateManyWithWhereWithoutGroupInput | ViewFilterUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ViewFilterScalarWhereInput | ViewFilterScalarWhereInput[]
  }

  export type ViewCreateNestedOneWithoutSortsInput = {
    create?: XOR<ViewCreateWithoutSortsInput, ViewUncheckedCreateWithoutSortsInput>
    connectOrCreate?: ViewCreateOrConnectWithoutSortsInput
    connect?: ViewWhereUniqueInput
  }

  export type FieldCreateNestedOneWithoutViewSortsInput = {
    create?: XOR<FieldCreateWithoutViewSortsInput, FieldUncheckedCreateWithoutViewSortsInput>
    connectOrCreate?: FieldCreateOrConnectWithoutViewSortsInput
    connect?: FieldWhereUniqueInput
  }

  export type EnumSortDirectionFieldUpdateOperationsInput = {
    set?: $Enums.SortDirection
  }

  export type ViewUpdateOneRequiredWithoutSortsNestedInput = {
    create?: XOR<ViewCreateWithoutSortsInput, ViewUncheckedCreateWithoutSortsInput>
    connectOrCreate?: ViewCreateOrConnectWithoutSortsInput
    upsert?: ViewUpsertWithoutSortsInput
    connect?: ViewWhereUniqueInput
    update?: XOR<XOR<ViewUpdateToOneWithWhereWithoutSortsInput, ViewUpdateWithoutSortsInput>, ViewUncheckedUpdateWithoutSortsInput>
  }

  export type FieldUpdateOneRequiredWithoutViewSortsNestedInput = {
    create?: XOR<FieldCreateWithoutViewSortsInput, FieldUncheckedCreateWithoutViewSortsInput>
    connectOrCreate?: FieldCreateOrConnectWithoutViewSortsInput
    upsert?: FieldUpsertWithoutViewSortsInput
    connect?: FieldWhereUniqueInput
    update?: XOR<XOR<FieldUpdateToOneWithWhereWithoutViewSortsInput, FieldUpdateWithoutViewSortsInput>, FieldUncheckedUpdateWithoutViewSortsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeFilter<$PrismaModel> | $Enums.FieldType
  }

  export type NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.FieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumFieldTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSortDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.SortDirection | EnumSortDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.SortDirection[] | ListEnumSortDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SortDirection[] | ListEnumSortDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumSortDirectionFilter<$PrismaModel> | $Enums.SortDirection
  }

  export type NestedEnumSortDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SortDirection | EnumSortDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.SortDirection[] | ListEnumSortDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SortDirection[] | ListEnumSortDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumSortDirectionWithAggregatesFilter<$PrismaModel> | $Enums.SortDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSortDirectionFilter<$PrismaModel>
    _max?: NestedEnumSortDirectionFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    memberships?: BaseMemberCreateNestedManyWithoutUserInput
    recordsCreated?: RecordCreateNestedManyWithoutUserInput
    tables?: TableCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memberships?: BaseMemberUncheckedCreateNestedManyWithoutUserInput
    recordsCreated?: RecordUncheckedCreateNestedManyWithoutUserInput
    tables?: TableUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memberships?: BaseMemberUpdateManyWithoutUserNestedInput
    recordsCreated?: RecordUpdateManyWithoutUserNestedInput
    tables?: TableUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memberships?: BaseMemberUncheckedUpdateManyWithoutUserNestedInput
    recordsCreated?: RecordUncheckedUpdateManyWithoutUserNestedInput
    tables?: TableUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    memberships?: BaseMemberCreateNestedManyWithoutUserInput
    recordsCreated?: RecordCreateNestedManyWithoutUserInput
    tables?: TableCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    memberships?: BaseMemberUncheckedCreateNestedManyWithoutUserInput
    recordsCreated?: RecordUncheckedCreateNestedManyWithoutUserInput
    tables?: TableUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    memberships?: BaseMemberUpdateManyWithoutUserNestedInput
    recordsCreated?: RecordUpdateManyWithoutUserNestedInput
    tables?: TableUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    memberships?: BaseMemberUncheckedUpdateManyWithoutUserNestedInput
    recordsCreated?: RecordUncheckedUpdateManyWithoutUserNestedInput
    tables?: TableUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BaseMemberCreateWithoutUserInput = {
    base: BaseCreateNestedOneWithoutMembersInput
  }

  export type BaseMemberUncheckedCreateWithoutUserInput = {
    baseId: string
  }

  export type BaseMemberCreateOrConnectWithoutUserInput = {
    where: BaseMemberWhereUniqueInput
    create: XOR<BaseMemberCreateWithoutUserInput, BaseMemberUncheckedCreateWithoutUserInput>
  }

  export type BaseMemberCreateManyUserInputEnvelope = {
    data: BaseMemberCreateManyUserInput | BaseMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecordCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number | null
    sortValueText?: string | null
    sortValueNumber?: number | null
    table: TableCreateNestedOneWithoutRecordsInput
    cells?: CellValueCreateNestedManyWithoutRecordInput
  }

  export type RecordUncheckedCreateWithoutUserInput = {
    id?: string
    tableId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number | null
    sortValueText?: string | null
    sortValueNumber?: number | null
    cells?: CellValueUncheckedCreateNestedManyWithoutRecordInput
  }

  export type RecordCreateOrConnectWithoutUserInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput>
  }

  export type RecordCreateManyUserInputEnvelope = {
    data: RecordCreateManyUserInput | RecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TableCreateWithoutCreatorInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    base: BaseCreateNestedOneWithoutTablesInput
    fields?: FieldCreateNestedManyWithoutTableInput
    records?: RecordCreateNestedManyWithoutTableInput
    views?: ViewCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutCreatorInput = {
    id?: string
    baseId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: FieldUncheckedCreateNestedManyWithoutTableInput
    records?: RecordUncheckedCreateNestedManyWithoutTableInput
    views?: ViewUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutCreatorInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutCreatorInput, TableUncheckedCreateWithoutCreatorInput>
  }

  export type TableCreateManyCreatorInputEnvelope = {
    data: TableCreateManyCreatorInput | TableCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type BaseMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: BaseMemberWhereUniqueInput
    update: XOR<BaseMemberUpdateWithoutUserInput, BaseMemberUncheckedUpdateWithoutUserInput>
    create: XOR<BaseMemberCreateWithoutUserInput, BaseMemberUncheckedCreateWithoutUserInput>
  }

  export type BaseMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: BaseMemberWhereUniqueInput
    data: XOR<BaseMemberUpdateWithoutUserInput, BaseMemberUncheckedUpdateWithoutUserInput>
  }

  export type BaseMemberUpdateManyWithWhereWithoutUserInput = {
    where: BaseMemberScalarWhereInput
    data: XOR<BaseMemberUpdateManyMutationInput, BaseMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type BaseMemberScalarWhereInput = {
    AND?: BaseMemberScalarWhereInput | BaseMemberScalarWhereInput[]
    OR?: BaseMemberScalarWhereInput[]
    NOT?: BaseMemberScalarWhereInput | BaseMemberScalarWhereInput[]
    baseId?: StringFilter<"BaseMember"> | string
    userId?: StringFilter<"BaseMember"> | string
  }

  export type RecordUpsertWithWhereUniqueWithoutUserInput = {
    where: RecordWhereUniqueInput
    update: XOR<RecordUpdateWithoutUserInput, RecordUncheckedUpdateWithoutUserInput>
    create: XOR<RecordCreateWithoutUserInput, RecordUncheckedCreateWithoutUserInput>
  }

  export type RecordUpdateWithWhereUniqueWithoutUserInput = {
    where: RecordWhereUniqueInput
    data: XOR<RecordUpdateWithoutUserInput, RecordUncheckedUpdateWithoutUserInput>
  }

  export type RecordUpdateManyWithWhereWithoutUserInput = {
    where: RecordScalarWhereInput
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyWithoutUserInput>
  }

  export type RecordScalarWhereInput = {
    AND?: RecordScalarWhereInput | RecordScalarWhereInput[]
    OR?: RecordScalarWhereInput[]
    NOT?: RecordScalarWhereInput | RecordScalarWhereInput[]
    id?: StringFilter<"Record"> | string
    tableId?: StringFilter<"Record"> | string
    createdAt?: DateTimeFilter<"Record"> | Date | string
    updatedAt?: DateTimeFilter<"Record"> | Date | string
    position?: IntNullableFilter<"Record"> | number | null
    userId?: StringNullableFilter<"Record"> | string | null
    sortValueText?: StringNullableFilter<"Record"> | string | null
    sortValueNumber?: FloatNullableFilter<"Record"> | number | null
  }

  export type TableUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TableWhereUniqueInput
    update: XOR<TableUpdateWithoutCreatorInput, TableUncheckedUpdateWithoutCreatorInput>
    create: XOR<TableCreateWithoutCreatorInput, TableUncheckedCreateWithoutCreatorInput>
  }

  export type TableUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TableWhereUniqueInput
    data: XOR<TableUpdateWithoutCreatorInput, TableUncheckedUpdateWithoutCreatorInput>
  }

  export type TableUpdateManyWithWhereWithoutCreatorInput = {
    where: TableScalarWhereInput
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyWithoutCreatorInput>
  }

  export type TableScalarWhereInput = {
    AND?: TableScalarWhereInput | TableScalarWhereInput[]
    OR?: TableScalarWhereInput[]
    NOT?: TableScalarWhereInput | TableScalarWhereInput[]
    id?: StringFilter<"Table"> | string
    baseId?: StringFilter<"Table"> | string
    name?: StringFilter<"Table"> | string
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    createdById?: StringNullableFilter<"Table"> | string | null
  }

  export type TableCreateWithoutBaseInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creator?: UserCreateNestedOneWithoutTablesInput
    fields?: FieldCreateNestedManyWithoutTableInput
    records?: RecordCreateNestedManyWithoutTableInput
    views?: ViewCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutBaseInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    fields?: FieldUncheckedCreateNestedManyWithoutTableInput
    records?: RecordUncheckedCreateNestedManyWithoutTableInput
    views?: ViewUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutBaseInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput>
  }

  export type TableCreateManyBaseInputEnvelope = {
    data: TableCreateManyBaseInput | TableCreateManyBaseInput[]
    skipDuplicates?: boolean
  }

  export type BaseMemberCreateWithoutBaseInput = {
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type BaseMemberUncheckedCreateWithoutBaseInput = {
    userId: string
  }

  export type BaseMemberCreateOrConnectWithoutBaseInput = {
    where: BaseMemberWhereUniqueInput
    create: XOR<BaseMemberCreateWithoutBaseInput, BaseMemberUncheckedCreateWithoutBaseInput>
  }

  export type BaseMemberCreateManyBaseInputEnvelope = {
    data: BaseMemberCreateManyBaseInput | BaseMemberCreateManyBaseInput[]
    skipDuplicates?: boolean
  }

  export type TableUpsertWithWhereUniqueWithoutBaseInput = {
    where: TableWhereUniqueInput
    update: XOR<TableUpdateWithoutBaseInput, TableUncheckedUpdateWithoutBaseInput>
    create: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput>
  }

  export type TableUpdateWithWhereUniqueWithoutBaseInput = {
    where: TableWhereUniqueInput
    data: XOR<TableUpdateWithoutBaseInput, TableUncheckedUpdateWithoutBaseInput>
  }

  export type TableUpdateManyWithWhereWithoutBaseInput = {
    where: TableScalarWhereInput
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyWithoutBaseInput>
  }

  export type BaseMemberUpsertWithWhereUniqueWithoutBaseInput = {
    where: BaseMemberWhereUniqueInput
    update: XOR<BaseMemberUpdateWithoutBaseInput, BaseMemberUncheckedUpdateWithoutBaseInput>
    create: XOR<BaseMemberCreateWithoutBaseInput, BaseMemberUncheckedCreateWithoutBaseInput>
  }

  export type BaseMemberUpdateWithWhereUniqueWithoutBaseInput = {
    where: BaseMemberWhereUniqueInput
    data: XOR<BaseMemberUpdateWithoutBaseInput, BaseMemberUncheckedUpdateWithoutBaseInput>
  }

  export type BaseMemberUpdateManyWithWhereWithoutBaseInput = {
    where: BaseMemberScalarWhereInput
    data: XOR<BaseMemberUpdateManyMutationInput, BaseMemberUncheckedUpdateManyWithoutBaseInput>
  }

  export type BaseCreateWithoutMembersInput = {
    id?: string
    name: string
    ownerId?: string | null
    createdAt?: Date | string
    tables?: TableCreateNestedManyWithoutBaseInput
  }

  export type BaseUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    ownerId?: string | null
    createdAt?: Date | string
    tables?: TableUncheckedCreateNestedManyWithoutBaseInput
  }

  export type BaseCreateOrConnectWithoutMembersInput = {
    where: BaseWhereUniqueInput
    create: XOR<BaseCreateWithoutMembersInput, BaseUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    recordsCreated?: RecordCreateNestedManyWithoutUserInput
    tables?: TableCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    recordsCreated?: RecordUncheckedCreateNestedManyWithoutUserInput
    tables?: TableUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type BaseUpsertWithoutMembersInput = {
    update: XOR<BaseUpdateWithoutMembersInput, BaseUncheckedUpdateWithoutMembersInput>
    create: XOR<BaseCreateWithoutMembersInput, BaseUncheckedCreateWithoutMembersInput>
    where?: BaseWhereInput
  }

  export type BaseUpdateToOneWithWhereWithoutMembersInput = {
    where?: BaseWhereInput
    data: XOR<BaseUpdateWithoutMembersInput, BaseUncheckedUpdateWithoutMembersInput>
  }

  export type BaseUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: TableUpdateManyWithoutBaseNestedInput
  }

  export type BaseUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: TableUncheckedUpdateManyWithoutBaseNestedInput
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    recordsCreated?: RecordUpdateManyWithoutUserNestedInput
    tables?: TableUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    recordsCreated?: RecordUncheckedUpdateManyWithoutUserNestedInput
    tables?: TableUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type BaseCreateWithoutTablesInput = {
    id?: string
    name: string
    ownerId?: string | null
    createdAt?: Date | string
    members?: BaseMemberCreateNestedManyWithoutBaseInput
  }

  export type BaseUncheckedCreateWithoutTablesInput = {
    id?: string
    name: string
    ownerId?: string | null
    createdAt?: Date | string
    members?: BaseMemberUncheckedCreateNestedManyWithoutBaseInput
  }

  export type BaseCreateOrConnectWithoutTablesInput = {
    where: BaseWhereUniqueInput
    create: XOR<BaseCreateWithoutTablesInput, BaseUncheckedCreateWithoutTablesInput>
  }

  export type UserCreateWithoutTablesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    memberships?: BaseMemberCreateNestedManyWithoutUserInput
    recordsCreated?: RecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTablesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memberships?: BaseMemberUncheckedCreateNestedManyWithoutUserInput
    recordsCreated?: RecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTablesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTablesInput, UserUncheckedCreateWithoutTablesInput>
  }

  export type FieldCreateWithoutTableInput = {
    id?: string
    name: string
    type: $Enums.FieldType
    position?: number | null
    cells?: CellValueCreateNestedManyWithoutFieldInput
    viewFilters?: ViewFilterCreateNestedManyWithoutFieldInput
    viewSorts?: ViewSortCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateWithoutTableInput = {
    id?: string
    name: string
    type: $Enums.FieldType
    position?: number | null
    cells?: CellValueUncheckedCreateNestedManyWithoutFieldInput
    viewFilters?: ViewFilterUncheckedCreateNestedManyWithoutFieldInput
    viewSorts?: ViewSortUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCreateOrConnectWithoutTableInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput>
  }

  export type FieldCreateManyTableInputEnvelope = {
    data: FieldCreateManyTableInput | FieldCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type RecordCreateWithoutTableInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number | null
    sortValueText?: string | null
    sortValueNumber?: number | null
    cells?: CellValueCreateNestedManyWithoutRecordInput
    user?: UserCreateNestedOneWithoutRecordsCreatedInput
  }

  export type RecordUncheckedCreateWithoutTableInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number | null
    userId?: string | null
    sortValueText?: string | null
    sortValueNumber?: number | null
    cells?: CellValueUncheckedCreateNestedManyWithoutRecordInput
  }

  export type RecordCreateOrConnectWithoutTableInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutTableInput, RecordUncheckedCreateWithoutTableInput>
  }

  export type RecordCreateManyTableInputEnvelope = {
    data: RecordCreateManyTableInput | RecordCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type ViewCreateWithoutTableInput = {
    id?: string
    name: string
    position?: number | null
    createdAt?: Date | string
    filterConjunction?: string
    filters?: ViewFilterCreateNestedManyWithoutViewInput
    filterGroups?: ViewFilterGroupCreateNestedManyWithoutViewInput
    sorts?: ViewSortCreateNestedManyWithoutViewInput
  }

  export type ViewUncheckedCreateWithoutTableInput = {
    id?: string
    name: string
    position?: number | null
    createdAt?: Date | string
    filterConjunction?: string
    filters?: ViewFilterUncheckedCreateNestedManyWithoutViewInput
    filterGroups?: ViewFilterGroupUncheckedCreateNestedManyWithoutViewInput
    sorts?: ViewSortUncheckedCreateNestedManyWithoutViewInput
  }

  export type ViewCreateOrConnectWithoutTableInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput>
  }

  export type ViewCreateManyTableInputEnvelope = {
    data: ViewCreateManyTableInput | ViewCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type BaseUpsertWithoutTablesInput = {
    update: XOR<BaseUpdateWithoutTablesInput, BaseUncheckedUpdateWithoutTablesInput>
    create: XOR<BaseCreateWithoutTablesInput, BaseUncheckedCreateWithoutTablesInput>
    where?: BaseWhereInput
  }

  export type BaseUpdateToOneWithWhereWithoutTablesInput = {
    where?: BaseWhereInput
    data: XOR<BaseUpdateWithoutTablesInput, BaseUncheckedUpdateWithoutTablesInput>
  }

  export type BaseUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: BaseMemberUpdateManyWithoutBaseNestedInput
  }

  export type BaseUncheckedUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: BaseMemberUncheckedUpdateManyWithoutBaseNestedInput
  }

  export type UserUpsertWithoutTablesInput = {
    update: XOR<UserUpdateWithoutTablesInput, UserUncheckedUpdateWithoutTablesInput>
    create: XOR<UserCreateWithoutTablesInput, UserUncheckedCreateWithoutTablesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTablesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTablesInput, UserUncheckedUpdateWithoutTablesInput>
  }

  export type UserUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memberships?: BaseMemberUpdateManyWithoutUserNestedInput
    recordsCreated?: RecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memberships?: BaseMemberUncheckedUpdateManyWithoutUserNestedInput
    recordsCreated?: RecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FieldUpsertWithWhereUniqueWithoutTableInput = {
    where: FieldWhereUniqueInput
    update: XOR<FieldUpdateWithoutTableInput, FieldUncheckedUpdateWithoutTableInput>
    create: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput>
  }

  export type FieldUpdateWithWhereUniqueWithoutTableInput = {
    where: FieldWhereUniqueInput
    data: XOR<FieldUpdateWithoutTableInput, FieldUncheckedUpdateWithoutTableInput>
  }

  export type FieldUpdateManyWithWhereWithoutTableInput = {
    where: FieldScalarWhereInput
    data: XOR<FieldUpdateManyMutationInput, FieldUncheckedUpdateManyWithoutTableInput>
  }

  export type FieldScalarWhereInput = {
    AND?: FieldScalarWhereInput | FieldScalarWhereInput[]
    OR?: FieldScalarWhereInput[]
    NOT?: FieldScalarWhereInput | FieldScalarWhereInput[]
    id?: StringFilter<"Field"> | string
    tableId?: StringFilter<"Field"> | string
    name?: StringFilter<"Field"> | string
    type?: EnumFieldTypeFilter<"Field"> | $Enums.FieldType
    position?: IntNullableFilter<"Field"> | number | null
  }

  export type RecordUpsertWithWhereUniqueWithoutTableInput = {
    where: RecordWhereUniqueInput
    update: XOR<RecordUpdateWithoutTableInput, RecordUncheckedUpdateWithoutTableInput>
    create: XOR<RecordCreateWithoutTableInput, RecordUncheckedCreateWithoutTableInput>
  }

  export type RecordUpdateWithWhereUniqueWithoutTableInput = {
    where: RecordWhereUniqueInput
    data: XOR<RecordUpdateWithoutTableInput, RecordUncheckedUpdateWithoutTableInput>
  }

  export type RecordUpdateManyWithWhereWithoutTableInput = {
    where: RecordScalarWhereInput
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyWithoutTableInput>
  }

  export type ViewUpsertWithWhereUniqueWithoutTableInput = {
    where: ViewWhereUniqueInput
    update: XOR<ViewUpdateWithoutTableInput, ViewUncheckedUpdateWithoutTableInput>
    create: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput>
  }

  export type ViewUpdateWithWhereUniqueWithoutTableInput = {
    where: ViewWhereUniqueInput
    data: XOR<ViewUpdateWithoutTableInput, ViewUncheckedUpdateWithoutTableInput>
  }

  export type ViewUpdateManyWithWhereWithoutTableInput = {
    where: ViewScalarWhereInput
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyWithoutTableInput>
  }

  export type ViewScalarWhereInput = {
    AND?: ViewScalarWhereInput | ViewScalarWhereInput[]
    OR?: ViewScalarWhereInput[]
    NOT?: ViewScalarWhereInput | ViewScalarWhereInput[]
    id?: StringFilter<"View"> | string
    tableId?: StringFilter<"View"> | string
    name?: StringFilter<"View"> | string
    position?: IntNullableFilter<"View"> | number | null
    createdAt?: DateTimeFilter<"View"> | Date | string
    filterConjunction?: StringFilter<"View"> | string
  }

  export type TableCreateWithoutFieldsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    base: BaseCreateNestedOneWithoutTablesInput
    creator?: UserCreateNestedOneWithoutTablesInput
    records?: RecordCreateNestedManyWithoutTableInput
    views?: ViewCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutFieldsInput = {
    id?: string
    baseId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    records?: RecordUncheckedCreateNestedManyWithoutTableInput
    views?: ViewUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutFieldsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutFieldsInput, TableUncheckedCreateWithoutFieldsInput>
  }

  export type CellValueCreateWithoutFieldInput = {
    valueText?: string | null
    valueNumber?: number | null
    record: RecordCreateNestedOneWithoutCellsInput
  }

  export type CellValueUncheckedCreateWithoutFieldInput = {
    recordId: string
    valueText?: string | null
    valueNumber?: number | null
  }

  export type CellValueCreateOrConnectWithoutFieldInput = {
    where: CellValueWhereUniqueInput
    create: XOR<CellValueCreateWithoutFieldInput, CellValueUncheckedCreateWithoutFieldInput>
  }

  export type CellValueCreateManyFieldInputEnvelope = {
    data: CellValueCreateManyFieldInput | CellValueCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type ViewFilterCreateWithoutFieldInput = {
    id?: string
    operator?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: number | null
    view: ViewCreateNestedOneWithoutFiltersInput
    group?: ViewFilterGroupCreateNestedOneWithoutFiltersInput
  }

  export type ViewFilterUncheckedCreateWithoutFieldInput = {
    id?: string
    viewId: string
    groupId?: string | null
    operator?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: number | null
  }

  export type ViewFilterCreateOrConnectWithoutFieldInput = {
    where: ViewFilterWhereUniqueInput
    create: XOR<ViewFilterCreateWithoutFieldInput, ViewFilterUncheckedCreateWithoutFieldInput>
  }

  export type ViewFilterCreateManyFieldInputEnvelope = {
    data: ViewFilterCreateManyFieldInput | ViewFilterCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type ViewSortCreateWithoutFieldInput = {
    id?: string
    direction: $Enums.SortDirection
    order?: number | null
    view: ViewCreateNestedOneWithoutSortsInput
  }

  export type ViewSortUncheckedCreateWithoutFieldInput = {
    id?: string
    viewId: string
    direction: $Enums.SortDirection
    order?: number | null
  }

  export type ViewSortCreateOrConnectWithoutFieldInput = {
    where: ViewSortWhereUniqueInput
    create: XOR<ViewSortCreateWithoutFieldInput, ViewSortUncheckedCreateWithoutFieldInput>
  }

  export type ViewSortCreateManyFieldInputEnvelope = {
    data: ViewSortCreateManyFieldInput | ViewSortCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type TableUpsertWithoutFieldsInput = {
    update: XOR<TableUpdateWithoutFieldsInput, TableUncheckedUpdateWithoutFieldsInput>
    create: XOR<TableCreateWithoutFieldsInput, TableUncheckedCreateWithoutFieldsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutFieldsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutFieldsInput, TableUncheckedUpdateWithoutFieldsInput>
  }

  export type TableUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BaseUpdateOneRequiredWithoutTablesNestedInput
    creator?: UserUpdateOneWithoutTablesNestedInput
    records?: RecordUpdateManyWithoutTableNestedInput
    views?: ViewUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    records?: RecordUncheckedUpdateManyWithoutTableNestedInput
    views?: ViewUncheckedUpdateManyWithoutTableNestedInput
  }

  export type CellValueUpsertWithWhereUniqueWithoutFieldInput = {
    where: CellValueWhereUniqueInput
    update: XOR<CellValueUpdateWithoutFieldInput, CellValueUncheckedUpdateWithoutFieldInput>
    create: XOR<CellValueCreateWithoutFieldInput, CellValueUncheckedCreateWithoutFieldInput>
  }

  export type CellValueUpdateWithWhereUniqueWithoutFieldInput = {
    where: CellValueWhereUniqueInput
    data: XOR<CellValueUpdateWithoutFieldInput, CellValueUncheckedUpdateWithoutFieldInput>
  }

  export type CellValueUpdateManyWithWhereWithoutFieldInput = {
    where: CellValueScalarWhereInput
    data: XOR<CellValueUpdateManyMutationInput, CellValueUncheckedUpdateManyWithoutFieldInput>
  }

  export type CellValueScalarWhereInput = {
    AND?: CellValueScalarWhereInput | CellValueScalarWhereInput[]
    OR?: CellValueScalarWhereInput[]
    NOT?: CellValueScalarWhereInput | CellValueScalarWhereInput[]
    recordId?: StringFilter<"CellValue"> | string
    fieldId?: StringFilter<"CellValue"> | string
    valueText?: StringNullableFilter<"CellValue"> | string | null
    valueNumber?: FloatNullableFilter<"CellValue"> | number | null
  }

  export type ViewFilterUpsertWithWhereUniqueWithoutFieldInput = {
    where: ViewFilterWhereUniqueInput
    update: XOR<ViewFilterUpdateWithoutFieldInput, ViewFilterUncheckedUpdateWithoutFieldInput>
    create: XOR<ViewFilterCreateWithoutFieldInput, ViewFilterUncheckedCreateWithoutFieldInput>
  }

  export type ViewFilterUpdateWithWhereUniqueWithoutFieldInput = {
    where: ViewFilterWhereUniqueInput
    data: XOR<ViewFilterUpdateWithoutFieldInput, ViewFilterUncheckedUpdateWithoutFieldInput>
  }

  export type ViewFilterUpdateManyWithWhereWithoutFieldInput = {
    where: ViewFilterScalarWhereInput
    data: XOR<ViewFilterUpdateManyMutationInput, ViewFilterUncheckedUpdateManyWithoutFieldInput>
  }

  export type ViewFilterScalarWhereInput = {
    AND?: ViewFilterScalarWhereInput | ViewFilterScalarWhereInput[]
    OR?: ViewFilterScalarWhereInput[]
    NOT?: ViewFilterScalarWhereInput | ViewFilterScalarWhereInput[]
    id?: StringFilter<"ViewFilter"> | string
    viewId?: StringFilter<"ViewFilter"> | string
    groupId?: StringNullableFilter<"ViewFilter"> | string | null
    fieldId?: StringNullableFilter<"ViewFilter"> | string | null
    operator?: StringFilter<"ViewFilter"> | string
    value?: JsonNullableFilter<"ViewFilter">
    position?: IntNullableFilter<"ViewFilter"> | number | null
  }

  export type ViewSortUpsertWithWhereUniqueWithoutFieldInput = {
    where: ViewSortWhereUniqueInput
    update: XOR<ViewSortUpdateWithoutFieldInput, ViewSortUncheckedUpdateWithoutFieldInput>
    create: XOR<ViewSortCreateWithoutFieldInput, ViewSortUncheckedCreateWithoutFieldInput>
  }

  export type ViewSortUpdateWithWhereUniqueWithoutFieldInput = {
    where: ViewSortWhereUniqueInput
    data: XOR<ViewSortUpdateWithoutFieldInput, ViewSortUncheckedUpdateWithoutFieldInput>
  }

  export type ViewSortUpdateManyWithWhereWithoutFieldInput = {
    where: ViewSortScalarWhereInput
    data: XOR<ViewSortUpdateManyMutationInput, ViewSortUncheckedUpdateManyWithoutFieldInput>
  }

  export type ViewSortScalarWhereInput = {
    AND?: ViewSortScalarWhereInput | ViewSortScalarWhereInput[]
    OR?: ViewSortScalarWhereInput[]
    NOT?: ViewSortScalarWhereInput | ViewSortScalarWhereInput[]
    id?: StringFilter<"ViewSort"> | string
    viewId?: StringFilter<"ViewSort"> | string
    fieldId?: StringFilter<"ViewSort"> | string
    direction?: EnumSortDirectionFilter<"ViewSort"> | $Enums.SortDirection
    order?: IntNullableFilter<"ViewSort"> | number | null
  }

  export type TableCreateWithoutRecordsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    base: BaseCreateNestedOneWithoutTablesInput
    creator?: UserCreateNestedOneWithoutTablesInput
    fields?: FieldCreateNestedManyWithoutTableInput
    views?: ViewCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutRecordsInput = {
    id?: string
    baseId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    fields?: FieldUncheckedCreateNestedManyWithoutTableInput
    views?: ViewUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutRecordsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutRecordsInput, TableUncheckedCreateWithoutRecordsInput>
  }

  export type CellValueCreateWithoutRecordInput = {
    valueText?: string | null
    valueNumber?: number | null
    field: FieldCreateNestedOneWithoutCellsInput
  }

  export type CellValueUncheckedCreateWithoutRecordInput = {
    fieldId: string
    valueText?: string | null
    valueNumber?: number | null
  }

  export type CellValueCreateOrConnectWithoutRecordInput = {
    where: CellValueWhereUniqueInput
    create: XOR<CellValueCreateWithoutRecordInput, CellValueUncheckedCreateWithoutRecordInput>
  }

  export type CellValueCreateManyRecordInputEnvelope = {
    data: CellValueCreateManyRecordInput | CellValueCreateManyRecordInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutRecordsCreatedInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    memberships?: BaseMemberCreateNestedManyWithoutUserInput
    tables?: TableCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutRecordsCreatedInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memberships?: BaseMemberUncheckedCreateNestedManyWithoutUserInput
    tables?: TableUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutRecordsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecordsCreatedInput, UserUncheckedCreateWithoutRecordsCreatedInput>
  }

  export type TableUpsertWithoutRecordsInput = {
    update: XOR<TableUpdateWithoutRecordsInput, TableUncheckedUpdateWithoutRecordsInput>
    create: XOR<TableCreateWithoutRecordsInput, TableUncheckedCreateWithoutRecordsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutRecordsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutRecordsInput, TableUncheckedUpdateWithoutRecordsInput>
  }

  export type TableUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BaseUpdateOneRequiredWithoutTablesNestedInput
    creator?: UserUpdateOneWithoutTablesNestedInput
    fields?: FieldUpdateManyWithoutTableNestedInput
    views?: ViewUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: FieldUncheckedUpdateManyWithoutTableNestedInput
    views?: ViewUncheckedUpdateManyWithoutTableNestedInput
  }

  export type CellValueUpsertWithWhereUniqueWithoutRecordInput = {
    where: CellValueWhereUniqueInput
    update: XOR<CellValueUpdateWithoutRecordInput, CellValueUncheckedUpdateWithoutRecordInput>
    create: XOR<CellValueCreateWithoutRecordInput, CellValueUncheckedCreateWithoutRecordInput>
  }

  export type CellValueUpdateWithWhereUniqueWithoutRecordInput = {
    where: CellValueWhereUniqueInput
    data: XOR<CellValueUpdateWithoutRecordInput, CellValueUncheckedUpdateWithoutRecordInput>
  }

  export type CellValueUpdateManyWithWhereWithoutRecordInput = {
    where: CellValueScalarWhereInput
    data: XOR<CellValueUpdateManyMutationInput, CellValueUncheckedUpdateManyWithoutRecordInput>
  }

  export type UserUpsertWithoutRecordsCreatedInput = {
    update: XOR<UserUpdateWithoutRecordsCreatedInput, UserUncheckedUpdateWithoutRecordsCreatedInput>
    create: XOR<UserCreateWithoutRecordsCreatedInput, UserUncheckedCreateWithoutRecordsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecordsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecordsCreatedInput, UserUncheckedUpdateWithoutRecordsCreatedInput>
  }

  export type UserUpdateWithoutRecordsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memberships?: BaseMemberUpdateManyWithoutUserNestedInput
    tables?: TableUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutRecordsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memberships?: BaseMemberUncheckedUpdateManyWithoutUserNestedInput
    tables?: TableUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type RecordCreateWithoutCellsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number | null
    sortValueText?: string | null
    sortValueNumber?: number | null
    table: TableCreateNestedOneWithoutRecordsInput
    user?: UserCreateNestedOneWithoutRecordsCreatedInput
  }

  export type RecordUncheckedCreateWithoutCellsInput = {
    id?: string
    tableId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number | null
    userId?: string | null
    sortValueText?: string | null
    sortValueNumber?: number | null
  }

  export type RecordCreateOrConnectWithoutCellsInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutCellsInput, RecordUncheckedCreateWithoutCellsInput>
  }

  export type FieldCreateWithoutCellsInput = {
    id?: string
    name: string
    type: $Enums.FieldType
    position?: number | null
    table: TableCreateNestedOneWithoutFieldsInput
    viewFilters?: ViewFilterCreateNestedManyWithoutFieldInput
    viewSorts?: ViewSortCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateWithoutCellsInput = {
    id?: string
    tableId: string
    name: string
    type: $Enums.FieldType
    position?: number | null
    viewFilters?: ViewFilterUncheckedCreateNestedManyWithoutFieldInput
    viewSorts?: ViewSortUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCreateOrConnectWithoutCellsInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutCellsInput, FieldUncheckedCreateWithoutCellsInput>
  }

  export type RecordUpsertWithoutCellsInput = {
    update: XOR<RecordUpdateWithoutCellsInput, RecordUncheckedUpdateWithoutCellsInput>
    create: XOR<RecordCreateWithoutCellsInput, RecordUncheckedCreateWithoutCellsInput>
    where?: RecordWhereInput
  }

  export type RecordUpdateToOneWithWhereWithoutCellsInput = {
    where?: RecordWhereInput
    data: XOR<RecordUpdateWithoutCellsInput, RecordUncheckedUpdateWithoutCellsInput>
  }

  export type RecordUpdateWithoutCellsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sortValueText?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    table?: TableUpdateOneRequiredWithoutRecordsNestedInput
    user?: UserUpdateOneWithoutRecordsCreatedNestedInput
  }

  export type RecordUncheckedUpdateWithoutCellsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueText?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FieldUpsertWithoutCellsInput = {
    update: XOR<FieldUpdateWithoutCellsInput, FieldUncheckedUpdateWithoutCellsInput>
    create: XOR<FieldCreateWithoutCellsInput, FieldUncheckedCreateWithoutCellsInput>
    where?: FieldWhereInput
  }

  export type FieldUpdateToOneWithWhereWithoutCellsInput = {
    where?: FieldWhereInput
    data: XOR<FieldUpdateWithoutCellsInput, FieldUncheckedUpdateWithoutCellsInput>
  }

  export type FieldUpdateWithoutCellsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    position?: NullableIntFieldUpdateOperationsInput | number | null
    table?: TableUpdateOneRequiredWithoutFieldsNestedInput
    viewFilters?: ViewFilterUpdateManyWithoutFieldNestedInput
    viewSorts?: ViewSortUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateWithoutCellsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    position?: NullableIntFieldUpdateOperationsInput | number | null
    viewFilters?: ViewFilterUncheckedUpdateManyWithoutFieldNestedInput
    viewSorts?: ViewSortUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type TableCreateWithoutViewsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    base: BaseCreateNestedOneWithoutTablesInput
    creator?: UserCreateNestedOneWithoutTablesInput
    fields?: FieldCreateNestedManyWithoutTableInput
    records?: RecordCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutViewsInput = {
    id?: string
    baseId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    fields?: FieldUncheckedCreateNestedManyWithoutTableInput
    records?: RecordUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutViewsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutViewsInput, TableUncheckedCreateWithoutViewsInput>
  }

  export type ViewFilterCreateWithoutViewInput = {
    id?: string
    operator?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: number | null
    group?: ViewFilterGroupCreateNestedOneWithoutFiltersInput
    field?: FieldCreateNestedOneWithoutViewFiltersInput
  }

  export type ViewFilterUncheckedCreateWithoutViewInput = {
    id?: string
    groupId?: string | null
    fieldId?: string | null
    operator?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: number | null
  }

  export type ViewFilterCreateOrConnectWithoutViewInput = {
    where: ViewFilterWhereUniqueInput
    create: XOR<ViewFilterCreateWithoutViewInput, ViewFilterUncheckedCreateWithoutViewInput>
  }

  export type ViewFilterCreateManyViewInputEnvelope = {
    data: ViewFilterCreateManyViewInput | ViewFilterCreateManyViewInput[]
    skipDuplicates?: boolean
  }

  export type ViewFilterGroupCreateWithoutViewInput = {
    id?: string
    conjunction?: string
    connector?: string
    position?: number
    filters?: ViewFilterCreateNestedManyWithoutGroupInput
  }

  export type ViewFilterGroupUncheckedCreateWithoutViewInput = {
    id?: string
    conjunction?: string
    connector?: string
    position?: number
    filters?: ViewFilterUncheckedCreateNestedManyWithoutGroupInput
  }

  export type ViewFilterGroupCreateOrConnectWithoutViewInput = {
    where: ViewFilterGroupWhereUniqueInput
    create: XOR<ViewFilterGroupCreateWithoutViewInput, ViewFilterGroupUncheckedCreateWithoutViewInput>
  }

  export type ViewFilterGroupCreateManyViewInputEnvelope = {
    data: ViewFilterGroupCreateManyViewInput | ViewFilterGroupCreateManyViewInput[]
    skipDuplicates?: boolean
  }

  export type ViewSortCreateWithoutViewInput = {
    id?: string
    direction: $Enums.SortDirection
    order?: number | null
    field: FieldCreateNestedOneWithoutViewSortsInput
  }

  export type ViewSortUncheckedCreateWithoutViewInput = {
    id?: string
    fieldId: string
    direction: $Enums.SortDirection
    order?: number | null
  }

  export type ViewSortCreateOrConnectWithoutViewInput = {
    where: ViewSortWhereUniqueInput
    create: XOR<ViewSortCreateWithoutViewInput, ViewSortUncheckedCreateWithoutViewInput>
  }

  export type ViewSortCreateManyViewInputEnvelope = {
    data: ViewSortCreateManyViewInput | ViewSortCreateManyViewInput[]
    skipDuplicates?: boolean
  }

  export type TableUpsertWithoutViewsInput = {
    update: XOR<TableUpdateWithoutViewsInput, TableUncheckedUpdateWithoutViewsInput>
    create: XOR<TableCreateWithoutViewsInput, TableUncheckedCreateWithoutViewsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutViewsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutViewsInput, TableUncheckedUpdateWithoutViewsInput>
  }

  export type TableUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BaseUpdateOneRequiredWithoutTablesNestedInput
    creator?: UserUpdateOneWithoutTablesNestedInput
    fields?: FieldUpdateManyWithoutTableNestedInput
    records?: RecordUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: FieldUncheckedUpdateManyWithoutTableNestedInput
    records?: RecordUncheckedUpdateManyWithoutTableNestedInput
  }

  export type ViewFilterUpsertWithWhereUniqueWithoutViewInput = {
    where: ViewFilterWhereUniqueInput
    update: XOR<ViewFilterUpdateWithoutViewInput, ViewFilterUncheckedUpdateWithoutViewInput>
    create: XOR<ViewFilterCreateWithoutViewInput, ViewFilterUncheckedCreateWithoutViewInput>
  }

  export type ViewFilterUpdateWithWhereUniqueWithoutViewInput = {
    where: ViewFilterWhereUniqueInput
    data: XOR<ViewFilterUpdateWithoutViewInput, ViewFilterUncheckedUpdateWithoutViewInput>
  }

  export type ViewFilterUpdateManyWithWhereWithoutViewInput = {
    where: ViewFilterScalarWhereInput
    data: XOR<ViewFilterUpdateManyMutationInput, ViewFilterUncheckedUpdateManyWithoutViewInput>
  }

  export type ViewFilterGroupUpsertWithWhereUniqueWithoutViewInput = {
    where: ViewFilterGroupWhereUniqueInput
    update: XOR<ViewFilterGroupUpdateWithoutViewInput, ViewFilterGroupUncheckedUpdateWithoutViewInput>
    create: XOR<ViewFilterGroupCreateWithoutViewInput, ViewFilterGroupUncheckedCreateWithoutViewInput>
  }

  export type ViewFilterGroupUpdateWithWhereUniqueWithoutViewInput = {
    where: ViewFilterGroupWhereUniqueInput
    data: XOR<ViewFilterGroupUpdateWithoutViewInput, ViewFilterGroupUncheckedUpdateWithoutViewInput>
  }

  export type ViewFilterGroupUpdateManyWithWhereWithoutViewInput = {
    where: ViewFilterGroupScalarWhereInput
    data: XOR<ViewFilterGroupUpdateManyMutationInput, ViewFilterGroupUncheckedUpdateManyWithoutViewInput>
  }

  export type ViewFilterGroupScalarWhereInput = {
    AND?: ViewFilterGroupScalarWhereInput | ViewFilterGroupScalarWhereInput[]
    OR?: ViewFilterGroupScalarWhereInput[]
    NOT?: ViewFilterGroupScalarWhereInput | ViewFilterGroupScalarWhereInput[]
    id?: StringFilter<"ViewFilterGroup"> | string
    viewId?: StringFilter<"ViewFilterGroup"> | string
    conjunction?: StringFilter<"ViewFilterGroup"> | string
    connector?: StringFilter<"ViewFilterGroup"> | string
    position?: IntFilter<"ViewFilterGroup"> | number
  }

  export type ViewSortUpsertWithWhereUniqueWithoutViewInput = {
    where: ViewSortWhereUniqueInput
    update: XOR<ViewSortUpdateWithoutViewInput, ViewSortUncheckedUpdateWithoutViewInput>
    create: XOR<ViewSortCreateWithoutViewInput, ViewSortUncheckedCreateWithoutViewInput>
  }

  export type ViewSortUpdateWithWhereUniqueWithoutViewInput = {
    where: ViewSortWhereUniqueInput
    data: XOR<ViewSortUpdateWithoutViewInput, ViewSortUncheckedUpdateWithoutViewInput>
  }

  export type ViewSortUpdateManyWithWhereWithoutViewInput = {
    where: ViewSortScalarWhereInput
    data: XOR<ViewSortUpdateManyMutationInput, ViewSortUncheckedUpdateManyWithoutViewInput>
  }

  export type ViewCreateWithoutFiltersInput = {
    id?: string
    name: string
    position?: number | null
    createdAt?: Date | string
    filterConjunction?: string
    table: TableCreateNestedOneWithoutViewsInput
    filterGroups?: ViewFilterGroupCreateNestedManyWithoutViewInput
    sorts?: ViewSortCreateNestedManyWithoutViewInput
  }

  export type ViewUncheckedCreateWithoutFiltersInput = {
    id?: string
    tableId: string
    name: string
    position?: number | null
    createdAt?: Date | string
    filterConjunction?: string
    filterGroups?: ViewFilterGroupUncheckedCreateNestedManyWithoutViewInput
    sorts?: ViewSortUncheckedCreateNestedManyWithoutViewInput
  }

  export type ViewCreateOrConnectWithoutFiltersInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutFiltersInput, ViewUncheckedCreateWithoutFiltersInput>
  }

  export type ViewFilterGroupCreateWithoutFiltersInput = {
    id?: string
    conjunction?: string
    connector?: string
    position?: number
    view: ViewCreateNestedOneWithoutFilterGroupsInput
  }

  export type ViewFilterGroupUncheckedCreateWithoutFiltersInput = {
    id?: string
    viewId: string
    conjunction?: string
    connector?: string
    position?: number
  }

  export type ViewFilterGroupCreateOrConnectWithoutFiltersInput = {
    where: ViewFilterGroupWhereUniqueInput
    create: XOR<ViewFilterGroupCreateWithoutFiltersInput, ViewFilterGroupUncheckedCreateWithoutFiltersInput>
  }

  export type FieldCreateWithoutViewFiltersInput = {
    id?: string
    name: string
    type: $Enums.FieldType
    position?: number | null
    table: TableCreateNestedOneWithoutFieldsInput
    cells?: CellValueCreateNestedManyWithoutFieldInput
    viewSorts?: ViewSortCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateWithoutViewFiltersInput = {
    id?: string
    tableId: string
    name: string
    type: $Enums.FieldType
    position?: number | null
    cells?: CellValueUncheckedCreateNestedManyWithoutFieldInput
    viewSorts?: ViewSortUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCreateOrConnectWithoutViewFiltersInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutViewFiltersInput, FieldUncheckedCreateWithoutViewFiltersInput>
  }

  export type ViewUpsertWithoutFiltersInput = {
    update: XOR<ViewUpdateWithoutFiltersInput, ViewUncheckedUpdateWithoutFiltersInput>
    create: XOR<ViewCreateWithoutFiltersInput, ViewUncheckedCreateWithoutFiltersInput>
    where?: ViewWhereInput
  }

  export type ViewUpdateToOneWithWhereWithoutFiltersInput = {
    where?: ViewWhereInput
    data: XOR<ViewUpdateWithoutFiltersInput, ViewUncheckedUpdateWithoutFiltersInput>
  }

  export type ViewUpdateWithoutFiltersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filterConjunction?: StringFieldUpdateOperationsInput | string
    table?: TableUpdateOneRequiredWithoutViewsNestedInput
    filterGroups?: ViewFilterGroupUpdateManyWithoutViewNestedInput
    sorts?: ViewSortUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateWithoutFiltersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filterConjunction?: StringFieldUpdateOperationsInput | string
    filterGroups?: ViewFilterGroupUncheckedUpdateManyWithoutViewNestedInput
    sorts?: ViewSortUncheckedUpdateManyWithoutViewNestedInput
  }

  export type ViewFilterGroupUpsertWithoutFiltersInput = {
    update: XOR<ViewFilterGroupUpdateWithoutFiltersInput, ViewFilterGroupUncheckedUpdateWithoutFiltersInput>
    create: XOR<ViewFilterGroupCreateWithoutFiltersInput, ViewFilterGroupUncheckedCreateWithoutFiltersInput>
    where?: ViewFilterGroupWhereInput
  }

  export type ViewFilterGroupUpdateToOneWithWhereWithoutFiltersInput = {
    where?: ViewFilterGroupWhereInput
    data: XOR<ViewFilterGroupUpdateWithoutFiltersInput, ViewFilterGroupUncheckedUpdateWithoutFiltersInput>
  }

  export type ViewFilterGroupUpdateWithoutFiltersInput = {
    id?: StringFieldUpdateOperationsInput | string
    conjunction?: StringFieldUpdateOperationsInput | string
    connector?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    view?: ViewUpdateOneRequiredWithoutFilterGroupsNestedInput
  }

  export type ViewFilterGroupUncheckedUpdateWithoutFiltersInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewId?: StringFieldUpdateOperationsInput | string
    conjunction?: StringFieldUpdateOperationsInput | string
    connector?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type FieldUpsertWithoutViewFiltersInput = {
    update: XOR<FieldUpdateWithoutViewFiltersInput, FieldUncheckedUpdateWithoutViewFiltersInput>
    create: XOR<FieldCreateWithoutViewFiltersInput, FieldUncheckedCreateWithoutViewFiltersInput>
    where?: FieldWhereInput
  }

  export type FieldUpdateToOneWithWhereWithoutViewFiltersInput = {
    where?: FieldWhereInput
    data: XOR<FieldUpdateWithoutViewFiltersInput, FieldUncheckedUpdateWithoutViewFiltersInput>
  }

  export type FieldUpdateWithoutViewFiltersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    position?: NullableIntFieldUpdateOperationsInput | number | null
    table?: TableUpdateOneRequiredWithoutFieldsNestedInput
    cells?: CellValueUpdateManyWithoutFieldNestedInput
    viewSorts?: ViewSortUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateWithoutViewFiltersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    position?: NullableIntFieldUpdateOperationsInput | number | null
    cells?: CellValueUncheckedUpdateManyWithoutFieldNestedInput
    viewSorts?: ViewSortUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type ViewCreateWithoutFilterGroupsInput = {
    id?: string
    name: string
    position?: number | null
    createdAt?: Date | string
    filterConjunction?: string
    table: TableCreateNestedOneWithoutViewsInput
    filters?: ViewFilterCreateNestedManyWithoutViewInput
    sorts?: ViewSortCreateNestedManyWithoutViewInput
  }

  export type ViewUncheckedCreateWithoutFilterGroupsInput = {
    id?: string
    tableId: string
    name: string
    position?: number | null
    createdAt?: Date | string
    filterConjunction?: string
    filters?: ViewFilterUncheckedCreateNestedManyWithoutViewInput
    sorts?: ViewSortUncheckedCreateNestedManyWithoutViewInput
  }

  export type ViewCreateOrConnectWithoutFilterGroupsInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutFilterGroupsInput, ViewUncheckedCreateWithoutFilterGroupsInput>
  }

  export type ViewFilterCreateWithoutGroupInput = {
    id?: string
    operator?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: number | null
    view: ViewCreateNestedOneWithoutFiltersInput
    field?: FieldCreateNestedOneWithoutViewFiltersInput
  }

  export type ViewFilterUncheckedCreateWithoutGroupInput = {
    id?: string
    viewId: string
    fieldId?: string | null
    operator?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: number | null
  }

  export type ViewFilterCreateOrConnectWithoutGroupInput = {
    where: ViewFilterWhereUniqueInput
    create: XOR<ViewFilterCreateWithoutGroupInput, ViewFilterUncheckedCreateWithoutGroupInput>
  }

  export type ViewFilterCreateManyGroupInputEnvelope = {
    data: ViewFilterCreateManyGroupInput | ViewFilterCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type ViewUpsertWithoutFilterGroupsInput = {
    update: XOR<ViewUpdateWithoutFilterGroupsInput, ViewUncheckedUpdateWithoutFilterGroupsInput>
    create: XOR<ViewCreateWithoutFilterGroupsInput, ViewUncheckedCreateWithoutFilterGroupsInput>
    where?: ViewWhereInput
  }

  export type ViewUpdateToOneWithWhereWithoutFilterGroupsInput = {
    where?: ViewWhereInput
    data: XOR<ViewUpdateWithoutFilterGroupsInput, ViewUncheckedUpdateWithoutFilterGroupsInput>
  }

  export type ViewUpdateWithoutFilterGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filterConjunction?: StringFieldUpdateOperationsInput | string
    table?: TableUpdateOneRequiredWithoutViewsNestedInput
    filters?: ViewFilterUpdateManyWithoutViewNestedInput
    sorts?: ViewSortUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateWithoutFilterGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filterConjunction?: StringFieldUpdateOperationsInput | string
    filters?: ViewFilterUncheckedUpdateManyWithoutViewNestedInput
    sorts?: ViewSortUncheckedUpdateManyWithoutViewNestedInput
  }

  export type ViewFilterUpsertWithWhereUniqueWithoutGroupInput = {
    where: ViewFilterWhereUniqueInput
    update: XOR<ViewFilterUpdateWithoutGroupInput, ViewFilterUncheckedUpdateWithoutGroupInput>
    create: XOR<ViewFilterCreateWithoutGroupInput, ViewFilterUncheckedCreateWithoutGroupInput>
  }

  export type ViewFilterUpdateWithWhereUniqueWithoutGroupInput = {
    where: ViewFilterWhereUniqueInput
    data: XOR<ViewFilterUpdateWithoutGroupInput, ViewFilterUncheckedUpdateWithoutGroupInput>
  }

  export type ViewFilterUpdateManyWithWhereWithoutGroupInput = {
    where: ViewFilterScalarWhereInput
    data: XOR<ViewFilterUpdateManyMutationInput, ViewFilterUncheckedUpdateManyWithoutGroupInput>
  }

  export type ViewCreateWithoutSortsInput = {
    id?: string
    name: string
    position?: number | null
    createdAt?: Date | string
    filterConjunction?: string
    table: TableCreateNestedOneWithoutViewsInput
    filters?: ViewFilterCreateNestedManyWithoutViewInput
    filterGroups?: ViewFilterGroupCreateNestedManyWithoutViewInput
  }

  export type ViewUncheckedCreateWithoutSortsInput = {
    id?: string
    tableId: string
    name: string
    position?: number | null
    createdAt?: Date | string
    filterConjunction?: string
    filters?: ViewFilterUncheckedCreateNestedManyWithoutViewInput
    filterGroups?: ViewFilterGroupUncheckedCreateNestedManyWithoutViewInput
  }

  export type ViewCreateOrConnectWithoutSortsInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutSortsInput, ViewUncheckedCreateWithoutSortsInput>
  }

  export type FieldCreateWithoutViewSortsInput = {
    id?: string
    name: string
    type: $Enums.FieldType
    position?: number | null
    table: TableCreateNestedOneWithoutFieldsInput
    cells?: CellValueCreateNestedManyWithoutFieldInput
    viewFilters?: ViewFilterCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateWithoutViewSortsInput = {
    id?: string
    tableId: string
    name: string
    type: $Enums.FieldType
    position?: number | null
    cells?: CellValueUncheckedCreateNestedManyWithoutFieldInput
    viewFilters?: ViewFilterUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCreateOrConnectWithoutViewSortsInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutViewSortsInput, FieldUncheckedCreateWithoutViewSortsInput>
  }

  export type ViewUpsertWithoutSortsInput = {
    update: XOR<ViewUpdateWithoutSortsInput, ViewUncheckedUpdateWithoutSortsInput>
    create: XOR<ViewCreateWithoutSortsInput, ViewUncheckedCreateWithoutSortsInput>
    where?: ViewWhereInput
  }

  export type ViewUpdateToOneWithWhereWithoutSortsInput = {
    where?: ViewWhereInput
    data: XOR<ViewUpdateWithoutSortsInput, ViewUncheckedUpdateWithoutSortsInput>
  }

  export type ViewUpdateWithoutSortsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filterConjunction?: StringFieldUpdateOperationsInput | string
    table?: TableUpdateOneRequiredWithoutViewsNestedInput
    filters?: ViewFilterUpdateManyWithoutViewNestedInput
    filterGroups?: ViewFilterGroupUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateWithoutSortsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filterConjunction?: StringFieldUpdateOperationsInput | string
    filters?: ViewFilterUncheckedUpdateManyWithoutViewNestedInput
    filterGroups?: ViewFilterGroupUncheckedUpdateManyWithoutViewNestedInput
  }

  export type FieldUpsertWithoutViewSortsInput = {
    update: XOR<FieldUpdateWithoutViewSortsInput, FieldUncheckedUpdateWithoutViewSortsInput>
    create: XOR<FieldCreateWithoutViewSortsInput, FieldUncheckedCreateWithoutViewSortsInput>
    where?: FieldWhereInput
  }

  export type FieldUpdateToOneWithWhereWithoutViewSortsInput = {
    where?: FieldWhereInput
    data: XOR<FieldUpdateWithoutViewSortsInput, FieldUncheckedUpdateWithoutViewSortsInput>
  }

  export type FieldUpdateWithoutViewSortsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    position?: NullableIntFieldUpdateOperationsInput | number | null
    table?: TableUpdateOneRequiredWithoutFieldsNestedInput
    cells?: CellValueUpdateManyWithoutFieldNestedInput
    viewFilters?: ViewFilterUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateWithoutViewSortsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    position?: NullableIntFieldUpdateOperationsInput | number | null
    cells?: CellValueUncheckedUpdateManyWithoutFieldNestedInput
    viewFilters?: ViewFilterUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type BaseMemberCreateManyUserInput = {
    baseId: string
  }

  export type RecordCreateManyUserInput = {
    id?: string
    tableId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number | null
    sortValueText?: string | null
    sortValueNumber?: number | null
  }

  export type TableCreateManyCreatorInput = {
    id?: string
    baseId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BaseMemberUpdateWithoutUserInput = {
    base?: BaseUpdateOneRequiredWithoutMembersNestedInput
  }

  export type BaseMemberUncheckedUpdateWithoutUserInput = {
    baseId?: StringFieldUpdateOperationsInput | string
  }

  export type BaseMemberUncheckedUpdateManyWithoutUserInput = {
    baseId?: StringFieldUpdateOperationsInput | string
  }

  export type RecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sortValueText?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    table?: TableUpdateOneRequiredWithoutRecordsNestedInput
    cells?: CellValueUpdateManyWithoutRecordNestedInput
  }

  export type RecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sortValueText?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    cells?: CellValueUncheckedUpdateManyWithoutRecordNestedInput
  }

  export type RecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sortValueText?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TableUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BaseUpdateOneRequiredWithoutTablesNestedInput
    fields?: FieldUpdateManyWithoutTableNestedInput
    records?: RecordUpdateManyWithoutTableNestedInput
    views?: ViewUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: FieldUncheckedUpdateManyWithoutTableNestedInput
    records?: RecordUncheckedUpdateManyWithoutTableNestedInput
    views?: ViewUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableCreateManyBaseInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
  }

  export type BaseMemberCreateManyBaseInput = {
    userId: string
  }

  export type TableUpdateWithoutBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneWithoutTablesNestedInput
    fields?: FieldUpdateManyWithoutTableNestedInput
    records?: RecordUpdateManyWithoutTableNestedInput
    views?: ViewUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    fields?: FieldUncheckedUpdateManyWithoutTableNestedInput
    records?: RecordUncheckedUpdateManyWithoutTableNestedInput
    views?: ViewUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateManyWithoutBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BaseMemberUpdateWithoutBaseInput = {
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type BaseMemberUncheckedUpdateWithoutBaseInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BaseMemberUncheckedUpdateManyWithoutBaseInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FieldCreateManyTableInput = {
    id?: string
    name: string
    type: $Enums.FieldType
    position?: number | null
  }

  export type RecordCreateManyTableInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number | null
    userId?: string | null
    sortValueText?: string | null
    sortValueNumber?: number | null
  }

  export type ViewCreateManyTableInput = {
    id?: string
    name: string
    position?: number | null
    createdAt?: Date | string
    filterConjunction?: string
  }

  export type FieldUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    position?: NullableIntFieldUpdateOperationsInput | number | null
    cells?: CellValueUpdateManyWithoutFieldNestedInput
    viewFilters?: ViewFilterUpdateManyWithoutFieldNestedInput
    viewSorts?: ViewSortUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    position?: NullableIntFieldUpdateOperationsInput | number | null
    cells?: CellValueUncheckedUpdateManyWithoutFieldNestedInput
    viewFilters?: ViewFilterUncheckedUpdateManyWithoutFieldNestedInput
    viewSorts?: ViewSortUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RecordUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sortValueText?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    cells?: CellValueUpdateManyWithoutRecordNestedInput
    user?: UserUpdateOneWithoutRecordsCreatedNestedInput
  }

  export type RecordUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueText?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    cells?: CellValueUncheckedUpdateManyWithoutRecordNestedInput
  }

  export type RecordUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueText?: NullableStringFieldUpdateOperationsInput | string | null
    sortValueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ViewUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filterConjunction?: StringFieldUpdateOperationsInput | string
    filters?: ViewFilterUpdateManyWithoutViewNestedInput
    filterGroups?: ViewFilterGroupUpdateManyWithoutViewNestedInput
    sorts?: ViewSortUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filterConjunction?: StringFieldUpdateOperationsInput | string
    filters?: ViewFilterUncheckedUpdateManyWithoutViewNestedInput
    filterGroups?: ViewFilterGroupUncheckedUpdateManyWithoutViewNestedInput
    sorts?: ViewSortUncheckedUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filterConjunction?: StringFieldUpdateOperationsInput | string
  }

  export type CellValueCreateManyFieldInput = {
    recordId: string
    valueText?: string | null
    valueNumber?: number | null
  }

  export type ViewFilterCreateManyFieldInput = {
    id?: string
    viewId: string
    groupId?: string | null
    operator?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: number | null
  }

  export type ViewSortCreateManyFieldInput = {
    id?: string
    viewId: string
    direction: $Enums.SortDirection
    order?: number | null
  }

  export type CellValueUpdateWithoutFieldInput = {
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    record?: RecordUpdateOneRequiredWithoutCellsNestedInput
  }

  export type CellValueUncheckedUpdateWithoutFieldInput = {
    recordId?: StringFieldUpdateOperationsInput | string
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CellValueUncheckedUpdateManyWithoutFieldInput = {
    recordId?: StringFieldUpdateOperationsInput | string
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ViewFilterUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    operator?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: NullableIntFieldUpdateOperationsInput | number | null
    view?: ViewUpdateOneRequiredWithoutFiltersNestedInput
    group?: ViewFilterGroupUpdateOneWithoutFiltersNestedInput
  }

  export type ViewFilterUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    operator?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewFilterUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    operator?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewSortUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: NullableIntFieldUpdateOperationsInput | number | null
    view?: ViewUpdateOneRequiredWithoutSortsNestedInput
  }

  export type ViewSortUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewId?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewSortUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewId?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CellValueCreateManyRecordInput = {
    fieldId: string
    valueText?: string | null
    valueNumber?: number | null
  }

  export type CellValueUpdateWithoutRecordInput = {
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    field?: FieldUpdateOneRequiredWithoutCellsNestedInput
  }

  export type CellValueUncheckedUpdateWithoutRecordInput = {
    fieldId?: StringFieldUpdateOperationsInput | string
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CellValueUncheckedUpdateManyWithoutRecordInput = {
    fieldId?: StringFieldUpdateOperationsInput | string
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    valueNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ViewFilterCreateManyViewInput = {
    id?: string
    groupId?: string | null
    fieldId?: string | null
    operator?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: number | null
  }

  export type ViewFilterGroupCreateManyViewInput = {
    id?: string
    conjunction?: string
    connector?: string
    position?: number
  }

  export type ViewSortCreateManyViewInput = {
    id?: string
    fieldId: string
    direction: $Enums.SortDirection
    order?: number | null
  }

  export type ViewFilterUpdateWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    operator?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: NullableIntFieldUpdateOperationsInput | number | null
    group?: ViewFilterGroupUpdateOneWithoutFiltersNestedInput
    field?: FieldUpdateOneWithoutViewFiltersNestedInput
  }

  export type ViewFilterUncheckedUpdateWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    fieldId?: NullableStringFieldUpdateOperationsInput | string | null
    operator?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewFilterUncheckedUpdateManyWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    fieldId?: NullableStringFieldUpdateOperationsInput | string | null
    operator?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewFilterGroupUpdateWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    conjunction?: StringFieldUpdateOperationsInput | string
    connector?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    filters?: ViewFilterUpdateManyWithoutGroupNestedInput
  }

  export type ViewFilterGroupUncheckedUpdateWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    conjunction?: StringFieldUpdateOperationsInput | string
    connector?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    filters?: ViewFilterUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type ViewFilterGroupUncheckedUpdateManyWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    conjunction?: StringFieldUpdateOperationsInput | string
    connector?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewSortUpdateWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: NullableIntFieldUpdateOperationsInput | number | null
    field?: FieldUpdateOneRequiredWithoutViewSortsNestedInput
  }

  export type ViewSortUncheckedUpdateWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewSortUncheckedUpdateManyWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewFilterCreateManyGroupInput = {
    id?: string
    viewId: string
    fieldId?: string | null
    operator?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: number | null
  }

  export type ViewFilterUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    operator?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: NullableIntFieldUpdateOperationsInput | number | null
    view?: ViewUpdateOneRequiredWithoutFiltersNestedInput
    field?: FieldUpdateOneWithoutViewFiltersNestedInput
  }

  export type ViewFilterUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewId?: StringFieldUpdateOperationsInput | string
    fieldId?: NullableStringFieldUpdateOperationsInput | string | null
    operator?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ViewFilterUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewId?: StringFieldUpdateOperationsInput | string
    fieldId?: NullableStringFieldUpdateOperationsInput | string | null
    operator?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    position?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}