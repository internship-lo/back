import { Currencies } from "../curencies.enum";

export class CreateWalletDto {
    id: string;

    name: string;

    balance: number = 0;

    currency: Currencies = Currencies.CHF

    ownerId: string;
}
