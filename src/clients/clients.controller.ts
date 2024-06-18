import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { User } from 'src/authent/user.decorator';
import { Client } from 'src/store/store.provider';
import { UpdateClientDto } from './dto/update-client.dto';
import { StoreService } from 'src/store/store.service';

@Controller('clients')
export class ClientsController {
    constructor(private readonly storeService: StoreService) {}

    /*
        Within the following methods you will be able to use all the once defined in the storeService by doing 
        this.storeService.methodName, e.g: this.storeService.clientExists('42')
    */

    @Post()
    create(@Body() createClientDto: CreateClientDto): Client {
        // Check that no user already exists with this username or id use both methods (clientExists and clientExistsByUsername for that matter)
        // If the user already existy throw a conflict error if it already does
        // Get more infos about how http codes works here https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses
        // And here how to implement it within nestjs https://docs.nestjs.com/exception-filters#built-in-http-exceptions
        // Add the client within the store
        // Return the created client instead of null

        return null
    }

    @Get()
    findAll(): Client[] {
        // Return the entire list of client instead of an empty array
        return [];
    }

    @Patch(':clientId')
    update(@User() user: Client, @Param('clientId') clientId: string, updateClientDto: UpdateClientDto): Client {
        // should check that the current client is the one targetted, if not throw a forbidden exception (http code 403)
        // Get more infos about how http codes works here https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses
        // And here how to implement it within nestjs https://docs.nestjs.com/exception-filters#built-in-http-exceptions
        // Actually replace the client infos
        // Return the updated client instead of null

        return null;
    }

    @Delete(':clientId')
    delete(@User() user: Client, @Param('clientId') clientId: string): void {
        // Check that the user is the owner of this clientId
        // If not throw a forbidden exception
        // Otherwise remove the user from the storage
        // Use the removeClient method for that purpose
        // Get more infos about how http codes works here https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses
        // And here how to implement it within nestjs https://docs.nestjs.com/exception-filters#built-in-http-exceptions
        // This function does not require to return anything
    }

}
