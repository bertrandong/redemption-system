import { verifyRedemption } from '../src/verifyRedemption';
import { PrismaClient } from '@prisma/client';
import { addRedemption } from '../src/addRedemption';

const prisma = new PrismaClient();

// Resets the Redemption table
beforeAll(async () => {
  await prisma.redemption.updateMany({
    data: {
      redeemed_at: null
    }
  });
  await prisma.$disconnect();
});

afterAll(async () => {
  await prisma.redemption.updateMany({
    data: {
      redeemed_at: null
    }
  });
  await prisma.$disconnect();
});

describe('verifyRedemption function', () => {
  // The following tests are for staff-id-to-team-mapping.csv
  /**
  test('should allow redemption if no previous redemption', async () => {
    const teamName = 'BASS';
    const canRedeem = await verifyRedemption(teamName);
    expect(canRedeem).toBe(true);
  });

  test('should allow redemption if no previous redemption', async () => {
    const teamName = 'RUST';
    const canRedeem = await verifyRedemption(teamName);
    expect(canRedeem).toBe(true);
  });

  test('should not allow redemption if previously redeemed', async () => {
    const teamName = 'RUST';
    await addRedemption(teamName, new Date())
    const canRedeem = await verifyRedemption(teamName);
    expect(canRedeem).toBe(false);
  });
  */

  // The following tests are for staff-id-to-team-mapping-long.csv
  test('should allow redemption if no previous redemption', async () => {
    const teamName = 'SLYTHERIN';
    const canRedeem = await verifyRedemption(teamName);
    expect(canRedeem).toBe(true);
  });

  test('should allow redemption if no previous redemption', async () => {
    const teamName = 'RAVENCLAW';
    const canRedeem = await verifyRedemption(teamName);
    expect(canRedeem).toBe(true);
  });

  test('should not allow redemption if previously redeemed', async () => {
    const teamName = 'RAVENCLAW';
    await addRedemption(teamName, new Date())
    const canRedeem = await verifyRedemption(teamName);
    expect(canRedeem).toBe(false);
  });
});