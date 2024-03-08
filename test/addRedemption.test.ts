import { addRedemption } from '../src/addRedemption';
import { PrismaClient } from '@prisma/client';

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

describe('addRedemption function', () => {
  // The following tests are for staff-id-to-team-mapping.csv
  /**
  test('should add redemption if team is eligible', async () => {
    const teamName = 'BASS';
    const redemptionDate = new Date()
    await addRedemption(teamName, redemptionDate);
    const redemptionCount = await prisma.redemption.count({
      where: {
        team_name: teamName,
        redeemed_at: redemptionDate
      },
    });
    expect(redemptionCount).toBe(1);
  });

  test('should not add or update redemption if team has already redeemed', async () => {
    const teamName = 'BASS';
    const newRedemptionDate = new Date();
    await addRedemption(teamName, newRedemptionDate);
    const redemptionCount = await prisma.redemption.count({
      where: {
        team_name: teamName
      },
    });
    const redemptionHistory = await prisma.redemption.findUnique({
      where: {
        team_name: teamName
      },
    });
    expect(redemptionCount).toBe(1);
    expect(redemptionCount).not.toBe(redemptionHistory?.redeemed_at)
  });
  */

  // The following tests are for staff-id-to-team-mapping-long.csv
  test('should add redemption if team is eligible', async () => {
    const teamName = 'RAVENCLAW';
    const redemptionDate = new Date()
    await addRedemption(teamName, redemptionDate);
    const redemptionCount = await prisma.redemption.count({
      where: {
        team_name: teamName,
        redeemed_at: redemptionDate
      },
    });
    expect(redemptionCount).toBe(1);
  });

  test('should not add or update redemption if team has already redeemed', async () => {
    const teamName = 'RAVENCLAW';
    const newRedemptionDate = new Date();
    await addRedemption(teamName, newRedemptionDate);
    const redemptionCount = await prisma.redemption.count({
      where: {
        team_name: teamName
      },
    });
    const redemptionHistory = await prisma.redemption.findUnique({
      where: {
        team_name: teamName
      },
    });
    expect(redemptionCount).toBe(1);
    expect(redemptionCount).not.toBe(redemptionHistory?.redeemed_at)
  });
})
