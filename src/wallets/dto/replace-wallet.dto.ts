import { Currencies } from "../curencies.enum";

export class ReplaceWalletDto {
    name: string;

    balance: number = 0;

    defaultCurrency: Currencies = Currencies.CHF

    ownerId: string;
}
