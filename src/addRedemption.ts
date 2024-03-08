import { PrismaClient } from '@prisma/client';
import { verifyRedemption } from './verifyRedemption';

const prisma = new PrismaClient();

export async function addRedemption(teamName: string, redeemedAt: Date) {
  try {
    const isEligible = await verifyRedemption(teamName)

    if (isEligible) {
      await prisma.redemption.update({
        where: {
          team_name: teamName
        },
        data: {
          redeemed_at: redeemedAt.toISOString(),
        },
      });
      console.log(`Successfully redeemed for team ${teamName} at ${redeemedAt}`)
    }
  } catch (error) {
    throw new Error(`Error adding redemption: ${error}`);
  }
}
