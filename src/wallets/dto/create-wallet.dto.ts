import { Currencies } from "../curencies.enum";

export class CreateWalletDto {
    id: string;

    name: string;

    balance: number = 0;

    defaultCurrency: Currencies = Currencies.CHF

    ownerId: string;
}
