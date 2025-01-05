// jest-fetch-mock.d.ts
declare module 'jest-fetch-mock' {
    export function enableMocks(): void;
    export function disableMocks(): void;
    export function resetMocks(): void;
    export function mockResponseOnce(response: string | Response): void;
    export function mockRejectOnce(error: any): void;
    // Add other necessary methods
}

export {};
