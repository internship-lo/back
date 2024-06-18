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
    currentcy: number;
    ownerId: string;
}

export interface Store {
    clients: Client[]
    wallets: Wallet[]
}

export const store: Store = {
    clients: [],
    wallets: []
};

export const storeProvider = {
    provide: STORE_TOKEN,
    useValue: store
};
