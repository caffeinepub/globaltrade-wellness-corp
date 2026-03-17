import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactFormSubmission {
    subject: Division;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export type Division = {
    __kind__: "other";
    other: string;
} | {
    __kind__: "trading";
    trading: null;
} | {
    __kind__: "wellness";
    wellness: null;
};
export interface backendInterface {
    getAllContactSubmissions(): Promise<Array<ContactFormSubmission>>;
    submitContactForm(name: string, email: string, phone: string, subject: Division, message: string): Promise<void>;
}
