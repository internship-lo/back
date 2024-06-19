import { Currencies } from "src/wallets/curencies.enum";

export const STORE_TOKEN = 'STORE_TOKEN';

export interface Client {
    id: string;
    username: string;
    age?: number;
    birthDate?: string;
    location?: string;
}

export interface Wallet {
    id: string;
    balance: number;
    name: string;
    currency: Currencies;
    ownerId: string;
}

export interface Store {
    clients: Client[]
    wallets: Wallet[]
}

export const store: Store = {
    clients: [
        {
            id: '42',
            username: 'mister-lo',
            age: 228,
            birthDate: '1796',
            location: 'Bellevue'
        }
    ],
    wallets: [
        {
            id: 'wallet-1',
            ownerId: '42',
            balance: 1e9, // One billion
            currency: Currencies.CHF,
            name: 'jean'
        },
    ]
};

export const storeProvider = {
    provide: STORE_TOKEN,
    useValue: store
};
