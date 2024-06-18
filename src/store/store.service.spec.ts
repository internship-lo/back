import { Test, TestingModule } from '@nestjs/testing';
import { StoreService } from './store.service';

describe('StoreService', () => {
  let service: StoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreService],
    }).compile();

    service = module.get<StoreService>(StoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('isWalletHownedByClient', () => {
    // Write all unit test for the function isWalletHownedByClient
  });

  describe('walletExists', () => {
    // Write all unit test for the function walletExists
  });

  describe('removeWallet', () => {
    // Write all unit test for the function removeWallet
  });

  describe('updateWallet', () => {
    // Write all unit test for the function updateWallet
  });
  
  describe('replaceWallet', () => {
    // Write all unit test for the function replaceWallet
  });

  describe('clientExists', () => {
    // Write all unit test for the function clientExists
  });

  describe('removeClient', () => {
    // Write all unit test for the function removeClient
  });

  describe('createClient', () => {
    // Write all unit test for the function createClient
  });
});
