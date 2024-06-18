import { Test, TestingModule } from '@nestjs/testing';
import { WalletsController } from './wallets.controller';
import { StoreService } from 'src/store/store.service';

describe('WalletsController', () => {
  let controller: WalletsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletsController],
      providers: [
        {
          provide: StoreService,
          useValue: {
            isWalletHownedByClient: jest.fn(),
            walletExists: jest.fn(),
            removeWallet: jest.fn(),
            updateWallet: jest.fn(),
            replaceWallet: jest.fn(),
            clientExists: jest.fn(),
            removeClient: jest.fn(),
            createClient: jest.fn(),
          }
        }
      ]
    }).compile();

    controller = module.get<WalletsController>(WalletsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    // Write all unit tests for the create function
  });

  describe('find', () => {
    // Write all unit tests for the find function
  });

  describe('findAll', () => {
    // Write all unit tests for the findAll function
  });

  describe('replace', () => {
    // Write all unit tests for the replace function
  });

  describe('update', () => {
    // Write all unit tests for the update function
  });

  describe('delete', () => {
    // Write all unit tests for the delete function
  });
});
