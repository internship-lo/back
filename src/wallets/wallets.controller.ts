import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';

import { CreateWalletDto } from './dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { ReplaceWalletDto } from './dto/replace-wallet.dto';
import { StoreService } from 'src/store/store.service';
import { User } from 'src/authent/user.decorator';
import { Client, Wallet } from 'src/store/store.provider';

@Controller('wallets')
export class WalletsController {
    constructor(private readonly storeService: StoreService) {}

    /*
        Within the following methods you will be able to use all the once defined in the storeService by doing 
        this.storeService.methodName, e.g: this.storeService.clientExists('42')
    */

    @Post()
    create(@User() user: Client, @Body() dto: CreateWalletDto) {
        // Check that the wallet does not exists using the walletExists method from the store service
        // Add the wallet to the store and link it to a client (use the create wallet within the store service)

        // Check that the user exists [use the clientExists method that you created before]

        // Check that this wallet does not already exists if it does we have to send back an error to the user with the appropriate code
        // Get more infos about how http codes works here https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses
        // And here how to implement it within nestjs https://docs.nestjs.com/exception-filters#built-in-http-exceptions

        // Check that the user is not already linked to this wallet id
        // Return the new wallet instead of null
        const wallet = this.storeService.createWallet(user.id, dto);
        return wallet;
    }


    @Get(':walletId')
    find(@User() user: Client, @Param('walletId') walletId: string) {
        // Check that the wallet exists if it does not return a not found exception
        // Use the received id to select the appropriate Id from the store/db and return it instead of null

        const wallet = this.storeService.findWallet(walletId);
        if (wallet === null) {
            throw new NotFoundException(`This wallet id does not exists ${walletId}`);
        }

        return wallet;
    }

    @Get()
    findAll(@User() client: Client) {
        // Get the list of all wallets and return it owned by the current user (use/implement the method findAllClientWallets for that matter)

        return [];
    }

    @Put(':walletId')
    replace(@User() user: Client, @Param('walletId') walletId: string, replaceWalletDto: ReplaceWalletDto)  {
        // use this method to replace the entire content of a wallet 

        // Check that the wallet exists

        // Check that the client is the owner of this wallet

        // This method has to return the replaced wallet instead of null

        return null;
    }

    @Patch(':walletId')
    update(@User() user: Client, @Param('walletId') walletId: string, updateWalletDto: UpdateWalletDto) {
        // Still based on the provided walletId the user should be able to replace some infos from a specifique wallet

        // Check that the wallet exists

        // Check that the client is the owner of this wallet

        // Make the change and return the entire wallet

        //Return the updated wallet instead of null

        return null;
    }

    @Delete(':walletId')
    delete(@User() user: Client, @Param('walletId') walletId: string) {
        // Check that the wallet exists
        // Check that the client is the owner of this wallet 
        // Remove the wallet from our sorage

        //Return nothing
        return;
    }
}
