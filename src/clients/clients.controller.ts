import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { User } from 'src/authent/user.decorator';
import { Client } from 'src/store/store.provider';
import { UpdateClientDto } from './dto/update-client.dto';
import { StoreService } from 'src/store/store.service';

@Controller('clients')
export class ClientsController {
    constructor(private readonly storeService: StoreService) {}

    @Post()
    create(@Body() createClientDto: CreateClientDto): Client {
        // Check that no user already exists with this username or id
        // Add the client within the store
        // Return the created client instead of null

        return null
    }

    @Patch(':clientId')
    update(@User() user: Client, @Param('clientId') clientId: string, updateClientDto: UpdateClientDto): Client {
        // should check that the current client is the one targetted, if not throw a forbidden exception (http code 403)
        // Actually replace the client infos
        // Return the updated client instead of null

        return null;
    }

    @Delete(':clientId')
    delete(@User() user: Client, @Param('clientId') clientId: string): void {
        // Check that the user is the owner of this clientId
        // If not throw a forbidden exception
        // Otherwise remove the user from the storage
        // This function does not require to remove anything
    }

    @Get()
    findAll(): Client[] {
        // Return the entire list of client instead of an empty array
        return [];
    }
}
