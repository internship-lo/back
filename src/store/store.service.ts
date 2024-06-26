import { Inject, Injectable } from '@nestjs/common';
import { Client, STORE_TOKEN, Store, Wallet } from './store.provider';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { UpdateWalletDto } from 'src/wallets/dto/update-wallet.dto';
import { ReplaceWalletDto } from 'src/wallets/dto/replace-wallet.dto';
import { CreateWalletDto } from 'src/wallets/dto';

@Injectable()
export class StoreService {
    constructor(@Inject(STORE_TOKEN) private readonly store: Store) {}

    // Create all utility functions here

    public isWalletHownedByClient(walletId: string, clientId): boolean {
        // Get the wallet from the store and check that the client is really his owner
        // The list of wallets can be accessed via this.store.wallets

        return false;
    }

    public createWallet(ownerId: string, createWalletDto : CreateWalletDto) {
        // Add the provided wallet to the wallet store with the appropriate ownerId
        this.store.wallets.push(createWalletDto)
        return createWalletDto;
    }

    public findWallet(walletId: string) {
        for (let i = 0; i < this.store.wallets.length; i++) {
            const wallet = this.store.wallets[i];
            if (wallet.id === walletId) {
                return wallet;
            }
        }

        return null;
    }

    public walletExists(walletId): boolean {
        // Check that the provided wallet id exists within the store
        // The list of wallets can be accessed via this.store.wallets

        return false;
    }

    public removeWallet(walletId: string): void {
        // Should remove a wallet from our storage
    }

    public updateWallet(walletId: string, walletDto: UpdateWalletDto): Wallet {
        // Should update a wallet and return the updated version instead of null

        return null;
    }

    public replaceWallet(walletId: string, patchDto: ReplaceWalletDto): Wallet {
        // Should replace the wallet properties and return the new wallet instead of null

        return null;
    }

    public clientExists(clientId: string): boolean {
        // Write a function that returns true or false if reather or not that the client Id exist within our storage
        return false;
    }

    public clientExistsByUsername(username: string): boolean {
        // Write a function that returns true of false if reather or not a client own this username
        return false;
    }

    public removeClient(clientId: string): void {
        // Should remove the client from our storage
    }

    public createClient(createClientDto: CreateClientDto): Client {
        // Should add a client in our storage and return it instead of null

        return null;
    }

    public findAllClientWallets(clientId: string): Wallet[] {
        // Should return all the wallets of a given client instead of an empty array
        return [];
    }
}
