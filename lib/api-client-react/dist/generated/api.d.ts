import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { Bouquet, BouquetCreatedResponse, CreateBouquetRequest, ErrorResponse, FeedbackCreatedResponse, HealthStatus, SubmitFeedbackRequest, UpgradePremiumBody } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * Returns server health status
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create and send a bouquet
 */
export declare const getCreateBouquetUrl: () => string;
export declare const createBouquet: (createBouquetRequest: CreateBouquetRequest, options?: RequestInit) => Promise<BouquetCreatedResponse>;
export declare const getCreateBouquetMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createBouquet>>, TError, {
        data: BodyType<CreateBouquetRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createBouquet>>, TError, {
    data: BodyType<CreateBouquetRequest>;
}, TContext>;
export type CreateBouquetMutationResult = NonNullable<Awaited<ReturnType<typeof createBouquet>>>;
export type CreateBouquetMutationBody = BodyType<CreateBouquetRequest>;
export type CreateBouquetMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Create and send a bouquet
 */
export declare const useCreateBouquet: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createBouquet>>, TError, {
        data: BodyType<CreateBouquetRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createBouquet>>, TError, {
    data: BodyType<CreateBouquetRequest>;
}, TContext>;
/**
 * @summary Get a bouquet by ID
 */
export declare const getGetBouquetUrl: (id: string) => string;
export declare const getBouquet: (id: string, options?: RequestInit) => Promise<Bouquet>;
export declare const getGetBouquetQueryKey: (id: string) => readonly [`/api/bouquets/${string}`];
export declare const getGetBouquetQueryOptions: <TData = Awaited<ReturnType<typeof getBouquet>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBouquet>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getBouquet>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetBouquetQueryResult = NonNullable<Awaited<ReturnType<typeof getBouquet>>>;
export type GetBouquetQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get a bouquet by ID
 */
export declare function useGetBouquet<TData = Awaited<ReturnType<typeof getBouquet>>, TError = ErrorType<ErrorResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBouquet>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Mark a bouquet as premium after payment
 */
export declare const getUpgradeBouquetToPremiumUrl: (id: string) => string;
export declare const upgradeBouquetToPremium: (id: string, upgradePremiumBody: UpgradePremiumBody, options?: RequestInit) => Promise<Bouquet>;
export declare const getUpgradeBouquetToPremiumMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof upgradeBouquetToPremium>>, TError, {
        id: string;
        data: BodyType<UpgradePremiumBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof upgradeBouquetToPremium>>, TError, {
    id: string;
    data: BodyType<UpgradePremiumBody>;
}, TContext>;
export type UpgradeBouquetToPremiumMutationResult = NonNullable<Awaited<ReturnType<typeof upgradeBouquetToPremium>>>;
export type UpgradeBouquetToPremiumMutationBody = BodyType<UpgradePremiumBody>;
export type UpgradeBouquetToPremiumMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Mark a bouquet as premium after payment
 */
export declare const useUpgradeBouquetToPremium: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof upgradeBouquetToPremium>>, TError, {
        id: string;
        data: BodyType<UpgradePremiumBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof upgradeBouquetToPremium>>, TError, {
    id: string;
    data: BodyType<UpgradePremiumBody>;
}, TContext>;
/**
 * @summary Submit user feedback
 */
export declare const getSubmitFeedbackUrl: () => string;
export declare const submitFeedback: (submitFeedbackRequest: SubmitFeedbackRequest, options?: RequestInit) => Promise<FeedbackCreatedResponse>;
export declare const getSubmitFeedbackMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitFeedback>>, TError, {
        data: BodyType<SubmitFeedbackRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof submitFeedback>>, TError, {
    data: BodyType<SubmitFeedbackRequest>;
}, TContext>;
export type SubmitFeedbackMutationResult = NonNullable<Awaited<ReturnType<typeof submitFeedback>>>;
export type SubmitFeedbackMutationBody = BodyType<SubmitFeedbackRequest>;
export type SubmitFeedbackMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Submit user feedback
 */
export declare const useSubmitFeedback: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitFeedback>>, TError, {
        data: BodyType<SubmitFeedbackRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof submitFeedback>>, TError, {
    data: BodyType<SubmitFeedbackRequest>;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map