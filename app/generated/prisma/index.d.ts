
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model AttributeType
 * 
 */
export type AttributeType = $Result.DefaultSelection<Prisma.$AttributeTypePayload>
/**
 * Model Attribute
 * 
 */
export type Attribute = $Result.DefaultSelection<Prisma.$AttributePayload>
/**
 * Model VeterinaryGroup
 * 
 */
export type VeterinaryGroup = $Result.DefaultSelection<Prisma.$VeterinaryGroupPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model AttributesOnLocations
 * 
 */
export type AttributesOnLocations = $Result.DefaultSelection<Prisma.$AttributesOnLocationsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attributeType`: Exposes CRUD operations for the **AttributeType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttributeTypes
    * const attributeTypes = await prisma.attributeType.findMany()
    * ```
    */
  get attributeType(): Prisma.AttributeTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attribute`: Exposes CRUD operations for the **Attribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attributes
    * const attributes = await prisma.attribute.findMany()
    * ```
    */
  get attribute(): Prisma.AttributeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.veterinaryGroup`: Exposes CRUD operations for the **VeterinaryGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VeterinaryGroups
    * const veterinaryGroups = await prisma.veterinaryGroup.findMany()
    * ```
    */
  get veterinaryGroup(): Prisma.VeterinaryGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attributesOnLocations`: Exposes CRUD operations for the **AttributesOnLocations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttributesOnLocations
    * const attributesOnLocations = await prisma.attributesOnLocations.findMany()
    * ```
    */
  get attributesOnLocations(): Prisma.AttributesOnLocationsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    UserRole: 'UserRole',
    AttributeType: 'AttributeType',
    Attribute: 'Attribute',
    VeterinaryGroup: 'VeterinaryGroup',
    Location: 'Location',
    AttributesOnLocations: 'AttributesOnLocations'
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
      modelProps: "user" | "userRole" | "attributeType" | "attribute" | "veterinaryGroup" | "location" | "attributesOnLocations"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      AttributeType: {
        payload: Prisma.$AttributeTypePayload<ExtArgs>
        fields: Prisma.AttributeTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributeTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributeTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeTypePayload>
          }
          findFirst: {
            args: Prisma.AttributeTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributeTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeTypePayload>
          }
          findMany: {
            args: Prisma.AttributeTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeTypePayload>[]
          }
          create: {
            args: Prisma.AttributeTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeTypePayload>
          }
          createMany: {
            args: Prisma.AttributeTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttributeTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeTypePayload>[]
          }
          delete: {
            args: Prisma.AttributeTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeTypePayload>
          }
          update: {
            args: Prisma.AttributeTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeTypePayload>
          }
          deleteMany: {
            args: Prisma.AttributeTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttributeTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttributeTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeTypePayload>[]
          }
          upsert: {
            args: Prisma.AttributeTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeTypePayload>
          }
          aggregate: {
            args: Prisma.AttributeTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttributeType>
          }
          groupBy: {
            args: Prisma.AttributeTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttributeTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributeTypeCountArgs<ExtArgs>
            result: $Utils.Optional<AttributeTypeCountAggregateOutputType> | number
          }
        }
      }
      Attribute: {
        payload: Prisma.$AttributePayload<ExtArgs>
        fields: Prisma.AttributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          findFirst: {
            args: Prisma.AttributeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          findMany: {
            args: Prisma.AttributeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          create: {
            args: Prisma.AttributeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          createMany: {
            args: Prisma.AttributeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttributeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          delete: {
            args: Prisma.AttributeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          update: {
            args: Prisma.AttributeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          deleteMany: {
            args: Prisma.AttributeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttributeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttributeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          upsert: {
            args: Prisma.AttributeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          aggregate: {
            args: Prisma.AttributeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttribute>
          }
          groupBy: {
            args: Prisma.AttributeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttributeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributeCountArgs<ExtArgs>
            result: $Utils.Optional<AttributeCountAggregateOutputType> | number
          }
        }
      }
      VeterinaryGroup: {
        payload: Prisma.$VeterinaryGroupPayload<ExtArgs>
        fields: Prisma.VeterinaryGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeterinaryGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinaryGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeterinaryGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinaryGroupPayload>
          }
          findFirst: {
            args: Prisma.VeterinaryGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinaryGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeterinaryGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinaryGroupPayload>
          }
          findMany: {
            args: Prisma.VeterinaryGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinaryGroupPayload>[]
          }
          create: {
            args: Prisma.VeterinaryGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinaryGroupPayload>
          }
          createMany: {
            args: Prisma.VeterinaryGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VeterinaryGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinaryGroupPayload>[]
          }
          delete: {
            args: Prisma.VeterinaryGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinaryGroupPayload>
          }
          update: {
            args: Prisma.VeterinaryGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinaryGroupPayload>
          }
          deleteMany: {
            args: Prisma.VeterinaryGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VeterinaryGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VeterinaryGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinaryGroupPayload>[]
          }
          upsert: {
            args: Prisma.VeterinaryGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinaryGroupPayload>
          }
          aggregate: {
            args: Prisma.VeterinaryGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeterinaryGroup>
          }
          groupBy: {
            args: Prisma.VeterinaryGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeterinaryGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeterinaryGroupCountArgs<ExtArgs>
            result: $Utils.Optional<VeterinaryGroupCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      AttributesOnLocations: {
        payload: Prisma.$AttributesOnLocationsPayload<ExtArgs>
        fields: Prisma.AttributesOnLocationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributesOnLocationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesOnLocationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributesOnLocationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesOnLocationsPayload>
          }
          findFirst: {
            args: Prisma.AttributesOnLocationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesOnLocationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributesOnLocationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesOnLocationsPayload>
          }
          findMany: {
            args: Prisma.AttributesOnLocationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesOnLocationsPayload>[]
          }
          create: {
            args: Prisma.AttributesOnLocationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesOnLocationsPayload>
          }
          createMany: {
            args: Prisma.AttributesOnLocationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttributesOnLocationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesOnLocationsPayload>[]
          }
          delete: {
            args: Prisma.AttributesOnLocationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesOnLocationsPayload>
          }
          update: {
            args: Prisma.AttributesOnLocationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesOnLocationsPayload>
          }
          deleteMany: {
            args: Prisma.AttributesOnLocationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttributesOnLocationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttributesOnLocationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesOnLocationsPayload>[]
          }
          upsert: {
            args: Prisma.AttributesOnLocationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributesOnLocationsPayload>
          }
          aggregate: {
            args: Prisma.AttributesOnLocationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttributesOnLocations>
          }
          groupBy: {
            args: Prisma.AttributesOnLocationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttributesOnLocationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributesOnLocationsCountArgs<ExtArgs>
            result: $Utils.Optional<AttributesOnLocationsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    userRole?: UserRoleOmit
    attributeType?: AttributeTypeOmit
    attribute?: AttributeOmit
    veterinaryGroup?: VeterinaryGroupOmit
    location?: LocationOmit
    attributesOnLocations?: AttributesOnLocationsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserRoleCountOutputType
   */

  export type UserRoleCountOutputType = {
    users: number
  }

  export type UserRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserRoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleCountOutputType
     */
    select?: UserRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type AttributeTypeCountOutputType
   */

  export type AttributeTypeCountOutputType = {
    attributes: number
  }

  export type AttributeTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | AttributeTypeCountOutputTypeCountAttributesArgs
  }

  // Custom InputTypes
  /**
   * AttributeTypeCountOutputType without action
   */
  export type AttributeTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeTypeCountOutputType
     */
    select?: AttributeTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttributeTypeCountOutputType without action
   */
  export type AttributeTypeCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeWhereInput
  }


  /**
   * Count Type AttributeCountOutputType
   */

  export type AttributeCountOutputType = {
    locations: number
    AttributesOnLocations: number
  }

  export type AttributeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | AttributeCountOutputTypeCountLocationsArgs
    AttributesOnLocations?: boolean | AttributeCountOutputTypeCountAttributesOnLocationsArgs
  }

  // Custom InputTypes
  /**
   * AttributeCountOutputType without action
   */
  export type AttributeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeCountOutputType
     */
    select?: AttributeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttributeCountOutputType without action
   */
  export type AttributeCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }

  /**
   * AttributeCountOutputType without action
   */
  export type AttributeCountOutputTypeCountAttributesOnLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributesOnLocationsWhereInput
  }


  /**
   * Count Type VeterinaryGroupCountOutputType
   */

  export type VeterinaryGroupCountOutputType = {
    locations: number
  }

  export type VeterinaryGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | VeterinaryGroupCountOutputTypeCountLocationsArgs
  }

  // Custom InputTypes
  /**
   * VeterinaryGroupCountOutputType without action
   */
  export type VeterinaryGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeterinaryGroupCountOutputType
     */
    select?: VeterinaryGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VeterinaryGroupCountOutputType without action
   */
  export type VeterinaryGroupCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    attributes: number
    AttributesOnLocations: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | LocationCountOutputTypeCountAttributesArgs
    AttributesOnLocations?: boolean | LocationCountOutputTypeCountAttributesOnLocationsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountAttributesOnLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributesOnLocationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    refreshToken: string | null
    roleName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    refreshToken: string | null
    roleName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    refreshToken: number
    roleName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    refreshToken?: true
    roleName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    refreshToken?: true
    roleName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    refreshToken?: true
    roleName?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    password: string
    refreshToken: string | null
    roleName: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    name?: boolean
    password?: boolean
    refreshToken?: boolean
    roleName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    refreshToken?: boolean
    roleName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    refreshToken?: boolean
    roleName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    refreshToken?: boolean
    roleName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "refreshToken" | "roleName" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$UserRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      password: string
      refreshToken: string | null
      roleName: string
      createdAt: Date
      updatedAt: Date
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
    role<T extends UserRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserRoleDefaultArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly roleName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRoleMaxAggregateOutputType = {
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRoleCountAggregateOutputType = {
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserRoleMinAggregateInputType = {
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRoleMaxAggregateInputType = {
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRoleCountAggregateInputType = {
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UserRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const userRoleWithNameOnly = await prisma.userRole.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `name`
     * const userRoleWithNameOnly = await prisma.userRole.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `name`
     * const userRoleWithNameOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { name: true },
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
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
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
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UserRole$usersArgs<ExtArgs> = {}>(args?: Subset<T, UserRole$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserRole model
   */ 
  interface UserRoleFieldRefs {
    readonly name: FieldRef<"UserRole", 'String'>
    readonly description: FieldRef<"UserRole", 'String'>
    readonly createdAt: FieldRef<"UserRole", 'DateTime'>
    readonly updatedAt: FieldRef<"UserRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole.users
   */
  export type UserRole$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model AttributeType
   */

  export type AggregateAttributeType = {
    _count: AttributeTypeCountAggregateOutputType | null
    _min: AttributeTypeMinAggregateOutputType | null
    _max: AttributeTypeMaxAggregateOutputType | null
  }

  export type AttributeTypeMinAggregateOutputType = {
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttributeTypeMaxAggregateOutputType = {
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttributeTypeCountAggregateOutputType = {
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttributeTypeMinAggregateInputType = {
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttributeTypeMaxAggregateInputType = {
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttributeTypeCountAggregateInputType = {
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttributeTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributeType to aggregate.
     */
    where?: AttributeTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeTypes to fetch.
     */
    orderBy?: AttributeTypeOrderByWithRelationInput | AttributeTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributeTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttributeTypes
    **/
    _count?: true | AttributeTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributeTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributeTypeMaxAggregateInputType
  }

  export type GetAttributeTypeAggregateType<T extends AttributeTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateAttributeType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttributeType[P]>
      : GetScalarType<T[P], AggregateAttributeType[P]>
  }




  export type AttributeTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeTypeWhereInput
    orderBy?: AttributeTypeOrderByWithAggregationInput | AttributeTypeOrderByWithAggregationInput[]
    by: AttributeTypeScalarFieldEnum[] | AttributeTypeScalarFieldEnum
    having?: AttributeTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributeTypeCountAggregateInputType | true
    _min?: AttributeTypeMinAggregateInputType
    _max?: AttributeTypeMaxAggregateInputType
  }

  export type AttributeTypeGroupByOutputType = {
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: AttributeTypeCountAggregateOutputType | null
    _min: AttributeTypeMinAggregateOutputType | null
    _max: AttributeTypeMaxAggregateOutputType | null
  }

  type GetAttributeTypeGroupByPayload<T extends AttributeTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributeTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributeTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributeTypeGroupByOutputType[P]>
            : GetScalarType<T[P], AttributeTypeGroupByOutputType[P]>
        }
      >
    >


  export type AttributeTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attributes?: boolean | AttributeType$attributesArgs<ExtArgs>
    _count?: boolean | AttributeTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributeType"]>

  export type AttributeTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attributeType"]>

  export type AttributeTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attributeType"]>

  export type AttributeTypeSelectScalar = {
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttributeTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["attributeType"]>
  export type AttributeTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | AttributeType$attributesArgs<ExtArgs>
    _count?: boolean | AttributeTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttributeTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AttributeTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AttributeTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttributeType"
    objects: {
      attributes: Prisma.$AttributePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attributeType"]>
    composites: {}
  }

  type AttributeTypeGetPayload<S extends boolean | null | undefined | AttributeTypeDefaultArgs> = $Result.GetResult<Prisma.$AttributeTypePayload, S>

  type AttributeTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttributeTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttributeTypeCountAggregateInputType | true
    }

  export interface AttributeTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttributeType'], meta: { name: 'AttributeType' } }
    /**
     * Find zero or one AttributeType that matches the filter.
     * @param {AttributeTypeFindUniqueArgs} args - Arguments to find a AttributeType
     * @example
     * // Get one AttributeType
     * const attributeType = await prisma.attributeType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttributeTypeFindUniqueArgs>(args: SelectSubset<T, AttributeTypeFindUniqueArgs<ExtArgs>>): Prisma__AttributeTypeClient<$Result.GetResult<Prisma.$AttributeTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttributeType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttributeTypeFindUniqueOrThrowArgs} args - Arguments to find a AttributeType
     * @example
     * // Get one AttributeType
     * const attributeType = await prisma.attributeType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttributeTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, AttributeTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttributeTypeClient<$Result.GetResult<Prisma.$AttributeTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttributeType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeTypeFindFirstArgs} args - Arguments to find a AttributeType
     * @example
     * // Get one AttributeType
     * const attributeType = await prisma.attributeType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttributeTypeFindFirstArgs>(args?: SelectSubset<T, AttributeTypeFindFirstArgs<ExtArgs>>): Prisma__AttributeTypeClient<$Result.GetResult<Prisma.$AttributeTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttributeType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeTypeFindFirstOrThrowArgs} args - Arguments to find a AttributeType
     * @example
     * // Get one AttributeType
     * const attributeType = await prisma.attributeType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttributeTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, AttributeTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttributeTypeClient<$Result.GetResult<Prisma.$AttributeTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttributeTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttributeTypes
     * const attributeTypes = await prisma.attributeType.findMany()
     * 
     * // Get first 10 AttributeTypes
     * const attributeTypes = await prisma.attributeType.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const attributeTypeWithNameOnly = await prisma.attributeType.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends AttributeTypeFindManyArgs>(args?: SelectSubset<T, AttributeTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttributeType.
     * @param {AttributeTypeCreateArgs} args - Arguments to create a AttributeType.
     * @example
     * // Create one AttributeType
     * const AttributeType = await prisma.attributeType.create({
     *   data: {
     *     // ... data to create a AttributeType
     *   }
     * })
     * 
     */
    create<T extends AttributeTypeCreateArgs>(args: SelectSubset<T, AttributeTypeCreateArgs<ExtArgs>>): Prisma__AttributeTypeClient<$Result.GetResult<Prisma.$AttributeTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttributeTypes.
     * @param {AttributeTypeCreateManyArgs} args - Arguments to create many AttributeTypes.
     * @example
     * // Create many AttributeTypes
     * const attributeType = await prisma.attributeType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttributeTypeCreateManyArgs>(args?: SelectSubset<T, AttributeTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttributeTypes and returns the data saved in the database.
     * @param {AttributeTypeCreateManyAndReturnArgs} args - Arguments to create many AttributeTypes.
     * @example
     * // Create many AttributeTypes
     * const attributeType = await prisma.attributeType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttributeTypes and only return the `name`
     * const attributeTypeWithNameOnly = await prisma.attributeType.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttributeTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, AttributeTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttributeType.
     * @param {AttributeTypeDeleteArgs} args - Arguments to delete one AttributeType.
     * @example
     * // Delete one AttributeType
     * const AttributeType = await prisma.attributeType.delete({
     *   where: {
     *     // ... filter to delete one AttributeType
     *   }
     * })
     * 
     */
    delete<T extends AttributeTypeDeleteArgs>(args: SelectSubset<T, AttributeTypeDeleteArgs<ExtArgs>>): Prisma__AttributeTypeClient<$Result.GetResult<Prisma.$AttributeTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttributeType.
     * @param {AttributeTypeUpdateArgs} args - Arguments to update one AttributeType.
     * @example
     * // Update one AttributeType
     * const attributeType = await prisma.attributeType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttributeTypeUpdateArgs>(args: SelectSubset<T, AttributeTypeUpdateArgs<ExtArgs>>): Prisma__AttributeTypeClient<$Result.GetResult<Prisma.$AttributeTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttributeTypes.
     * @param {AttributeTypeDeleteManyArgs} args - Arguments to filter AttributeTypes to delete.
     * @example
     * // Delete a few AttributeTypes
     * const { count } = await prisma.attributeType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttributeTypeDeleteManyArgs>(args?: SelectSubset<T, AttributeTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributeTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttributeTypes
     * const attributeType = await prisma.attributeType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttributeTypeUpdateManyArgs>(args: SelectSubset<T, AttributeTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributeTypes and returns the data updated in the database.
     * @param {AttributeTypeUpdateManyAndReturnArgs} args - Arguments to update many AttributeTypes.
     * @example
     * // Update many AttributeTypes
     * const attributeType = await prisma.attributeType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttributeTypes and only return the `name`
     * const attributeTypeWithNameOnly = await prisma.attributeType.updateManyAndReturn({
     *   select: { name: true },
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
    updateManyAndReturn<T extends AttributeTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, AttributeTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttributeType.
     * @param {AttributeTypeUpsertArgs} args - Arguments to update or create a AttributeType.
     * @example
     * // Update or create a AttributeType
     * const attributeType = await prisma.attributeType.upsert({
     *   create: {
     *     // ... data to create a AttributeType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttributeType we want to update
     *   }
     * })
     */
    upsert<T extends AttributeTypeUpsertArgs>(args: SelectSubset<T, AttributeTypeUpsertArgs<ExtArgs>>): Prisma__AttributeTypeClient<$Result.GetResult<Prisma.$AttributeTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttributeTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeTypeCountArgs} args - Arguments to filter AttributeTypes to count.
     * @example
     * // Count the number of AttributeTypes
     * const count = await prisma.attributeType.count({
     *   where: {
     *     // ... the filter for the AttributeTypes we want to count
     *   }
     * })
    **/
    count<T extends AttributeTypeCountArgs>(
      args?: Subset<T, AttributeTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributeTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttributeType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttributeTypeAggregateArgs>(args: Subset<T, AttributeTypeAggregateArgs>): Prisma.PrismaPromise<GetAttributeTypeAggregateType<T>>

    /**
     * Group by AttributeType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeTypeGroupByArgs} args - Group by arguments.
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
      T extends AttributeTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributeTypeGroupByArgs['orderBy'] }
        : { orderBy?: AttributeTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttributeTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttributeType model
   */
  readonly fields: AttributeTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttributeType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributeTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attributes<T extends AttributeType$attributesArgs<ExtArgs> = {}>(args?: Subset<T, AttributeType$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AttributeType model
   */ 
  interface AttributeTypeFieldRefs {
    readonly name: FieldRef<"AttributeType", 'String'>
    readonly description: FieldRef<"AttributeType", 'String'>
    readonly createdAt: FieldRef<"AttributeType", 'DateTime'>
    readonly updatedAt: FieldRef<"AttributeType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttributeType findUnique
   */
  export type AttributeTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeType
     */
    select?: AttributeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeType
     */
    omit?: AttributeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeTypeInclude<ExtArgs> | null
    /**
     * Filter, which AttributeType to fetch.
     */
    where: AttributeTypeWhereUniqueInput
  }

  /**
   * AttributeType findUniqueOrThrow
   */
  export type AttributeTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeType
     */
    select?: AttributeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeType
     */
    omit?: AttributeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeTypeInclude<ExtArgs> | null
    /**
     * Filter, which AttributeType to fetch.
     */
    where: AttributeTypeWhereUniqueInput
  }

  /**
   * AttributeType findFirst
   */
  export type AttributeTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeType
     */
    select?: AttributeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeType
     */
    omit?: AttributeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeTypeInclude<ExtArgs> | null
    /**
     * Filter, which AttributeType to fetch.
     */
    where?: AttributeTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeTypes to fetch.
     */
    orderBy?: AttributeTypeOrderByWithRelationInput | AttributeTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributeTypes.
     */
    cursor?: AttributeTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeTypes.
     */
    distinct?: AttributeTypeScalarFieldEnum | AttributeTypeScalarFieldEnum[]
  }

  /**
   * AttributeType findFirstOrThrow
   */
  export type AttributeTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeType
     */
    select?: AttributeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeType
     */
    omit?: AttributeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeTypeInclude<ExtArgs> | null
    /**
     * Filter, which AttributeType to fetch.
     */
    where?: AttributeTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeTypes to fetch.
     */
    orderBy?: AttributeTypeOrderByWithRelationInput | AttributeTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributeTypes.
     */
    cursor?: AttributeTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeTypes.
     */
    distinct?: AttributeTypeScalarFieldEnum | AttributeTypeScalarFieldEnum[]
  }

  /**
   * AttributeType findMany
   */
  export type AttributeTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeType
     */
    select?: AttributeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeType
     */
    omit?: AttributeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeTypeInclude<ExtArgs> | null
    /**
     * Filter, which AttributeTypes to fetch.
     */
    where?: AttributeTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeTypes to fetch.
     */
    orderBy?: AttributeTypeOrderByWithRelationInput | AttributeTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttributeTypes.
     */
    cursor?: AttributeTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeTypes.
     */
    skip?: number
    distinct?: AttributeTypeScalarFieldEnum | AttributeTypeScalarFieldEnum[]
  }

  /**
   * AttributeType create
   */
  export type AttributeTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeType
     */
    select?: AttributeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeType
     */
    omit?: AttributeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a AttributeType.
     */
    data: XOR<AttributeTypeCreateInput, AttributeTypeUncheckedCreateInput>
  }

  /**
   * AttributeType createMany
   */
  export type AttributeTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttributeTypes.
     */
    data: AttributeTypeCreateManyInput | AttributeTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttributeType createManyAndReturn
   */
  export type AttributeTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeType
     */
    select?: AttributeTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeType
     */
    omit?: AttributeTypeOmit<ExtArgs> | null
    /**
     * The data used to create many AttributeTypes.
     */
    data: AttributeTypeCreateManyInput | AttributeTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttributeType update
   */
  export type AttributeTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeType
     */
    select?: AttributeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeType
     */
    omit?: AttributeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a AttributeType.
     */
    data: XOR<AttributeTypeUpdateInput, AttributeTypeUncheckedUpdateInput>
    /**
     * Choose, which AttributeType to update.
     */
    where: AttributeTypeWhereUniqueInput
  }

  /**
   * AttributeType updateMany
   */
  export type AttributeTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttributeTypes.
     */
    data: XOR<AttributeTypeUpdateManyMutationInput, AttributeTypeUncheckedUpdateManyInput>
    /**
     * Filter which AttributeTypes to update
     */
    where?: AttributeTypeWhereInput
    /**
     * Limit how many AttributeTypes to update.
     */
    limit?: number
  }

  /**
   * AttributeType updateManyAndReturn
   */
  export type AttributeTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeType
     */
    select?: AttributeTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeType
     */
    omit?: AttributeTypeOmit<ExtArgs> | null
    /**
     * The data used to update AttributeTypes.
     */
    data: XOR<AttributeTypeUpdateManyMutationInput, AttributeTypeUncheckedUpdateManyInput>
    /**
     * Filter which AttributeTypes to update
     */
    where?: AttributeTypeWhereInput
    /**
     * Limit how many AttributeTypes to update.
     */
    limit?: number
  }

  /**
   * AttributeType upsert
   */
  export type AttributeTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeType
     */
    select?: AttributeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeType
     */
    omit?: AttributeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the AttributeType to update in case it exists.
     */
    where: AttributeTypeWhereUniqueInput
    /**
     * In case the AttributeType found by the `where` argument doesn't exist, create a new AttributeType with this data.
     */
    create: XOR<AttributeTypeCreateInput, AttributeTypeUncheckedCreateInput>
    /**
     * In case the AttributeType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributeTypeUpdateInput, AttributeTypeUncheckedUpdateInput>
  }

  /**
   * AttributeType delete
   */
  export type AttributeTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeType
     */
    select?: AttributeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeType
     */
    omit?: AttributeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeTypeInclude<ExtArgs> | null
    /**
     * Filter which AttributeType to delete.
     */
    where: AttributeTypeWhereUniqueInput
  }

  /**
   * AttributeType deleteMany
   */
  export type AttributeTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributeTypes to delete
     */
    where?: AttributeTypeWhereInput
    /**
     * Limit how many AttributeTypes to delete.
     */
    limit?: number
  }

  /**
   * AttributeType.attributes
   */
  export type AttributeType$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    where?: AttributeWhereInput
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    cursor?: AttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * AttributeType without action
   */
  export type AttributeTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeType
     */
    select?: AttributeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeType
     */
    omit?: AttributeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeTypeInclude<ExtArgs> | null
  }


  /**
   * Model Attribute
   */

  export type AggregateAttribute = {
    _count: AttributeCountAggregateOutputType | null
    _avg: AttributeAvgAggregateOutputType | null
    _sum: AttributeSumAggregateOutputType | null
    _min: AttributeMinAggregateOutputType | null
    _max: AttributeMaxAggregateOutputType | null
  }

  export type AttributeAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type AttributeSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type AttributeMinAggregateOutputType = {
    id: number | null
    name: string | null
    order: number | null
    typeName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttributeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    order: number | null
    typeName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttributeCountAggregateOutputType = {
    id: number
    name: number
    order: number
    typeName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttributeAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type AttributeSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type AttributeMinAggregateInputType = {
    id?: true
    name?: true
    order?: true
    typeName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttributeMaxAggregateInputType = {
    id?: true
    name?: true
    order?: true
    typeName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttributeCountAggregateInputType = {
    id?: true
    name?: true
    order?: true
    typeName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attribute to aggregate.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attributes
    **/
    _count?: true | AttributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttributeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttributeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributeMaxAggregateInputType
  }

  export type GetAttributeAggregateType<T extends AttributeAggregateArgs> = {
        [P in keyof T & keyof AggregateAttribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttribute[P]>
      : GetScalarType<T[P], AggregateAttribute[P]>
  }




  export type AttributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeWhereInput
    orderBy?: AttributeOrderByWithAggregationInput | AttributeOrderByWithAggregationInput[]
    by: AttributeScalarFieldEnum[] | AttributeScalarFieldEnum
    having?: AttributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributeCountAggregateInputType | true
    _avg?: AttributeAvgAggregateInputType
    _sum?: AttributeSumAggregateInputType
    _min?: AttributeMinAggregateInputType
    _max?: AttributeMaxAggregateInputType
  }

  export type AttributeGroupByOutputType = {
    id: number
    name: string
    order: number
    typeName: string
    createdAt: Date
    updatedAt: Date
    _count: AttributeCountAggregateOutputType | null
    _avg: AttributeAvgAggregateOutputType | null
    _sum: AttributeSumAggregateOutputType | null
    _min: AttributeMinAggregateOutputType | null
    _max: AttributeMaxAggregateOutputType | null
  }

  type GetAttributeGroupByPayload<T extends AttributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributeGroupByOutputType[P]>
            : GetScalarType<T[P], AttributeGroupByOutputType[P]>
        }
      >
    >


  export type AttributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    typeName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean | AttributeTypeDefaultArgs<ExtArgs>
    locations?: boolean | Attribute$locationsArgs<ExtArgs>
    AttributesOnLocations?: boolean | Attribute$AttributesOnLocationsArgs<ExtArgs>
    _count?: boolean | AttributeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    typeName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean | AttributeTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    typeName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean | AttributeTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectScalar = {
    id?: boolean
    name?: boolean
    order?: boolean
    typeName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttributeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "order" | "typeName" | "createdAt" | "updatedAt", ExtArgs["result"]["attribute"]>
  export type AttributeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AttributeTypeDefaultArgs<ExtArgs>
    locations?: boolean | Attribute$locationsArgs<ExtArgs>
    AttributesOnLocations?: boolean | Attribute$AttributesOnLocationsArgs<ExtArgs>
    _count?: boolean | AttributeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttributeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AttributeTypeDefaultArgs<ExtArgs>
  }
  export type AttributeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AttributeTypeDefaultArgs<ExtArgs>
  }

  export type $AttributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attribute"
    objects: {
      type: Prisma.$AttributeTypePayload<ExtArgs>
      locations: Prisma.$LocationPayload<ExtArgs>[]
      AttributesOnLocations: Prisma.$AttributesOnLocationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      order: number
      typeName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attribute"]>
    composites: {}
  }

  type AttributeGetPayload<S extends boolean | null | undefined | AttributeDefaultArgs> = $Result.GetResult<Prisma.$AttributePayload, S>

  type AttributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttributeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttributeCountAggregateInputType | true
    }

  export interface AttributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attribute'], meta: { name: 'Attribute' } }
    /**
     * Find zero or one Attribute that matches the filter.
     * @param {AttributeFindUniqueArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttributeFindUniqueArgs>(args: SelectSubset<T, AttributeFindUniqueArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attribute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttributeFindUniqueOrThrowArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttributeFindUniqueOrThrowArgs>(args: SelectSubset<T, AttributeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindFirstArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttributeFindFirstArgs>(args?: SelectSubset<T, AttributeFindFirstArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindFirstOrThrowArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttributeFindFirstOrThrowArgs>(args?: SelectSubset<T, AttributeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attributes
     * const attributes = await prisma.attribute.findMany()
     * 
     * // Get first 10 Attributes
     * const attributes = await prisma.attribute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attributeWithIdOnly = await prisma.attribute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttributeFindManyArgs>(args?: SelectSubset<T, AttributeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attribute.
     * @param {AttributeCreateArgs} args - Arguments to create a Attribute.
     * @example
     * // Create one Attribute
     * const Attribute = await prisma.attribute.create({
     *   data: {
     *     // ... data to create a Attribute
     *   }
     * })
     * 
     */
    create<T extends AttributeCreateArgs>(args: SelectSubset<T, AttributeCreateArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attributes.
     * @param {AttributeCreateManyArgs} args - Arguments to create many Attributes.
     * @example
     * // Create many Attributes
     * const attribute = await prisma.attribute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttributeCreateManyArgs>(args?: SelectSubset<T, AttributeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attributes and returns the data saved in the database.
     * @param {AttributeCreateManyAndReturnArgs} args - Arguments to create many Attributes.
     * @example
     * // Create many Attributes
     * const attribute = await prisma.attribute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attributes and only return the `id`
     * const attributeWithIdOnly = await prisma.attribute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttributeCreateManyAndReturnArgs>(args?: SelectSubset<T, AttributeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attribute.
     * @param {AttributeDeleteArgs} args - Arguments to delete one Attribute.
     * @example
     * // Delete one Attribute
     * const Attribute = await prisma.attribute.delete({
     *   where: {
     *     // ... filter to delete one Attribute
     *   }
     * })
     * 
     */
    delete<T extends AttributeDeleteArgs>(args: SelectSubset<T, AttributeDeleteArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attribute.
     * @param {AttributeUpdateArgs} args - Arguments to update one Attribute.
     * @example
     * // Update one Attribute
     * const attribute = await prisma.attribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttributeUpdateArgs>(args: SelectSubset<T, AttributeUpdateArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attributes.
     * @param {AttributeDeleteManyArgs} args - Arguments to filter Attributes to delete.
     * @example
     * // Delete a few Attributes
     * const { count } = await prisma.attribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttributeDeleteManyArgs>(args?: SelectSubset<T, AttributeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attributes
     * const attribute = await prisma.attribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttributeUpdateManyArgs>(args: SelectSubset<T, AttributeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attributes and returns the data updated in the database.
     * @param {AttributeUpdateManyAndReturnArgs} args - Arguments to update many Attributes.
     * @example
     * // Update many Attributes
     * const attribute = await prisma.attribute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attributes and only return the `id`
     * const attributeWithIdOnly = await prisma.attribute.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttributeUpdateManyAndReturnArgs>(args: SelectSubset<T, AttributeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attribute.
     * @param {AttributeUpsertArgs} args - Arguments to update or create a Attribute.
     * @example
     * // Update or create a Attribute
     * const attribute = await prisma.attribute.upsert({
     *   create: {
     *     // ... data to create a Attribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attribute we want to update
     *   }
     * })
     */
    upsert<T extends AttributeUpsertArgs>(args: SelectSubset<T, AttributeUpsertArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeCountArgs} args - Arguments to filter Attributes to count.
     * @example
     * // Count the number of Attributes
     * const count = await prisma.attribute.count({
     *   where: {
     *     // ... the filter for the Attributes we want to count
     *   }
     * })
    **/
    count<T extends AttributeCountArgs>(
      args?: Subset<T, AttributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttributeAggregateArgs>(args: Subset<T, AttributeAggregateArgs>): Prisma.PrismaPromise<GetAttributeAggregateType<T>>

    /**
     * Group by Attribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeGroupByArgs} args - Group by arguments.
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
      T extends AttributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributeGroupByArgs['orderBy'] }
        : { orderBy?: AttributeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attribute model
   */
  readonly fields: AttributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends AttributeTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttributeTypeDefaultArgs<ExtArgs>>): Prisma__AttributeTypeClient<$Result.GetResult<Prisma.$AttributeTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    locations<T extends Attribute$locationsArgs<ExtArgs> = {}>(args?: Subset<T, Attribute$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AttributesOnLocations<T extends Attribute$AttributesOnLocationsArgs<ExtArgs> = {}>(args?: Subset<T, Attribute$AttributesOnLocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributesOnLocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Attribute model
   */ 
  interface AttributeFieldRefs {
    readonly id: FieldRef<"Attribute", 'Int'>
    readonly name: FieldRef<"Attribute", 'String'>
    readonly order: FieldRef<"Attribute", 'Int'>
    readonly typeName: FieldRef<"Attribute", 'String'>
    readonly createdAt: FieldRef<"Attribute", 'DateTime'>
    readonly updatedAt: FieldRef<"Attribute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attribute findUnique
   */
  export type AttributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute findUniqueOrThrow
   */
  export type AttributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute findFirst
   */
  export type AttributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Attribute findFirstOrThrow
   */
  export type AttributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Attribute findMany
   */
  export type AttributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attributes to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Attribute create
   */
  export type AttributeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The data needed to create a Attribute.
     */
    data: XOR<AttributeCreateInput, AttributeUncheckedCreateInput>
  }

  /**
   * Attribute createMany
   */
  export type AttributeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attributes.
     */
    data: AttributeCreateManyInput | AttributeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attribute createManyAndReturn
   */
  export type AttributeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * The data used to create many Attributes.
     */
    data: AttributeCreateManyInput | AttributeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attribute update
   */
  export type AttributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The data needed to update a Attribute.
     */
    data: XOR<AttributeUpdateInput, AttributeUncheckedUpdateInput>
    /**
     * Choose, which Attribute to update.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute updateMany
   */
  export type AttributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attributes.
     */
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyInput>
    /**
     * Filter which Attributes to update
     */
    where?: AttributeWhereInput
    /**
     * Limit how many Attributes to update.
     */
    limit?: number
  }

  /**
   * Attribute updateManyAndReturn
   */
  export type AttributeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * The data used to update Attributes.
     */
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyInput>
    /**
     * Filter which Attributes to update
     */
    where?: AttributeWhereInput
    /**
     * Limit how many Attributes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attribute upsert
   */
  export type AttributeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The filter to search for the Attribute to update in case it exists.
     */
    where: AttributeWhereUniqueInput
    /**
     * In case the Attribute found by the `where` argument doesn't exist, create a new Attribute with this data.
     */
    create: XOR<AttributeCreateInput, AttributeUncheckedCreateInput>
    /**
     * In case the Attribute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributeUpdateInput, AttributeUncheckedUpdateInput>
  }

  /**
   * Attribute delete
   */
  export type AttributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter which Attribute to delete.
     */
    where: AttributeWhereUniqueInput
  }

  /**
   * Attribute deleteMany
   */
  export type AttributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attributes to delete
     */
    where?: AttributeWhereInput
    /**
     * Limit how many Attributes to delete.
     */
    limit?: number
  }

  /**
   * Attribute.locations
   */
  export type Attribute$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Attribute.AttributesOnLocations
   */
  export type Attribute$AttributesOnLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributesOnLocations
     */
    select?: AttributesOnLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributesOnLocations
     */
    omit?: AttributesOnLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesOnLocationsInclude<ExtArgs> | null
    where?: AttributesOnLocationsWhereInput
    orderBy?: AttributesOnLocationsOrderByWithRelationInput | AttributesOnLocationsOrderByWithRelationInput[]
    cursor?: AttributesOnLocationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributesOnLocationsScalarFieldEnum | AttributesOnLocationsScalarFieldEnum[]
  }

  /**
   * Attribute without action
   */
  export type AttributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
  }


  /**
   * Model VeterinaryGroup
   */

  export type AggregateVeterinaryGroup = {
    _count: VeterinaryGroupCountAggregateOutputType | null
    _avg: VeterinaryGroupAvgAggregateOutputType | null
    _sum: VeterinaryGroupSumAggregateOutputType | null
    _min: VeterinaryGroupMinAggregateOutputType | null
    _max: VeterinaryGroupMaxAggregateOutputType | null
  }

  export type VeterinaryGroupAvgAggregateOutputType = {
    id: number | null
  }

  export type VeterinaryGroupSumAggregateOutputType = {
    id: number | null
  }

  export type VeterinaryGroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    group_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VeterinaryGroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    group_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VeterinaryGroupCountAggregateOutputType = {
    id: number
    name: number
    group_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VeterinaryGroupAvgAggregateInputType = {
    id?: true
  }

  export type VeterinaryGroupSumAggregateInputType = {
    id?: true
  }

  export type VeterinaryGroupMinAggregateInputType = {
    id?: true
    name?: true
    group_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VeterinaryGroupMaxAggregateInputType = {
    id?: true
    name?: true
    group_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VeterinaryGroupCountAggregateInputType = {
    id?: true
    name?: true
    group_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VeterinaryGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VeterinaryGroup to aggregate.
     */
    where?: VeterinaryGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeterinaryGroups to fetch.
     */
    orderBy?: VeterinaryGroupOrderByWithRelationInput | VeterinaryGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeterinaryGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeterinaryGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeterinaryGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VeterinaryGroups
    **/
    _count?: true | VeterinaryGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeterinaryGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeterinaryGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeterinaryGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeterinaryGroupMaxAggregateInputType
  }

  export type GetVeterinaryGroupAggregateType<T extends VeterinaryGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateVeterinaryGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeterinaryGroup[P]>
      : GetScalarType<T[P], AggregateVeterinaryGroup[P]>
  }




  export type VeterinaryGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeterinaryGroupWhereInput
    orderBy?: VeterinaryGroupOrderByWithAggregationInput | VeterinaryGroupOrderByWithAggregationInput[]
    by: VeterinaryGroupScalarFieldEnum[] | VeterinaryGroupScalarFieldEnum
    having?: VeterinaryGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeterinaryGroupCountAggregateInputType | true
    _avg?: VeterinaryGroupAvgAggregateInputType
    _sum?: VeterinaryGroupSumAggregateInputType
    _min?: VeterinaryGroupMinAggregateInputType
    _max?: VeterinaryGroupMaxAggregateInputType
  }

  export type VeterinaryGroupGroupByOutputType = {
    id: number
    name: string
    group_id: string
    createdAt: Date
    updatedAt: Date
    _count: VeterinaryGroupCountAggregateOutputType | null
    _avg: VeterinaryGroupAvgAggregateOutputType | null
    _sum: VeterinaryGroupSumAggregateOutputType | null
    _min: VeterinaryGroupMinAggregateOutputType | null
    _max: VeterinaryGroupMaxAggregateOutputType | null
  }

  type GetVeterinaryGroupGroupByPayload<T extends VeterinaryGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeterinaryGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeterinaryGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeterinaryGroupGroupByOutputType[P]>
            : GetScalarType<T[P], VeterinaryGroupGroupByOutputType[P]>
        }
      >
    >


  export type VeterinaryGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    group_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    locations?: boolean | VeterinaryGroup$locationsArgs<ExtArgs>
    _count?: boolean | VeterinaryGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veterinaryGroup"]>

  export type VeterinaryGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    group_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["veterinaryGroup"]>

  export type VeterinaryGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    group_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["veterinaryGroup"]>

  export type VeterinaryGroupSelectScalar = {
    id?: boolean
    name?: boolean
    group_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VeterinaryGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "group_id" | "createdAt" | "updatedAt", ExtArgs["result"]["veterinaryGroup"]>
  export type VeterinaryGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | VeterinaryGroup$locationsArgs<ExtArgs>
    _count?: boolean | VeterinaryGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VeterinaryGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VeterinaryGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VeterinaryGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VeterinaryGroup"
    objects: {
      locations: Prisma.$LocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      group_id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["veterinaryGroup"]>
    composites: {}
  }

  type VeterinaryGroupGetPayload<S extends boolean | null | undefined | VeterinaryGroupDefaultArgs> = $Result.GetResult<Prisma.$VeterinaryGroupPayload, S>

  type VeterinaryGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VeterinaryGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeterinaryGroupCountAggregateInputType | true
    }

  export interface VeterinaryGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VeterinaryGroup'], meta: { name: 'VeterinaryGroup' } }
    /**
     * Find zero or one VeterinaryGroup that matches the filter.
     * @param {VeterinaryGroupFindUniqueArgs} args - Arguments to find a VeterinaryGroup
     * @example
     * // Get one VeterinaryGroup
     * const veterinaryGroup = await prisma.veterinaryGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VeterinaryGroupFindUniqueArgs>(args: SelectSubset<T, VeterinaryGroupFindUniqueArgs<ExtArgs>>): Prisma__VeterinaryGroupClient<$Result.GetResult<Prisma.$VeterinaryGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VeterinaryGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VeterinaryGroupFindUniqueOrThrowArgs} args - Arguments to find a VeterinaryGroup
     * @example
     * // Get one VeterinaryGroup
     * const veterinaryGroup = await prisma.veterinaryGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VeterinaryGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, VeterinaryGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VeterinaryGroupClient<$Result.GetResult<Prisma.$VeterinaryGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VeterinaryGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinaryGroupFindFirstArgs} args - Arguments to find a VeterinaryGroup
     * @example
     * // Get one VeterinaryGroup
     * const veterinaryGroup = await prisma.veterinaryGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VeterinaryGroupFindFirstArgs>(args?: SelectSubset<T, VeterinaryGroupFindFirstArgs<ExtArgs>>): Prisma__VeterinaryGroupClient<$Result.GetResult<Prisma.$VeterinaryGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VeterinaryGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinaryGroupFindFirstOrThrowArgs} args - Arguments to find a VeterinaryGroup
     * @example
     * // Get one VeterinaryGroup
     * const veterinaryGroup = await prisma.veterinaryGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VeterinaryGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, VeterinaryGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__VeterinaryGroupClient<$Result.GetResult<Prisma.$VeterinaryGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VeterinaryGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinaryGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VeterinaryGroups
     * const veterinaryGroups = await prisma.veterinaryGroup.findMany()
     * 
     * // Get first 10 VeterinaryGroups
     * const veterinaryGroups = await prisma.veterinaryGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veterinaryGroupWithIdOnly = await prisma.veterinaryGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VeterinaryGroupFindManyArgs>(args?: SelectSubset<T, VeterinaryGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeterinaryGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VeterinaryGroup.
     * @param {VeterinaryGroupCreateArgs} args - Arguments to create a VeterinaryGroup.
     * @example
     * // Create one VeterinaryGroup
     * const VeterinaryGroup = await prisma.veterinaryGroup.create({
     *   data: {
     *     // ... data to create a VeterinaryGroup
     *   }
     * })
     * 
     */
    create<T extends VeterinaryGroupCreateArgs>(args: SelectSubset<T, VeterinaryGroupCreateArgs<ExtArgs>>): Prisma__VeterinaryGroupClient<$Result.GetResult<Prisma.$VeterinaryGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VeterinaryGroups.
     * @param {VeterinaryGroupCreateManyArgs} args - Arguments to create many VeterinaryGroups.
     * @example
     * // Create many VeterinaryGroups
     * const veterinaryGroup = await prisma.veterinaryGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VeterinaryGroupCreateManyArgs>(args?: SelectSubset<T, VeterinaryGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VeterinaryGroups and returns the data saved in the database.
     * @param {VeterinaryGroupCreateManyAndReturnArgs} args - Arguments to create many VeterinaryGroups.
     * @example
     * // Create many VeterinaryGroups
     * const veterinaryGroup = await prisma.veterinaryGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VeterinaryGroups and only return the `id`
     * const veterinaryGroupWithIdOnly = await prisma.veterinaryGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VeterinaryGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, VeterinaryGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeterinaryGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VeterinaryGroup.
     * @param {VeterinaryGroupDeleteArgs} args - Arguments to delete one VeterinaryGroup.
     * @example
     * // Delete one VeterinaryGroup
     * const VeterinaryGroup = await prisma.veterinaryGroup.delete({
     *   where: {
     *     // ... filter to delete one VeterinaryGroup
     *   }
     * })
     * 
     */
    delete<T extends VeterinaryGroupDeleteArgs>(args: SelectSubset<T, VeterinaryGroupDeleteArgs<ExtArgs>>): Prisma__VeterinaryGroupClient<$Result.GetResult<Prisma.$VeterinaryGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VeterinaryGroup.
     * @param {VeterinaryGroupUpdateArgs} args - Arguments to update one VeterinaryGroup.
     * @example
     * // Update one VeterinaryGroup
     * const veterinaryGroup = await prisma.veterinaryGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VeterinaryGroupUpdateArgs>(args: SelectSubset<T, VeterinaryGroupUpdateArgs<ExtArgs>>): Prisma__VeterinaryGroupClient<$Result.GetResult<Prisma.$VeterinaryGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VeterinaryGroups.
     * @param {VeterinaryGroupDeleteManyArgs} args - Arguments to filter VeterinaryGroups to delete.
     * @example
     * // Delete a few VeterinaryGroups
     * const { count } = await prisma.veterinaryGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VeterinaryGroupDeleteManyArgs>(args?: SelectSubset<T, VeterinaryGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VeterinaryGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinaryGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VeterinaryGroups
     * const veterinaryGroup = await prisma.veterinaryGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VeterinaryGroupUpdateManyArgs>(args: SelectSubset<T, VeterinaryGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VeterinaryGroups and returns the data updated in the database.
     * @param {VeterinaryGroupUpdateManyAndReturnArgs} args - Arguments to update many VeterinaryGroups.
     * @example
     * // Update many VeterinaryGroups
     * const veterinaryGroup = await prisma.veterinaryGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VeterinaryGroups and only return the `id`
     * const veterinaryGroupWithIdOnly = await prisma.veterinaryGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends VeterinaryGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, VeterinaryGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeterinaryGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VeterinaryGroup.
     * @param {VeterinaryGroupUpsertArgs} args - Arguments to update or create a VeterinaryGroup.
     * @example
     * // Update or create a VeterinaryGroup
     * const veterinaryGroup = await prisma.veterinaryGroup.upsert({
     *   create: {
     *     // ... data to create a VeterinaryGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VeterinaryGroup we want to update
     *   }
     * })
     */
    upsert<T extends VeterinaryGroupUpsertArgs>(args: SelectSubset<T, VeterinaryGroupUpsertArgs<ExtArgs>>): Prisma__VeterinaryGroupClient<$Result.GetResult<Prisma.$VeterinaryGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VeterinaryGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinaryGroupCountArgs} args - Arguments to filter VeterinaryGroups to count.
     * @example
     * // Count the number of VeterinaryGroups
     * const count = await prisma.veterinaryGroup.count({
     *   where: {
     *     // ... the filter for the VeterinaryGroups we want to count
     *   }
     * })
    **/
    count<T extends VeterinaryGroupCountArgs>(
      args?: Subset<T, VeterinaryGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeterinaryGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VeterinaryGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinaryGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VeterinaryGroupAggregateArgs>(args: Subset<T, VeterinaryGroupAggregateArgs>): Prisma.PrismaPromise<GetVeterinaryGroupAggregateType<T>>

    /**
     * Group by VeterinaryGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinaryGroupGroupByArgs} args - Group by arguments.
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
      T extends VeterinaryGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeterinaryGroupGroupByArgs['orderBy'] }
        : { orderBy?: VeterinaryGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VeterinaryGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeterinaryGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VeterinaryGroup model
   */
  readonly fields: VeterinaryGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VeterinaryGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeterinaryGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locations<T extends VeterinaryGroup$locationsArgs<ExtArgs> = {}>(args?: Subset<T, VeterinaryGroup$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VeterinaryGroup model
   */ 
  interface VeterinaryGroupFieldRefs {
    readonly id: FieldRef<"VeterinaryGroup", 'Int'>
    readonly name: FieldRef<"VeterinaryGroup", 'String'>
    readonly group_id: FieldRef<"VeterinaryGroup", 'String'>
    readonly createdAt: FieldRef<"VeterinaryGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"VeterinaryGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VeterinaryGroup findUnique
   */
  export type VeterinaryGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeterinaryGroup
     */
    select?: VeterinaryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeterinaryGroup
     */
    omit?: VeterinaryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinaryGroupInclude<ExtArgs> | null
    /**
     * Filter, which VeterinaryGroup to fetch.
     */
    where: VeterinaryGroupWhereUniqueInput
  }

  /**
   * VeterinaryGroup findUniqueOrThrow
   */
  export type VeterinaryGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeterinaryGroup
     */
    select?: VeterinaryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeterinaryGroup
     */
    omit?: VeterinaryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinaryGroupInclude<ExtArgs> | null
    /**
     * Filter, which VeterinaryGroup to fetch.
     */
    where: VeterinaryGroupWhereUniqueInput
  }

  /**
   * VeterinaryGroup findFirst
   */
  export type VeterinaryGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeterinaryGroup
     */
    select?: VeterinaryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeterinaryGroup
     */
    omit?: VeterinaryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinaryGroupInclude<ExtArgs> | null
    /**
     * Filter, which VeterinaryGroup to fetch.
     */
    where?: VeterinaryGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeterinaryGroups to fetch.
     */
    orderBy?: VeterinaryGroupOrderByWithRelationInput | VeterinaryGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VeterinaryGroups.
     */
    cursor?: VeterinaryGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeterinaryGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeterinaryGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VeterinaryGroups.
     */
    distinct?: VeterinaryGroupScalarFieldEnum | VeterinaryGroupScalarFieldEnum[]
  }

  /**
   * VeterinaryGroup findFirstOrThrow
   */
  export type VeterinaryGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeterinaryGroup
     */
    select?: VeterinaryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeterinaryGroup
     */
    omit?: VeterinaryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinaryGroupInclude<ExtArgs> | null
    /**
     * Filter, which VeterinaryGroup to fetch.
     */
    where?: VeterinaryGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeterinaryGroups to fetch.
     */
    orderBy?: VeterinaryGroupOrderByWithRelationInput | VeterinaryGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VeterinaryGroups.
     */
    cursor?: VeterinaryGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeterinaryGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeterinaryGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VeterinaryGroups.
     */
    distinct?: VeterinaryGroupScalarFieldEnum | VeterinaryGroupScalarFieldEnum[]
  }

  /**
   * VeterinaryGroup findMany
   */
  export type VeterinaryGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeterinaryGroup
     */
    select?: VeterinaryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeterinaryGroup
     */
    omit?: VeterinaryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinaryGroupInclude<ExtArgs> | null
    /**
     * Filter, which VeterinaryGroups to fetch.
     */
    where?: VeterinaryGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeterinaryGroups to fetch.
     */
    orderBy?: VeterinaryGroupOrderByWithRelationInput | VeterinaryGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VeterinaryGroups.
     */
    cursor?: VeterinaryGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeterinaryGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeterinaryGroups.
     */
    skip?: number
    distinct?: VeterinaryGroupScalarFieldEnum | VeterinaryGroupScalarFieldEnum[]
  }

  /**
   * VeterinaryGroup create
   */
  export type VeterinaryGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeterinaryGroup
     */
    select?: VeterinaryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeterinaryGroup
     */
    omit?: VeterinaryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinaryGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a VeterinaryGroup.
     */
    data: XOR<VeterinaryGroupCreateInput, VeterinaryGroupUncheckedCreateInput>
  }

  /**
   * VeterinaryGroup createMany
   */
  export type VeterinaryGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VeterinaryGroups.
     */
    data: VeterinaryGroupCreateManyInput | VeterinaryGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VeterinaryGroup createManyAndReturn
   */
  export type VeterinaryGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeterinaryGroup
     */
    select?: VeterinaryGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VeterinaryGroup
     */
    omit?: VeterinaryGroupOmit<ExtArgs> | null
    /**
     * The data used to create many VeterinaryGroups.
     */
    data: VeterinaryGroupCreateManyInput | VeterinaryGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VeterinaryGroup update
   */
  export type VeterinaryGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeterinaryGroup
     */
    select?: VeterinaryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeterinaryGroup
     */
    omit?: VeterinaryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinaryGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a VeterinaryGroup.
     */
    data: XOR<VeterinaryGroupUpdateInput, VeterinaryGroupUncheckedUpdateInput>
    /**
     * Choose, which VeterinaryGroup to update.
     */
    where: VeterinaryGroupWhereUniqueInput
  }

  /**
   * VeterinaryGroup updateMany
   */
  export type VeterinaryGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VeterinaryGroups.
     */
    data: XOR<VeterinaryGroupUpdateManyMutationInput, VeterinaryGroupUncheckedUpdateManyInput>
    /**
     * Filter which VeterinaryGroups to update
     */
    where?: VeterinaryGroupWhereInput
    /**
     * Limit how many VeterinaryGroups to update.
     */
    limit?: number
  }

  /**
   * VeterinaryGroup updateManyAndReturn
   */
  export type VeterinaryGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeterinaryGroup
     */
    select?: VeterinaryGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VeterinaryGroup
     */
    omit?: VeterinaryGroupOmit<ExtArgs> | null
    /**
     * The data used to update VeterinaryGroups.
     */
    data: XOR<VeterinaryGroupUpdateManyMutationInput, VeterinaryGroupUncheckedUpdateManyInput>
    /**
     * Filter which VeterinaryGroups to update
     */
    where?: VeterinaryGroupWhereInput
    /**
     * Limit how many VeterinaryGroups to update.
     */
    limit?: number
  }

  /**
   * VeterinaryGroup upsert
   */
  export type VeterinaryGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeterinaryGroup
     */
    select?: VeterinaryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeterinaryGroup
     */
    omit?: VeterinaryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinaryGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the VeterinaryGroup to update in case it exists.
     */
    where: VeterinaryGroupWhereUniqueInput
    /**
     * In case the VeterinaryGroup found by the `where` argument doesn't exist, create a new VeterinaryGroup with this data.
     */
    create: XOR<VeterinaryGroupCreateInput, VeterinaryGroupUncheckedCreateInput>
    /**
     * In case the VeterinaryGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeterinaryGroupUpdateInput, VeterinaryGroupUncheckedUpdateInput>
  }

  /**
   * VeterinaryGroup delete
   */
  export type VeterinaryGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeterinaryGroup
     */
    select?: VeterinaryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeterinaryGroup
     */
    omit?: VeterinaryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinaryGroupInclude<ExtArgs> | null
    /**
     * Filter which VeterinaryGroup to delete.
     */
    where: VeterinaryGroupWhereUniqueInput
  }

  /**
   * VeterinaryGroup deleteMany
   */
  export type VeterinaryGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VeterinaryGroups to delete
     */
    where?: VeterinaryGroupWhereInput
    /**
     * Limit how many VeterinaryGroups to delete.
     */
    limit?: number
  }

  /**
   * VeterinaryGroup.locations
   */
  export type VeterinaryGroup$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * VeterinaryGroup without action
   */
  export type VeterinaryGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeterinaryGroup
     */
    select?: VeterinaryGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VeterinaryGroup
     */
    omit?: VeterinaryGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinaryGroupInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
    veterinaryGroupId: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
    veterinaryGroupId: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    name: string | null
    veterinaryGroupId: number | null
    locationId: string | null
    groupHq: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    veterinaryGroupId: number | null
    locationId: string | null
    groupHq: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    veterinaryGroupId: number
    locationId: number
    groupHq: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    veterinaryGroupId?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    veterinaryGroupId?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    veterinaryGroupId?: true
    locationId?: true
    groupHq?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    veterinaryGroupId?: true
    locationId?: true
    groupHq?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    veterinaryGroupId?: true
    locationId?: true
    groupHq?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    name: string
    veterinaryGroupId: number
    locationId: string
    groupHq: boolean
    status: string
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    veterinaryGroupId?: boolean
    locationId?: boolean
    groupHq?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    veterinaryGroup?: boolean | VeterinaryGroupDefaultArgs<ExtArgs>
    attributes?: boolean | Location$attributesArgs<ExtArgs>
    AttributesOnLocations?: boolean | Location$AttributesOnLocationsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    veterinaryGroupId?: boolean
    locationId?: boolean
    groupHq?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    veterinaryGroup?: boolean | VeterinaryGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    veterinaryGroupId?: boolean
    locationId?: boolean
    groupHq?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    veterinaryGroup?: boolean | VeterinaryGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    name?: boolean
    veterinaryGroupId?: boolean
    locationId?: boolean
    groupHq?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "veterinaryGroupId" | "locationId" | "groupHq" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veterinaryGroup?: boolean | VeterinaryGroupDefaultArgs<ExtArgs>
    attributes?: boolean | Location$attributesArgs<ExtArgs>
    AttributesOnLocations?: boolean | Location$AttributesOnLocationsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veterinaryGroup?: boolean | VeterinaryGroupDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veterinaryGroup?: boolean | VeterinaryGroupDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      veterinaryGroup: Prisma.$VeterinaryGroupPayload<ExtArgs>
      attributes: Prisma.$AttributePayload<ExtArgs>[]
      AttributesOnLocations: Prisma.$AttributesOnLocationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      veterinaryGroupId: number
      locationId: string
      groupHq: boolean
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    veterinaryGroup<T extends VeterinaryGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VeterinaryGroupDefaultArgs<ExtArgs>>): Prisma__VeterinaryGroupClient<$Result.GetResult<Prisma.$VeterinaryGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attributes<T extends Location$attributesArgs<ExtArgs> = {}>(args?: Subset<T, Location$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AttributesOnLocations<T extends Location$AttributesOnLocationsArgs<ExtArgs> = {}>(args?: Subset<T, Location$AttributesOnLocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributesOnLocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Location model
   */ 
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly name: FieldRef<"Location", 'String'>
    readonly veterinaryGroupId: FieldRef<"Location", 'Int'>
    readonly locationId: FieldRef<"Location", 'String'>
    readonly groupHq: FieldRef<"Location", 'Boolean'>
    readonly status: FieldRef<"Location", 'String'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.attributes
   */
  export type Location$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attribute
     */
    omit?: AttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeInclude<ExtArgs> | null
    where?: AttributeWhereInput
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    cursor?: AttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }

  /**
   * Location.AttributesOnLocations
   */
  export type Location$AttributesOnLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributesOnLocations
     */
    select?: AttributesOnLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributesOnLocations
     */
    omit?: AttributesOnLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesOnLocationsInclude<ExtArgs> | null
    where?: AttributesOnLocationsWhereInput
    orderBy?: AttributesOnLocationsOrderByWithRelationInput | AttributesOnLocationsOrderByWithRelationInput[]
    cursor?: AttributesOnLocationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributesOnLocationsScalarFieldEnum | AttributesOnLocationsScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model AttributesOnLocations
   */

  export type AggregateAttributesOnLocations = {
    _count: AttributesOnLocationsCountAggregateOutputType | null
    _avg: AttributesOnLocationsAvgAggregateOutputType | null
    _sum: AttributesOnLocationsSumAggregateOutputType | null
    _min: AttributesOnLocationsMinAggregateOutputType | null
    _max: AttributesOnLocationsMaxAggregateOutputType | null
  }

  export type AttributesOnLocationsAvgAggregateOutputType = {
    locationId: number | null
    attributeId: number | null
  }

  export type AttributesOnLocationsSumAggregateOutputType = {
    locationId: number | null
    attributeId: number | null
  }

  export type AttributesOnLocationsMinAggregateOutputType = {
    locationId: number | null
    attributeId: number | null
  }

  export type AttributesOnLocationsMaxAggregateOutputType = {
    locationId: number | null
    attributeId: number | null
  }

  export type AttributesOnLocationsCountAggregateOutputType = {
    locationId: number
    attributeId: number
    _all: number
  }


  export type AttributesOnLocationsAvgAggregateInputType = {
    locationId?: true
    attributeId?: true
  }

  export type AttributesOnLocationsSumAggregateInputType = {
    locationId?: true
    attributeId?: true
  }

  export type AttributesOnLocationsMinAggregateInputType = {
    locationId?: true
    attributeId?: true
  }

  export type AttributesOnLocationsMaxAggregateInputType = {
    locationId?: true
    attributeId?: true
  }

  export type AttributesOnLocationsCountAggregateInputType = {
    locationId?: true
    attributeId?: true
    _all?: true
  }

  export type AttributesOnLocationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributesOnLocations to aggregate.
     */
    where?: AttributesOnLocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributesOnLocations to fetch.
     */
    orderBy?: AttributesOnLocationsOrderByWithRelationInput | AttributesOnLocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributesOnLocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributesOnLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributesOnLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttributesOnLocations
    **/
    _count?: true | AttributesOnLocationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttributesOnLocationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttributesOnLocationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributesOnLocationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributesOnLocationsMaxAggregateInputType
  }

  export type GetAttributesOnLocationsAggregateType<T extends AttributesOnLocationsAggregateArgs> = {
        [P in keyof T & keyof AggregateAttributesOnLocations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttributesOnLocations[P]>
      : GetScalarType<T[P], AggregateAttributesOnLocations[P]>
  }




  export type AttributesOnLocationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributesOnLocationsWhereInput
    orderBy?: AttributesOnLocationsOrderByWithAggregationInput | AttributesOnLocationsOrderByWithAggregationInput[]
    by: AttributesOnLocationsScalarFieldEnum[] | AttributesOnLocationsScalarFieldEnum
    having?: AttributesOnLocationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributesOnLocationsCountAggregateInputType | true
    _avg?: AttributesOnLocationsAvgAggregateInputType
    _sum?: AttributesOnLocationsSumAggregateInputType
    _min?: AttributesOnLocationsMinAggregateInputType
    _max?: AttributesOnLocationsMaxAggregateInputType
  }

  export type AttributesOnLocationsGroupByOutputType = {
    locationId: number
    attributeId: number
    _count: AttributesOnLocationsCountAggregateOutputType | null
    _avg: AttributesOnLocationsAvgAggregateOutputType | null
    _sum: AttributesOnLocationsSumAggregateOutputType | null
    _min: AttributesOnLocationsMinAggregateOutputType | null
    _max: AttributesOnLocationsMaxAggregateOutputType | null
  }

  type GetAttributesOnLocationsGroupByPayload<T extends AttributesOnLocationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributesOnLocationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributesOnLocationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributesOnLocationsGroupByOutputType[P]>
            : GetScalarType<T[P], AttributesOnLocationsGroupByOutputType[P]>
        }
      >
    >


  export type AttributesOnLocationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    locationId?: boolean
    attributeId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributesOnLocations"]>

  export type AttributesOnLocationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    locationId?: boolean
    attributeId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributesOnLocations"]>

  export type AttributesOnLocationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    locationId?: boolean
    attributeId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributesOnLocations"]>

  export type AttributesOnLocationsSelectScalar = {
    locationId?: boolean
    attributeId?: boolean
  }

  export type AttributesOnLocationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"locationId" | "attributeId", ExtArgs["result"]["attributesOnLocations"]>
  export type AttributesOnLocationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }
  export type AttributesOnLocationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }
  export type AttributesOnLocationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    attribute?: boolean | AttributeDefaultArgs<ExtArgs>
  }

  export type $AttributesOnLocationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttributesOnLocations"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      attribute: Prisma.$AttributePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      locationId: number
      attributeId: number
    }, ExtArgs["result"]["attributesOnLocations"]>
    composites: {}
  }

  type AttributesOnLocationsGetPayload<S extends boolean | null | undefined | AttributesOnLocationsDefaultArgs> = $Result.GetResult<Prisma.$AttributesOnLocationsPayload, S>

  type AttributesOnLocationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttributesOnLocationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttributesOnLocationsCountAggregateInputType | true
    }

  export interface AttributesOnLocationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttributesOnLocations'], meta: { name: 'AttributesOnLocations' } }
    /**
     * Find zero or one AttributesOnLocations that matches the filter.
     * @param {AttributesOnLocationsFindUniqueArgs} args - Arguments to find a AttributesOnLocations
     * @example
     * // Get one AttributesOnLocations
     * const attributesOnLocations = await prisma.attributesOnLocations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttributesOnLocationsFindUniqueArgs>(args: SelectSubset<T, AttributesOnLocationsFindUniqueArgs<ExtArgs>>): Prisma__AttributesOnLocationsClient<$Result.GetResult<Prisma.$AttributesOnLocationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttributesOnLocations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttributesOnLocationsFindUniqueOrThrowArgs} args - Arguments to find a AttributesOnLocations
     * @example
     * // Get one AttributesOnLocations
     * const attributesOnLocations = await prisma.attributesOnLocations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttributesOnLocationsFindUniqueOrThrowArgs>(args: SelectSubset<T, AttributesOnLocationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttributesOnLocationsClient<$Result.GetResult<Prisma.$AttributesOnLocationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttributesOnLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributesOnLocationsFindFirstArgs} args - Arguments to find a AttributesOnLocations
     * @example
     * // Get one AttributesOnLocations
     * const attributesOnLocations = await prisma.attributesOnLocations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttributesOnLocationsFindFirstArgs>(args?: SelectSubset<T, AttributesOnLocationsFindFirstArgs<ExtArgs>>): Prisma__AttributesOnLocationsClient<$Result.GetResult<Prisma.$AttributesOnLocationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttributesOnLocations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributesOnLocationsFindFirstOrThrowArgs} args - Arguments to find a AttributesOnLocations
     * @example
     * // Get one AttributesOnLocations
     * const attributesOnLocations = await prisma.attributesOnLocations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttributesOnLocationsFindFirstOrThrowArgs>(args?: SelectSubset<T, AttributesOnLocationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttributesOnLocationsClient<$Result.GetResult<Prisma.$AttributesOnLocationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttributesOnLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributesOnLocationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttributesOnLocations
     * const attributesOnLocations = await prisma.attributesOnLocations.findMany()
     * 
     * // Get first 10 AttributesOnLocations
     * const attributesOnLocations = await prisma.attributesOnLocations.findMany({ take: 10 })
     * 
     * // Only select the `locationId`
     * const attributesOnLocationsWithLocationIdOnly = await prisma.attributesOnLocations.findMany({ select: { locationId: true } })
     * 
     */
    findMany<T extends AttributesOnLocationsFindManyArgs>(args?: SelectSubset<T, AttributesOnLocationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributesOnLocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttributesOnLocations.
     * @param {AttributesOnLocationsCreateArgs} args - Arguments to create a AttributesOnLocations.
     * @example
     * // Create one AttributesOnLocations
     * const AttributesOnLocations = await prisma.attributesOnLocations.create({
     *   data: {
     *     // ... data to create a AttributesOnLocations
     *   }
     * })
     * 
     */
    create<T extends AttributesOnLocationsCreateArgs>(args: SelectSubset<T, AttributesOnLocationsCreateArgs<ExtArgs>>): Prisma__AttributesOnLocationsClient<$Result.GetResult<Prisma.$AttributesOnLocationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttributesOnLocations.
     * @param {AttributesOnLocationsCreateManyArgs} args - Arguments to create many AttributesOnLocations.
     * @example
     * // Create many AttributesOnLocations
     * const attributesOnLocations = await prisma.attributesOnLocations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttributesOnLocationsCreateManyArgs>(args?: SelectSubset<T, AttributesOnLocationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttributesOnLocations and returns the data saved in the database.
     * @param {AttributesOnLocationsCreateManyAndReturnArgs} args - Arguments to create many AttributesOnLocations.
     * @example
     * // Create many AttributesOnLocations
     * const attributesOnLocations = await prisma.attributesOnLocations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttributesOnLocations and only return the `locationId`
     * const attributesOnLocationsWithLocationIdOnly = await prisma.attributesOnLocations.createManyAndReturn({
     *   select: { locationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttributesOnLocationsCreateManyAndReturnArgs>(args?: SelectSubset<T, AttributesOnLocationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributesOnLocationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttributesOnLocations.
     * @param {AttributesOnLocationsDeleteArgs} args - Arguments to delete one AttributesOnLocations.
     * @example
     * // Delete one AttributesOnLocations
     * const AttributesOnLocations = await prisma.attributesOnLocations.delete({
     *   where: {
     *     // ... filter to delete one AttributesOnLocations
     *   }
     * })
     * 
     */
    delete<T extends AttributesOnLocationsDeleteArgs>(args: SelectSubset<T, AttributesOnLocationsDeleteArgs<ExtArgs>>): Prisma__AttributesOnLocationsClient<$Result.GetResult<Prisma.$AttributesOnLocationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttributesOnLocations.
     * @param {AttributesOnLocationsUpdateArgs} args - Arguments to update one AttributesOnLocations.
     * @example
     * // Update one AttributesOnLocations
     * const attributesOnLocations = await prisma.attributesOnLocations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttributesOnLocationsUpdateArgs>(args: SelectSubset<T, AttributesOnLocationsUpdateArgs<ExtArgs>>): Prisma__AttributesOnLocationsClient<$Result.GetResult<Prisma.$AttributesOnLocationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttributesOnLocations.
     * @param {AttributesOnLocationsDeleteManyArgs} args - Arguments to filter AttributesOnLocations to delete.
     * @example
     * // Delete a few AttributesOnLocations
     * const { count } = await prisma.attributesOnLocations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttributesOnLocationsDeleteManyArgs>(args?: SelectSubset<T, AttributesOnLocationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributesOnLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributesOnLocationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttributesOnLocations
     * const attributesOnLocations = await prisma.attributesOnLocations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttributesOnLocationsUpdateManyArgs>(args: SelectSubset<T, AttributesOnLocationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributesOnLocations and returns the data updated in the database.
     * @param {AttributesOnLocationsUpdateManyAndReturnArgs} args - Arguments to update many AttributesOnLocations.
     * @example
     * // Update many AttributesOnLocations
     * const attributesOnLocations = await prisma.attributesOnLocations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttributesOnLocations and only return the `locationId`
     * const attributesOnLocationsWithLocationIdOnly = await prisma.attributesOnLocations.updateManyAndReturn({
     *   select: { locationId: true },
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
    updateManyAndReturn<T extends AttributesOnLocationsUpdateManyAndReturnArgs>(args: SelectSubset<T, AttributesOnLocationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributesOnLocationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttributesOnLocations.
     * @param {AttributesOnLocationsUpsertArgs} args - Arguments to update or create a AttributesOnLocations.
     * @example
     * // Update or create a AttributesOnLocations
     * const attributesOnLocations = await prisma.attributesOnLocations.upsert({
     *   create: {
     *     // ... data to create a AttributesOnLocations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttributesOnLocations we want to update
     *   }
     * })
     */
    upsert<T extends AttributesOnLocationsUpsertArgs>(args: SelectSubset<T, AttributesOnLocationsUpsertArgs<ExtArgs>>): Prisma__AttributesOnLocationsClient<$Result.GetResult<Prisma.$AttributesOnLocationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttributesOnLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributesOnLocationsCountArgs} args - Arguments to filter AttributesOnLocations to count.
     * @example
     * // Count the number of AttributesOnLocations
     * const count = await prisma.attributesOnLocations.count({
     *   where: {
     *     // ... the filter for the AttributesOnLocations we want to count
     *   }
     * })
    **/
    count<T extends AttributesOnLocationsCountArgs>(
      args?: Subset<T, AttributesOnLocationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributesOnLocationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttributesOnLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributesOnLocationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttributesOnLocationsAggregateArgs>(args: Subset<T, AttributesOnLocationsAggregateArgs>): Prisma.PrismaPromise<GetAttributesOnLocationsAggregateType<T>>

    /**
     * Group by AttributesOnLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributesOnLocationsGroupByArgs} args - Group by arguments.
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
      T extends AttributesOnLocationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributesOnLocationsGroupByArgs['orderBy'] }
        : { orderBy?: AttributesOnLocationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttributesOnLocationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributesOnLocationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttributesOnLocations model
   */
  readonly fields: AttributesOnLocationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttributesOnLocations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributesOnLocationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attribute<T extends AttributeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttributeDefaultArgs<ExtArgs>>): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AttributesOnLocations model
   */ 
  interface AttributesOnLocationsFieldRefs {
    readonly locationId: FieldRef<"AttributesOnLocations", 'Int'>
    readonly attributeId: FieldRef<"AttributesOnLocations", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AttributesOnLocations findUnique
   */
  export type AttributesOnLocationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributesOnLocations
     */
    select?: AttributesOnLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributesOnLocations
     */
    omit?: AttributesOnLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesOnLocationsInclude<ExtArgs> | null
    /**
     * Filter, which AttributesOnLocations to fetch.
     */
    where: AttributesOnLocationsWhereUniqueInput
  }

  /**
   * AttributesOnLocations findUniqueOrThrow
   */
  export type AttributesOnLocationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributesOnLocations
     */
    select?: AttributesOnLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributesOnLocations
     */
    omit?: AttributesOnLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesOnLocationsInclude<ExtArgs> | null
    /**
     * Filter, which AttributesOnLocations to fetch.
     */
    where: AttributesOnLocationsWhereUniqueInput
  }

  /**
   * AttributesOnLocations findFirst
   */
  export type AttributesOnLocationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributesOnLocations
     */
    select?: AttributesOnLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributesOnLocations
     */
    omit?: AttributesOnLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesOnLocationsInclude<ExtArgs> | null
    /**
     * Filter, which AttributesOnLocations to fetch.
     */
    where?: AttributesOnLocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributesOnLocations to fetch.
     */
    orderBy?: AttributesOnLocationsOrderByWithRelationInput | AttributesOnLocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributesOnLocations.
     */
    cursor?: AttributesOnLocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributesOnLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributesOnLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributesOnLocations.
     */
    distinct?: AttributesOnLocationsScalarFieldEnum | AttributesOnLocationsScalarFieldEnum[]
  }

  /**
   * AttributesOnLocations findFirstOrThrow
   */
  export type AttributesOnLocationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributesOnLocations
     */
    select?: AttributesOnLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributesOnLocations
     */
    omit?: AttributesOnLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesOnLocationsInclude<ExtArgs> | null
    /**
     * Filter, which AttributesOnLocations to fetch.
     */
    where?: AttributesOnLocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributesOnLocations to fetch.
     */
    orderBy?: AttributesOnLocationsOrderByWithRelationInput | AttributesOnLocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributesOnLocations.
     */
    cursor?: AttributesOnLocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributesOnLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributesOnLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributesOnLocations.
     */
    distinct?: AttributesOnLocationsScalarFieldEnum | AttributesOnLocationsScalarFieldEnum[]
  }

  /**
   * AttributesOnLocations findMany
   */
  export type AttributesOnLocationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributesOnLocations
     */
    select?: AttributesOnLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributesOnLocations
     */
    omit?: AttributesOnLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesOnLocationsInclude<ExtArgs> | null
    /**
     * Filter, which AttributesOnLocations to fetch.
     */
    where?: AttributesOnLocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributesOnLocations to fetch.
     */
    orderBy?: AttributesOnLocationsOrderByWithRelationInput | AttributesOnLocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttributesOnLocations.
     */
    cursor?: AttributesOnLocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributesOnLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributesOnLocations.
     */
    skip?: number
    distinct?: AttributesOnLocationsScalarFieldEnum | AttributesOnLocationsScalarFieldEnum[]
  }

  /**
   * AttributesOnLocations create
   */
  export type AttributesOnLocationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributesOnLocations
     */
    select?: AttributesOnLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributesOnLocations
     */
    omit?: AttributesOnLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesOnLocationsInclude<ExtArgs> | null
    /**
     * The data needed to create a AttributesOnLocations.
     */
    data: XOR<AttributesOnLocationsCreateInput, AttributesOnLocationsUncheckedCreateInput>
  }

  /**
   * AttributesOnLocations createMany
   */
  export type AttributesOnLocationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttributesOnLocations.
     */
    data: AttributesOnLocationsCreateManyInput | AttributesOnLocationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttributesOnLocations createManyAndReturn
   */
  export type AttributesOnLocationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributesOnLocations
     */
    select?: AttributesOnLocationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttributesOnLocations
     */
    omit?: AttributesOnLocationsOmit<ExtArgs> | null
    /**
     * The data used to create many AttributesOnLocations.
     */
    data: AttributesOnLocationsCreateManyInput | AttributesOnLocationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesOnLocationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttributesOnLocations update
   */
  export type AttributesOnLocationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributesOnLocations
     */
    select?: AttributesOnLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributesOnLocations
     */
    omit?: AttributesOnLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesOnLocationsInclude<ExtArgs> | null
    /**
     * The data needed to update a AttributesOnLocations.
     */
    data: XOR<AttributesOnLocationsUpdateInput, AttributesOnLocationsUncheckedUpdateInput>
    /**
     * Choose, which AttributesOnLocations to update.
     */
    where: AttributesOnLocationsWhereUniqueInput
  }

  /**
   * AttributesOnLocations updateMany
   */
  export type AttributesOnLocationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttributesOnLocations.
     */
    data: XOR<AttributesOnLocationsUpdateManyMutationInput, AttributesOnLocationsUncheckedUpdateManyInput>
    /**
     * Filter which AttributesOnLocations to update
     */
    where?: AttributesOnLocationsWhereInput
    /**
     * Limit how many AttributesOnLocations to update.
     */
    limit?: number
  }

  /**
   * AttributesOnLocations updateManyAndReturn
   */
  export type AttributesOnLocationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributesOnLocations
     */
    select?: AttributesOnLocationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttributesOnLocations
     */
    omit?: AttributesOnLocationsOmit<ExtArgs> | null
    /**
     * The data used to update AttributesOnLocations.
     */
    data: XOR<AttributesOnLocationsUpdateManyMutationInput, AttributesOnLocationsUncheckedUpdateManyInput>
    /**
     * Filter which AttributesOnLocations to update
     */
    where?: AttributesOnLocationsWhereInput
    /**
     * Limit how many AttributesOnLocations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesOnLocationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttributesOnLocations upsert
   */
  export type AttributesOnLocationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributesOnLocations
     */
    select?: AttributesOnLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributesOnLocations
     */
    omit?: AttributesOnLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesOnLocationsInclude<ExtArgs> | null
    /**
     * The filter to search for the AttributesOnLocations to update in case it exists.
     */
    where: AttributesOnLocationsWhereUniqueInput
    /**
     * In case the AttributesOnLocations found by the `where` argument doesn't exist, create a new AttributesOnLocations with this data.
     */
    create: XOR<AttributesOnLocationsCreateInput, AttributesOnLocationsUncheckedCreateInput>
    /**
     * In case the AttributesOnLocations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributesOnLocationsUpdateInput, AttributesOnLocationsUncheckedUpdateInput>
  }

  /**
   * AttributesOnLocations delete
   */
  export type AttributesOnLocationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributesOnLocations
     */
    select?: AttributesOnLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributesOnLocations
     */
    omit?: AttributesOnLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesOnLocationsInclude<ExtArgs> | null
    /**
     * Filter which AttributesOnLocations to delete.
     */
    where: AttributesOnLocationsWhereUniqueInput
  }

  /**
   * AttributesOnLocations deleteMany
   */
  export type AttributesOnLocationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributesOnLocations to delete
     */
    where?: AttributesOnLocationsWhereInput
    /**
     * Limit how many AttributesOnLocations to delete.
     */
    limit?: number
  }

  /**
   * AttributesOnLocations without action
   */
  export type AttributesOnLocationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributesOnLocations
     */
    select?: AttributesOnLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributesOnLocations
     */
    omit?: AttributesOnLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributesOnLocationsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    refreshToken: 'refreshToken',
    roleName: 'roleName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const AttributeTypeScalarFieldEnum: {
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttributeTypeScalarFieldEnum = (typeof AttributeTypeScalarFieldEnum)[keyof typeof AttributeTypeScalarFieldEnum]


  export const AttributeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    order: 'order',
    typeName: 'typeName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttributeScalarFieldEnum = (typeof AttributeScalarFieldEnum)[keyof typeof AttributeScalarFieldEnum]


  export const VeterinaryGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    group_id: 'group_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VeterinaryGroupScalarFieldEnum = (typeof VeterinaryGroupScalarFieldEnum)[keyof typeof VeterinaryGroupScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    veterinaryGroupId: 'veterinaryGroupId',
    locationId: 'locationId',
    groupHq: 'groupHq',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const AttributesOnLocationsScalarFieldEnum: {
    locationId: 'locationId',
    attributeId: 'attributeId'
  };

  export type AttributesOnLocationsScalarFieldEnum = (typeof AttributesOnLocationsScalarFieldEnum)[keyof typeof AttributesOnLocationsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    roleName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    roleName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: UserRoleOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    roleName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    roleName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    roleName?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    name?: StringFilter<"UserRole"> | string
    description?: StringFilter<"UserRole"> | string
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
    users?: UserListRelationFilter
  }

  export type UserRoleOrderByWithRelationInput = {
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    description?: StringFilter<"UserRole"> | string
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
    users?: UserListRelationFilter
  }, "name" | "name">

  export type UserRoleOrderByWithAggregationInput = {
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"UserRole"> | string
    description?: StringWithAggregatesFilter<"UserRole"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
  }

  export type AttributeTypeWhereInput = {
    AND?: AttributeTypeWhereInput | AttributeTypeWhereInput[]
    OR?: AttributeTypeWhereInput[]
    NOT?: AttributeTypeWhereInput | AttributeTypeWhereInput[]
    name?: StringFilter<"AttributeType"> | string
    description?: StringFilter<"AttributeType"> | string
    createdAt?: DateTimeFilter<"AttributeType"> | Date | string
    updatedAt?: DateTimeFilter<"AttributeType"> | Date | string
    attributes?: AttributeListRelationFilter
  }

  export type AttributeTypeOrderByWithRelationInput = {
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attributes?: AttributeOrderByRelationAggregateInput
  }

  export type AttributeTypeWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: AttributeTypeWhereInput | AttributeTypeWhereInput[]
    OR?: AttributeTypeWhereInput[]
    NOT?: AttributeTypeWhereInput | AttributeTypeWhereInput[]
    description?: StringFilter<"AttributeType"> | string
    createdAt?: DateTimeFilter<"AttributeType"> | Date | string
    updatedAt?: DateTimeFilter<"AttributeType"> | Date | string
    attributes?: AttributeListRelationFilter
  }, "name" | "name">

  export type AttributeTypeOrderByWithAggregationInput = {
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttributeTypeCountOrderByAggregateInput
    _max?: AttributeTypeMaxOrderByAggregateInput
    _min?: AttributeTypeMinOrderByAggregateInput
  }

  export type AttributeTypeScalarWhereWithAggregatesInput = {
    AND?: AttributeTypeScalarWhereWithAggregatesInput | AttributeTypeScalarWhereWithAggregatesInput[]
    OR?: AttributeTypeScalarWhereWithAggregatesInput[]
    NOT?: AttributeTypeScalarWhereWithAggregatesInput | AttributeTypeScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"AttributeType"> | string
    description?: StringWithAggregatesFilter<"AttributeType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AttributeType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AttributeType"> | Date | string
  }

  export type AttributeWhereInput = {
    AND?: AttributeWhereInput | AttributeWhereInput[]
    OR?: AttributeWhereInput[]
    NOT?: AttributeWhereInput | AttributeWhereInput[]
    id?: IntFilter<"Attribute"> | number
    name?: StringFilter<"Attribute"> | string
    order?: IntFilter<"Attribute"> | number
    typeName?: StringFilter<"Attribute"> | string
    createdAt?: DateTimeFilter<"Attribute"> | Date | string
    updatedAt?: DateTimeFilter<"Attribute"> | Date | string
    type?: XOR<AttributeTypeScalarRelationFilter, AttributeTypeWhereInput>
    locations?: LocationListRelationFilter
    AttributesOnLocations?: AttributesOnLocationsListRelationFilter
  }

  export type AttributeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    typeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: AttributeTypeOrderByWithRelationInput
    locations?: LocationOrderByRelationAggregateInput
    AttributesOnLocations?: AttributesOnLocationsOrderByRelationAggregateInput
  }

  export type AttributeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttributeWhereInput | AttributeWhereInput[]
    OR?: AttributeWhereInput[]
    NOT?: AttributeWhereInput | AttributeWhereInput[]
    name?: StringFilter<"Attribute"> | string
    order?: IntFilter<"Attribute"> | number
    typeName?: StringFilter<"Attribute"> | string
    createdAt?: DateTimeFilter<"Attribute"> | Date | string
    updatedAt?: DateTimeFilter<"Attribute"> | Date | string
    type?: XOR<AttributeTypeScalarRelationFilter, AttributeTypeWhereInput>
    locations?: LocationListRelationFilter
    AttributesOnLocations?: AttributesOnLocationsListRelationFilter
  }, "id">

  export type AttributeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    typeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttributeCountOrderByAggregateInput
    _avg?: AttributeAvgOrderByAggregateInput
    _max?: AttributeMaxOrderByAggregateInput
    _min?: AttributeMinOrderByAggregateInput
    _sum?: AttributeSumOrderByAggregateInput
  }

  export type AttributeScalarWhereWithAggregatesInput = {
    AND?: AttributeScalarWhereWithAggregatesInput | AttributeScalarWhereWithAggregatesInput[]
    OR?: AttributeScalarWhereWithAggregatesInput[]
    NOT?: AttributeScalarWhereWithAggregatesInput | AttributeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attribute"> | number
    name?: StringWithAggregatesFilter<"Attribute"> | string
    order?: IntWithAggregatesFilter<"Attribute"> | number
    typeName?: StringWithAggregatesFilter<"Attribute"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Attribute"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attribute"> | Date | string
  }

  export type VeterinaryGroupWhereInput = {
    AND?: VeterinaryGroupWhereInput | VeterinaryGroupWhereInput[]
    OR?: VeterinaryGroupWhereInput[]
    NOT?: VeterinaryGroupWhereInput | VeterinaryGroupWhereInput[]
    id?: IntFilter<"VeterinaryGroup"> | number
    name?: StringFilter<"VeterinaryGroup"> | string
    group_id?: StringFilter<"VeterinaryGroup"> | string
    createdAt?: DateTimeFilter<"VeterinaryGroup"> | Date | string
    updatedAt?: DateTimeFilter<"VeterinaryGroup"> | Date | string
    locations?: LocationListRelationFilter
  }

  export type VeterinaryGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    group_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locations?: LocationOrderByRelationAggregateInput
  }

  export type VeterinaryGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    group_id?: string
    AND?: VeterinaryGroupWhereInput | VeterinaryGroupWhereInput[]
    OR?: VeterinaryGroupWhereInput[]
    NOT?: VeterinaryGroupWhereInput | VeterinaryGroupWhereInput[]
    name?: StringFilter<"VeterinaryGroup"> | string
    createdAt?: DateTimeFilter<"VeterinaryGroup"> | Date | string
    updatedAt?: DateTimeFilter<"VeterinaryGroup"> | Date | string
    locations?: LocationListRelationFilter
  }, "id" | "group_id">

  export type VeterinaryGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    group_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VeterinaryGroupCountOrderByAggregateInput
    _avg?: VeterinaryGroupAvgOrderByAggregateInput
    _max?: VeterinaryGroupMaxOrderByAggregateInput
    _min?: VeterinaryGroupMinOrderByAggregateInput
    _sum?: VeterinaryGroupSumOrderByAggregateInput
  }

  export type VeterinaryGroupScalarWhereWithAggregatesInput = {
    AND?: VeterinaryGroupScalarWhereWithAggregatesInput | VeterinaryGroupScalarWhereWithAggregatesInput[]
    OR?: VeterinaryGroupScalarWhereWithAggregatesInput[]
    NOT?: VeterinaryGroupScalarWhereWithAggregatesInput | VeterinaryGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VeterinaryGroup"> | number
    name?: StringWithAggregatesFilter<"VeterinaryGroup"> | string
    group_id?: StringWithAggregatesFilter<"VeterinaryGroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VeterinaryGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VeterinaryGroup"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    name?: StringFilter<"Location"> | string
    veterinaryGroupId?: IntFilter<"Location"> | number
    locationId?: StringFilter<"Location"> | string
    groupHq?: BoolFilter<"Location"> | boolean
    status?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    veterinaryGroup?: XOR<VeterinaryGroupScalarRelationFilter, VeterinaryGroupWhereInput>
    attributes?: AttributeListRelationFilter
    AttributesOnLocations?: AttributesOnLocationsListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    veterinaryGroupId?: SortOrder
    locationId?: SortOrder
    groupHq?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    veterinaryGroup?: VeterinaryGroupOrderByWithRelationInput
    attributes?: AttributeOrderByRelationAggregateInput
    AttributesOnLocations?: AttributesOnLocationsOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    locationId?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    name?: StringFilter<"Location"> | string
    veterinaryGroupId?: IntFilter<"Location"> | number
    groupHq?: BoolFilter<"Location"> | boolean
    status?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    veterinaryGroup?: XOR<VeterinaryGroupScalarRelationFilter, VeterinaryGroupWhereInput>
    attributes?: AttributeListRelationFilter
    AttributesOnLocations?: AttributesOnLocationsListRelationFilter
  }, "id" | "locationId">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    veterinaryGroupId?: SortOrder
    locationId?: SortOrder
    groupHq?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    name?: StringWithAggregatesFilter<"Location"> | string
    veterinaryGroupId?: IntWithAggregatesFilter<"Location"> | number
    locationId?: StringWithAggregatesFilter<"Location"> | string
    groupHq?: BoolWithAggregatesFilter<"Location"> | boolean
    status?: StringWithAggregatesFilter<"Location"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type AttributesOnLocationsWhereInput = {
    AND?: AttributesOnLocationsWhereInput | AttributesOnLocationsWhereInput[]
    OR?: AttributesOnLocationsWhereInput[]
    NOT?: AttributesOnLocationsWhereInput | AttributesOnLocationsWhereInput[]
    locationId?: IntFilter<"AttributesOnLocations"> | number
    attributeId?: IntFilter<"AttributesOnLocations"> | number
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    attribute?: XOR<AttributeScalarRelationFilter, AttributeWhereInput>
  }

  export type AttributesOnLocationsOrderByWithRelationInput = {
    locationId?: SortOrder
    attributeId?: SortOrder
    location?: LocationOrderByWithRelationInput
    attribute?: AttributeOrderByWithRelationInput
  }

  export type AttributesOnLocationsWhereUniqueInput = Prisma.AtLeast<{
    locationId_attributeId?: AttributesOnLocationsLocationIdAttributeIdCompoundUniqueInput
    AND?: AttributesOnLocationsWhereInput | AttributesOnLocationsWhereInput[]
    OR?: AttributesOnLocationsWhereInput[]
    NOT?: AttributesOnLocationsWhereInput | AttributesOnLocationsWhereInput[]
    locationId?: IntFilter<"AttributesOnLocations"> | number
    attributeId?: IntFilter<"AttributesOnLocations"> | number
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    attribute?: XOR<AttributeScalarRelationFilter, AttributeWhereInput>
  }, "locationId_attributeId">

  export type AttributesOnLocationsOrderByWithAggregationInput = {
    locationId?: SortOrder
    attributeId?: SortOrder
    _count?: AttributesOnLocationsCountOrderByAggregateInput
    _avg?: AttributesOnLocationsAvgOrderByAggregateInput
    _max?: AttributesOnLocationsMaxOrderByAggregateInput
    _min?: AttributesOnLocationsMinOrderByAggregateInput
    _sum?: AttributesOnLocationsSumOrderByAggregateInput
  }

  export type AttributesOnLocationsScalarWhereWithAggregatesInput = {
    AND?: AttributesOnLocationsScalarWhereWithAggregatesInput | AttributesOnLocationsScalarWhereWithAggregatesInput[]
    OR?: AttributesOnLocationsScalarWhereWithAggregatesInput[]
    NOT?: AttributesOnLocationsScalarWhereWithAggregatesInput | AttributesOnLocationsScalarWhereWithAggregatesInput[]
    locationId?: IntWithAggregatesFilter<"AttributesOnLocations"> | number
    attributeId?: IntWithAggregatesFilter<"AttributesOnLocations"> | number
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: UserRoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    refreshToken?: string | null
    roleName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserRoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    refreshToken?: string | null
    roleName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type UserRoleUncheckedCreateInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type UserRoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserRoleCreateManyInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeTypeCreateInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributeCreateNestedManyWithoutTypeInput
  }

  export type AttributeTypeUncheckedCreateInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributeUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AttributeTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributeUpdateManyWithoutTypeNestedInput
  }

  export type AttributeTypeUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributeUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AttributeTypeCreateManyInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttributeTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeTypeUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeCreateInput = {
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type: AttributeTypeCreateNestedOneWithoutAttributesInput
    locations?: LocationCreateNestedManyWithoutAttributesInput
    AttributesOnLocations?: AttributesOnLocationsCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUncheckedCreateInput = {
    id?: number
    name: string
    order: number
    typeName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutAttributesInput
    AttributesOnLocations?: AttributesOnLocationsUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: AttributeTypeUpdateOneRequiredWithoutAttributesNestedInput
    locations?: LocationUpdateManyWithoutAttributesNestedInput
    AttributesOnLocations?: AttributesOnLocationsUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    typeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutAttributesNestedInput
    AttributesOnLocations?: AttributesOnLocationsUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeCreateManyInput = {
    id?: number
    name: string
    order: number
    typeName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttributeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    typeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeterinaryGroupCreateInput = {
    name: string
    group_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationCreateNestedManyWithoutVeterinaryGroupInput
  }

  export type VeterinaryGroupUncheckedCreateInput = {
    id?: number
    name: string
    group_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutVeterinaryGroupInput
  }

  export type VeterinaryGroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUpdateManyWithoutVeterinaryGroupNestedInput
  }

  export type VeterinaryGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutVeterinaryGroupNestedInput
  }

  export type VeterinaryGroupCreateManyInput = {
    id?: number
    name: string
    group_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VeterinaryGroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeterinaryGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    name: string
    locationId: string
    groupHq?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    veterinaryGroup: VeterinaryGroupCreateNestedOneWithoutLocationsInput
    attributes?: AttributeCreateNestedManyWithoutLocationsInput
    AttributesOnLocations?: AttributesOnLocationsCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    name: string
    veterinaryGroupId: number
    locationId: string
    groupHq?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributeUncheckedCreateNestedManyWithoutLocationsInput
    AttributesOnLocations?: AttributesOnLocationsUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    groupHq?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    veterinaryGroup?: VeterinaryGroupUpdateOneRequiredWithoutLocationsNestedInput
    attributes?: AttributeUpdateManyWithoutLocationsNestedInput
    AttributesOnLocations?: AttributesOnLocationsUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    veterinaryGroupId?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    groupHq?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributeUncheckedUpdateManyWithoutLocationsNestedInput
    AttributesOnLocations?: AttributesOnLocationsUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: number
    name: string
    veterinaryGroupId: number
    locationId: string
    groupHq?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    groupHq?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    veterinaryGroupId?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    groupHq?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributesOnLocationsCreateInput = {
    location: LocationCreateNestedOneWithoutAttributesOnLocationsInput
    attribute: AttributeCreateNestedOneWithoutAttributesOnLocationsInput
  }

  export type AttributesOnLocationsUncheckedCreateInput = {
    locationId: number
    attributeId: number
  }

  export type AttributesOnLocationsUpdateInput = {
    location?: LocationUpdateOneRequiredWithoutAttributesOnLocationsNestedInput
    attribute?: AttributeUpdateOneRequiredWithoutAttributesOnLocationsNestedInput
  }

  export type AttributesOnLocationsUncheckedUpdateInput = {
    locationId?: IntFieldUpdateOperationsInput | number
    attributeId?: IntFieldUpdateOperationsInput | number
  }

  export type AttributesOnLocationsCreateManyInput = {
    locationId: number
    attributeId: number
  }

  export type AttributesOnLocationsUpdateManyMutationInput = {

  }

  export type AttributesOnLocationsUncheckedUpdateManyInput = {
    locationId?: IntFieldUpdateOperationsInput | number
    attributeId?: IntFieldUpdateOperationsInput | number
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

  export type UserRoleScalarRelationFilter = {
    is?: UserRoleWhereInput
    isNot?: UserRoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    roleName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    roleName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    roleName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleCountOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeListRelationFilter = {
    every?: AttributeWhereInput
    some?: AttributeWhereInput
    none?: AttributeWhereInput
  }

  export type AttributeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttributeTypeCountOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeTypeMaxOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeTypeMinOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeTypeScalarRelationFilter = {
    is?: AttributeTypeWhereInput
    isNot?: AttributeTypeWhereInput
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type AttributesOnLocationsListRelationFilter = {
    every?: AttributesOnLocationsWhereInput
    some?: AttributesOnLocationsWhereInput
    none?: AttributesOnLocationsWhereInput
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttributesOnLocationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttributeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    typeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type AttributeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    typeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    typeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttributeSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type VeterinaryGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    group_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VeterinaryGroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VeterinaryGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    group_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VeterinaryGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    group_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VeterinaryGroupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VeterinaryGroupScalarRelationFilter = {
    is?: VeterinaryGroupWhereInput
    isNot?: VeterinaryGroupWhereInput
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    veterinaryGroupId?: SortOrder
    locationId?: SortOrder
    groupHq?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
    veterinaryGroupId?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    veterinaryGroupId?: SortOrder
    locationId?: SortOrder
    groupHq?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    veterinaryGroupId?: SortOrder
    locationId?: SortOrder
    groupHq?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
    veterinaryGroupId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type AttributeScalarRelationFilter = {
    is?: AttributeWhereInput
    isNot?: AttributeWhereInput
  }

  export type AttributesOnLocationsLocationIdAttributeIdCompoundUniqueInput = {
    locationId: number
    attributeId: number
  }

  export type AttributesOnLocationsCountOrderByAggregateInput = {
    locationId?: SortOrder
    attributeId?: SortOrder
  }

  export type AttributesOnLocationsAvgOrderByAggregateInput = {
    locationId?: SortOrder
    attributeId?: SortOrder
  }

  export type AttributesOnLocationsMaxOrderByAggregateInput = {
    locationId?: SortOrder
    attributeId?: SortOrder
  }

  export type AttributesOnLocationsMinOrderByAggregateInput = {
    locationId?: SortOrder
    attributeId?: SortOrder
  }

  export type AttributesOnLocationsSumOrderByAggregateInput = {
    locationId?: SortOrder
    attributeId?: SortOrder
  }

  export type UserRoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput
    connect?: UserRoleWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserRoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput
    upsert?: UserRoleUpsertWithoutUsersInput
    connect?: UserRoleWhereUniqueInput
    update?: XOR<XOR<UserRoleUpdateToOneWithWhereWithoutUsersInput, UserRoleUpdateWithoutUsersInput>, UserRoleUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AttributeCreateNestedManyWithoutTypeInput = {
    create?: XOR<AttributeCreateWithoutTypeInput, AttributeUncheckedCreateWithoutTypeInput> | AttributeCreateWithoutTypeInput[] | AttributeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutTypeInput | AttributeCreateOrConnectWithoutTypeInput[]
    createMany?: AttributeCreateManyTypeInputEnvelope
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type AttributeUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<AttributeCreateWithoutTypeInput, AttributeUncheckedCreateWithoutTypeInput> | AttributeCreateWithoutTypeInput[] | AttributeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutTypeInput | AttributeCreateOrConnectWithoutTypeInput[]
    createMany?: AttributeCreateManyTypeInputEnvelope
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type AttributeUpdateManyWithoutTypeNestedInput = {
    create?: XOR<AttributeCreateWithoutTypeInput, AttributeUncheckedCreateWithoutTypeInput> | AttributeCreateWithoutTypeInput[] | AttributeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutTypeInput | AttributeCreateOrConnectWithoutTypeInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutTypeInput | AttributeUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: AttributeCreateManyTypeInputEnvelope
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutTypeInput | AttributeUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutTypeInput | AttributeUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type AttributeUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<AttributeCreateWithoutTypeInput, AttributeUncheckedCreateWithoutTypeInput> | AttributeCreateWithoutTypeInput[] | AttributeUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutTypeInput | AttributeCreateOrConnectWithoutTypeInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutTypeInput | AttributeUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: AttributeCreateManyTypeInputEnvelope
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutTypeInput | AttributeUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutTypeInput | AttributeUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type AttributeTypeCreateNestedOneWithoutAttributesInput = {
    create?: XOR<AttributeTypeCreateWithoutAttributesInput, AttributeTypeUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: AttributeTypeCreateOrConnectWithoutAttributesInput
    connect?: AttributeTypeWhereUniqueInput
  }

  export type LocationCreateNestedManyWithoutAttributesInput = {
    create?: XOR<LocationCreateWithoutAttributesInput, LocationUncheckedCreateWithoutAttributesInput> | LocationCreateWithoutAttributesInput[] | LocationUncheckedCreateWithoutAttributesInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutAttributesInput | LocationCreateOrConnectWithoutAttributesInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type AttributesOnLocationsCreateNestedManyWithoutAttributeInput = {
    create?: XOR<AttributesOnLocationsCreateWithoutAttributeInput, AttributesOnLocationsUncheckedCreateWithoutAttributeInput> | AttributesOnLocationsCreateWithoutAttributeInput[] | AttributesOnLocationsUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributesOnLocationsCreateOrConnectWithoutAttributeInput | AttributesOnLocationsCreateOrConnectWithoutAttributeInput[]
    createMany?: AttributesOnLocationsCreateManyAttributeInputEnvelope
    connect?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutAttributesInput = {
    create?: XOR<LocationCreateWithoutAttributesInput, LocationUncheckedCreateWithoutAttributesInput> | LocationCreateWithoutAttributesInput[] | LocationUncheckedCreateWithoutAttributesInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutAttributesInput | LocationCreateOrConnectWithoutAttributesInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type AttributesOnLocationsUncheckedCreateNestedManyWithoutAttributeInput = {
    create?: XOR<AttributesOnLocationsCreateWithoutAttributeInput, AttributesOnLocationsUncheckedCreateWithoutAttributeInput> | AttributesOnLocationsCreateWithoutAttributeInput[] | AttributesOnLocationsUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributesOnLocationsCreateOrConnectWithoutAttributeInput | AttributesOnLocationsCreateOrConnectWithoutAttributeInput[]
    createMany?: AttributesOnLocationsCreateManyAttributeInputEnvelope
    connect?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
  }

  export type AttributeTypeUpdateOneRequiredWithoutAttributesNestedInput = {
    create?: XOR<AttributeTypeCreateWithoutAttributesInput, AttributeTypeUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: AttributeTypeCreateOrConnectWithoutAttributesInput
    upsert?: AttributeTypeUpsertWithoutAttributesInput
    connect?: AttributeTypeWhereUniqueInput
    update?: XOR<XOR<AttributeTypeUpdateToOneWithWhereWithoutAttributesInput, AttributeTypeUpdateWithoutAttributesInput>, AttributeTypeUncheckedUpdateWithoutAttributesInput>
  }

  export type LocationUpdateManyWithoutAttributesNestedInput = {
    create?: XOR<LocationCreateWithoutAttributesInput, LocationUncheckedCreateWithoutAttributesInput> | LocationCreateWithoutAttributesInput[] | LocationUncheckedCreateWithoutAttributesInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutAttributesInput | LocationCreateOrConnectWithoutAttributesInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutAttributesInput | LocationUpsertWithWhereUniqueWithoutAttributesInput[]
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutAttributesInput | LocationUpdateWithWhereUniqueWithoutAttributesInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutAttributesInput | LocationUpdateManyWithWhereWithoutAttributesInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type AttributesOnLocationsUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<AttributesOnLocationsCreateWithoutAttributeInput, AttributesOnLocationsUncheckedCreateWithoutAttributeInput> | AttributesOnLocationsCreateWithoutAttributeInput[] | AttributesOnLocationsUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributesOnLocationsCreateOrConnectWithoutAttributeInput | AttributesOnLocationsCreateOrConnectWithoutAttributeInput[]
    upsert?: AttributesOnLocationsUpsertWithWhereUniqueWithoutAttributeInput | AttributesOnLocationsUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: AttributesOnLocationsCreateManyAttributeInputEnvelope
    set?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
    disconnect?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
    delete?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
    connect?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
    update?: AttributesOnLocationsUpdateWithWhereUniqueWithoutAttributeInput | AttributesOnLocationsUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: AttributesOnLocationsUpdateManyWithWhereWithoutAttributeInput | AttributesOnLocationsUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: AttributesOnLocationsScalarWhereInput | AttributesOnLocationsScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutAttributesNestedInput = {
    create?: XOR<LocationCreateWithoutAttributesInput, LocationUncheckedCreateWithoutAttributesInput> | LocationCreateWithoutAttributesInput[] | LocationUncheckedCreateWithoutAttributesInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutAttributesInput | LocationCreateOrConnectWithoutAttributesInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutAttributesInput | LocationUpsertWithWhereUniqueWithoutAttributesInput[]
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutAttributesInput | LocationUpdateWithWhereUniqueWithoutAttributesInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutAttributesInput | LocationUpdateManyWithWhereWithoutAttributesInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type AttributesOnLocationsUncheckedUpdateManyWithoutAttributeNestedInput = {
    create?: XOR<AttributesOnLocationsCreateWithoutAttributeInput, AttributesOnLocationsUncheckedCreateWithoutAttributeInput> | AttributesOnLocationsCreateWithoutAttributeInput[] | AttributesOnLocationsUncheckedCreateWithoutAttributeInput[]
    connectOrCreate?: AttributesOnLocationsCreateOrConnectWithoutAttributeInput | AttributesOnLocationsCreateOrConnectWithoutAttributeInput[]
    upsert?: AttributesOnLocationsUpsertWithWhereUniqueWithoutAttributeInput | AttributesOnLocationsUpsertWithWhereUniqueWithoutAttributeInput[]
    createMany?: AttributesOnLocationsCreateManyAttributeInputEnvelope
    set?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
    disconnect?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
    delete?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
    connect?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
    update?: AttributesOnLocationsUpdateWithWhereUniqueWithoutAttributeInput | AttributesOnLocationsUpdateWithWhereUniqueWithoutAttributeInput[]
    updateMany?: AttributesOnLocationsUpdateManyWithWhereWithoutAttributeInput | AttributesOnLocationsUpdateManyWithWhereWithoutAttributeInput[]
    deleteMany?: AttributesOnLocationsScalarWhereInput | AttributesOnLocationsScalarWhereInput[]
  }

  export type LocationCreateNestedManyWithoutVeterinaryGroupInput = {
    create?: XOR<LocationCreateWithoutVeterinaryGroupInput, LocationUncheckedCreateWithoutVeterinaryGroupInput> | LocationCreateWithoutVeterinaryGroupInput[] | LocationUncheckedCreateWithoutVeterinaryGroupInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutVeterinaryGroupInput | LocationCreateOrConnectWithoutVeterinaryGroupInput[]
    createMany?: LocationCreateManyVeterinaryGroupInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutVeterinaryGroupInput = {
    create?: XOR<LocationCreateWithoutVeterinaryGroupInput, LocationUncheckedCreateWithoutVeterinaryGroupInput> | LocationCreateWithoutVeterinaryGroupInput[] | LocationUncheckedCreateWithoutVeterinaryGroupInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutVeterinaryGroupInput | LocationCreateOrConnectWithoutVeterinaryGroupInput[]
    createMany?: LocationCreateManyVeterinaryGroupInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationUpdateManyWithoutVeterinaryGroupNestedInput = {
    create?: XOR<LocationCreateWithoutVeterinaryGroupInput, LocationUncheckedCreateWithoutVeterinaryGroupInput> | LocationCreateWithoutVeterinaryGroupInput[] | LocationUncheckedCreateWithoutVeterinaryGroupInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutVeterinaryGroupInput | LocationCreateOrConnectWithoutVeterinaryGroupInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutVeterinaryGroupInput | LocationUpsertWithWhereUniqueWithoutVeterinaryGroupInput[]
    createMany?: LocationCreateManyVeterinaryGroupInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutVeterinaryGroupInput | LocationUpdateWithWhereUniqueWithoutVeterinaryGroupInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutVeterinaryGroupInput | LocationUpdateManyWithWhereWithoutVeterinaryGroupInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutVeterinaryGroupNestedInput = {
    create?: XOR<LocationCreateWithoutVeterinaryGroupInput, LocationUncheckedCreateWithoutVeterinaryGroupInput> | LocationCreateWithoutVeterinaryGroupInput[] | LocationUncheckedCreateWithoutVeterinaryGroupInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutVeterinaryGroupInput | LocationCreateOrConnectWithoutVeterinaryGroupInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutVeterinaryGroupInput | LocationUpsertWithWhereUniqueWithoutVeterinaryGroupInput[]
    createMany?: LocationCreateManyVeterinaryGroupInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutVeterinaryGroupInput | LocationUpdateWithWhereUniqueWithoutVeterinaryGroupInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutVeterinaryGroupInput | LocationUpdateManyWithWhereWithoutVeterinaryGroupInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type VeterinaryGroupCreateNestedOneWithoutLocationsInput = {
    create?: XOR<VeterinaryGroupCreateWithoutLocationsInput, VeterinaryGroupUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: VeterinaryGroupCreateOrConnectWithoutLocationsInput
    connect?: VeterinaryGroupWhereUniqueInput
  }

  export type AttributeCreateNestedManyWithoutLocationsInput = {
    create?: XOR<AttributeCreateWithoutLocationsInput, AttributeUncheckedCreateWithoutLocationsInput> | AttributeCreateWithoutLocationsInput[] | AttributeUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutLocationsInput | AttributeCreateOrConnectWithoutLocationsInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type AttributesOnLocationsCreateNestedManyWithoutLocationInput = {
    create?: XOR<AttributesOnLocationsCreateWithoutLocationInput, AttributesOnLocationsUncheckedCreateWithoutLocationInput> | AttributesOnLocationsCreateWithoutLocationInput[] | AttributesOnLocationsUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AttributesOnLocationsCreateOrConnectWithoutLocationInput | AttributesOnLocationsCreateOrConnectWithoutLocationInput[]
    createMany?: AttributesOnLocationsCreateManyLocationInputEnvelope
    connect?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
  }

  export type AttributeUncheckedCreateNestedManyWithoutLocationsInput = {
    create?: XOR<AttributeCreateWithoutLocationsInput, AttributeUncheckedCreateWithoutLocationsInput> | AttributeCreateWithoutLocationsInput[] | AttributeUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutLocationsInput | AttributeCreateOrConnectWithoutLocationsInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type AttributesOnLocationsUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<AttributesOnLocationsCreateWithoutLocationInput, AttributesOnLocationsUncheckedCreateWithoutLocationInput> | AttributesOnLocationsCreateWithoutLocationInput[] | AttributesOnLocationsUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AttributesOnLocationsCreateOrConnectWithoutLocationInput | AttributesOnLocationsCreateOrConnectWithoutLocationInput[]
    createMany?: AttributesOnLocationsCreateManyLocationInputEnvelope
    connect?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VeterinaryGroupUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<VeterinaryGroupCreateWithoutLocationsInput, VeterinaryGroupUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: VeterinaryGroupCreateOrConnectWithoutLocationsInput
    upsert?: VeterinaryGroupUpsertWithoutLocationsInput
    connect?: VeterinaryGroupWhereUniqueInput
    update?: XOR<XOR<VeterinaryGroupUpdateToOneWithWhereWithoutLocationsInput, VeterinaryGroupUpdateWithoutLocationsInput>, VeterinaryGroupUncheckedUpdateWithoutLocationsInput>
  }

  export type AttributeUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<AttributeCreateWithoutLocationsInput, AttributeUncheckedCreateWithoutLocationsInput> | AttributeCreateWithoutLocationsInput[] | AttributeUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutLocationsInput | AttributeCreateOrConnectWithoutLocationsInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutLocationsInput | AttributeUpsertWithWhereUniqueWithoutLocationsInput[]
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutLocationsInput | AttributeUpdateWithWhereUniqueWithoutLocationsInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutLocationsInput | AttributeUpdateManyWithWhereWithoutLocationsInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type AttributesOnLocationsUpdateManyWithoutLocationNestedInput = {
    create?: XOR<AttributesOnLocationsCreateWithoutLocationInput, AttributesOnLocationsUncheckedCreateWithoutLocationInput> | AttributesOnLocationsCreateWithoutLocationInput[] | AttributesOnLocationsUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AttributesOnLocationsCreateOrConnectWithoutLocationInput | AttributesOnLocationsCreateOrConnectWithoutLocationInput[]
    upsert?: AttributesOnLocationsUpsertWithWhereUniqueWithoutLocationInput | AttributesOnLocationsUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: AttributesOnLocationsCreateManyLocationInputEnvelope
    set?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
    disconnect?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
    delete?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
    connect?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
    update?: AttributesOnLocationsUpdateWithWhereUniqueWithoutLocationInput | AttributesOnLocationsUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: AttributesOnLocationsUpdateManyWithWhereWithoutLocationInput | AttributesOnLocationsUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: AttributesOnLocationsScalarWhereInput | AttributesOnLocationsScalarWhereInput[]
  }

  export type AttributeUncheckedUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<AttributeCreateWithoutLocationsInput, AttributeUncheckedCreateWithoutLocationsInput> | AttributeCreateWithoutLocationsInput[] | AttributeUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutLocationsInput | AttributeCreateOrConnectWithoutLocationsInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutLocationsInput | AttributeUpsertWithWhereUniqueWithoutLocationsInput[]
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutLocationsInput | AttributeUpdateWithWhereUniqueWithoutLocationsInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutLocationsInput | AttributeUpdateManyWithWhereWithoutLocationsInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type AttributesOnLocationsUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<AttributesOnLocationsCreateWithoutLocationInput, AttributesOnLocationsUncheckedCreateWithoutLocationInput> | AttributesOnLocationsCreateWithoutLocationInput[] | AttributesOnLocationsUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: AttributesOnLocationsCreateOrConnectWithoutLocationInput | AttributesOnLocationsCreateOrConnectWithoutLocationInput[]
    upsert?: AttributesOnLocationsUpsertWithWhereUniqueWithoutLocationInput | AttributesOnLocationsUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: AttributesOnLocationsCreateManyLocationInputEnvelope
    set?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
    disconnect?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
    delete?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
    connect?: AttributesOnLocationsWhereUniqueInput | AttributesOnLocationsWhereUniqueInput[]
    update?: AttributesOnLocationsUpdateWithWhereUniqueWithoutLocationInput | AttributesOnLocationsUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: AttributesOnLocationsUpdateManyWithWhereWithoutLocationInput | AttributesOnLocationsUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: AttributesOnLocationsScalarWhereInput | AttributesOnLocationsScalarWhereInput[]
  }

  export type LocationCreateNestedOneWithoutAttributesOnLocationsInput = {
    create?: XOR<LocationCreateWithoutAttributesOnLocationsInput, LocationUncheckedCreateWithoutAttributesOnLocationsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutAttributesOnLocationsInput
    connect?: LocationWhereUniqueInput
  }

  export type AttributeCreateNestedOneWithoutAttributesOnLocationsInput = {
    create?: XOR<AttributeCreateWithoutAttributesOnLocationsInput, AttributeUncheckedCreateWithoutAttributesOnLocationsInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutAttributesOnLocationsInput
    connect?: AttributeWhereUniqueInput
  }

  export type LocationUpdateOneRequiredWithoutAttributesOnLocationsNestedInput = {
    create?: XOR<LocationCreateWithoutAttributesOnLocationsInput, LocationUncheckedCreateWithoutAttributesOnLocationsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutAttributesOnLocationsInput
    upsert?: LocationUpsertWithoutAttributesOnLocationsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutAttributesOnLocationsInput, LocationUpdateWithoutAttributesOnLocationsInput>, LocationUncheckedUpdateWithoutAttributesOnLocationsInput>
  }

  export type AttributeUpdateOneRequiredWithoutAttributesOnLocationsNestedInput = {
    create?: XOR<AttributeCreateWithoutAttributesOnLocationsInput, AttributeUncheckedCreateWithoutAttributesOnLocationsInput>
    connectOrCreate?: AttributeCreateOrConnectWithoutAttributesOnLocationsInput
    upsert?: AttributeUpsertWithoutAttributesOnLocationsInput
    connect?: AttributeWhereUniqueInput
    update?: XOR<XOR<AttributeUpdateToOneWithWhereWithoutAttributesOnLocationsInput, AttributeUpdateWithoutAttributesOnLocationsInput>, AttributeUncheckedUpdateWithoutAttributesOnLocationsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserRoleCreateWithoutUsersInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUncheckedCreateWithoutUsersInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleCreateOrConnectWithoutUsersInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
  }

  export type UserRoleUpsertWithoutUsersInput = {
    update: XOR<UserRoleUpdateWithoutUsersInput, UserRoleUncheckedUpdateWithoutUsersInput>
    create: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    where?: UserRoleWhereInput
  }

  export type UserRoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: UserRoleWhereInput
    data: XOR<UserRoleUpdateWithoutUsersInput, UserRoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserRoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutRoleInput = {
    email: string
    name?: string | null
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    roleName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type AttributeCreateWithoutTypeInput = {
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationCreateNestedManyWithoutAttributesInput
    AttributesOnLocations?: AttributesOnLocationsCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUncheckedCreateWithoutTypeInput = {
    id?: number
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutAttributesInput
    AttributesOnLocations?: AttributesOnLocationsUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeCreateOrConnectWithoutTypeInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutTypeInput, AttributeUncheckedCreateWithoutTypeInput>
  }

  export type AttributeCreateManyTypeInputEnvelope = {
    data: AttributeCreateManyTypeInput | AttributeCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type AttributeUpsertWithWhereUniqueWithoutTypeInput = {
    where: AttributeWhereUniqueInput
    update: XOR<AttributeUpdateWithoutTypeInput, AttributeUncheckedUpdateWithoutTypeInput>
    create: XOR<AttributeCreateWithoutTypeInput, AttributeUncheckedCreateWithoutTypeInput>
  }

  export type AttributeUpdateWithWhereUniqueWithoutTypeInput = {
    where: AttributeWhereUniqueInput
    data: XOR<AttributeUpdateWithoutTypeInput, AttributeUncheckedUpdateWithoutTypeInput>
  }

  export type AttributeUpdateManyWithWhereWithoutTypeInput = {
    where: AttributeScalarWhereInput
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyWithoutTypeInput>
  }

  export type AttributeScalarWhereInput = {
    AND?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
    OR?: AttributeScalarWhereInput[]
    NOT?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
    id?: IntFilter<"Attribute"> | number
    name?: StringFilter<"Attribute"> | string
    order?: IntFilter<"Attribute"> | number
    typeName?: StringFilter<"Attribute"> | string
    createdAt?: DateTimeFilter<"Attribute"> | Date | string
    updatedAt?: DateTimeFilter<"Attribute"> | Date | string
  }

  export type AttributeTypeCreateWithoutAttributesInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttributeTypeUncheckedCreateWithoutAttributesInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttributeTypeCreateOrConnectWithoutAttributesInput = {
    where: AttributeTypeWhereUniqueInput
    create: XOR<AttributeTypeCreateWithoutAttributesInput, AttributeTypeUncheckedCreateWithoutAttributesInput>
  }

  export type LocationCreateWithoutAttributesInput = {
    name: string
    locationId: string
    groupHq?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    veterinaryGroup: VeterinaryGroupCreateNestedOneWithoutLocationsInput
    AttributesOnLocations?: AttributesOnLocationsCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutAttributesInput = {
    id?: number
    name: string
    veterinaryGroupId: number
    locationId: string
    groupHq?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    AttributesOnLocations?: AttributesOnLocationsUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutAttributesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutAttributesInput, LocationUncheckedCreateWithoutAttributesInput>
  }

  export type AttributesOnLocationsCreateWithoutAttributeInput = {
    location: LocationCreateNestedOneWithoutAttributesOnLocationsInput
  }

  export type AttributesOnLocationsUncheckedCreateWithoutAttributeInput = {
    locationId: number
  }

  export type AttributesOnLocationsCreateOrConnectWithoutAttributeInput = {
    where: AttributesOnLocationsWhereUniqueInput
    create: XOR<AttributesOnLocationsCreateWithoutAttributeInput, AttributesOnLocationsUncheckedCreateWithoutAttributeInput>
  }

  export type AttributesOnLocationsCreateManyAttributeInputEnvelope = {
    data: AttributesOnLocationsCreateManyAttributeInput | AttributesOnLocationsCreateManyAttributeInput[]
    skipDuplicates?: boolean
  }

  export type AttributeTypeUpsertWithoutAttributesInput = {
    update: XOR<AttributeTypeUpdateWithoutAttributesInput, AttributeTypeUncheckedUpdateWithoutAttributesInput>
    create: XOR<AttributeTypeCreateWithoutAttributesInput, AttributeTypeUncheckedCreateWithoutAttributesInput>
    where?: AttributeTypeWhereInput
  }

  export type AttributeTypeUpdateToOneWithWhereWithoutAttributesInput = {
    where?: AttributeTypeWhereInput
    data: XOR<AttributeTypeUpdateWithoutAttributesInput, AttributeTypeUncheckedUpdateWithoutAttributesInput>
  }

  export type AttributeTypeUpdateWithoutAttributesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeTypeUncheckedUpdateWithoutAttributesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpsertWithWhereUniqueWithoutAttributesInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutAttributesInput, LocationUncheckedUpdateWithoutAttributesInput>
    create: XOR<LocationCreateWithoutAttributesInput, LocationUncheckedCreateWithoutAttributesInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutAttributesInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutAttributesInput, LocationUncheckedUpdateWithoutAttributesInput>
  }

  export type LocationUpdateManyWithWhereWithoutAttributesInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutAttributesInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: IntFilter<"Location"> | number
    name?: StringFilter<"Location"> | string
    veterinaryGroupId?: IntFilter<"Location"> | number
    locationId?: StringFilter<"Location"> | string
    groupHq?: BoolFilter<"Location"> | boolean
    status?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
  }

  export type AttributesOnLocationsUpsertWithWhereUniqueWithoutAttributeInput = {
    where: AttributesOnLocationsWhereUniqueInput
    update: XOR<AttributesOnLocationsUpdateWithoutAttributeInput, AttributesOnLocationsUncheckedUpdateWithoutAttributeInput>
    create: XOR<AttributesOnLocationsCreateWithoutAttributeInput, AttributesOnLocationsUncheckedCreateWithoutAttributeInput>
  }

  export type AttributesOnLocationsUpdateWithWhereUniqueWithoutAttributeInput = {
    where: AttributesOnLocationsWhereUniqueInput
    data: XOR<AttributesOnLocationsUpdateWithoutAttributeInput, AttributesOnLocationsUncheckedUpdateWithoutAttributeInput>
  }

  export type AttributesOnLocationsUpdateManyWithWhereWithoutAttributeInput = {
    where: AttributesOnLocationsScalarWhereInput
    data: XOR<AttributesOnLocationsUpdateManyMutationInput, AttributesOnLocationsUncheckedUpdateManyWithoutAttributeInput>
  }

  export type AttributesOnLocationsScalarWhereInput = {
    AND?: AttributesOnLocationsScalarWhereInput | AttributesOnLocationsScalarWhereInput[]
    OR?: AttributesOnLocationsScalarWhereInput[]
    NOT?: AttributesOnLocationsScalarWhereInput | AttributesOnLocationsScalarWhereInput[]
    locationId?: IntFilter<"AttributesOnLocations"> | number
    attributeId?: IntFilter<"AttributesOnLocations"> | number
  }

  export type LocationCreateWithoutVeterinaryGroupInput = {
    name: string
    locationId: string
    groupHq?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributeCreateNestedManyWithoutLocationsInput
    AttributesOnLocations?: AttributesOnLocationsCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutVeterinaryGroupInput = {
    id?: number
    name: string
    locationId: string
    groupHq?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributeUncheckedCreateNestedManyWithoutLocationsInput
    AttributesOnLocations?: AttributesOnLocationsUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutVeterinaryGroupInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutVeterinaryGroupInput, LocationUncheckedCreateWithoutVeterinaryGroupInput>
  }

  export type LocationCreateManyVeterinaryGroupInputEnvelope = {
    data: LocationCreateManyVeterinaryGroupInput | LocationCreateManyVeterinaryGroupInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithWhereUniqueWithoutVeterinaryGroupInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutVeterinaryGroupInput, LocationUncheckedUpdateWithoutVeterinaryGroupInput>
    create: XOR<LocationCreateWithoutVeterinaryGroupInput, LocationUncheckedCreateWithoutVeterinaryGroupInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutVeterinaryGroupInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutVeterinaryGroupInput, LocationUncheckedUpdateWithoutVeterinaryGroupInput>
  }

  export type LocationUpdateManyWithWhereWithoutVeterinaryGroupInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutVeterinaryGroupInput>
  }

  export type VeterinaryGroupCreateWithoutLocationsInput = {
    name: string
    group_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VeterinaryGroupUncheckedCreateWithoutLocationsInput = {
    id?: number
    name: string
    group_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VeterinaryGroupCreateOrConnectWithoutLocationsInput = {
    where: VeterinaryGroupWhereUniqueInput
    create: XOR<VeterinaryGroupCreateWithoutLocationsInput, VeterinaryGroupUncheckedCreateWithoutLocationsInput>
  }

  export type AttributeCreateWithoutLocationsInput = {
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type: AttributeTypeCreateNestedOneWithoutAttributesInput
    AttributesOnLocations?: AttributesOnLocationsCreateNestedManyWithoutAttributeInput
  }

  export type AttributeUncheckedCreateWithoutLocationsInput = {
    id?: number
    name: string
    order: number
    typeName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    AttributesOnLocations?: AttributesOnLocationsUncheckedCreateNestedManyWithoutAttributeInput
  }

  export type AttributeCreateOrConnectWithoutLocationsInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutLocationsInput, AttributeUncheckedCreateWithoutLocationsInput>
  }

  export type AttributesOnLocationsCreateWithoutLocationInput = {
    attribute: AttributeCreateNestedOneWithoutAttributesOnLocationsInput
  }

  export type AttributesOnLocationsUncheckedCreateWithoutLocationInput = {
    attributeId: number
  }

  export type AttributesOnLocationsCreateOrConnectWithoutLocationInput = {
    where: AttributesOnLocationsWhereUniqueInput
    create: XOR<AttributesOnLocationsCreateWithoutLocationInput, AttributesOnLocationsUncheckedCreateWithoutLocationInput>
  }

  export type AttributesOnLocationsCreateManyLocationInputEnvelope = {
    data: AttributesOnLocationsCreateManyLocationInput | AttributesOnLocationsCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type VeterinaryGroupUpsertWithoutLocationsInput = {
    update: XOR<VeterinaryGroupUpdateWithoutLocationsInput, VeterinaryGroupUncheckedUpdateWithoutLocationsInput>
    create: XOR<VeterinaryGroupCreateWithoutLocationsInput, VeterinaryGroupUncheckedCreateWithoutLocationsInput>
    where?: VeterinaryGroupWhereInput
  }

  export type VeterinaryGroupUpdateToOneWithWhereWithoutLocationsInput = {
    where?: VeterinaryGroupWhereInput
    data: XOR<VeterinaryGroupUpdateWithoutLocationsInput, VeterinaryGroupUncheckedUpdateWithoutLocationsInput>
  }

  export type VeterinaryGroupUpdateWithoutLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeterinaryGroupUncheckedUpdateWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeUpsertWithWhereUniqueWithoutLocationsInput = {
    where: AttributeWhereUniqueInput
    update: XOR<AttributeUpdateWithoutLocationsInput, AttributeUncheckedUpdateWithoutLocationsInput>
    create: XOR<AttributeCreateWithoutLocationsInput, AttributeUncheckedCreateWithoutLocationsInput>
  }

  export type AttributeUpdateWithWhereUniqueWithoutLocationsInput = {
    where: AttributeWhereUniqueInput
    data: XOR<AttributeUpdateWithoutLocationsInput, AttributeUncheckedUpdateWithoutLocationsInput>
  }

  export type AttributeUpdateManyWithWhereWithoutLocationsInput = {
    where: AttributeScalarWhereInput
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyWithoutLocationsInput>
  }

  export type AttributesOnLocationsUpsertWithWhereUniqueWithoutLocationInput = {
    where: AttributesOnLocationsWhereUniqueInput
    update: XOR<AttributesOnLocationsUpdateWithoutLocationInput, AttributesOnLocationsUncheckedUpdateWithoutLocationInput>
    create: XOR<AttributesOnLocationsCreateWithoutLocationInput, AttributesOnLocationsUncheckedCreateWithoutLocationInput>
  }

  export type AttributesOnLocationsUpdateWithWhereUniqueWithoutLocationInput = {
    where: AttributesOnLocationsWhereUniqueInput
    data: XOR<AttributesOnLocationsUpdateWithoutLocationInput, AttributesOnLocationsUncheckedUpdateWithoutLocationInput>
  }

  export type AttributesOnLocationsUpdateManyWithWhereWithoutLocationInput = {
    where: AttributesOnLocationsScalarWhereInput
    data: XOR<AttributesOnLocationsUpdateManyMutationInput, AttributesOnLocationsUncheckedUpdateManyWithoutLocationInput>
  }

  export type LocationCreateWithoutAttributesOnLocationsInput = {
    name: string
    locationId: string
    groupHq?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    veterinaryGroup: VeterinaryGroupCreateNestedOneWithoutLocationsInput
    attributes?: AttributeCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutAttributesOnLocationsInput = {
    id?: number
    name: string
    veterinaryGroupId: number
    locationId: string
    groupHq?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: AttributeUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationCreateOrConnectWithoutAttributesOnLocationsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutAttributesOnLocationsInput, LocationUncheckedCreateWithoutAttributesOnLocationsInput>
  }

  export type AttributeCreateWithoutAttributesOnLocationsInput = {
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    type: AttributeTypeCreateNestedOneWithoutAttributesInput
    locations?: LocationCreateNestedManyWithoutAttributesInput
  }

  export type AttributeUncheckedCreateWithoutAttributesOnLocationsInput = {
    id?: number
    name: string
    order: number
    typeName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutAttributesInput
  }

  export type AttributeCreateOrConnectWithoutAttributesOnLocationsInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutAttributesOnLocationsInput, AttributeUncheckedCreateWithoutAttributesOnLocationsInput>
  }

  export type LocationUpsertWithoutAttributesOnLocationsInput = {
    update: XOR<LocationUpdateWithoutAttributesOnLocationsInput, LocationUncheckedUpdateWithoutAttributesOnLocationsInput>
    create: XOR<LocationCreateWithoutAttributesOnLocationsInput, LocationUncheckedCreateWithoutAttributesOnLocationsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutAttributesOnLocationsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutAttributesOnLocationsInput, LocationUncheckedUpdateWithoutAttributesOnLocationsInput>
  }

  export type LocationUpdateWithoutAttributesOnLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    groupHq?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    veterinaryGroup?: VeterinaryGroupUpdateOneRequiredWithoutLocationsNestedInput
    attributes?: AttributeUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutAttributesOnLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    veterinaryGroupId?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    groupHq?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributeUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type AttributeUpsertWithoutAttributesOnLocationsInput = {
    update: XOR<AttributeUpdateWithoutAttributesOnLocationsInput, AttributeUncheckedUpdateWithoutAttributesOnLocationsInput>
    create: XOR<AttributeCreateWithoutAttributesOnLocationsInput, AttributeUncheckedCreateWithoutAttributesOnLocationsInput>
    where?: AttributeWhereInput
  }

  export type AttributeUpdateToOneWithWhereWithoutAttributesOnLocationsInput = {
    where?: AttributeWhereInput
    data: XOR<AttributeUpdateWithoutAttributesOnLocationsInput, AttributeUncheckedUpdateWithoutAttributesOnLocationsInput>
  }

  export type AttributeUpdateWithoutAttributesOnLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: AttributeTypeUpdateOneRequiredWithoutAttributesNestedInput
    locations?: LocationUpdateManyWithoutAttributesNestedInput
  }

  export type AttributeUncheckedUpdateWithoutAttributesOnLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    typeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutAttributesNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeCreateManyTypeInput = {
    id?: number
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttributeUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUpdateManyWithoutAttributesNestedInput
    AttributesOnLocations?: AttributesOnLocationsUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutAttributesNestedInput
    AttributesOnLocations?: AttributesOnLocationsUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributesOnLocationsCreateManyAttributeInput = {
    locationId: number
  }

  export type LocationUpdateWithoutAttributesInput = {
    name?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    groupHq?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    veterinaryGroup?: VeterinaryGroupUpdateOneRequiredWithoutLocationsNestedInput
    AttributesOnLocations?: AttributesOnLocationsUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutAttributesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    veterinaryGroupId?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    groupHq?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AttributesOnLocations?: AttributesOnLocationsUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutAttributesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    veterinaryGroupId?: IntFieldUpdateOperationsInput | number
    locationId?: StringFieldUpdateOperationsInput | string
    groupHq?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributesOnLocationsUpdateWithoutAttributeInput = {
    location?: LocationUpdateOneRequiredWithoutAttributesOnLocationsNestedInput
  }

  export type AttributesOnLocationsUncheckedUpdateWithoutAttributeInput = {
    locationId?: IntFieldUpdateOperationsInput | number
  }

  export type AttributesOnLocationsUncheckedUpdateManyWithoutAttributeInput = {
    locationId?: IntFieldUpdateOperationsInput | number
  }

  export type LocationCreateManyVeterinaryGroupInput = {
    id?: number
    name: string
    locationId: string
    groupHq?: boolean
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateWithoutVeterinaryGroupInput = {
    name?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    groupHq?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributeUpdateManyWithoutLocationsNestedInput
    AttributesOnLocations?: AttributesOnLocationsUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutVeterinaryGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    groupHq?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: AttributeUncheckedUpdateManyWithoutLocationsNestedInput
    AttributesOnLocations?: AttributesOnLocationsUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutVeterinaryGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    groupHq?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributesOnLocationsCreateManyLocationInput = {
    attributeId: number
  }

  export type AttributeUpdateWithoutLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: AttributeTypeUpdateOneRequiredWithoutAttributesNestedInput
    AttributesOnLocations?: AttributesOnLocationsUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    typeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AttributesOnLocations?: AttributesOnLocationsUncheckedUpdateManyWithoutAttributeNestedInput
  }

  export type AttributeUncheckedUpdateManyWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    typeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributesOnLocationsUpdateWithoutLocationInput = {
    attribute?: AttributeUpdateOneRequiredWithoutAttributesOnLocationsNestedInput
  }

  export type AttributesOnLocationsUncheckedUpdateWithoutLocationInput = {
    attributeId?: IntFieldUpdateOperationsInput | number
  }

  export type AttributesOnLocationsUncheckedUpdateManyWithoutLocationInput = {
    attributeId?: IntFieldUpdateOperationsInput | number
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